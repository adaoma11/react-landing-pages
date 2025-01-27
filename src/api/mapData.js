export const mapPage = (data = {}) => {
  const urlPrefix = 'http://localhost:1337';
  const { title = '', slug = '', footer_text: footerText = '' } = data;
  const { logoData, links } = mapHeader(data.header, urlPrefix);
  const sections = mapSections(data.sections, urlPrefix);

  return {
    title,
    slug,
    logoData,
    links,
    footerText,
    sections,
  };
};

const mapHeader = (header = {}, urlPrefix) => {
  const logoData = {
    text: header.logo?.text || '',
    imgSrc: header.logo?.image?.url ? urlPrefix + header.logo?.image?.url : '',
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

const mapSections = (sections, urlPrefix) => {
  const sectionsList = Array.isArray(sections)
    ? sections.map((section) => {
        return mapSection(section, urlPrefix);
      })
    : [];
  return sectionsList;
};

const mapSection = (section, urlPrefix) => {
  const applyDefaults = (section, extra) => {
    return {
      title: section?.title ?? '',
      sectionId: section?.metadata?.section_id ?? '',
      hasBg: section?.metadata?.hasBg ?? false,
      titleUpperCase: section?.metadata?.titleUpperCase ?? true,
      textAlign: section?.metadata?.textAlign ?? '',
      ...extra,
    };
  };
  const sectionHandlers = {
    'section.grid-content': (section) => {
      return applyDefaults(section, {
        component: 'GridContent',
        text: section.text ?? '',
      });
    },

    'section.grid-two-columns': (section) => {
      return applyDefaults(section, {
        component: 'GridTwoColumns',
        text: section.text ?? '',
        imgSrc: section.image?.url ? urlPrefix + section.image?.url : '',
      });
    },

    'section.grid-three-columns': (section) => {
      const gridItems = Array.isArray(section.grid_text)
        ? section.grid_text.map((item, index) => {
            return {
              id: item.id ?? index + 1,
              title: item.title ?? '',
              text: item.text ?? '',
            };
          })
        : [];

      return applyDefaults(section, {
        component: 'GridThreeColumns',
        description: section.description ?? '',
        gridItems,
      });
    },

    'section.grid-images': (section) => {
      const gridItems = Array.isArray(section.images)
        ? section.images.map((item, index) => {
            return {
              id: item.id ?? index + 1,
              alt: item.alternativeText ?? '',
              imgSrc: item.url ? urlPrefix + item.url : '',
            };
          })
        : [];

      return applyDefaults(section, {
        component: 'GridImages',
        description: section.description ?? '',
        gridItems,
      });
    },
  };

  const handler = sectionHandlers[section.__component] || applyDefaults;
  return handler(section);
};
