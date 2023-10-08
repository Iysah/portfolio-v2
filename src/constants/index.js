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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    tanta,
    tequi,
    techy,
    satsswap,
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
      id: "connect",
      title: "Connect",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "UX Engineer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Code Mentor",
      company_name: "Teqia",
      icon: tequi,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Present",
      points: [
        "provided guidance, support, and mentorship to students or learners. assist learners in understanding & mastering coding concepts, programming languages, and best practices.",
        "engaged in one-on-one or small group sessions with students. Answer questions, review code, and help learners overcome specific challenges they encounter during their learning journey.",
        "offered career advice and insights into the tech industry. assisted students with resume building, interview preparation, and job search strategies.",
      ],
    },
    {
      title: "Lead Frontend Developer",
      company_name: "Tanta Innovative Ltd",
      icon: tanta,
      iconBg: "#383E56",
      date: "Feb 2023 - August 2023",
      points: [
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Successfully led the development and launch of 5  innovative e-commerce platform, resulting in a 40% increase in user engagement, 60% in sales and 24/7  customer support.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
       
      ],
    },
    {
      title: "Web Developer",
      company_name: "Street Bazaar",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - May 2023",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participated in code reviews and providing constructive feedback to other developers.",
        "Conducted code reviews and provided feedback to team members to ensure best practices were followed.",
        
      ],
    },
    {
      title: "Training Manager",
      company_name: "Symbolic Digital Concept",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Created effective instructional materials, including lesson plans, learning resources, and assessments. I employed instructional design principles to enhance the learning experience.",
        "Monitored and evaluated the quality of teaching and learning within the organization. This includes assessing instructors, course materials, and overall program effectiveness",
        "Oversaw a team of instructors, mentors, and support staff. Also coordinated training schedules, assignments, and professional development for their team.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Iysah proved me wrong.",
      name: "Abd Hafeez Alabi",
      designation: "CEO",
      company: "Provarex",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Iysah does.",
      name: "Abd Baasit Salaudeen",
      designation: "Founder",
      company: "TechyScholar Ng",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Iysah optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Abdullahi Alabi",
      designation: "CEO & Founder",
      company: "Theraswift-rx",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      testimonial:
        "Iysah is an excellent Front Developer coupled with his UI/UX experience, He always seeks to bring more value to every project.",
      name: "Aniebiet Aaron",
      designation: "Software Developer",
      company: "OWATTS",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SatsSwap",
      description:
        "Satswap is a revolutionary hybrid cryptocurrency exchange, specifically designed to optimize trading of Bitcoin Ordinals (BRC20 tokens) and other crytocurrencies. The next-gen hybrid exchange for BRC20 Bitcoin Ordinals",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "chakraui",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
      image: satsswap,
      source_code_link: "https://github.com/Iysah",
      live_url_link: "https://www.satsswap.io/",
    },
    {
      name: "TechyScholar App",
      description:
        "Mobile-app platform that allows users to create account and also search, view, and monitor their courses. And it also allows users to watch this courses on the platform. This platform also filters courses based on skills and complexity",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "expo",
          color: "green-text-gradient",
        },
        {
          name: "strapi",
          color: "pink-text-gradient",
        },
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
      ],
      image: techy,
      source_code_link: "https://github.com/Iysah/techyscholar-edu-app",
      live_url_link: "",
    },
    {
      name: "Genie",
      description:
        "Web-based state-of-the-art AI SaaS Platform with five AI tools. This AI tools are image generation, video generation, music generation, code generation and conversation. Powered by the Next.js, this platform is not only be efficient but also user-centric.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "pink-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "clerk",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Iysah/genie-ai",
      live_url_link: "",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };