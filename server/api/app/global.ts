import { eventHandler } from 'h3'

export default eventHandler(async () => {
  console.log('Mock global API request')

  // Mock global data
  const mockGlobalData = {
    data: {
      siteName: 'Suitmedia',
      siteDescription: 'Your trusted partner for digital transformation in Indonesia. We are a full-service agency specializing in technology and marketing solutions, including web design, mobile app development, and digital marketing.',
      siteLogo: {
        formats: {
          thumbnail: {
            url: '/icon.png',
          },
        },
      },
      Copyrights: '2025 Suitmedia. All rights reserved.',
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
