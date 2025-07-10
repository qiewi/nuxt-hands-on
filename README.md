# Suitmedia Corporate Website

A modern, responsive corporate website for **Suitmedia Digital Agency**. Built with **Nuxt 3** and **Tailwind CSS**, featuring **dynamic content management**, **parallax effects**, and **comprehensive business solutions showcase**.

## 🌟 Features

- ✅ Modern responsive design with mobile-first approach
- 🎨 Beautiful parallax hero sections across all pages
- 📱 Mobile-optimized navigation with hamburger menu
- 🏢 Complete business showcase (About, Services, Work, Careers)
- 📰 Dynamic ideas/blog section with pagination and filtering
- 📞 Contact forms with project inquiry system
- 🔐 Authentication system with session management
- 🎯 SEO-optimized with dynamic meta tags
- 🚀 Dynamic page builder with CMS integration
- 📊 Analytics and performance tracking ready
- 🌐 Multi-language support infrastructure
- ⚡ Fast performance with Nuxt 3's server-side rendering

---

## 🛠️ Tech Stack

**Frontend:**

- [Nuxt 3](https://nuxt.com/) - Full-stack Vue framework
- [Vue.js 3](https://vuejs.org/) - Progressive JavaScript framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Nuxt UI](https://ui.nuxt.com/) - UI component library
- [Nuxt Image](https://image.nuxt.com/) - Optimized image handling
- [Nuxt Auth](https://sidebase.io/nuxt-auth) - Authentication module

**Backend & APIs:**

- **Server API** with Nuxt server routes
- **Session Management** with secure authentication
- **Dynamic Content** management system
- **Form Handling** with validation

**Additional Features:**

- **Auto-imports** for composables and components
- **Dynamic routing** with nested layouts
- **State management** with Pinia
- **SEO optimization** with useMeta composable
- **Image optimization** with Nuxt Image
- **Font optimization** with Nuxt Fonts
- **JSON-LD** structured data for SEO

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd baze-fe-nuxt-3-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
API_URL=your_api_url_here
API_LAIN=your_additional_api_url
NUXT_SECRET=your_secret_key
NUXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Access the Website

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Project Structure

```
baze-fe-nuxt-3-main/
├── nuxt.config.ts              # Nuxt configuration
├── app.config.ts               # App configuration
├── pages/
│   ├── index.vue               # Home page (redirects to about)
│   ├── about.vue               # About Suitmedia
│   ├── services.vue            # Services offered
│   ├── work.vue                # Portfolio showcase
│   ├── careers.vue             # Career opportunities
│   ├── contact.vue             # Contact form & info
│   ├── ideas.vue               # Blog/insights section
│   └── [...slugs].vue          # Dynamic pages
├── components/
│   ├── Header/                 # Navigation components
│   ├── Hero/                   # Hero section components
│   ├── Footer/                 # Footer components
│   ├── Cards/                  # Card components
│   ├── Pages/                  # Page-specific components
│   └── Utils/                  # Utility components
├── composables/
│   ├── useArticle.js           # Article management
│   ├── useMeta.js              # SEO meta management
│   └── useGoogleRecaptcha.js   # Form security
├── server/
│   └── api/                    # Server API routes
├── middleware/
│   └── redirection.global.ts   # Global redirections
├── layouts/
│   ├── default.vue             # Default layout
│   └── custom.vue              # Custom layouts
├── store/
│   └── global.js               # Global state management
└── assets/
    ├── css/                    # Global styles
    ├── scss/                   # SCSS modules
    └── img/                    # Image assets
```

---

## 🚀 Build & Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy

The application is ready for deployment on various platforms:

- **Vercel** (recommended)
- **Netlify**
- **Cloudflare Pages**
- **Traditional hosting** with Node.js support

---

## 📄 Pages Overview

| Page         | Route       | Description                            |
| ------------ | ----------- | -------------------------------------- |
| **Home**     | `/`         | Redirects to About page                |
| **About**    | `/about`    | Company story, culture, and team       |
| **Services** | `/services` | Digital services offered               |
| **Work**     | `/work`     | Portfolio and case studies             |
| **Careers**  | `/careers`  | Job opportunities and culture          |
| **Contact**  | `/contact`  | Contact form and office locations      |
| **Ideas**    | `/ideas`    | Blog, insights, and thought leadership |

---

## 🎨 Key Features

### Parallax Hero Sections

- Smooth scrolling effects across all pages
- Mobile-optimized parallax performance
- Dynamic background images

### Responsive Navigation

- Desktop: Horizontal navigation with hover effects
- Mobile: Hamburger menu with smooth transitions
- Sticky header with scroll behavior

### Content Management

- Dynamic page builder system
- SEO-friendly content structure
- Image optimization and lazy loading

### Business Features

- Contact forms with validation
- Portfolio filtering and categorization
- Team member showcase
- Company statistics and metrics

---

## 🔧 Development

### Prerequisites

- **Node.js** v22.14.0 or newer
- **npm** package manager
- **Modern browser** for development

### Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run typecheck
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For support and questions:

- **Email**: contact@suitmedia.com
- **Phone**: +62 21 719 6877
- **Website**: [suitmedia.com](https://suitmedia.com)

---

Made with 💚 by [Suitmedia](https://suitmedia.com) using Nuxt 3!
