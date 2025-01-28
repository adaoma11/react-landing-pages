const host = 'http://localhost:1337';

export default {
  host,
  query: (slug) => {
    return `${host}/api/pages?filters[slug][$eq]=${slug}&populate[0]=header.logo.image&populate[1]=header.menu_links&populate[2]=sections.image&populate[3]=sections.images&populate[4]=sections.grid_text&populate[5]=sections.metadata`;
  },
  siteName: 'Landing Page',
  defaultSlug: 'landing-page',
};
