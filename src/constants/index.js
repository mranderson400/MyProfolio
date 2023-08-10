import csharp from "../assets/csharp.png";
import color from "../assets/color.png";
import pat from "../assets/pat.png"
import matt from "../assets/matt.png"
import patS from "../assets/patS.png"
import Sicily from "../assets/Sicily.png"

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
  docker,
  threejs,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "React Native/JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "C# Developer",
    icon: web,
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
    name: "C#",
    icon: csharp,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
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
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "C# Developer",
    company_name: "",
    icon: csharp,
    iconBg: "#383E56",
    date: "Febuary - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing modular and reusable components with C# libraries, ensuring flexibility and maintainability across projects.",
      "Adopting responsive design and ensuring cross-browser compatibility.",
      "Leveraging the latest features of C# for enhanced performance, while troubleshooting and resolving software defects in existing systems.",
    ],
  },
  {
    title: "React Native/JS Developer",
    company_name: "SynergySoftLabs",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "March 2022 - July 2023",
    points: [
      "Developing and maintaining web/mobile applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "",
    icon: backend,
    iconBg: "#383E56",
    date: "Jan 2022 -  Present",
    points: [
      "Designing user-friendly interfaces with React.js, emphasizing optimal user experience and interactivity.",
      "Liaising with design and product teams to ensure accurate translation of UI/UX designs into functional web components.",
      "Optimizing web applications for mobile devices with responsive techniques and rigorous testing.",
      "Advocating for code quality and maintainability through structured code reviews and best practice discussions.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Coding Dojo",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Feb 2023",
    points: [
      "Building end-to-end solutions with a focus on integrating multiple frontend frameworks like React.js with backend technologies.",
      "Designing and modeling databases, ensuring efficient data retrieval and robust system performance.",
      "Coordinating with various internal teams to enhance application functionality and introduce innovative features.",
      "Leading debugging sessions, addressing and resolving production issues, and promoting system reliability."
    ],
  },
];
const personal = [
{
  image: Sicily
}
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Patrick Bennet",
    designation: "Team Lead",
    company: "IBM/SynergySoftLabs",
    image: pat,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Matt Yee",
    designation: "CEO",
    company: "Oracle/SynergySoftLabs",
    image: matt,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Patrick Sohn",
    designation: "Team Lead",
    company: "IBM/SynergySoftLabs",
    image: patS,
  },
];

const projects = [
  {
    name: "Search & Rescue",
    description:
      "An advanced mobile application engineered to streamline search and rescue missions, leveraging real-time geolocation analytics and facilitating optimal coordination among emergency response teams.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: web,
    source_code_link: "",
  },
  {
    name: "Whatsapp",
    description:
      "A sophisticated replication of the renowned WhatsApp platform, meticulously crafted with React Native, epitomizing robust real-time communication protocols, a user-centric interface, and efficient media transmission capabilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: color,
    source_code_link: "https://github.com/",
  },
  {
    name: "Classic Noire",
    description:
      "A digital platform for iconic noir films, featuring tools for effortless movie additions and a robust system for users to track their order history, enhancing both administrative and user experiences",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      
    ],
    image: csharp,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
