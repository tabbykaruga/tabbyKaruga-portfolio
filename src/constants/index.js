import react from "../assets/img/skills/react.png";
import flutter from "../assets/img/skills/flutter.png";
import kotlin from "../assets/img/skills/kotlin.png";
import git from "../assets/img/skills/git.png";
import css from "../assets/img/skills/css.png";
import html from "../assets/img/skills/html.png";
import java from "../assets/img/skills/java.png";
import php from "../assets/img/skills/php.png";
import python from "../assets/img/skills/python.png";
import django from "../assets/img/skills/django.png";
import laravel from "../assets/img/skills/laravel.png";
import psql from "../assets/img/skills/psql.png";
import mysql from "../assets/img/skills/mysql.png";
import firebase from "../assets/img/skills/firebase.png";
import figma from "../assets/img/skills/Figma.png";
import androidStudio from "../assets/img/skills/androidStudio.png";
import vsCode from "../assets/img/skills/vsCode.png";
import smartApplicationLogo from "../assets/img/icons/smart_logo.jpg";
import instaCloneLogo from "../assets/img/icons/instaClone_logo.png";
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
    name: "React JS",
    img: react,
  },
  {
    name: "Laravel",
    img: laravel,
  },
  {
    name: "PHP",
    img: php,
  },
  {
    name: "Python",
    img: python,
  },
  {
    name: "Django",
    img: django,
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
      `Specializing in building scalable, cross-platform healthcare mobile applications using Flutter. Experienced in
       BLoC state management, translating Figma designs into functional apps, connecting with backend services, and 
       publishing to the Google Play Store. Skilled in creating intuitive, user-friendly experiences and collaborating 
       via GitLab.`,
    ],
    technologies: [
      "Flutter",
      "BLoC",
      "Firebase",
      "React Js",
      "Django",
      "Figma",
      "HTML",
      "CSS",
      "Git",
      "MVVM",
    ],
  },
  {
    id: 2,
    title: "FullStack Software Developer",
    company_name: "SoftClans Technologies Limited",
    location: "Nairobi, Kenya",
    icon: softclansLogo,
    date: "May 2022 - June 2024",
    description: [
      `Specializing in mobile and web development, building scalable cross-platform apps and dynamic web portals. 
      Experienced in Agile workflows, Git version control, RESTful API integration, and applying MVC architectures 
      for maintainable, high-performing solutions.`,
    ],
    technologies: [
      "Flutter",
      "Extended JS",
      "Laravel",
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "PSQL",
      "Git",
      "MVC",
    ],
  },
  {
    id: 3,
    title: "FullStack Software Developer -Intern",
    company_name: "SoftClans Technologies Limited",
    location: "Nairobi, Kenya",
    icon: softclansLogo,
    date: "Nov 2021 - Apr 2022",
    description: [
      `Underwent intensive training across various programming languages,frameworks, and technologiew with practical application 
      and architectures like MVC Architecture`,
    ],
    technologies: [
      "Flutter",
      "Extended JS",
      "Laravel",
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "PSQL",
      "Git",
      "MVC",
    ],
  },
];

export const mobileProjects = [
  {
    name: "Smart Access App",
    description: `A digital healthcare access platform that enables instant onboarding, transparent medical cover visibility,
     and secure cardless access to services for members, insurers, and providers.`,
    logo: smartApplicationLogo,
    stack: [
      "Flutter",
      "BLoC Architecture",
      "Firebase",
      "UI/UX",
      "API Intergration",
      "Google Sign-In",
    ],
    link: "https://play.google.com/store/apps/details?id=com.smart.smartaccess&pli=1",
  },
  {
    name: "InstaClone App",
    description: `A functional Instagram clone built with Kotlin, featuring core social media capabilities 
    including image posting, likes, a discovery feed, image search, and profile customization.`,
    logo: instaCloneLogo,
    stack: [
      "Kotlin",
      "JetPack Composer",
      "MVVM Architecture",
      "Firebase Authentication",
      "Firebase Storage",
      "UI/UX",
      "Git",
    ],
    link: "https://github.com/tabbykaruga/InstaClone",
  },
  {
    name: "GABS App",
    description: `GABS App(Garbage Services App) is a location-based app that connects users to nearby private waste 
    collectors using Google Maps integration for fast and reliable waste management services.`,
    logo: gabsLogo,
    stack: ["Java", "Firebase", "Git", "Google Maps", "Google Sign-In"],
    link: "https://github.com/tabbykaruga/GABS-App",
  },
  {
    name: "Global Women Fitness App",
    description: `A simple fitness application focused on women’s workouts and exercise routines, developed primarily 
    as a learning project to implement and understand MVVM architecture.`,
    logo: gwfaLogo,
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "MVVM Architecture",
      "Google Sign-In",
    ],
    link: "https://github.com/tabbykaruga/Global-Women-Fitness-App",
  },
];

export const webAppProjects = [
  {
    name: "Tic Tac Toe Game",
    description: `A two-player Tic-Tac-Toe game built with React, featuring dynamic state management, real-time win/draw detection, and a fully responsive, component-driven UI.`,
    imgUrl: ticTacToe,
    stack: ["React JS", "HTML", "CSS", "Git"],
    link: "https://github.com/tabbykaruga/tic-tac-toe-game-react-js",
    vercel: "https://tabitha-karuga-tic-tac-toe-game.vercel.app/"
  },
  {
    name: "Investor Web App",
    description:
      "An invetsment calculator website that allows users to calculate potential investment returns based on initial investment, interest rate, and time period.",
    imgUrl: investorApp,
    stack: ["React JS", "HTML", "CSS", "React Bootstrap", "Git"],
    link: "https://github.com/tabbykaruga/investment-calculator",
    vercel: "https://tabitha-karuga-investment-calculator.vercel.app/"
  },
  {
    name: "Portfolio",
    description: `A personal portfolio platform designed to present my projects, skills, experience,
     and professional identity, while also serving as a live demonstration of my technical abilities.`,
    imgUrl: portfolio,
    stack: ["React", "HTML", "CSS", "React Bootstrap", "Git"],
    link: "https://github.com/tabbykaruga/tabbyKaruga-portfolio",
    vercel: ""
  },
];
