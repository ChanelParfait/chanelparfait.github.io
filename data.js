export const bio = [
  "Hi, I'm Chanel, a Sydney based Game Developer with a passion for all aspects of the craft. I work as a programmer, designer, and artist, blending my creativity and analytical skills.",
  "As a recent Games Development Graduate, I'm looking to break into the IT Industry. My current career goals are to gain professional experience developing software or games, expand my knowledge and contribute to innovative, user focused projects.",
  "In my projects, I specialise in designing and programming core mechanics and systems. From planning the classes to final testing and bug fixing. I focus on logical, readable design and modular, easily maintainable code.",
  "Though my main role is often as a programmer, my interests span across many fields, including UI design, audio engineering, animation and marketing. I love learning new things and improving my skills as a developer. Within group projects I often take up leadership roles by planning and conducting meetings, updating documentation, and helping others meet their objectives. Organisation and communication are vital aspects of my workflow.",
  "I spend my free time creating art, gaming (both digitally and on the table top), hitting the gym and tackling escape rooms with friends. My favourite games currently are Marvel Rivals, R.E.P.O and Inscryption. Some of my current projects include implementing networked multiplayer for 'Crushers' a demolition derby party game, and learning mobile development for Android.",
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
      projectName: "Crushers",
      image: "images/crushers.png",
      summary:
        "Multiplayer demolition derby with special pickup items and vehicle selection. Developed in a small group for Game Design Studio 2 at UTS",
      preview: "https://chanel-parfait.itch.io/crushers",
      techStack: ["Unity", "Mirror", "Steamworks", "C#", "Player Input System"],
    },
    {
      projectName: "Gloria Armada",
      image: "images/gloria_armada.jpg",
      summary:
        "Web Based SHMUP pilot game with physics based controls. Developed in a small group for Game Design Studio 1 at UTS",
      preview: "https://chanel-parfait.itch.io/gloria-armada",
      techStack: ["Unity", "WebGL", "C#"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Procedural Racetrack Generator",
      image: "images/shifting_speedway.png",
      summary:
        "A multiplayer procedural racetrack generator, with randomly generated vehicles, created with a partner for Advanced Games Programming at UTS",
      preview: "https://www.youtube.com/watch?v=Qv38RMm-BOk",
      techStack: ["Unreal 4", "C++"],
    },
    {
      projectName: "Song Generator",
      image: "images/song_generator.png",
      summary:
        "A simple song generator which creates 8-bit style music based on text inputs",
      preview: "https://www.youtube.com/watch?v=wo2sbVCj76k",
      techStack: ["Processing 4", "Java", "Beads", "Control.P5"],
    }
  ],
  androidProjects: [
    {
      projectName: "Stranded",
      image: "images/stranded.png",
      summary:
        "3D Unity animation about an astronaut on a foreign planet. Developed with a small group for Interactive 3D Animation at UTS",
      preview: "https://www.youtube.com/watch?v=duFdAqSy8gU",
      techStack: ["Unity", "Blender", "C#", "Mixamo", "Cinemachine"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "Clean It Up",
      image: "images/clean_it_up.png",
      summary:
        "An education game about recycling and sustainable waste management, created with Unity",
      preview: "",
      techStack: ["Unity", "C#"],
    },
  ]
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
  }
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
  }
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
        link: "https://www.linkedin.com/in/chanel-parfait/",
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
      "Template created by Vinay Somawat.",
      
    ],
  },
];
