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
  nodejs,
  mongodb,
  git,
  kanda,
  betterpool,
  inits,
  cribstack,
  xanotech,
  florintech,
  reactquery,
  postgresql,
  nextjs,
  jest,
  npm,
  runyourpool,
  silverdream,
  nairgym,
  arggroup,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "React Query",
    icon: reactquery,
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
      "Successfully dissected unfamiliar systems to demonstrate autonomy and troubleshooting prowess.",
      "Facilitated productive teamwork between the Czech Republic and the United States by working with teammates across time zones.",
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
    date: "May 2021 - Mar 2022",
    location: " Lagos - Nigeria",
    contractType: "Contract",
    points: [
      "Managed releases, kept an eye on logs, and produced reports to efficiently find and fix bugs, ensuring that production was updated and fixed on schedule. streamlined workflows by using tools like Sentry, Travis-CI, Git, and GitHub.",
      "Played a significant part in the product design and decision-making processes, aiding in the development of the best user journeys.",
      "New features were swiftly implemented using a Test-Driven Development (TDD) methodology and tools like Jest and React-Testing-Library",
    ],
  },
  {
    title: "React Engineer",
    company_name: "CONSULTINGBORD LIMITED",
    icon: betterpool,
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
    testimonial: `When it comes to adjusting to new technologies and feedback, Stanley is unmatched in his intelligence and agility. He takes pride in his work and consistently produces high-caliber results. He works well with others as a team and is always eager to support his colleagues. 

His communication style and abilities are truly impressive. He is skilled at explaining intricate technical ideas to both technical and non-technical audiences. 🙂`,
    name: "Artur Zhadra",
    designation: "IT Recruiter",
    company: "KANDA SOFTWARE",
    image:
      "https://media.licdn.com/dms/image/D4D03AQEj7cDjVgrQFA/profile-displayphoto-shrink_200_200/0/1667398990223?e=1691020800&v=beta&t=N_cmKC5TXmoOIEyHIXhT4-HJD6HLbW45qWyHdeG9QPU",
  },
  {
    testimonial:
      "I had the pleasure of working with Stanley as a Frontend Typescript + React developer on my team. Stanley was a great team player, always willing to learn and take on new challenges. He was proactive in suggesting changes and improvements to our projects and his contributions helped drive our success. Stanley's proficiency in Typescript and React was incredibly beneficial to our team and I would highly recommend him to anyone looking for a talented and dedicated Frontend Developer.",
    name: "David Vass",
    designation: "Senior Software Engineer",
    company: "BETTERPOOL",
    image:
      "https://media.licdn.com/dms/image/C4D03AQHmIdEmxqfxjA/profile-displayphoto-shrink_200_200/0/1602665983003?e=1691020800&v=beta&t=dPmJEH1s-PENjLDn6SVpMCiG_E3PeUs4OEjachbl90I",
  },
  {
    testimonial:
      "Stanley is a brilliant mind, committed to building capacity and impacting people around him. A very fast learner constantly engaging in self development. Stanley, as a senior Software Engineer, he's highly resourceful. It's always great interacting with him, because you're bound to learn a thing or two from him. Great guy!",
    name: "Ridwan Oladipupo",
    designation: "Frontend Engineer",
    company: "DASH",
    image:
      "https://media.licdn.com/dms/image/C4D03AQFxhcnLW71_-g/profile-displayphoto-shrink_200_200/0/1657035821171?e=1691020800&v=beta&t=xf0yQuwA0jiAYSXSMUY9TvYeMq0-3n5sqiKbxkHdj-8",
  },
  {
    testimonial: `Stanley Ogada is a good Frontend Engineer.
I really appreciated working with him on different projects.
I recommend his service to anyone!`,
    name: "Salomon AYAH",
    designation: "Senior Software Engineer",
    company: "KANDA SOFTWARE",
    image:
      "https://media.licdn.com/dms/image/C4D03AQG_Tg31fW2kfg/profile-displayphoto-shrink_200_200/0/1583924276541?e=1691020800&v=beta&t=eVPlsFDYoF4Hg-aRZ4k7ew8wqjh5KwRzYpUw_pgKdeE",
  },
  {
    testimonial: `I know Stanley as an hard working and very serious team player, he is a dedicated professional and is willing to put that extra help whenever you need it.
He is a developer whose work in the team makes other team members strive for better results.`,
    name: "Anani oluwatobiloba",
    designation: "Full Stack Software Engineer",
    company: "FAMELAB",
    image:
      "https://media.licdn.com/dms/image/C4D03AQFr_W8u2NQ8GQ/profile-displayphoto-shrink_200_200/0/1613084011233?e=1691020800&v=beta&t=LvAKsssTG-2YBO34X6L73ND5uMr34lo_QdE009IrFbw",
  },
  {
    testimonial: `Stanley is an outstanding software engineer that possesses strong analytical, communication, problem-solving, project design, and project execution skills.
He is always ready to collaborate on all things software engineering.`,
    name: "Olayinka Olaosebikan",
    designation: "Backend Developer",
    company: "E2F",
    image:
      "https://media.licdn.com/dms/image/C5603AQFpOSSvs0d9aA/profile-displayphoto-shrink_200_200/0/1638448516330?e=1691020800&v=beta&t=Nmly6gzlLuhzO_iPJtMvVePK05kV-kG3FHmjTn9kSs0",
  },
];

const projects = [
  {
    name: "Run Your Pool (BETTERPOOL)",
    description: [
      "Add new features on demand such as re-developing sign-up and pick-sheet user flow, notifications, chats, etc.",
      "Work very closely with other teams such as Marketing, Design, Backend, Product, and QA teams.",
      "Participate in code review on the frontend codebase and ensure code consistency and efficiency.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: runyourpool,
    source_code_link: "https://www.runyourpool.com/",
  },
  {
    name: "Silverdream",
    description: [
      "Built web app using React and NextJs (for SEO benefits).",
      "Track bugs and view logs, thus maintaining different releases and deployment.",
      "Work  closely with other teams such as Client, Design, and Backend teams.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextJs",
        color: "green-text-gradient",
      },
      {
        name: "chakraUI",
        color: "pink-text-gradient",
      },
    ],
    image: silverdream,
    source_code_link: "https://silverdream.ng",
  },
  {
    name: "React Rapid Carousel",
    description: [
      "Consider trying this package because React apps deserve an easy-to-integrate yet lightweight Carousel.",
      "Maintained different releases and got over 79 weekly downloads.",
    ],
    tags: [
      {
        name: "react-library",
        color: "blue-text-gradient",
      },
      {
        name: "styled-component",
        color: "green-text-gradient",
      },
      {
        name: "jest",
        color: "pink-text-gradient",
      },
    ],
    image: npm,
    source_code_link:
      "https://www.npmjs.com/package/react-rapid-carousel?activeTab=readme",
  },
  {
    name: "React Rapid Table",
    description: [
      "Managed multiple releases successfully, averaging more than 70 downloads per week.",
      "Markdown tables were used to fully document the Component and hooks API, providing developers with thorough and easy-to-access reference material.",
    ],
    tags: [
      {
        name: "react-library",
        color: "blue-text-gradient",
      },
      {
        name: "jest",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: npm,
    source_code_link:
      "https://www.npmjs.com/package/react-rapid-table?activeTab=readme",
  },
  {
    name: "Nairgym",
    description: [
      "A professional education center dedicated to children where they can learn many things. They promote sport for children.",
      "An amazing project that I'm proud of being part of.",
      "Bootstrap frontend project using Create React App, and Redux for state management",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: nairgym,
    source_code_link: "https://www.nairgym.lu/",
  },
  {
    name: "ARG GROUP Official website",
    description: [
      "ARG is the reference company you are looking for in debt collection that has been in the region for over 10 years. They help you to recover your debts in a short time in all the West Africa.",
      "Bootstrap this amazing website using Create React App, Redux for state management, Framer motion for animation",
    ],
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "SEO",
        color: "pink-text-gradient",
      },
    ],
    image: arggroup,
    source_code_link: "http://www.recouvrementdugolfe.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
