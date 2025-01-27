import { useEffect, useState } from 'react';
import { mapPage } from '../../api/mapData';

// components
import { GridContent } from '../../components/GridContent';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridThreeColumns } from '../../components/GridThreeColumns';
import { GridImages } from '../../components/GridImages';

//templates
import { Base } from '../Base';
import { Loading } from '../Loading';
import { PageNotFound } from '../PageNotFound';

function Home() {
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'http://localhost:1337/api/pages/paywfsq0vd3ecs2j7575ks3y?populate[0]=header.logo.image&populate[1]=header.menu_links&populate[2]=sections.image&populate[3]=sections.images&populate[4]=sections.grid_text&populate[5]=sections.metadata',
        );

        const json = await response.json();
        const result = mapPage(json.data);
        setPageData(result);
      } catch (err) {
        setPageData(undefined);
        console.warn('Ocorreu um erro ao carregar a página: ', err);
      }
    }

    fetchData();
  }, []);

  const sectionHandlers = {
    GridContent: (section) => {
      return <GridContent key={section.sectionId} {...section} />;
    },

    GridTwoColumns: (section) => {
      return <GridTwoColumns key={section.sectionId} {...section} />;
    },

    GridThreeColumns: (section) => {
      return <GridThreeColumns key={section.sectionId} {...section} />;
    },

    GridImages: (section) => {
      return <GridImages key={section.sectionId} {...section} />;
    },

    default: () => {
      return <PageNotFound />;
    },
  };

  return (
    <>
      {!pageData && <PageNotFound />}

      {pageData && !pageData.slug && <Loading />}

      {pageData && pageData.slug && (
        <Base
          logoData={pageData.logoData}
          links={pageData.links}
          footerText={pageData.footerText}
        >
          {Array.isArray(pageData?.sections) ? (
            pageData.sections.map((section) => {
              const handler =
                sectionHandlers[section.component] ||
                sectionHandlers['default'];
              return handler(section);
            })
          ) : (
            <PageNotFound />
          )}
        </Base>
      )}
    </>
  );
}

export default Home;
