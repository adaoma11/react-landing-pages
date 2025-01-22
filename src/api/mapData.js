export const mapPage = (data = {}) => {
  const { title = '', slug = '', footer_text: footerText = '' } = data;
  const { logoData, links } = mapHeader(data.header);
  const sections = mapSections(data.sections);

  return {
    title,
    slug,
    logoData,
    links,
    footerText,
    sections,
  };
};

const mapHeader = (header = {}) => {
  const logoData = {
    text: header.logo?.image?.alternativeText || '',
    imgSrc: header.logo?.image?.url || '',
    href: header.logo?.href || '',
  };

  const links = Array.isArray(header?.menu_links)
    ? header.menu_links.map((link) => ({
        children: link?.text || '',
        href: link?.href || '',
        newTab: link?.new_tab ?? false,
      }))
    : [];

  return { logoData, links };
};

const mapSections = (sections) => {
  const sectionsList = Array.isArray(sections)
    ? sections.map((section) => {
        return mapSection(section);
      })
    : [];
  return sectionsList;
};

const mapSection = (section) => {
  const sectionHandlers = {
    'section.grid-content': (section) => {
      return {
        component: 'GridContent',
        title: section.title ?? '',
        text: section.text ?? '',
        hasBg: section.metadata.hasBg ?? false,
        titleUpperCase: section.metadata.titleUpperCase ?? true,
        textAlign: section.metadata?.textAlign ?? '',
      };
    },

    'section.grid-two-columns': (section) => {
      return {
        component: 'GridTwoColumns',
        title: section.title ?? '',
        text: section.text ?? '',
        imgSrc: section.image?.url ?? '',
        hasBg: section.metadata?.hasBg ?? false,
        titleUpperCase: section.metadata?.titleUpperCase ?? true,
        textAlign: section.metadata?.textAlign ?? '',
      };
    },

    default: () => {
      return {
        component: '',
        title: '',
        text: '',
        hasBg: '',
        titleUpperCase: '',
        textAlign: '',
      };
    },
  };

  const handler =
    sectionHandlers[section.__component] || sectionHandlers.default;
  return handler(section);
};
