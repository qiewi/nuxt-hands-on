export default ({
  title = 'Frontend Suitmedia',
  description = 'Base code frontend Suitmedia',
  image = '/icon.png',
  type = 'website',
  keywords = '',
}) => {
  return useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogType: type,
    twitterImage: image,
    twitterTitle: title,
    twitterDescription: description,
    twitterCard: 'summary',
    keywords,
  })
}
