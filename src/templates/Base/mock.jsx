// components
import { GridContent } from '../../components/GridContent';
import { GridImages } from '../../components/GridImages';
import { GridThreeColumns } from '../../components/GridThreeColumns';
import { GridTwoColumns } from '../../components/GridTwoColumns';

// mocks
import { links, logoData } from '../../components/Navbar/mock';
import gridTwoColumnsMock from '../../components/GridTwoColumns/mock';
import gridContentMock from '../../components/GridContent/mock';
import gridThreeColumnsMock from '../../components/GridThreeColumns/mock';
import gridImagesMock from '../../components/GridImages/mock';

export default {
  links,
  logoData,
  footerText: 'Desenvolvido por Adão Araujo',
  children: (
    <>
      <GridTwoColumns {...gridTwoColumnsMock} hasBg />
      <GridContent {...gridContentMock} />
      <GridThreeColumns {...gridThreeColumnsMock} hasBg />
      <GridImages {...gridImagesMock} />
    </>
  ),
};
