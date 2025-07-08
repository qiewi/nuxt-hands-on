import { eventHandler } from 'h3'

export default eventHandler(async () => {
  console.log('Mock global API request')

  // Mock global data
  const mockGlobalData = {
    data: {
      siteName: 'Demo Site',
      siteDescription: 'This is a demo site with mock authentication',
      siteLogo: {
        formats: {
          thumbnail: {
            url: '/icon.png',
          },
        },
      },
      Copyrights: '2024 Demo Site. All rights reserved.',
      SocialMedia: [
        {
          id: 1,
          Name: 'Facebook',
          Url: 'https://facebook.com',
        },
        {
          id: 2,
          Name: 'Twitter',
          Url: 'https://twitter.com',
        },
        {
          id: 3,
          Name: 'Instagram',
          Url: 'https://instagram.com',
        },
      ],
    },
  }

  console.log('Returning mock global data')

  return mockGlobalData
})
