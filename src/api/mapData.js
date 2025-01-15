export const mapPage = ({ data } = {}) => {
  if (!data) {
    return {
      title: '',
      slug: '',
      footer_text: '',
    };
  }

  const { title, slug, footer_text } = data;

  return {
    title: title ?? '',
    slug: slug ?? '',
    footer_text: footer_text ?? '',
  };
};
