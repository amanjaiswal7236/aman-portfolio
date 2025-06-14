# 🖥️ Terminal Portfolio

An interactive terminal-style portfolio website built with Next.js and React, featuring a fully functional command-line interface that showcases professional information in an engaging, developer-friendly format.

[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://amanjaiswal7236.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-cyan)](https://tailwindcss.com)

## 📸 Preview

![Terminal Portfolio Preview](./public/preview.png)

*Interactive terminal interface with command history and responsive design*

## 📋 Overview

This portfolio website simulates a Linux terminal environment where visitors can interact with various commands to explore your professional information. It combines the familiarity of a terminal interface with modern web technologies to create an engaging and unique portfolio experience.

## ✨ Key Features

- **Interactive Terminal**: 20+ authentic Linux commands with realistic responses
- **Responsive Design**: Mobile-first approach with touch-friendly interface
- **Developer Tools**: Git, NPM, and system command simulations
- **Modern UI/UX**: Terminal aesthetics with syntax highlighting and smooth animations
- **Quick Commands**: One-click buttons for common operations

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/amanjaiswal7236/aman-portfolio.git
cd aman-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 💻 Available Commands

### Core Navigation
```bash
help                   # Show all available commands
cd [dir]              # Change directory (projects, skills, etc.)
ls                    # List directory contents
pwd                   # Print working directory
clear                 # Clear terminal screen
```

### Portfolio Sections
```bash
about                 # Personal information and bio
skills                # Technical skills and expertise
projects              # Featured projects and demos
experience            # Work experience and internships
education             # Educational background
contact               # Contact information and social links
```

### Developer Tools
```bash
git status            # Show repository status
git log               # Display commit history
npm list              # Show installed packages
grep [term]           # Search through content
```

### System Commands
```bash
whoami               # Display current user info
date                 # Show current date and time
uptime               # Display system uptime
history              # Show command history
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Deployment**: [Vercel](https://vercel.com)

## 🎨 Customization

### Adding New Commands
1. Add command definition in `app/commands.ts`
2. Implement command logic in the command handler
3. Add appropriate response formatting

### Modifying Content
- Update content in respective section files under `app/content/`
- Modify command responses in `app/commands/`
- Customize styling in `app/globals.css`

## 📱 Mobile Support

- Responsive terminal interface
- Touch-optimized command buttons
- Adaptive text sizing
- Mobile-friendly navigation

## 🚀 Deployment

The portfolio is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

## 👨‍💻 Author

**Aman Jaiswal**
- [GitHub](https://github.com/amanjaiswal7236)
- [LinkedIn](https://linkedin.com/in/amanjaiswal7236)
- [Email](mailto:amanjaiswal7236@gmail.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Lucide React](https://lucide.dev/) for clean, consistent icons
- [Vercel](https://vercel.com/) for seamless deployment

## 📊 Project Stats

- **Commands**: 20+ interactive terminal commands
- **Sections**: 7 portfolio sections
- **Responsive**: Mobile-first design
- **Performance**: Optimized for speed and SEO
- **Accessibility**: WCAG compliant

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Aman Jaiswal](https://github.com/amanjaiswal7236)
