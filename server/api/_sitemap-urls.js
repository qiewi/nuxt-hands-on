// export default cachedEventHandler(
//   async (e) => {
//     const api = process.env.API_URL
//     const [
//       ideas
//     ] = await Promise.all([
//       $fetch(`${api}/api/ideas`, {
//         headers: {
//           accept: 'application/json'
//         },
//         params: {
//           'fields[ideas]': 'slug,updated_at',
//           sort: '-published_at',
//           'page[size]': 100
//         }
//       }),
//     ])
//     return [...ideas.data].map((p) => {
//       return { loc: `/ideas/${p.slug}`, lastmod: p.updated_at, changefreq: 'daily',
//       priority: 0.8, }
//     })
//   },
//   {
//     name: 'sitemap-dynamic-url',
//     maxAge: 60 * 10, // cache URLs for 10 minutes
//   }
// );

export default cachedEventHandler(async () => {
  const apiUrl = process.env.API_URL
  const headers = {
    accept: 'application/json',
  }
  const fetchData = path => {
    return $fetch(`${apiUrl}${path}`, {
      headers,
    })
  }

  const [newsId, newsEn, product, homeSolution, professionalSolution, promo] =
    await Promise.all([
      fetchData(`id/news?page[size]=50&sort=order`),
      fetchData(`en/news?page[size]=50&sort=order`),
      fetchData(`en/products`),
      fetchData(`en/home-solutions`),
      fetchData(`en/professional-solutions`),
      fetchData(`en/promos`),
    ])
  const newsIdData = newsId.data
  const newsEnData = newsEn.data
  const productData = product.data
  const homeSolutionData = homeSolution.data
  const professionalSolutionData = professionalSolution.data
  const promoData = promo.data
  const idID = 'id-ID'
  const enUS = 'en-US'
  const sumData = []
  newsIdData.forEach(item => {
    sumData.push({
      loc: `/id/berita/${item.category_name?.toLowerCase()?.replaceAll(' ', '-')}/${item.slug}`,
      _sitemap: idID,
    })
  })
  newsEnData.forEach(item => {
    sumData.push({
      loc: `/en/news/${item.category_name?.toLowerCase()?.replaceAll(' ', '-')}/${item.slug}`,
      _sitemap: enUS,
    })
  })
  productData.forEach(item => {
    sumData.push({
      loc: `/id/produk/${item.slugs.id}?apis=${apiUrl}`,
      _sitemap: idID,
    })
    sumData.push({
      loc: `/en/product/${item.slugs.en}`,
      _sitemap: enUS,
    })
  })
  homeSolutionData.forEach(item => {
    sumData.push({
      loc: `/id/solusi-rumah/${item.slugs.id}`,
      _sitemap: idID,
    })
    sumData.push({
      loc: `/en/house-solution/${item.slugs.en}`,
      _sitemap: enUS,
    })
  })
  professionalSolutionData.forEach(item => {
    sumData.push({
      loc: `/id/solusi-profesional/${item.slugs.id}`,
      _sitemap: idID,
    })
    sumData.push({
      loc: `/en/professional-solution/${item.slugs.en}`,
      _sitemap: enUS,
    })
  })
  promoData.forEach(item => {
    sumData.push({
      loc: `/id/aktivitas/${item.slugs.id}`,
      _sitemap: idID,
    })
    sumData.push({
      loc: `/en/activities/${item.slugs.en}`,
      _sitemap: enUS,
    })
  })
  return sumData
})
