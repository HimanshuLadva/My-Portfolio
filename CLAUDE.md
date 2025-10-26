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
- **Current Stats**: Business Problems Solved (50+), Years Experience (2+), Performance Boost (30%), Team Members Mentored (5+)

#### 2. Services Section (src/containers/services/)
- **Purpose**: Showcase services offered to clients with professional presentation
- **Features**: Color-coded service cards, 3D rotation animations on hover, client-focused language
- **Responsive**: 3 columns → 2 columns → 1 column on mobile
- **Design Pattern**: Each service has custom color variable passed via CSS custom properties
- **Services Order**: Angular Development, Full Stack Development, Performance Optimization, ERP Solutions, Legacy Migration, API Integration

### Updated Sections (2025-10-26)

#### 3. Software Skills Section (src/components/softwareSkills/)
- **Design Pattern**: Grid-based card layout with glassmorphism effect
- **Features**: 3D hover animations, icon rotation (360deg), purple gradient overlays, backdrop blur
- **Layout**: Auto-fit grid with 110px min card width, responsive down to 80px on mobile
- **Animation**: Icons scale and rotate on hover, cards lift with shadow effects
- **Color Scheme**: Purple-blue gradient (#667eea → #764ba2) for hover states
- **Structure**: Icon above text in vertical stack, not horizontal inline

#### 4. Tech Stack Progress Section (src/containers/skillProgress/)
- **Major Redesign**: Converted from simple pill badges to card-based progress bars
- **Key Changes**:
  - Removed illustration/Lottie animation from right side
  - Full-width horizontal grid layout
  - Skills heading is left-aligned, not centered
- **Card Structure**: Skill name + percentage on header row, animated progress bar below
- **Progress Bar Animation**: Fills from 0 to actual percentage on page load (1.5s duration)
- **Hover Effects**: Cards lift, progress bars glow with purple shadow, gradient overlay appears
- **Responsive Grid**: 280px min card width, auto-fit columns, single column on mobile
- **Class Naming**: Uses `-progress` suffix (skill-card-progress, skill-header-progress, skill-name-progress, skill-percentage-progress)
- **Layout Philosophy**: Horizontal arrangement prioritized over vertical with image

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
- WhatsApp link uses WhatsApp Web API: `https://wa.me/${phoneNumber}` (strip non-numeric characters)
- Do NOT use `mailto:` links (doesn't work well for web-only email users)
- Always include `target="_blank"` and `rel="noopener noreferrer"` for external links
- **Icon Order**: GitHub, LinkedIn, Gmail, WhatsApp (positioned directly after Gmail)
- **WhatsApp Integration**: Phone number format uses country code (+919510685398), icon appears beside every Gmail icon
- **Color Variables**: All social media colors defined in _globalColor.scss (WhatsApp: #25d366)

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
- `transition: all 0.3s ease` or `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)` for bouncy effect
- `transform: translateY(-5px)` to `translateY(-8px)` on hover
- Enhanced shadow with purple glow on hover: `box-shadow: 0 10px 30px rgba(102, 126, 234, 0.25)`
- Optional: scale or rotate transforms
- Glassmorphism pattern: `backdrop-filter: blur(10px)` with semi-transparent backgrounds
- Gradient overlays using `::before` pseudo-element with opacity transitions

### Progress Bar Pattern
For animated progress bars (used in Tech Stack section):
- Use CSS custom properties for dynamic width: `--proficiency: ${percentage}%`
- Animate from 0 to actual value on page load using keyframes
- Purple gradient fill: `linear-gradient(90deg, #667eea 0%, #764ba2 100%)`
- Add glowing shadow on hover for interactive feel
- Progress bars positioned below skill name and percentage header
- Background should be semi-transparent: `rgba(255, 255, 255, 0.1)`

## File Naming Conventions
- Components: PascalCase (Header.js, SocialMedia.js)
- Containers: PascalCase (Greeting.js, WorkExperience.js)
- Styles: Match component name (Header.scss, SocialMedia.scss)
- Assets: lowercase with hyphens (ecount-logo.png)
- Configuration: lowercase (portfolio.js)

## Git/Version Control Notes
- This IS a git repository (.git directory exists)
- Current branch: main
- Repository is clean with recent commits
- Latest commits include portfolio sections and improvements
- If adding new files, ensure .gitignore includes node_modules and build/

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
- Phone/WhatsApp: +91 95106 85398 (formatted as +919510685398 in config)
- LinkedIn: https://www.linkedin.com/in/himanshu-ladva
- GitHub: https://github.com/HimanshuLadva
- WhatsApp: Integrated throughout portfolio via SocialMedia component

## Known Issues and TODOs
- Achievement section currently disabled (needs real certifications)
- ERP project URL incorrect (line 303 in portfolio.js - shows nextu.se instead of ecount.in)
- Greeting.js references missing PDF file (Himanshu-Ladva.pdf) for resume download
- TypeScript and JavaScript use same icon in softwareSkills (should have distinct icons)
- No testimonials section yet (recommended for client-facing portfolio)
- No case studies section (would enhance project showcase)
- Browser compatibility: Excludes IE11
- Skills icons section kept as vertical cards with icons, separate from tech stack progress bars

## Design Philosophy
- **Mobile-First**: Design for small screens, enhance for larger
- **Professional**: Clean, modern aesthetic suitable for client presentations
- **Performance**: Emphasize speed and optimization achievements
- **Accessibility**: Maintain good contrast ratios, support keyboard navigation
- **Interactivity**: Use subtle animations and hover effects without overwhelming
- **Client-Focused**: Language emphasizes business value and ROI
- **Glassmorphism**: Modern semi-transparent cards with backdrop blur for depth
- **Purple Gradient Theme**: Consistent use of #667eea to #764ba2 gradient across interactive elements
- **Progressive Enhancement**: Animations and effects enhance but don't block core functionality

## Future Enhancement Recommendations
1. Add testimonials section for client feedback
2. Create case studies for 1-2 major projects
3. ~~Add WhatsApp direct contact button~~ ✅ COMPLETED
4. Implement typing animation in hero section
5. Add project videos/GIFs for better visualization
6. Enable GitHub integration (set openSource.display: true)
7. Add proper certifications to achievement section
8. Optimize images and implement lazy loading
9. Add Google Analytics or Plausible for tracking
10. Create sitemap.xml for SEO
11. Add schema.org markup for better search visibility
12. Add distinct TypeScript icon (currently uses same as JavaScript)

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

## Design System & Color Palette

### Primary Brand Colors
- **Purple Gradient**: #667eea (blue-purple) → #764ba2 (deep purple)
- **Skills Color**: #645beb
- **Button Colors**: #55198b (primary), #8c43ce (hover)

### Social Media Brand Colors
- GitHub: #333
- LinkedIn: #0e76a8
- Google/Gmail: #ea4335
- WhatsApp: #25d366 (official WhatsApp green)
- GitLab: #fca326
- Twitter: #1da1f2
- Medium: #000
- Stack Overflow: #f48024
- Instagram: #c13584
- Kaggle: #20beff
- Facebook: #3b5998

### Component-Specific Patterns
- **Glassmorphism Cards**: `background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)` with `backdrop-filter: blur(10px)`
- **Border Styling**: `1px solid rgba(255, 255, 255, 0.1)` for light borders on dark backgrounds
- **Shadow on Hover**: Multi-layer shadows with purple tint for interactive elements
- **Border Radius**: 15-16px for cards, 50px for pills/badges, 10px for progress bars

## Important Development Notes

### Two Separate Skills Sections
The portfolio has TWO distinct skills visualization approaches:
1. **SoftwareSkill Component** (src/components/softwareSkills/): Icon-based grid cards with vertical layout (icon above text)
2. **SkillProgress Component** (src/containers/skillProgress/): Horizontal progress bar cards with percentages

These are intentionally separate and serve different purposes. Do not merge or confuse them.

### Class Naming Suffixes
To avoid conflicts between similar sections:
- Skills icon cards use standard naming: `.skill-card`, `.skill-name`, etc.
- Progress bar cards use `-progress` suffix: `.skill-card-progress`, `.skill-name-progress`, etc.

### WhatsApp Integration Pattern
When adding social media icons:
1. Add property to `socialMediaLinks` object in portfolio.js with appropriate format
2. Add icon to SocialMedia.js component with proper URL formatting
3. Add brand color to `_globalColor.scss`
4. Add CSS class and hover state to `SocialMedia.scss`
5. Order matters: WhatsApp positioned directly after Gmail for logical grouping

## Last Updated
2025-10-26 - Major UI redesign session including:
- Updated Stats section content (Business Problems Solved stat)
- Redesigned Software Skills section with glassmorphism cards and 3D animations
- Completely redesigned Tech Stack Progress section with animated progress bars
- Removed illustration from Skills section for horizontal layout
- Added WhatsApp integration across all social media sections
- Swapped Services section positioning (Full Stack Development ↔ ERP Solutions)
- Established purple gradient theme (#667eea → #764ba2) as primary interactive color
