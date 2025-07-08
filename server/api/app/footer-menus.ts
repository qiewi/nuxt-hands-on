import { eventHandler } from 'h3'

export default eventHandler(async () => {
  console.log('Mock footer-menus API request')

  // Mock footer menu data
  const mockFooterMenuData = {
    data: [
      {
        id: 1,
        Title: 'Privacy Policy',
        Url: '/privacy-policy',
        Order: 1,
      },
      {
        id: 2,
        Title: 'Terms of Service',
        Url: '/terms-of-service',
        Order: 2,
      },
      {
        id: 3,
        Title: 'Support',
        Url: '/support',
        Order: 3,
      },
      {
        id: 4,
        Title: 'FAQ',
        Url: '/faq',
        Order: 4,
      },
    ],
  }

  console.log('Returning mock footer menu data')

  return mockFooterMenuData
})
