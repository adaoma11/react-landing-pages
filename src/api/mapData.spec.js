import { mapPage } from './mapData';

describe('mapPage', () => {
  const pageMock = {
    data: {
      title: 'Titulo de teste',
      slug: 'titulo-de-teste',
      footer_text: 'Footer de teste',
    },
  };

  it('should run with no errors when there is no data', () => {
    const pageData = mapPage();

    expect(pageData).toEqual({
      title: '',
      slug: '',
      footer_text: '',
    });
  });

  it('should map proper data', () => {
    const pageData = mapPage(pageMock);
    expect(pageData).toEqual(pageMock.data);
  });
});
