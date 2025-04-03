export const bio = [
  "Hi, I'm Chanel, a Sydney based Game Developer with a passion for all aspects of the craft. I work as a programmer, designer, and artist, blending my creativity and analytical skills.",
  "I love tackling new problems and expanding my development knowledge.",
  "Explore my portfolio to learn more about me and my work!",
];

export const skills = [
  {
    title: "Languages",
    skillName: "C#, C++, Java",
    color: "1",
    percentage: "85",
  },
  {
    title: "Unity Engine",
    skillName: "Unity",
    color: "6",
    percentage: "85",
  },
  {
    title: "Unreal",
    skillName: "Unreal 4",
    color: "4",
    percentage: "60",
  },
  {
    title: "Version Control",
    skillName: "GitHub, JIRA",
    color: "7",
    percentage: "70",
  },
  /*{
    title: "Tools",
    skillName: "Debugging, Chrome DevTools",
    color: "3",
    percentage: "80",
  },*/
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const projects = {
  webProjects: [
    {
      projectName: "Programming Diaries",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
    },
    {
      projectName: "Find Your Bank",
      image: "images/findyourbank.png",
      summary:
        "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
      preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    },
    {
      projectName: "Web Portfolio",
      image: "images/portfolio.png",
      summary:
        "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
      preview: "https://github.com/vinaysomawat/Travographer-Portal",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
    {
      projectName: "Resume Builder",
      image: "images/resume-builder.png",
      summary:
        "Browser based editor to build and download Resumes in a customizable templates.",
      preview: "https://vinaysomawat.github.io/Resume-Builder",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "The Application display the webpages of website careerhigh.in in android devices.",
      preview: "https://github.com/vinaysomawat/CareerHigh-Android",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const experience = [
  {
    title: "AG Lego Certified Stores",
    duration: "August 2022 - December 2024",
    subtitle: "Retail Assistant",
    details: ["Assisted and served customers, picked and packed orders, used Magento system"],
    tags: ["Communication", "Customer Service"],
    icon: "truck ",
  },
  {
    title: "Alchemy Tuition",
    duration: "July 2022 - November 2022",
    subtitle: "Mathematics Tutor",
    details: ["Planned lessons and homework for students, Taught and explained math concepts, Improved the grades of students taught"],
    tags: [
      "Lesson Planning",
      "Time Management",
      "Mentorship",
      "Communication",
    ],
    icon: "heartbeat",
  },
];

export const education = [
  {
    title: "Bachelor of Science in Games Development",
    duration: "2022 - 2025",
    subtitle: "University of Technology Sydney",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Game Design",
      "Advanced Games Programming",
      "Routing and Switching",
      "Cybersecurity",
      "Project Management",
    ],
    icon: "graduation-cap",
  },
  {
    title: "HSC",
    duration: "",
    subtitle: "Muirfield High School",
    details: [],
    tags: ["Physics", "Advanced English", "Advanced Mathematics"],
    icon: "book",
  },
];

export const footer = [
//   {
//     label: "Dev Profiles",
//     data: [
//       {
//         text: "Stackoverflow",
//         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
//       },
//       {
//         text: "GitHub",
//         link: "https://github.com/vinaysomawat",
//       },
//       {
//         text: "LeetCode",
//         link: "https://leetcode.com/somawatvinay/",
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
  {
    label: "Links",
    data: [
      {
        text: "Linkedin",
        link: "www.linkedin.com/in/chanel-parfait",
      },
      {
        text: "Itch.io",
        link: "https://chanel-parfait.itch.io/",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Vinay Somawat.",
      
    ],
  },
];
