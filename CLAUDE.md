# DeveloperFolio Portfolio - Development Documentation

## Project Overview
Personal portfolio website for Himanshu Ladva built using React 16.10.2, showcasing professional work, skills, experience, and achievements. The project uses a configuration-driven architecture where all content is managed through a central portfolio.js file.

## Technology Stack
- **Framework**: React 16.10.2 with Hooks and Context API
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **Styling**: SCSS/Sass with global color variables
- **Animations**: Lottie animations, react-reveal for scroll effects
- **Icons**: Font Awesome
- **Deployment**: GitHub Pages ready, Docker containerized
- **State Management**: React Context API for theme management

## Project Architecture

### Configuration-Driven Design
All portfolio content is centralized in `src/portfolio.js`. This file exports configuration objects for each section:
- greeting
- socialMediaLinks
- skillsSection
- educationInfo
- techStack
- workExperiences
- bigProjects
- achievementSection
- blogSection
- contactInfo
- isHireable flag

### Directory Structure
- **src/containers/**: Main page sections (greeting, skills, education, work experience, projects, blogs, stats, services, etc.)
- **src/components/**: Reusable UI components (header, footer, buttons, cards, social media links)
- **src/contexts/**: React Context for theme management (StyleContext)
- **src/hooks/**: Custom React hooks (useLocalStorage for theme persistence)
- **src/assets/**: Static assets (images, fonts, Lottie animations)

### Component Organization Pattern
Each container follows this structure:
- ComponentName.js (React component)
- ComponentName.scss (Styles)
- Both files in same directory: src/containers/component-name/

### Styling Conventions
1. **Global Colors**: Defined in `_globalColor.scss` - import this in every SCSS file
2. **Dark Mode**: Use `isDark` from StyleContext and apply `.dark-mode` class
3. **Responsive Design**: Mobile-first approach with media queries at 768px, 1024px, 1380px breakpoints
4. **BEM-like Naming**: Use descriptive class names (e.g., `.stats-container`, `.service-card`)

## Recent Architectural Changes

### New Sections Added (2025-10-26)

#### 1. Stats Section (src/containers/stats/)
- **Purpose**: Display key metrics and achievements in an eye-catching format
- **Features**: Gradient cards, hover animations, Font Awesome icons, grid layout
- **Responsive**: 4 columns → 2 columns → 1 column on mobile
- **Integration**: Positioned after Greeting section in Main.js

#### 2. Services Section (src/containers/services/)
- **Purpose**: Showcase services offered to clients with professional presentation
- **Features**: Color-coded service cards, 3D rotation animations on hover, client-focused language
- **Responsive**: 3 columns → 2 columns → 1 column on mobile
- **Design Pattern**: Each service has custom color variable passed via CSS custom properties

### Theme Management
- **Default Mode**: Dark mode is enabled by default (isDark: true)
- **Persistence**: Theme preference stored in localStorage via useLocalStorage hook
- **Context Provider**: StyleContext wraps entire app in Main.js
- **Toggle**: Available in Header component

### Component Integration Pattern
To add new sections to the portfolio:
1. Create container directory: `src/containers/section-name/`
2. Create SectionName.js and SectionName.scss
3. Import section in `src/containers/Main.js`
4. Add component between Header and Footer in render order
5. Use Fade animation from react-reveal for scroll effects
6. Import and use StyleContext for dark mode support

## Configuration Guidelines

### Portfolio Data (src/portfolio.js)

#### Important Flags
- **isHireable**: Set to `true` if open to opportunities (displays in GitHub footer)
- **display**: Each section has a display flag - set to `false` to hide
- **splashScreen.enabled**: Controls loading animation

#### Skill Percentages Philosophy
- Use realistic, varied percentages (60-90%)
- Primary skills: 85-90%
- Secondary skills: 70-80%
- Familiar technologies: 60-70%
- Avoid using same percentage for all skills (looks unprofessional)

#### Social Media Links
- Gmail link uses direct Gmail compose URL: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`
- Do NOT use `mailto:` links (doesn't work well for web-only email users)
- Always include `target="_blank"` and `rel="noopener noreferrer"` for external links

### Achievement Section Guidelines
- Only display real achievements and certifications
- Never use template/example data in production
- Set `display: false` if no achievements to show yet
- Include certification URLs and images when available

## Common Patterns

### Dark Mode Implementation
1. Import StyleContext: `import StyleContext from "../../contexts/StyleContext"`
2. Get isDark value: `const {isDark} = useContext(StyleContext)`
3. Apply conditional classes: `className={isDark ? "dark-mode class-name" : "class-name"}`
4. Define `.dark-mode` styles in SCSS with appropriate colors

### Animation Pattern
1. Import Fade: `import {Fade} from "react-reveal"`
2. Wrap content: `<Fade bottom duration={1000} distance="20px">`
3. Standard values: bottom direction, 1000ms duration, 20px distance

### Responsive Grid Pattern
Use CSS Grid with auto-fit for flexible layouts:
- `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`
- Adjust minmax values based on content size
- Use gap property for spacing (25-35px typical)

### Card Hover Effects
Standard hover animation pattern:
- `transition: all 0.3s ease-in-out`
- `transform: translateY(-10px)` on hover
- Enhanced shadow on hover
- Optional: scale or rotate transforms

## File Naming Conventions
- Components: PascalCase (Header.js, SocialMedia.js)
- Containers: PascalCase (Greeting.js, WorkExperience.js)
- Styles: Match component name (Header.scss, SocialMedia.scss)
- Assets: lowercase with hyphens (ecount-logo.png)
- Configuration: lowercase (portfolio.js)

## Git/Version Control Notes
- This is NOT currently a git repository
- No .git directory exists
- If initializing git, ensure .gitignore includes node_modules and build/

## Performance Considerations
- Images should be optimized before adding to assets/
- Lottie animations add to bundle size - use sparingly
- Lazy loading is NOT currently implemented but could be added
- Code splitting is NOT currently implemented
- Build output goes to build/ directory

## Development Workflow
- **Dev Server**: `npm start` (runs fetch.js then starts on port 3000)
- **Build**: `npm run build` (creates production build)
- **Deploy**: `npm run deploy` (deploys to GitHub Pages)
- **Format**: `npm run format` (Prettier formatting)
- **Test**: `npm test` (Jest test suite)

### Pre-Start Script
The start and build scripts run `fetch.js` first, which:
- Fetches GitHub pinned repositories via GraphQL API
- Fetches Medium blog posts via RSS2JSON
- Saves data to public/profile.json and public/blogs.json
- Requires environment variables (see env.example)

## Contact Information Integration
Current contact details:
- Email: himanshuladva0587@gmail.com
- Phone: +91 95106 85398
- LinkedIn: https://www.linkedin.com/in/himanshu-ladva
- GitHub: https://github.com/HimanshuLadva

## Known Issues and TODOs
- Achievement section currently disabled (needs real certifications)
- ERP project URL incorrect (line 303 in portfolio.js - shows nextu.se instead of ecount.in)
- Greeting.js references missing PDF file (Himanshu-Ladva.pdf) for resume download
- TypeScript and JavaScript use same icon (should have distinct icons)
- No testimonials section yet (recommended for client-facing portfolio)
- No case studies section (would enhance project showcase)
- Browser compatibility: Excludes IE11

## Design Philosophy
- **Mobile-First**: Design for small screens, enhance for larger
- **Professional**: Clean, modern aesthetic suitable for client presentations
- **Performance**: Emphasize speed and optimization achievements
- **Accessibility**: Maintain good contrast ratios, support keyboard navigation
- **Interactivity**: Use subtle animations and hover effects without overwhelming
- **Client-Focused**: Language emphasizes business value and ROI

## Future Enhancement Recommendations
1. Add testimonials section for client feedback
2. Create case studies for 1-2 major projects
3. Add WhatsApp direct contact button
4. Implement typing animation in hero section
5. Add project videos/GIFs for better visualization
6. Enable GitHub integration (set openSource.display: true)
7. Add proper certifications to achievement section
8. Optimize images and implement lazy loading
9. Add Google Analytics or Plausible for tracking
10. Create sitemap.xml for SEO
11. Add schema.org markup for better search visibility

## Section Order (Current)
1. Splash Screen (2 seconds, if enabled)
2. Header (sticky navigation)
3. Greeting (hero section with intro)
4. Stats (metrics showcase) - NEW
5. Services (what you offer) - NEW
6. Skills (tech stack icons)
7. Stack Progress (proficiency bars)
8. Education (academic background)
9. Work Experience (job history)
10. Projects (big projects showcase)
11. Startup Projects
12. Achievements (currently disabled)
13. Blogs (Hashnode articles)
14. Talks (currently disabled)
15. Twitter Embed (currently disabled)
16. Podcast (currently disabled)
17. Profile (GitHub integration, currently disabled)
18. Footer
19. Scroll to Top Button

## Important URLs
- Portfolio Homepage: https://himanshuladva-portfolio.pages.dev/
- Resume: https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing
- Blog: https://digitaldevdiary.hashnode.dev/

## Environment Variables Required
- REACT_APP_GITHUB_TOKEN - For GitHub API authentication
- GITHUB_USERNAME - For fetching pinned repositories
- USE_GITHUB_DATA - Toggle GitHub integration
- MEDIUM_USERNAME - For fetching Medium blog posts

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Excludes: Internet Explorer 11

## Accessibility Considerations
- Ensure color contrast ratios meet WCAG standards
- All interactive elements should be keyboard accessible
- Images should have alt text
- Semantic HTML structure
- ARIA labels where appropriate

## Last Updated
2025-10-26 - Added Stats and Services sections, removed fake achievements, fixed skill percentages, set isHireable to true
