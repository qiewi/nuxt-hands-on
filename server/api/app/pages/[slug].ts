import { eventHandler } from 'h3'

export default eventHandler(async event => {
  const slug = getRouterParam(event, 'slug')

  console.log('Mock pages API request for slug:', slug)

  // Mock page data
  const mockPageData = {
    data: {
      id: 1,
      Name: slug === 'home' ? 'Home Page' : `Page: ${slug}`,
      Slug: slug,
      Blocks: [
        {
          __component: 'blocks.heading',
          Published: true,
          Title: `Welcome to ${slug}`,
          Subtitle: 'This is a mock page for development',
        },
        {
          __component: 'blocks.rich-text',
          Published: true,
          Content: `<p>This is mock content for the ${slug} page. The page is working correctly with the mock authentication system.</p>`,
        },
      ],
      Seo: {
        metaTitle: slug === 'home' ? 'Home Page' : `Page: ${slug}`,
        metaDescription: `This is the ${slug} page description`,
        shareImage: {
          url: '/icon.png',
        },
      },
    },
  }

  console.log('Returning mock page data for:', slug)

  return mockPageData
})
