import { mapPage } from './mapData';

describe('mapPage', () => {
  it('should return default values when no data is provided', () => {
    const result = mapPage();

    expect(result).toEqual({
      title: '',
      slug: '',
      links: [],
      logoData: {
        href: '',
        imgSrc: '',
        text: '',
      },
      sections: [],
      footerText: '',
    });
  });

  it('should map header and sections properly with valid data', () => {
    const mockData = {
      title: 'Test Page',
      slug: 'test-page',
      footer_text: 'Test Footer',
      header: {
        logo: {
          image: { alternativeText: 'Logo Alt', url: '/logo.png' },
          href: '/home',
        },
        menu_links: [
          { text: 'Home', href: '/', new_tab: false },
          { text: 'About', href: '/about', new_tab: true },
        ],
      },
      sections: [
        {
          __component: 'section.grid-two-columns',
          title: 'Grid Two Columns',
          text: 'Some text here',
          align: 'left',
          image: { url: '/image.png' },
          metadata: { hasBg: true, titleUpperCase: false },
        },
      ],
    };

    const result = mapPage(mockData);

    expect(result).toEqual({
      title: 'Test Page',
      slug: 'test-page',
      footerText: 'Test Footer',
      logoData: {
        text: 'Logo Alt',
        imgSrc: '/logo.png',
        href: '/home',
      },
      links: [
        { children: 'Home', href: '/', newTab: false },
        { children: 'About', href: '/about', newTab: true },
      ],
      sections: [
        {
          component: 'GridTwoColumns',
          title: 'Grid Two Columns',
          text: 'Some text here',
          textAlign: 'left',
          imgSrc: '/image.png',
          hasBg: true,
          titleUpperCase: false,
        },
      ],
    });
  });
});

// mapHeader
describe('mapHeader', () => {
  it('should handle empty links array in header', () => {
    const result = mapPage({ header: { menu_links: [{}] } });

    expect(result.links).toEqual([
      {
        children: '',
        href: '',
        newTab: false,
      },
    ]);
  });
});

// mapSections
describe('mapSections', () => {
  it('should handle sections with unknown components gracefully', () => {
    const result = mapPage({
      sections: [{ __component: 'unknown.component' }],
    });

    expect(result.sections).toEqual([
      {
        component: '',
        title: '',
        text: '',
        textAlign: '',
        hasBg: '',
        titleUpperCase: '',
      },
    ]);
  });

  it('should return default values for grid-two-columns when properties are missing', () => {
    const result = mapPage({
      sections: [{ __component: 'section.grid-two-columns' }],
    });

    expect(result.sections).toEqual([
      {
        component: 'GridTwoColumns',
        title: '',
        text: '',
        textAlign: '',
        imgSrc: '',
        hasBg: false,
        titleUpperCase: true,
      },
    ]);
  });
});
