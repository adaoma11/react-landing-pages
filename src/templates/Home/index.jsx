import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { mapPage } from '../../api/mapData';
import config from '../../config';

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
  const location = useLocation();

  useEffect(() => {
    const slug =
      location.pathname.replace(/[^a-z0-9-_]/gi, '') || config.defaultSlug;

    async function fetchData() {
      try {
        const response = await fetch(config.query(slug));
        const json = await response.json();
        const result = json.data[0] ? mapPage(json.data[0]) : undefined;
        setPageData(result);
      } catch (err) {
        setPageData(undefined);
        console.warn('Ocorreu um erro ao carregar a página: ', err);
      }
    }
    fetchData();
  }, [location]);

  useEffect(() => {
    if (pageData?.title) {
      document.title = pageData.title;
    } else if (pageData) {
      document.title = 'Carregando';
    } else {
      document.title = `Página não encontrada | ${config.siteName}`;
    }
  }, [pageData]);

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
