/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Himanshu Ladva",
  title: "Hi, I'm Himanshu",
  subTitle: emoji(
    "Results-oriented software developer with a passion for creating efficient, user-friendly applications, combining technical expertise with creativity for impactful solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HimanshuLadva",
  linkedin: "https://www.linkedin.com/in/himanshu-ladva",
  gmail: "himanshuladva0587@gmail.com",
  whatsapp: "+919510685398", // Your WhatsApp number with country code
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE JAVASCRIPT TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Optimized application performance through lazy loading, code splitting, and AOT compilation."
    ),
    emoji(
      "⚡ Flexible approach to analyzing technical issues and clearly communicating recommendations/solutions."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Darshan Institute Of Engineering & Technology",
      logo: require("./assets/images/darshan.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "June 2019 - June 2023",
      desc: "7.43 CGPA",
      descBullets: []
    },
    {
      schoolName: "Shree Ambika Science School",
      logo: require("./assets/images/ambika.png"),
      subHeader: "Higher Secondary School",
      duration: "June 2017 - June 2019",
      desc: "92.48 PR",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Angular", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Typescript",
      progressPercentage: "85%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "80%"
    },
    {
      Stack: "Rxjs",
      progressPercentage: "75%"
    },
    {
      Stack: ".Net Web API",
      progressPercentage: "70%"
    },
    {
      Stack: "Material UI",
      progressPercentage: "70%"
    },
    {
      Stack: "SQL",
      progressPercentage: "65%"
    },
    {
      Stack: "HTML5",
      progressPercentage: "90%"
    },
    {
      Stack: "CSS3",
      progressPercentage: "85%"
    },
    {
      Stack: "Bootstrap",
      progressPercentage: "75%"
    },
    {
      Stack: "REST API",
      progressPercentage: "80%"
    },
    {
      Stack: "Git & Github",
      progressPercentage: "80%"
    },
    {
      Stack: "OOP",
      progressPercentage: "75%"
    },
    {
      Stack: "Jira",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: ".NET Full Stack Developer",
      company: "Epic Developers",
      companylogo: require("./assets/images/ecountlogo.enc"),
      date: "Oct 2023 – Present",
      descBullets: [
        "Spearheaded optimization of core ERP modules, improving system performance by 30% and reducing downtime during critical business operations.",
        "Developed features like gst utilization,production planning,Customer Relationship Management,Todo list like google keep,implementing uniq data display grid system,optimized frontend initial api calling by reduce unnecessary api calling,digital sigature frontend implementation",
        "Did a main features and like Multi-window application.Also migrate project from Angular 11 to Angular 14 version",
        "Mentored a team of 5 junior engineers, providing guidance on ERP module development, code optimization, and best practices, improving team productivity and code quality."
      ]
    },
    {
      role: "Angular Developer",
      company: "Evoluation Infosystem",
      companylogo: require("./assets/images/evolutionlogo.jfif"),
      date: "June 2023 – Sep 2023",
      descBullets: [
        "Built responsive and high-performance single-page applications (SPAs) using Angular, improving page load speed by 40% and enhancing user engagement.",
        "Implemented reusable components and optimized Angular architecture, reducing development time for new projects by 30%.",
        "Collaborated with cross-functional teams to integrate Angular with back-end services like REST APIs and GraphQL, ensuring seamless data flow for clients.",
        "Participated in code reviews, improving team code quality and decreasing production bugs by 25%."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "WeyBee Solutions Pvt Ltd",
      companylogo: require("./assets/images/weybeelogo.jfif"),
      date: "June 2022 – April 2023",
      descBullets: [
        "To enhance my ability the estimate engineering effort, plan implementation and roll out product features.",
        "Independently design, code, and test major features, as well as work jointly with other team members to deliver complex changes.",
        "Flexible approach to analyzing technical issues and clearly communicating recommendations/solutions.",
        "Engaged in pair programming sessions, helping to troubleshoot complex issues and improve team learning.",
        "Helped resolve cross-browser compatibility issues, ensuring the application worked seamlessly across different browsers."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Industry Projects",
  subtitle: "During My Journey I worked on different-different projects",
  projects: [
    {
      image: require("./assets/images/kamara.jpeg"),
      projectName: "Kamara Jewellery",
      projectDesc:
        "Online jewellery shop is basically used to build an application program which help people to find and buy latest design of jewellery with different categories like Gold, Silver, Diamond. It Is useful in the way that it makes an easier way to buy products online.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://xyraa.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/social-sparsh.jpeg"),
      projectName: "Social Sparsh",
      projectDesc:
        "Social Sparsh is an AI-driven digital marketing platform designed to streamline business marketing efforts. It offers tools for automating social media management, building SEO-friendly websites, integrating chatbots, and creating digital business cards, helping businesses enhance brand visibility, customer engagement, and online presence.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://socialsparsh.com/"
        }
      ]
    },
    {
      image: require("./assets/images/onlinecoursehost.png"),
      projectName: "Online Course Hosting Platform",
      projectDesc:
        "OnlineCourseHost allows creators to easily build, host, and sell online courses without needing technical skills. It provides tools for course customization, student management, marketing, and payment processing. Users can start for free and scale with advanced features, streamlining the process of online course monetization.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://onlinecoursehost.com/"
        }
      ]
    },
    {
      image: require("./assets/images/ecountlogo.enc"),
      projectName: "ERP Software",
      projectDesc:
        "Ecount.in provides cloud-based ERP software for businesses in transport and accounting, with features like GST billing, inventory management, fleet tracking, and CRM integration. It automates sales tracking, notifications via WhatsApp, SMS, and email, and custom reporting. The software caters to industries like laminate and hardware, streamlining operations and enhancing workflow efficiency.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://ecount.in/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // Add your real achievements and certifications here
    // Example:
    // {
    //   title: "Your Certification Name",
    //   subtitle: "Description of your achievement",
    //   image: require("./assets/images/your-cert-logo.png"),
    //   imageAlt: "Certification Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "your-certification-url"
    //     }
    //   ]
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://digitaldevdiary.hashnode.dev/what-is-angular",
      title: "What is Angular ? Angular and It's use cases ,pros and cons",
      description:
        "Angular is an open-source framework by Google for building scalable, dynamic single-page applications (SPAs) using TypeScript. It's ideal for enterprise apps, SPAs, Progressive Web Apps (PWAs), and complex web platforms."
    },
    {
      url: "https://digitaldevdiary.hashnode.dev/how-to-add-font-awesome-to-an-angular-project",
      title: "How to add Font Awesome to an Angular project",
      description:
        "we will be working through how to use Font Awesome in an Angular app and how we can use Font Awesome’s icon animation and styling."
    },
    {
      url: "https://digitaldevdiary.hashnode.dev/formgroup-and-formcontrol-in-angular",
      title: "FormGroup and FormControl in Angular",
      description:
        "If you’re making a web app, you will need to capture information from your user sooner or later. Fortunately, reactive forms in Angular allow you to create clean forms without using too many directives."
    },
    {
      url: "https://digitaldevdiary.hashnode.dev/angular-modules-best-practices-for-structuring-your-app",
      title: "Angular modules: Best practices for structuring your app",
      description:
        "I’ll show you how to structure your application into a series of smaller blocks, or modules, of functionality. We’ll walk through the process of building a well-structured Angular application that enforces separation of concerns and reusability using modules. We’ll also review some best practices for using Angular modules."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 95106 85398",
  email_address: "himanshuladva0587@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
