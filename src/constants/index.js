import react from "../assets/img/skills/react.png";
import flutter from "../assets/img/skills/flutter.png";
import kotlin from "../assets/img/skills/kotlin.png";
import git from "../assets/img/skills/git.png";
import css from "../assets/img/skills/css.png";
import html from "../assets/img/skills/html.png";
import java from "../assets/img/skills/java.png";
import php from "../assets/img/skills/php.png";
import laravel from "../assets/img/skills/laravel.png";
import psql from "../assets/img/skills/psql.png";
import mysql from "../assets/img/skills/mysql.png";
import firebase from "../assets/img/skills/firebase.png";
import figma from "../assets/img/skills/Figma.png";
import androidStudio from "../assets/img/skills/androidStudio.png";
import vsCode from "../assets/img/skills/vsCode.png";
import smartApplicationLogo from "../assets/img/icons/smart_logo.jpg";
import gwfaLogo from "../assets/img/icons/gwfa_logo.png";
import softclansLogo from "../assets/img/icons/softclans_logo.jpg";
import gabsLogo from "../assets/img/icons/gabslogos.jpeg";
import ticTacToe from "../assets/img/projects/tic-tac-toe.png";
import investorApp from "../assets/img/projects/investor_calculator.png";
import portfolio from "../assets/img/projects/portfolio.png";

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

export const skills = [
  {
    name: "Flutter",
    img: flutter,
  },
  {
    name: "Kotlin",
    img: kotlin,
  },
  {
    name: "Java",
    img: java,
  },
  {
    name: "React",
    img: react,
  },
  {
    name: "Laravel",
    img: laravel,
  },
  {
    name: "HTML",
    img: html,
  },
  {
    name: "CSS",
    img: css,
  },
  {
    name: "PHP",
    img: php,
  },
  {
    name: "Git",
    img: git,
  },
  {
    name: "MySQL",
    img: mysql,
  },
  {
    name: "PSQL",
    img: psql,
  },
  {
    name: "Firebase",
    img: firebase,
  },
  {
    name: "Figma",
    img: figma,
  },
  {
    name: "Android Studio",
    img: androidStudio,
  },
  {
    name: "Visual Studio",
    img: vsCode,
  },
];

export const myExperiences = [
  {
    id: 1,
    title: "Software Engineer",
    company_name: "Smart Applications International Ltd",
    icon: smartApplicationLogo,
    location: "Nairobi, Kenya",
    date: "June 2024 - Present",
    description: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
  {
    id: 2,
    title: "FullStack Software Developer",
    company_name: "SoftClans Technologies Limited",
    location: "Nairobi, Kenya",
    icon: softclansLogo,
    date: "Nov 2021 - June 2024",
    description: [
      "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
      "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
    ],
  },
  {
    id: 3,
    title: "Web Developer",
    company_name: "WAYAAP",
    icon: smartApplicationLogo,
    location: "Nairobi, Kenya",
    date: "Sept 2021 - Nov 2021",
    description: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
      "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  },
];

export const mobileProjects = [
  {
    name: "Smart Access",
    description:
      "A cutting-edge mobile applications for the healthcare sector, focusing on delivering seamless user experiences and scalable solutions.",
    logo: smartApplicationLogo,
    stack: ["Flutter", "Dart", "Firebase", "Google Sign-In"],
    link: "https://www.linkedin.com/in/tabitha-karuga-099200199/details/experience/",
  },
  {
    name: "GABS",
    description:
      "Garbage collection App thats helps find the nearest private garbage collectors near them based on their location.",
    logo: gabsLogo,
    stack: ["Java", "Firebase", "Google Sign-In"],
    link: "https://www.linkedin.com/in/tabitha-karuga-099200199/details/experience/",
  },
  {
    name: "Global Women Fitness App",
    description: "A workout app forcused on women and diffrent excersises.",
    logo: gwfaLogo,
    stack: ["Flutter", "Dart", "Firebase", "Google Sign-In"],
    link: "https://www.linkedin.com/in/tabitha-karuga-099200199/details/experience/",
  },
];

// export const webAppProjects = [
//   {
//     title: "Tic Tac Toe Game",
//     description: "A website with the game of tic tac toe.",
//     imgUrl: ticTacToe,
//   },
//   {
//     title: "Investor Web App",
//     description: "A website thats helps you caculate the diffrent.",
//     imgUrl: investorApp,
//   },
//   {
//     title: "Portfolio",
//     description: "The current website your see all the projects",
//     imgUrl: portfolio,
//   },
// ];
