import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

} from "../assets";

// import {canva,BootStrap,Firebase,MaterialUI,Postman,RESTAPI,VScode} from "../assets"
import canva from "../assets/canva"
import BootStrap from "../assets/BootStrap.net"
import Firebase from "../assets/Firebase.jpeg"

import MaterialUI from "../assets/MaterialUI.jpeg"
import Postman from "../assets/Postman.jpeg"
import RESTAPI from "../assets/RestAPI.jpeg"
import VScode from "../assets/VScode.jpeg"

import dct from "../assets/dct.png"
import eventspot from "../assets/eventspot.jpg"
import blogapp from "../assets/blogapp.jpg"



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }, {
    name: "canva",
    icon: canva
  }, {
    name: "bootstrap",
    icon: BootStrap,
  }
  , {
    name: "Firebase",
    icon: Firebase,
  }, {
    name: "MaterialUI",
    icon: MaterialUI,
  }, {
    name: "Postman",
    icon: Postman,
  }
  , {
    name: "RESTAPI",
    icon: RESTAPI,
  }, {
    name: "VScode",
    icon: VScode,
  }

];

const experiences = [
  {
    title: "MERN Stack Intern",
    company_name: "DCT academy",
    icon: dct,
    iconBg: "#383E56",
    date: "July 2023 - Feb 2024",
    points: [
      "Developed multiple full-stack projects showcasing practical skills in JavaScript (ES6) and creating responsive UIs with React.js" ,
      "Built scalable server-side applications using Node.js and Express.js",
      "Managed NoSQL databases with MongoDB, including data modeling and querying",
     " Implemented RESTful APIs and used Git for version control"
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Event Spot",
    description:
"    Event Spot is an innovative online platform designed to facilitate locationbased event discovery for users",    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "react-leaflet",
        color: "pink-text-gradient",
      },
      
    ],
    image: eventspot,
    source_code_link: "https://github.com/VikranthKA/Event-Spot_frontend",
  },
  {
    name: "Blog App",
    description:"A blog app is a web application designed to facilitate the creation, management, and viewing of blog posts",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: blogapp,
    source_code_link: "https://github.com/VikranthKA/Blog_App-frontend",
  },
  
];

export { services, technologies, experiences, testimonials, projects };