export const mapPage = (data = {}) => {
  const { title = '', slug = '', footer_text: footerText = '' } = data;

  return {
    title,
    slug,
    footerText,
  };
};

export const mapHeader = (data = {}) => {
  const header = data.header || {};

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
