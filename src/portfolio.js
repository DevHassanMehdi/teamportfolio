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
  username: "Our Team",
  title: "Hi",
  subTitle: emoji(
    "Unlocking Potential Through Technology, Meet Our Dynamic Team of Computer Scientists"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What we do",
  subTitle: "A TEAM OF VERSATILE AND PASSIONATE SOFTWARE DEVELOPERS WITH A MULTITUDE OF TECHNOLOGY AND PROGRAMMING EXPERIENCE",
  skills: [
    emoji("⚡ Backend development: Crafting scalable server-side applications for seamless functionality."),
    emoji("⚡ Frontend development: Designing engaging user interfaces for optimal user experience."),
    emoji("⚡ Data science and analytics: Extracting insights from data to drive informed decisions."),
    emoji("⚡ AI integration: Implementing advanced algorithms for enhanced software capabilities."),
    emoji("⚡ Cloud computing: Leveraging cloud platforms for scalable and cost-effective solutions."),
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "RI Software Project: AI Driven Business Management Software",
      company: "Ri Software",
      companylogo: require("./assets/images/riLogo.jpeg"),
      date: "April 2023 – February 2024",
      desc:
      "Our team at RI Software embarked on a transformative project to develop an AI-driven business management"
      +" software aimed at empowering businesses and fostering growth. As a cohesive unit, we took on the responsibility"
      +" of handling the backend and data science aspects of this innovative solution. Our collaborative efforts led us"
      +" to develop robust backend elements, integrating various data science algorithms seamlessly into the backend"
      +" infrastructure. This integration allowed for the efficient functioning of the software, where the front end"
      +" connected flawlessly with the backend, ensuring a cohesive and functional end-to-end system. Through our"
      +" collective expertise in Python development, AI models, machine learning, and deep learning principles, we"
      +" successfully crafted a cutting-edge software solution that caters to the dynamic needs of modern businesses.",

      descBullets: [
        "Python for back-end and Data Science Algorithms.",
        "TypeScript with React for front-end development.",
        "Flask for API development.",
        "Pandas, NumPy, SciPy for data processing.",
        "PyQt, PyTest, OpenCv, Matplotlib for data visualization.",
        "Postgres Database.",
      ]
    },
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
  title: "Big Projects",
  subtitle: "AS A DILIGENT COMPUTER SCIENTIST, I HAVE BEEN INVOLVED IN SEVERAL IMPACTFUL PROJECTS, INCLUDING",
  projects: [
    {
      image: require("./assets/images/riLogo.jpeg"),
      projectName: "Ri Software",
      projectDesc: "RI Software is an innovative business management solution that enables small businesses to not only showcase and sell their products and services but also gain valuable insights through integrated AI algorithms, fostering growth and success",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ri-software.com.ua"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Our Team Members"),
  subtitle:
    "MEET OUR DIVERSE AND SKILLED TEAM OF DEVELOPERS AND DATA SCIENTISTS",

  achievementsCards: [
    {
      title: "HASSAN MEHDI",
      subtitle:"Lead Backend/Data Science Developer",
      image: require("./assets/images/hassan.jpg"),
      footerLink: [
        {
          name: "Python",
        },
        {
          name: "RESTful APIs",
        },
        {
          name: "Machine Learning",
        },
        {
          name: "Back-end",
        },
        {
          name: "Data Science",
        },
      ]
    },
    {
      title: "MUHAMMAD MOAZ",
      subtitle:"Deputy Backend Developer",
      image: require("./assets/images/moaz.jpeg"),
      footerLink: [
        {
          name: "Python",
        },
        {
          name: "RESTful APIs",
        },
        {
          name: "ReactJs, NodeJs",
        },
        {
          name: "Azure, AWS",
        },
        {
          name: "Back-end",
        },
      ]
    },
    {
      title: "EFTA KHAIRUL BASHAR",
      subtitle:"Backend Developer",
      image: require("./assets/images/taz.jpeg"),
      footerLink: [
        {
          name: "Python",
        },
        {
          name: "RESTful APIs",
        },
        {
          name: "Back-end",
        },
        {
          name: "Data Science",
        },
      ]
    },
    {
      title: "JENNIFER NJERI",
      subtitle:"Deputy Data Scientist",
      image: require("./assets/images/jennifer.png"),
      footerLink: [
        {
          name: "Python",
        },
        {
          name: "Matlab, Tableau",
        },
        {
          name: "Statistics",
        },
        {
          name: "Data Science",
        },
      ]
    },
//    {
//      title: "ADAM CONRAD",
//      subtitle:"Data Scientist",
//      image: require("./assets/images/adam.jpeg"),
//      footerLink: [
//        {
//          name: "Python",
//        },
//        {
//          name: "Matlab, Tableau",
//        },
//        {
//          name: "Machine Learning",
//        },
//        {
//          name: "Data Science",
//        },
//      ]
//    },
    {
      title: "JUNAID RAZA",
      subtitle:"Data Scientist",
      image: require("./assets/images/junaid.jpg"),
      footerLink: [
        {
          name: "Python",
        },
        {
          name: "Open AI, NLP",
        },
        {
          name: "Machine Learning",
        },
        {
          name: "Data Science",
        },
      ]
    },
    {
      title: "LEONARD GACHIMU",
      subtitle:"Data Scientist",
      image: require("./assets/images/leo.jpeg"),
      footerLink: [
        {
          name: "Python",
        },
        {
          name: "NLP",
        },
        {
          name: "Data Analysis",
        },
        {
          name: "Data Science",
        },
      ]
    },
    {
      title: "ADIL IQBAL",
      subtitle:"Data Scientist",
      image: require("./assets/images/adil.jpg"),
      footerLink: [
         {
          name: "Python",
        },
        {
          name: "Data Science",
        },
        {
          name: "NLP",
        },
        {
          name: "Machine Learning",
        },
      ]
    },
    {
      title: "ROOSHAN HAIDER",
      subtitle:"Data Scientist",
      image: require("./assets/images/rooshan.jpg"),
      footerLink: [
         {
          name: "Python",
        },
        {
          name: "Data Analysis",
        },
        {
          name: "Data Science",
        },
      ]
    },
    {
      title: "Najam Us Saqib",
      subtitle:"Frontend Developer",
      image: require("./assets/images/najam.jpeg"),
      footerLink: [
        {
          name: "ReactJs",
        },
        {
          name: "TypeScript",
        },
        {
          name: "HTML-CSS, JS",
        },
        {
          name: "NodeJs",
        },
        {
          name: "Front-end",
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Us ☎️"),
  subtitle:
    "Want to discuss a project? Our Inbox is open for all.",
  number: "+92-3020905006",
  email_address: "hassanmehdi510@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
