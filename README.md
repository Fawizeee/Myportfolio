# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing skills, projects, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with subtle animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Sections**:
  - Hero section with introduction and call-to-action
  - About section with personal story
  - Skills showcase with progress bars
  - Professional experience timeline
  - Projects portfolio with filtering
  - Client testimonials
  - Contact form with validation
  - Footer with social links

## 🛠️ Technology Stack

- **React** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Icon library
- **Vite** - Build tool and development server

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx         # Hero section
│   ├── About.jsx        # About section
│   ├── Skills.jsx       # Skills showcase
│   ├── Experience.jsx   # Work experience
│   ├── Projects.jsx     # Projects portfolio
│   ├── Testimonials.jsx # Client testimonials
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer
├── data/
│   └── portfolioData.js # All portfolio content
├── assets/
│   └── images/          # Image assets
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## 🎨 Customization

### Updating Content

All portfolio content is stored in `src/data/portfolioData.js`. Update the following sections:

1. **Personal Information** (`personalInfo`):
   - Name, title, tagline
   - Email, location
   - Bio and profile image

2. **Skills** (`skills`):
   - Development skills
   - Data science skills
   - Tools and technologies

3. **Experience** (`experience`):
   - Work history
   - Companies, positions, descriptions
   - Technologies used

4. **Projects** (`projects`):
   - Project details
   - Images, descriptions, technologies
   - Live demo and GitHub links

5. **Testimonials** (`testimonials`):
   - Client feedback
   - Names, positions, companies

6. **Social Links** (`socialLinks`):
   - GitHub, LinkedIn, Twitter
   - Email address

### Adding Images

1. Place your images in `src/assets/images/`
2. Update the image paths in `portfolioData.js`
3. Recommended image sizes:
   - Profile photo: 400x400px
   - Project images: 600x400px
   - Testimonial photos: 100x100px

### Styling

The design uses Tailwind CSS with custom colors defined in `tailwind.config.js`:

- **Primary**: Blue color scheme
- **Secondary**: Green color scheme
- **Custom animations**: Fade-in, slide-up effects

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO Optimization

- Meta tags for search engines
- Semantic HTML structure
- Alt text for images
- Proper heading hierarchy

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain if needed

## 📝 Next Steps

1. **Replace placeholder content** with your actual information
2. **Add your images** to the assets folder
3. **Update social media links** with your profiles
4. **Test the contact form** functionality
5. **Deploy to your preferred platform**

## 🎨 Design Notes

- **Color Scheme**: Professional blue and green palette
- **Typography**: Inter font family for modern look
- **Animations**: Subtle hover effects and smooth transitions
- **Layout**: Clean, spacious design with good visual hierarchy

## 📞 Support

If you need help customizing your portfolio, feel free to reach out!

---

**Happy coding!** 🚀