import { mapPage, mapHeader } from './mapData';
import { data } from './data.json';

// mapPage
describe('mapPage', () => {
  it('should run with no errors when there is no data', () => {
    const pageData = mapPage();

    expect(pageData).toEqual({
      title: '',
      slug: '',
      footerText: '',
    });
  });

  it('should map proper data', () => {
    const pageData = mapPage(data);

    expect(pageData).toEqual({
      title: data.title,
      slug: data.slug,
      footerText: data.footer_text,
    });
  });
});

// mapHeader
describe('mapHeader', () => {
  it('should run with no errors when there is no data', () => {
    const headerData = mapHeader();

    expect(headerData).toEqual({
      logoData: {
        text: '',
        imgSrc: '',
        href: '',
      },
      links: [],
    });
  });

  it('should return default values when the object in links array is empty', () => {
    const headerLinks = mapHeader({ header: { menu_links: [{}] } });
    expect(headerLinks.links).toEqual([
      {
        children: '',
        href: '',
        newTab: false,
      },
    ]);
  });

  it('should map proper data', () => {
    const headerData = mapHeader(data);

    const links = data.header.menu_links.map((link) => {
      return { children: link.text, href: link.href, newTab: link.new_tab };
    });

    expect(headerData).toEqual({
      logoData: {
        text: data.header.logo.image.alternativeText,
        imgSrc: data.header.logo.image.url,
        href: data.header.logo.href,
      },
      links,
    });
  });
});
