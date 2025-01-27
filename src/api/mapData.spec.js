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
          text: 'CompanyName',
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
          __component: 'section.grid-content',
          title: 'Grid Content',
          text: 'Some text here',
          metadata: {
            section_id: 'the-section-id',
            hasBg: true,
            titleUpperCase: false,
            textAlign: 'justify',
          },
        },
        {
          __component: 'section.grid-two-columns',
          title: 'Grid Two Columns',
          text: 'Some text here',
          image: { url: '/image.png' },
          metadata: {
            section_id: 'the-section-id',
            hasBg: true,
            titleUpperCase: false,
            textAlign: 'justify',
          },
        },
        {
          __component: 'section.grid-three-columns',
          title: 'Grid Three Columns',
          description: 'Uma breve descrição',
          metadata: {
            section_id: 'the-section-id',
            hasBg: true,
            titleUpperCase: false,
            textAlign: 'justify',
          },
          grid_text: [
            {
              id: 1,
              title: 'Teste 1',
              text: 'Some text here',
            },
            {
              id: 2,
              title: 'Teste 2',
              text: 'Some text here',
            },
            {
              id: 3,
              title: 'Teste 3',
              text: 'Some text here',
            },
          ],
        },
        {
          __component: 'section.grid-images',
          title: 'Grid Images',
          description: 'Uma breve descrição',
          metadata: {
            section_id: 'the-section-id',
            hasBg: true,
            titleUpperCase: false,
            textAlign: 'justify',
          },
          images: [
            {
              id: 1,
              alternativeText: 'Texto alternativo',
              url: '/image.jpg',
            },
          ],
        },
      ],
    };

    const result = mapPage(mockData);

    expect(result).toEqual({
      title: 'Test Page',
      slug: 'test-page',
      footerText: 'Test Footer',
      logoData: {
        text: 'CompanyName',
        imgSrc: 'http://localhost:1337/logo.png',
        href: '/home',
      },
      links: [
        { children: 'Home', href: '/', newTab: false },
        { children: 'About', href: '/about', newTab: true },
      ],
      sections: [
        {
          component: 'GridContent',
          sectionId: 'the-section-id',
          title: 'Grid Content',
          text: 'Some text here',
          hasBg: true,
          titleUpperCase: false,
          textAlign: 'justify',
        },
        {
          component: 'GridTwoColumns',
          sectionId: 'the-section-id',
          title: 'Grid Two Columns',
          text: 'Some text here',
          imgSrc: 'http://localhost:1337/image.png',
          hasBg: true,
          titleUpperCase: false,
          textAlign: 'justify',
        },
        {
          component: 'GridThreeColumns',
          sectionId: 'the-section-id',
          title: 'Grid Three Columns',
          description: 'Uma breve descrição',
          gridItems: [
            {
              id: 1,
              title: 'Teste 1',
              text: 'Some text here',
            },
            {
              id: 2,
              title: 'Teste 2',
              text: 'Some text here',
            },
            {
              id: 3,
              title: 'Teste 3',
              text: 'Some text here',
            },
          ],
          hasBg: true,
          titleUpperCase: false,
          textAlign: 'justify',
        },
        {
          component: 'GridImages',
          sectionId: 'the-section-id',
          title: 'Grid Images',
          description: 'Uma breve descrição',
          gridItems: [
            {
              id: 1,
              alt: 'Texto alternativo',
              imgSrc: 'http://localhost:1337/image.jpg',
            },
          ],
          hasBg: true,
          titleUpperCase: false,
          textAlign: 'justify',
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
describe('mapSection default values', () => {
  it('should handle sections with unknown components gracefully', () => {
    const result = mapPage({
      sections: [{ __component: 'unknown.component' }],
    });

    expect(result.sections).toEqual([
      {
        title: '',
        sectionId: '',
        textAlign: '',
        hasBg: false,
        titleUpperCase: true,
      },
    ]);
  });

  describe('mapSection GridContent', () => {
    it('should return default values for grid-content when properties are missing', () => {
      const result = mapPage({
        sections: [{ __component: 'section.grid-content' }],
      });

      expect(result.sections).toEqual([
        {
          component: 'GridContent',
          title: '',
          sectionId: '',
          text: '',
          hasBg: false,
          titleUpperCase: true,
          textAlign: '',
        },
      ]);
    });
  });

  describe('mapSection GridTwoColumns', () => {
    it('should return default values for grid-two-columns when properties are missing', () => {
      const result = mapPage({
        sections: [{ __component: 'section.grid-two-columns' }],
      });

      expect(result.sections).toEqual([
        {
          component: 'GridTwoColumns',
          title: '',
          sectionId: '',
          text: '',
          imgSrc: '',
          hasBg: false,
          titleUpperCase: true,
          textAlign: '',
        },
      ]);
    });
  });

  describe('mapSection GridThreeColumns', () => {
    it('should return default values for grid-three-columns when properties are missing', () => {
      const result = mapPage({
        sections: [{ __component: 'section.grid-three-columns' }],
      });

      expect(result.sections).toEqual([
        {
          component: 'GridThreeColumns',
          title: '',
          sectionId: '',
          description: '',
          gridItems: [],
          hasBg: false,
          titleUpperCase: true,
          textAlign: '',
        },
      ]);
    });

    it('should return default values for gridItems when grid_text properties are missing', () => {
      const result = mapPage({
        sections: [
          { __component: 'section.grid-three-columns', grid_text: [{}] },
        ],
      });

      expect(result.sections[0].gridItems).toEqual([
        {
          id: 1,
          title: '',
          text: '',
        },
      ]);
    });
  });
});

describe('mapSection GridImages', () => {
  it('should return default values for grid-images when properties are missing', () => {
    const result = mapPage({
      sections: [{ __component: 'section.grid-images' }],
    });

    expect(result.sections).toEqual([
      {
        component: 'GridImages',
        title: '',
        sectionId: '',
        description: '',
        gridItems: [],
        hasBg: false,
        titleUpperCase: true,
        textAlign: '',
      },
    ]);
  });

  it('should return default values for gridItems when images properties are missing', () => {
    const result = mapPage({
      sections: [{ __component: 'section.grid-images', images: [{}] }],
    });

    expect(result.sections[0].gridItems).toEqual([
      {
        id: 1,
        alt: '',
        imgSrc: '',
      },
    ]);
  });
});
