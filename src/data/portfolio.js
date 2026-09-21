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
import trophyImg from "../assets/images/trophy.png";

/* -------------------------------------------------------------------------- */
/*  Assets                                                                     */
/* -------------------------------------------------------------------------- */

export const assets = {
  profile: profileImg,
  certificate: certificateImg,
  trophy: trophyImg,
};

/* -------------------------------------------------------------------------- */
/*  Profile                                                                    */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Mubasher Manzoor",
  firstName: "Mubasher",
  initials: "MM",
  role: "Mobile Application Developer",
  tagline: "Mobile Application Developer & AI/ML Enthusiast",
  headline: "I design and build mobile apps people actually enjoy using.",
  heroText:
    "A Computer Science graduate specialising in cross-platform mobile development. I build performant Android and iOS apps with Flutter and React Native, backed by a peer-reviewed research background in applied machine learning.",
  availability: "Available for work",

  // TODO: replace with your real contact details
  email: "mubasher.manzoor@gmail.com",
  phone: "+92 300 0000000",
  location: "Lahore, Pakistan",

  // Put your PDF at: public/resume.pdf
  resumeUrl: "/resume.pdf",

  about: [
    "I'm a Mobile Application Developer who cares about the whole journey — from the first wireframe to a release on the Play Store and App Store. I like building apps that feel fast, look clean and stay reliable on low-end devices.",
    "My core stack is Flutter and Dart for cross-platform work, with React Native and native Android and iOS experience alongside it. On the backend I'm comfortable with Firebase, Node.js and both SQL and NoSQL databases.",
    "I also have hands-on research experience in applied machine learning, having co-authored a peer-reviewed paper on interpretable ECG heartbeat classification — which shapes how I think about on-device intelligence and data-driven features.",
  ],
};

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#publications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
];

/** Section ids watched by the scroll spy (each must exist in the DOM). */
export const sectionIds = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "publications",
  "achievements",
  "education",
  "contact",
];

/**
 * Shorter list rendered as buttons inside the desktop header pill.
 * The full list above is used by the mobile drawer and the footer.
 */
export const primaryNav = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#publications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
];

/* -------------------------------------------------------------------------- */
/*  Social links                                                               */
/* -------------------------------------------------------------------------- */

// TODO: replace the "#" placeholders with your real profile URLs
export const socials = [
  { name: "GitHub", icon: "github", url: "https://github.com/" },
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/" },
  { name: "Email", icon: "mail", url: "mailto:mubasher.manzoor@gmail.com" },
];

/* -------------------------------------------------------------------------- */
/*  Hero statistics                                                            */
/* -------------------------------------------------------------------------- */

export const stats = [
  { value: "5.2", suffix: "", label: "Journal Impact Factor" },
  { value: "1", suffix: "", label: "Peer-Reviewed Paper" },
  { value: "2", suffix: "", label: "Platforms — Android & iOS" },
  { value: "2024", suffix: "", label: "CS Graduate" },
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
      { name: "Flutter", icon: "Flutter", level: 92 },
      { name: "Dart", icon: "Dart", level: 90 },
      { name: "React Native", icon: "ReactNative", level: 85 },
      { name: "Kotlin", icon: "Kotlin", level: 78 },
      { name: "Swift", icon: "Swift", level: 72 },
      { name: "Jetpack Compose", icon: "JetpackCompose", level: 75 },
      { name: "React.js", icon: "React", level: 85 },
      { name: "Android Studio", icon: "AndroidStudio", level: 88 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Data",
    description: "APIs, databases and the services that power the app.",
    icon: "server",
    skills: [
      { name: "Firebase", icon: "Firebase", level: 88 },
      { name: "REST APIs", icon: "RestApi", level: 88 },
      { name: "Node.js", icon: "NodeJs", level: 78 },
      { name: "Express.js", icon: "Express", level: 76 },
      { name: "MongoDB", icon: "MongoDB", level: 78 },
      { name: "MySQL", icon: "MySQL", level: 75 },
      { name: "SQLite / Room", icon: "SQLite", level: 82 },
      { name: "Supabase", icon: "Supabase", level: 72 },
    ],
  },
  {
    id: "aiml",
    title: "AI & Machine Learning",
    description: "On-device intelligence and data-driven research.",
    icon: "brain",
    skills: [
      { name: "Python", icon: "Python", level: 85 },
      { name: "Scikit-learn", icon: "ScikitLearn", level: 82 },
      { name: "TensorFlow", icon: "TensorFlow", level: 75 },
      { name: "Keras", icon: "Keras", level: 75 },
      { name: "NumPy", icon: "NumPy", level: 85 },
      { name: "Pandas", icon: "Pandas", level: 85 },
      { name: "OpenCV", icon: "OpenCV", level: 72 },
      { name: "Jupyter", icon: "Jupyter", level: 88 },
    ],
  },
  {
    id: "tooling",
    title: "Tools & Workflow",
    description: "Shipping, versioning and everything in between.",
    icon: "wrench",
    skills: [
      { name: "Git & GitHub", icon: "Git", level: 90 },
      { name: "Android Studio", icon: "AndroidStudio", level: 88 },
      { name: "Xcode", icon: "Xcode", level: 70 },
      { name: "VS Code", icon: "VSCode", level: 92 },
      { name: "Figma", icon: "Figma", level: 80 },
      { name: "Postman", icon: "Postman", level: 88 },
      { name: "Play Console", icon: "PlayStore", level: 78 },
      { name: "App Store Connect", icon: "AppStore", level: 70 },
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
    company: "Company Name",
    type: "Full-time",
    location: "Lahore, Pakistan",
    duration: "2024 — Present",
    points: [
      "Developed and shipped cross-platform mobile applications with Flutter and Dart.",
      "Integrated REST APIs and Firebase services including authentication and push notifications.",
      "Reduced app cold-start time and improved frame stability on low-end Android devices.",
    ],
  },
  {
    id: 2,
    role: "Mobile Development Intern",
    company: "Company Name",
    type: "Internship",
    location: "Lahore, Pakistan",
    duration: "2023 — 2024",
    points: [
      "Built reusable UI components and worked on existing Flutter and React Native codebases.",
      "Participated in code reviews, sprint planning and QA cycles before releases.",
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
    title: "RhythmX — Heartbeat Classification",
    subtitle: "Research-backed health platform",
    description:
      "An interpretable self-supervised contrastive learning framework for ECG heartbeat classification, published in MDPI Technologies. Contributed to model evaluation and the data pipeline behind it.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Signal Processing"],
    category: "AI & Health",
    icon: "ScikitLearn",
    live: "",
    source: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Cross-Platform Delivery App",
    subtitle: "Flutter + Firebase",
    description:
      "A food delivery app with live order tracking, push notifications, in-app payments and an offline-first cart that syncs once connectivity returns.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps"],
    category: "Mobile App",
    icon: "Flutter",
    live: "#",
    source: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Fitness Tracker",
    subtitle: "Native Android",
    description:
      "A Kotlin app that records workouts, visualises progress with Compose charts and stores health data locally through Room.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "Material 3"],
    category: "Android",
    icon: "Android",
    live: "#",
    source: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Expense Manager",
    subtitle: "React Native",
    description:
      "A budgeting app with biometric login, category insights, recurring reminders and cloud backup across devices.",
    tech: ["React Native", "TypeScript", "Redux", "Node.js"],
    category: "Cross-Platform",
    icon: "ReactNative",
    live: "#",
    source: "#",
    featured: false,
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
/*  Achievements                                                               */
/* -------------------------------------------------------------------------- */

export const achievements = [
  {
    id: 1,
    title: "MDPI Publication — Technologies Journal",
    year: "2026",
    description:
      "Co-authored a peer-reviewed article in an open-access journal with an Impact Factor of 5.2 and a CiteScore of 6.7. DOI: 10.3390/technologies14030148.",
    icon: "award",
    image: certificateImg,
    imageAlt: "MDPI certificate of publication for the RhythmX article",
    imageFit: "contain",
    tag: "Research",
    accent: "primary",
  },
  {
    id: 2,
    title: "E-Learning Quiz Winner — Punjab Group of Colleges",
    year: "2019 – 2020",
    description:
      "Awarded a trophy for outstanding performance in the inter-college E-Learning Quiz held at Punjab Colleges, Lahore.",
    icon: "trophy",
    image: trophyImg,
    imageAlt: "E-Learning Quiz trophy from Punjab Colleges Lahore",
    imageFit: "cover",
    tag: "Competition",
    accent: "amber",
  },
];

/* -------------------------------------------------------------------------- */
/*  Education                                                                  */
/* -------------------------------------------------------------------------- */

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Bahria University",
    location: "Lahore, Pakistan",
    duration: "Spring 2021 — Fall 2024",
    description:
      "Studied software engineering, data structures and algorithms, mobile application development and machine learning. Final year work contributed to a peer-reviewed journal publication.",
    highlights: [
      "Mobile Application Development",
      "Data Structures & Algorithms",
      "Machine Learning",
    ],
  },
  {
    id: 2,
    degree: "Intermediate — Computer Science",
    institution: "Punjab Group of Colleges",
    location: "Lahore, Pakistan",
    duration: "2019 — 2021",
    description:
      "Completed intermediate studies with a strong foundation in mathematics and computing, and won the college E-Learning Quiz.",
    highlights: ["E-Learning Quiz Winner", "Mathematics", "Computer Studies"],
  },
];
