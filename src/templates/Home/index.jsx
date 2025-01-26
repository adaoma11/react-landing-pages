import { useEffect, useState } from 'react';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { mapPage } from '../../api/mapData';
import mock from '../Base/mock';

function Home() {
  const [pageData, setPageData] = useState([]);

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

  return (
    <>
      {!pageData && <PageNotFound />}

      {pageData && !pageData.slug && <Loading />}

      {pageData && pageData.slug && <Base {...mock} />}
    </>
  );
}

export default Home;
