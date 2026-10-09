/**
 * =============================================================================
 *  PORTFOLIO CONTENT
 * =============================================================================
 *  Everything rendered on the website is defined in this single file.
 *  Edit the values below — no component changes needed.
 *
 *  >>> Anything marked "TODO:" still needs your real details. <<<
 * =============================================================================
 */

import profileImg from "../assets/images/profile.jpeg";
import certificateImg from "../assets/images/certificate.png";
import resumePdf from "../assets/images/Mubasher_resume.pdf";

/* -------------------------------------------------------------------------- */
/*  Assets                                                                     */
/* -------------------------------------------------------------------------- */

export const assets = {
  profile: profileImg,
  certificate: certificateImg,
};

/* -------------------------------------------------------------------------- */
/*  Profile                                                                    */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Mubasher Manzoor",
  firstName: "Mubasher",
  role: "Mobile Application Developer",
  tagline: "Mobile Application Developer & AI/ML Enthusiast",
  heroText:
    "A Computer Science graduate specialising in cross-platform mobile development. I build performant Android and iOS apps with Flutter and React Native, backed by a peer-reviewed research background in applied machine learning.",

  // TODO: replace with your real contact details
  email: "mubasher.manzoor596@gmail.com",
  phone: "+92 301 9444731",
  location: "Lahore, Pakistan",

  resumeUrl: resumePdf,
  resumeFileName: "Mubasher_Manzoor_Resume.pdf",

  about: [
    "Computer Science graduate and React Native Developer with 2+ years of experience in mobile application development. Skilled in building responsive, production-focused applications using React Native, TypeScript, JavaScript, Redux Toolkit, REST APIs, GraphQL, and real-time communication technologies. Experienced in healthcare, professional networking, marketplace, and fitness applications, with hands-on expertise in WebRTC, Socket.IO, Node.js, PostgreSQL, Firebase, and authentication systems. Published research work in ECG arrhythmia classification using self-supervised learning and explainable AI techniques. Strong focus on clean UI, performance optimization, scalable architecture, and delivering reliable cross-platform mobile experiences.",
  ],
};

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Research", href: "#publications" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

/** Section ids watched by the scroll spy (each must exist in the DOM). */
export const sectionIds = [
  "home",
  "about",
  "education",
  "publications",
  "experience",
  "skills",
  "projects",
  "contact",
];

/**
 * Shorter list rendered as buttons inside the desktop header pill.
 * The full list above is used by the mobile drawer and the footer.
 */
export const primaryNav = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Research", href: "#publications" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

/* -------------------------------------------------------------------------- */
/*  Skills                                                                     */
/* -------------------------------------------------------------------------- */

// `icon` values must exist in src/data/iconRegistry.js
export const skillGroups = [
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Building cross-platform and native apps for Android and iOS.",
    icon: "smartphone",
    skills: [
      { name: "Flutter", icon: "Flutter" },
      { name: "Dart", icon: "Dart" },
      { name: "React Native", icon: "ReactNative" },
      { name: "React.js", icon: "React" },
    ],
  },
  {
    id: "backend",
    title: "State Management",
    description: "APIs, databases and the services that power the app.",
    icon: "server",
    skills: [
      { name: "Firebase", icon: "Firebase" },
      { name: "REST APIs & Async Operations", icon: "RestApi" },
      { name: "Node.js", icon: "NodeJs" },
      { name: "MongoDB", icon: "MongoDB" },
      { name: "MySQL", icon: "MySQL" },
      { name: "Supabase", icon: "Supabase" },
      { name: "Redux Toolkit", icon: "ReduxToolkit" },
      { name: "WebRTC", icon: "WebRTC" },
    ],
  },
  {
    id: "aiml",
    title: "AI & Machine Learning",
    description: "On-device intelligence and data-driven research.",
    icon: "brain",
    skills: [
      { name: "Python", icon: "Python" },
      { name: "Scikit-learn", icon: "ScikitLearn" },
      { name: "TensorFlow", icon: "TensorFlow" },
      { name: "Keras", icon: "Keras" },
      { name: "NumPy", icon: "NumPy" },
      { name: "Pandas", icon: "Pandas" },
      { name: "OpenCV", icon: "OpenCV" },
      { name: "Jupyter", icon: "Jupyter" },
    ],
  },
  {
    id: "tooling",
    title: "Tools & Technologies",
    description: "Shipping, versioning and everything in between.",
    icon: "wrench",
    skills: [
      { name: "Git & GitHub", icon: "Git" },
      { name: "Android Studio", icon: "AndroidStudio" },
      { name: "Xcode", icon: "Xcode" },
      { name: "VS Code", icon: "VSCode" },
      { name: "Figma", icon: "Figma" },
      { name: "Postman", icon: "Postman" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Services — "What I do"                                                     */
/* -------------------------------------------------------------------------- */

export const services = [
  {
    title: "Mobile App Development",
    description:
      "End-to-end Android and iOS apps — from architecture and state management to release builds.",
    icon: "smartphone",
  },
  {
    title: "Cross-Platform Builds",
    description:
      "One codebase, two platforms. Flutter and React Native apps that stay fast and consistent.",
    icon: "layers",
  },
  {
    title: "API & Firebase Integration",
    description:
      "Auth, real-time data, push notifications, payments and clean offline-first sync.",
    icon: "plug",
  },
  {
    title: "UI / UX Implementation",
    description:
      "Turning Figma designs into pixel-accurate, accessible and animated interfaces.",
    icon: "palette",
  },
];

/* -------------------------------------------------------------------------- */
/*  Experience                                                                 */
/* -------------------------------------------------------------------------- */

// TODO: replace these with the roles from your resume.
export const experience = [
  {
    id: 1,
    role: "Mobile Application Developer",
    company: "Wateen Telecom",
    type: "Full-time",
    location: "Lahore, Pakistan",
    duration: "July 2026 — Present",
    points: [
      "Develop and maintain responsive cross-platform mobile application features using React Native.",
      "Build reusable UI components and responsive screens while following established application design patterns.",
      "Integrate REST APIs and handle asynchronous data operations for mobile application workflows.",
      "Implement and manage application state using modern React Native state management practices.",
      "Optimize mobile application performance, navigation, loading behavior, and overall user experience.",
      "Collaborate with development and design teams using Git & GitHub to deliver and maintain application"
    ],
  },
  {
    id: 2,
    role: "Junior Mobile Application Developer",
    company: "Cipher Developers",
    type: "Full Time",
    location: "Lahore, Pakistan",
    duration: "Jan 2026 — Apr 2026",
    points: [
      "Built \"Dentment\" a LinkedIn-clone mobile app with authentication, dynamic feed, and connection network.",
      "Implemented multi-type posts (Polls, Case Studies, Image/Video, Celebrations) with real-time engagement.",
      "Integrated NestJS GraphQL APIs using Apollo Client for data fetching, caching, and state management.",
      "Developed mentor booking system with session requests, accept/reject functionality, and push notifications.",
      "Styled responsive UI using NativeWind (Tailwind CSS) for pixel-perfect cross-device alignment.",
      "Optimized performance via memorization and lazy loading, reducing screen load times.",
      "Collaborated with content teams to edit and produce internal training videos and product demo clips, ensuring visual consistency and timely delivery.",
      "Used Figma to design storyboards and motion graphics concepts for video projects.",
      "Managed version control and collaboration using Git & GitHub.",
    ],
  },
  {
    id: 3,
    role: "Mobile Application Developer",
    company: "AppsHipe",
    type: "Internship + Full Time",
    location: "Lahore, Pakistan",
    duration: "Nov 2024 — Dec 2025",
    points: [
      "Implemented Firebase authentication, Firestore, and real-time features.",
      "Built modular UI screens with responsive layouts.",
      "Used Redux Toolkit for state management.",
      "Integrated real-time tracking and maps-based features.",
      "Optimized performance & improved loading time.",
      "Collaborated via Git & GitHub for version control.",
      "Integrated REST APIs and handled async operations.",
      "Produced and edited short promotional videos and UI walkthroughs using Adobe",
      "Premiere Pro and Canva for client presentations.",
      "Applied color correction, transitions, and sound mixing to enhance video quality and",
      "brand alignment.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */

// TODO: replace the placeholder projects with your real apps.
export const projects = [
  {
    id: 1,
    title: "ConnectApp ",
    subtitle: "Healthcare Communication Platform",
    description:
      "A role-based healthcare communication platform for Patients and Doctors. Features appointment booking, doctor consultation management, real-time chat, call history, Socket.IO messaging, WebRTC audio/video calls, JWT authentication and push notifications, backed by a Node.js/Express + PostgreSQL backend.",
    tech: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.IO",
      "WebRTC",
      "JWT",
    ],
    category: "Android & iOS",
    icon: "ReactNative",
  },
  {
    id: 2,
    title: "Dentment ",
    subtitle: "LinkedIn Clone App",
    description:
      "A LinkedIn-style mobile app with user profiles, feed, and connection network. Engineered 5 post types (Text, Image/Video, Poll, Case Study, Celebration) with real-time voting, a mentor booking module with listings, calendar, requests and accept/reject workflow, plus GraphQL APIs with optimistic UI updates and secure authentication.",
    tech: [
      "React Native",
      "TypeScript",
      "Apollo Client",
      "GraphQL",
      "NestJS",
      "NativeWind",
    ],
    category: "Android & iOS",
    icon: "ReactNative",
  },
  {
    id: 3,
    title: "LCI-LMS Portal",
    subtitle: "UI/UX Design + Mobile App",
    description:
      "Designed the complete end-to-end UI/UX of the client's LMS portal mobile app, covering every screen with no section left incomplete. Delivered a modern, fully responsive layout, an interactive login screen with hidden password toggle, and a polished design system including typography, spacing, components and color themes.",
    tech: ["UI/UX", "Figma", "Design System", "Responsive Design"],
    category: "Android & iOS",
    icon: "Expo",
  },
  {
    id: 4,
    title: "MarketPlacer App",
    subtitle: "Clone App like OLX, PakWheels",
    description:
      "A marketplace app for buying and selling with Firebase Email/Password authentication, ad posting and saving through Firebase, push notifications via token ID, real-time chat using Firebase, and mobile contact handling through Redux.",
    tech: ["Firebase", "Redux", "Push Notifications"],
    category: "Android",
    icon: "ReactNative",
  },
  {
    id: 5,
    title: "Diabetic Foot Ulcer Prediction & Recommendation Tool",
    subtitle: "AI Based Final Year Project",
    description:
      "A Python-based AI model that analyses and classifies diabetic foot ulcer images using deep learning. Pre-processed the dataset with normalization, resizing and data augmentation, applied SMOTE for class balancing, and used EfficientNetB0 for classification and feature extraction to achieve high accuracy. Deployed the model in a Flutter-based mobile application to assist healthcare providerswith real-time detection",
    tech: [
      "Python",
      "Deep Learning",
      "EfficientNetB0",
      "SMOTE",
      "Flask",
      "Flutter",
    ],
    category: "Android",
    icon: "Python",
  },
];

/* -------------------------------------------------------------------------- */
/*  Publications                                                               */
/* -------------------------------------------------------------------------- */

export const publications = [
  {
    id: 1,
    title:
      "RhythmX™: An Interpretable Self-Supervised Contrastive Learning Framework for Heartbeat Classification",
    journal: "Technologies",
    publisher: "MDPI",
    volume: "Volume 14, Issue 3, Article 148",
    year: "2026",
    impactFactor: "5.2",
    citeScore: "6.7",
    doi: "10.3390/technologies14030148",
    openAccess: true,
    authors: [
      "Abdullah",
      "Zulaikha Fatima",
      "Haris Ali Safder",
      "Mubasher Manzoor",
      "Carlos Guzmán Sánchez-Mejorada",
      "Miguel Jesús Torres Ruiz",
      "Rolando Quintero Téllez",
    ],
    highlightAuthor: "Mubasher Manzoor",
    abstract:
      "RhythmX™ introduces an interpretable self-supervised contrastive learning framework for heartbeat classification. By learning robust representations from unlabelled ECG signals, the framework reduces dependence on costly annotation while remaining explainable — a key requirement for clinical adoption. It combines self-supervised pretraining with ensemble-based supervised classification and reports strong macro-F1 scores across external validation datasets.",
    certificate: certificateImg,
    citation:
      'Abdullah, Zulaikha Fatima, Haris Ali Safder, Mubasher Manzoor, Carlos Guzmán Sánchez-Mejorada, Miguel Jesús Torres Ruiz, and Rolando Quintero Téllez. "RhythmX™: An Interpretable Self-Supervised Contrastive Learning Framework for Heartbeat Classification." Technologies 14, no. 3 (2026): 148.',
    // TODO: add the article URL if you want a "Read article" button
    url: "",
    tags: [
      "Self-Supervised Learning",
      "Contrastive Learning",
      "ECG Classification",
      "Explainable AI",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Education                                                                  */
/* -------------------------------------------------------------------------- */

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Bahria University Lahore",
    location: "Lahore, Pakistan",
    duration: "Spring 2021 — Fall 2024",
  },
  {
    id: 2,
    degree: "Intermediate in Computer Science",
    institution: "Punjab Group of Colleges",
    location: "Lahore, Pakistan",
    duration: "2018 — 2020",
  },
];
