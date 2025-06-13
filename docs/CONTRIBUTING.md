# Contributing Guidelines

Thank you for your interest in contributing to this portfolio project! This document provides guidelines and information for contributors.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a new branch** for your feature or bug fix
4. **Make your changes** following the guidelines below
5. **Test your changes** thoroughly
6. **Submit a pull request**

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Personal-Portfolio.git
cd Personal-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## Code Style Guidelines

### TypeScript
- Use TypeScript for all new files
- Define proper interfaces and types
- Avoid `any` types when possible
- Use descriptive variable and function names

### React Components
- Use functional components with hooks
- Implement proper prop typing
- Follow the established folder structure
- Use Framer Motion for animations consistently

### Styling
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Maintain the black and white color scheme
- Use semantic class names

### File Organization
```
src/
├── components/
│   ├── layout/          # Navigation, Footer
│   ├── sections/        # Page sections
│   └── ui/              # Reusable components
├── types/               # Type definitions
└── utils/               # Utilities and constants
```

## Commit Guidelines

Use conventional commit messages:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```
feat: add new project showcase component
fix: resolve mobile navigation overflow issue
docs: update installation instructions
```

## Pull Request Process

1. **Update documentation** if needed
2. **Test on multiple devices** and browsers
3. **Ensure no lint errors** (`npm run lint`)
4. **Build successfully** (`npm run build`)
5. **Write clear PR description** explaining changes
6. **Link related issues** if applicable

## Code Review Checklist

- [ ] Code follows style guidelines
- [ ] Components are properly typed
- [ ] Responsive design is maintained
- [ ] Performance is not negatively impacted
- [ ] Accessibility standards are followed
- [ ] Documentation is updated if needed

## Questions?

Feel free to open an issue for any questions or concerns about contributing to this project.

Thank you for contributing! 🚀 