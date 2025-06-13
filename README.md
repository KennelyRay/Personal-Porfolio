# Portfolio Website - Kennely Ray Bucang

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-ff69b4)](https://framer.com/motion/)

A modern, responsive portfolio website showcasing the academic and professional journey of Kennely Ray Bucang, a Bachelor of Science in Information Technology student at Saint Louis University.

## 🌟 Features

- **Modern Design**: Clean, professional interface with black and white color scheme
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Dark Mode**: Permanent dark theme for better visual appeal
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **TypeScript**: Fully typed for better development experience
- **Professional Sections**: 
  - Hero section with professional photo
  - About section with educational background
  - Skills showcase with proficiency levels
  - Project portfolio with GitHub integration
  - Experience timeline
  - Contact form with validation

## 🛠️ Technical Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Handling**: Next.js Image Optimization

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Formatting**: Prettier (via Tailwind)
- **Version Control**: Git

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── sections/        # Page sections (Hero, About, Skills, etc.)
│   ├── ui/              # Reusable UI components
│   └── index.ts         # Barrel exports
├── types/               # TypeScript type definitions
│   └── index.ts         # Application types
├── utils/               # Utility functions and constants
│   ├── constants.ts     # App constants and configuration
│   ├── animations.ts    # Framer Motion animation variants
│   └── index.ts         # Barrel exports
├── assets/              # Static assets
│   └── images/          # Image assets
app/                     # Next.js app directory
├── layout.tsx           # Root layout
├── page.tsx            # Home page
└── globals.css         # Global styles
public/
├── images/             # Public images
│   └── profile.jpg     # Profile photo
└── ...                 # Other public assets
docs/                   # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 7+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KennelyRay/Personal-Portfolio.git
   cd Personal-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Personal Information
Update personal details in `src/utils/constants.ts`:

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  // ... other details
};
```

### Projects
Modify the projects array in the Projects component to showcase your work.

### Skills
Update skill levels and categories in the Skills component.

### Styling
The project uses Tailwind CSS with a custom configuration. Modify `tailwind.config.js` for theme customization.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development

### Code Organization
- **Components**: Organized by purpose (layout, sections, ui)
- **Types**: Centralized TypeScript definitions
- **Utils**: Shared utilities and constants
- **Barrel Exports**: Clean import statements

### Best Practices
- TypeScript for type safety
- Responsive design patterns
- Performance optimization
- Accessibility considerations
- Clean code architecture

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kennely Ray Bucang**
- GitHub: [@KennelyRay](https://github.com/KennelyRay)
- Email: krbucang@gmail.com
- University: Saint Louis University
- Degree: Bachelor of Science in Information Technology (2021-2026)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/KennelyRay/Personal-Portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

*Built with ❤️ using Next.js and modern web technologies*
