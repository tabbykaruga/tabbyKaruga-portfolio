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
import softclansLogo from "../assets/img/icons/softclans_logo.jpg";

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

// export const projects = [
//   {
//     name: "WeatherPedia",
//     description:
//       "Web-based platform that allows users to access weather information for their location by entering it in the search field",
//     tags: [
//       { name: "Javascript", color: "blue-text-gradient" },
//       { name: "HTML", color: "green-text-gradient" },
//       { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
//       { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
//     ],
//     image: weatherpedia,
//     source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
//   },
//   {
//     name: "Terminal Like Portfolio Website",
//     description:
//       "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
//     tags: [
//       { name: "HTML", color: "blue-text-gradient" },
//       { name: "css", color: "green-text-gradient" },
//       { name: "Javascript", color: "pink-text-gradient" },
//     ],
//     image: termpw,
//     source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
//   },
//   {
//     name: "Mental Health Fitness Tracker",
//     description:
//       "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
//     tags: [
//       { name: "Machine Learning", color: "blue-text-gradient" },
//       { name: "Jupyter Notebook", color: "green-text-gradient" },
//       { name: "Regression Algorithms", color: "pink-text-gradient" },
//     ],
//     image: mhft,
//     source_code_link:
//       "https://github.com/lohitkolluri/mental_health_fitness_tracker",
//   },
//   {
//     name: "PayloadMaster",
//     description:
//       "Tool to automate payload creation using the Metasploit framework",
//     tags: [{ name: "shell", color: "blue-text-gradient" }],
//     image: payloadmaster,
//     source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
//   },
//   {
//     name: "CompileVortex",
//     description:
//       "Tool to automate payload creation using the Metasploit framework",
//     tags: [
//       { name: "Javascript", color: "blue-text-gradient" },
//       { name: "CSS", color: "green-text-gradient" },
//       { name: "HTML", color: "pink-text-gradient" },
//     ],
//     image: CompileVortex,
//     source_code_link: "https://github.com/lohitkolluri/CompileVortex",
//   },
//   {
//     name: "Sketcher",
//     description:
//       "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
//     tags: [
//       { name: "OpenCV", color: "blue-text-gradient" },
//       { name: "Matplotlib", color: "green-text-gradient" },
//       { name: "Python", color: "pink-text-gradient" },
//     ],

//     image: sketcher,
//     source_code_link:
//       "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
//   },
// ];
