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
  kanda,
  betterpool,
  inits,
  cribstack,
  consultingbord,
  xanotech,
  florintech,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "Programming Mentor",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    title: "Senior Frontend Developer",
    company_name: "KANDA SOFTWARE",
    icon: kanda,
    iconBg: "#383E56",
    date: "MAY 2022 - PRESENT",
    location: "Newton - United States",
    contractType: "Full-time",
    points: [
      "Worked as a contractor with teams from various locations, juggling multiple time zones successfully.",
      "Frontend technical interviews were conducted to evaluate and onboard new employees.",
      "Reduced delays and redundant components in existing projects by putting in place clean, reusable code.",
      "Actively worked with project and product managers, as well as engineers, to turn concepts into features that were successfully deployed in production.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "BETTERPOOL",
    icon: betterpool,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Jan 2023",
    location: "United States",
    contractType: "Contract via KANDA SOFTWARE",
    points: [
      "Under the direction of the product manager, features were quickly delivered to deployment while adhering to specific ticket goals and utilizing tools like automated tests and feature-flagging with Split.IO.",
      "Excellent communication skills were displayed while working independently and in small teams efficiently and effectively.",
      "successfully dissected unfamiliar systems to demonstrate autonomy and troubleshooting prowess.",
      "facilitated productive teamwork between the Czech Republic and the United States by working with teammates across time zones.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "INITS LIMITED",
    icon: inits,
    iconBg: "#383E56",
    date: "Mar 2022 - May 2022",
    location: "Lagos - Nigeria",
    contractType: "Contract",
    points: [
      "Used Jest and the React-Testing-Library to quickly implement new features using a TDD (Test-Driven Development) methodology.",
      "Each new feature had a minimum test coverage of 91%, ensuring reliable and robust code.",
      "I took on the management and handling of 4 React projects for a transportation app.",
      "Worked with project and product managers, as well as engineers, to turn concepts into features",
    ],
  },
  {
    title: "React Developer",
    company_name: "CRIBSTACK",
    icon: cribstack,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Apr 2022",
    location: " Lagos - Nigeria",
    contractType: "Contract",
    points: [
      "Quickly implemented new features while adhering to a Test-Driven Development (TDD) methodology using Jest and the React-Testing-Library and maintaining more than 60% test coverage.",
      "Sentry was used to monitor and enhance component performance. Any problems or bugs were found and fixed, and code was optimized by writing clear, reusable solutions to cut down on delays and redundancies.",
      "100% type safety was achieved by creating type-safe utilities, hooks, and components using TypeScript, and code splitting was implemented using Webpack.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "XANOTECH SOLUTIONS",
    icon: xanotech,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Apr 2022",
    location: " Lagos - Nigeria",
    contractType: "Full-time",
    points: [
      "Using CI/CD tools like CircleCI and GitHub Actions, I designed and implemented cross-platform frameworks to improve functionality and streamline pipeline integration.",
      "Played a significant part in improving the user experience across all supported client platforms, which led to a 5% increase in clients in just two months.",
      "Used tools like Trello, Slack, and Google Meet to facilitate close collaboration with engineers and designers and to show leadership, effective communication, and active listening skills.",
      "Efficiently fixed bugs and problems across the entire Grooming Centre codebase, ensuring quick and efficient troubleshooting.",
    ],
  },
  {
    title: "React Engineer",
    company_name: "SILVERDREAM RESOURCES INT’L",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "May 2019 - Mar 2022",
    location: " Lagos - Nigeria",
    contractType: "Contract",
    points: [
      "Managed releases, kept an eye on logs, and produced reports to efficiently find and fix bugs, ensuring that production was updated and fixed on schedule. streamlined workflows by using tools like Sentry, Travis-CI, Git, and GitHub.",
      "Played a significant part in the product design and decision-making processes, aiding in the development of the best user journeys.",
      "Utilizing a Test-Driven Development (TDD) methodology and tools like Jest and React-Testing-Library, new features were swiftly implemented.",
    ],
  },
  {
    title: "React Engineer",
    company_name: "CONSULTINGBORD LIMITED",
    icon: consultingbord,
    iconBg: "#E6DEDD",
    date: "Apr 2018 - Nov 2018",
    location: " Lagos - Nigeria",
    contractType: "Contract",
    points: [
      "Built the entire frontend web app, including the following features: employee management, leave management, data importation as .xls files, employee training schedules, reporting, and complex data visualization (using D3.js and Chart.js).",
      "Wrote up to 67% of unit/integration test coverage using Jest and React-Testing-Library.",
    ],
  },
  {
    title: "Junior Web Developer",
    company_name: "FLORINTECH COMPUTER COLLEGE",
    icon: florintech,
    iconBg: "#E6DEDD",
    date: " Oct 2017 - Mar 2018",
    location: " Lagos - Nigeria",
    contractType: "Full-time",
    points: [
      "Supported the learning and professional development of newly onboarded students, interns, and novice developers by offering tutoring and mentoring.",
      "Played a significant part in the creation of the official website, helping with its design and functionality by utilizing HTML, CSS, and JavaScript.",
      "Held presentational meetings to share insightful knowledge and best practices with the team for frontend engineering, security, and design.",
    ],
  },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
