export const personalInfo = {
  name: "Fawaz Adisa Bello",
  title: "Software Developer & Data Scientist",
  tagline: "Building innovative solutions through code and data",
  email: "bellofawaz5@gmail.com",
  location: "Your City, Country",
  bio: "Passionate software developer and data scientist with expertise in building scalable applications and extracting insights from complex datasets. I love solving challenging problems and creating solutions that make a real impact.",
  image: "/profilepic.jpg"
};
export const socialLinks = {
  github: "https://github.com/Fawizeee",
  linkedin: "https://linkedin.com/in/",
  twitter: "https://twitter.com/Fawiz33",
  email: "bellofawaz5@gmail.com"
};
export const skills = {
  development: [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 95 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "SQL", level: 85 },
    { name: "PHP(Laravel)", level: 75 }
  ],
  dataScience: [
    { name: "Machine Learning", level: 90 },
    { name: "Pandas", level: 95 },
    { name: "NumPy", level: 90 },
    { name: "Scikit-learn", level: 85 },
    { name: "TensorFlow", level: 80 },
    { name: "Data Visualization", level: 85 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    {name: "Kubernates", level: 70},    
    { name: "AWS", level: 70 },
    { name: "Jupyter", level: 95 },
    { name: "VS Code", level: 95 },
    { name: "Linux", level: 80 }
  ]
};

export const experience = [
  {
    company: "techend develop Ltd.",
    position: "senior Software Developer",
    duration: "2021 - 2023",
    location: "Lagos",
    description: "Led development of scalable web applications using React and Node.js. Implemented data pipelines processing millions of records daily.",
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS"]
  },
  {
    company: "Lead Data Solutions Ltd.",
    position: "Data Scientist",
    duration: "2023 - 2024",
    location: "Remote",
    description: "Developed machine learning models for predictive analytics. Created data visualization dashboards and automated reporting systems.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Tableau", "SQL"]
  },
  {
    company: "Freelancing",
    position: "Full Stack Developer",
    duration: "(january - july) 2024",
    location: "Remote",
    description: "Built end-to-end web applications from concept to deployment. Worked closely with product team to deliver user-focused solutions.",
    technologies: ["JavaScript", "React", "Express", "MongoDB", "Docker"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Referral Web Application",
    category: "Web Development",
    description: "Developed a referral management web app that allows users to create contests, enable referrers to join, and track referral performance such as number of invites, conversions, and user activities. Built with scalability and API integration in mind for seamless embedding into other platforms.",
    image: "/ref.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    liveUrl: "#",
    githubUrl: `#`,
    featured: true
    
    
  },
  {
    id: 2,
    title: "Machine Learning API",
    category: "Data Science",
    description: "Developed a RESTful API for machine learning model predictions. Handles image classification and natural language processing requests.",
    image: "/placeholder-project2.jpg",
    technologies: ["Python", "FastAPI", "TensorFlow", "Docker", "AWS"],
    liveUrl: "#",
    githubUrl: `#`,
    featured: true
  },
  {
    id: 3,
    title: "Student Tracking Application",
    category: "App Development",
    description: "Full-stack task management application with real-time collaboration features. Built with modern web technologies and responsive design.",
    image: "/childtrackapp.jpg",
    technologies: ["React-native", "django", "Socket.io", "Sqlite", "Tailwind CSS","expo go"],
    liveUrl: "https://example.com",
    githubUrl: `${socialLinks.github}/`,
    featured: false
  },
  {
    id: 4,
    title: "Hypertension Data Visualization Tool",
    category: "Data Science",
    description: "An interactive data visualization web app for analyzing hypertension-related datasets. It supports multiple chart types, filtering options, and data export for deeper insights.",
    image: "/hypertensionui.png",
    technologies: ["React", "D3.js", "Python", "Flask", "SQLite"],
    liveUrl: "https://hypertensionui-production.up.railway.app/",
    githubUrl: `${socialLinks.github}/hypertensionui`,
    featured: false
  }
];

export const testimonials = [
  {
    name: "Erusiafe",
    position: "data Scientist",
    company: "Private",
    content: "Outstanding work on our data analytics project. The insights provided helped us increase revenue by 25%.",
    image: "/hypertensionui.png",
    rating: 5
  },
  {
    name: "Sophia",
    position: "Software Engineer",
    company: "Private",
    content: "Exceptional developer with great attention to detail. Delivered high-quality code on time and within budget.",
    image: "/childtrackapp.jpg",
    rating: 5
  },
  {
    name: "Adisa Opeyemi",
    position: "App Developer",
    company: "Private",
    content: "Brilliant Developer who delivered a high-quality code on time and within budget.",
    image: "/fileprotection.jpg",
    rating: 5
  }
];


