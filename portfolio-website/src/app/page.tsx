'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaBrain, FaServer, FaRocket, FaCode } from 'react-icons/fa';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  // Navigation links
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'projects', label: 'Projects' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'contact', label: 'Contact' }
  ];


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Get all sections and their positions
      const sections = navLinks.map(link => {
        const element = document.getElementById(link.id);
        if (!element) return { id: link.id, top: 0, bottom: 0 };
        
        const rect = element.getBoundingClientRect();
        return {
          id: link.id,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
          height: rect.height
        };
      });
      
      // Determine which section is currently in view
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY + viewportHeight / 3; // Adjust viewport position for better UX
      
      // Find the current active section
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const nextSection = sections[i + 1];
        
        // Check if we're at the top of the page
        if (window.scrollY < 100 && section.id === 'home') {
          setActiveSection('home');
          break;
        }
        
        // Check if we're in this section
        const sectionTop = section.top;
        const sectionBottom = nextSection ? nextSection.top : document.body.scrollHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial active section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  // Experience data
  const portfolio = [
    {
      title: 'Founder & CEO',
      company: 'GradeWise',
      period: 'August 2024 – Present',
      stats: [
        { value: '1,000+', label: 'Active Users' },
        { value: '50K+', label: 'Gradings' },
        { value: '98%', label: 'ML Accuracy' },
        { value: '45%', label: 'Retention Rate' }
      ],
      description: [
        'Architected and scaled GradeWise, an AI-powered educational platform, to 1000+ active users, leveraging Next.js, TypeScript, and FastAPI to deliver personalized exam preparation.',
        'Engineered a production ML system combining custom PyTorch models with GPT-4, processing 50K+ student responses with 98% accuracy.',
        'Designed a real-time analytics engine handling 10K+ daily events using Firebase, featuring custom ML pipelines that improved student performance by 45%.'
      ],
      tech: 'Python, Next.js, React, FastAPI, GPT-4, NLP, Firebase, Vercel'
    },
    {
      title: 'Co-founder & CTO',
      company: 'CreditPro',
      period: 'May 2024 – October 2024',
      stats: [
        { value: '$1600+', label: 'Revenue' },
        { value: '153', label: 'Risk Assessments' },
        { value: '94%', label: 'Prediction Accuracy' },
        { value: '97.5%', label: 'Cost Reduction' }
      ],
      description: [
        "Built CreditPro, a SaaS platform that democratizes credit ratings for small businesses unable to afford expensive ratings from agencies like Moody's and S&P, serving 20+ SMBs with accurate credit assessments.",
        'Engineered and trained ML models on historical financial data and existing credit ratings to predict creditworthiness for small businesses at 2% of the cost',
        'Developed AI-powered advisory tools that analyze financial statements and provide actionable recommendations to help businesses improve their credit worthiness.'
      ],
      tech: 'Python, React, Flask, PostgreSQL, AWS, Docker, Redis, ML/AI'
    },
    {
      title: 'Lab Research Data Scientist',
      company: 'PAK Lab',
      period: 'October 2024 – Present',
      stats: [
        { value: '200K+', label: 'Cells Processed' },
        { value: '75%', label: 'Faster Processing' },
        { value: '60%', label: 'Improved Precision' },
        { value: '99%', label: 'Classification Accuracy' }
      ],
      description: [
        'Spearheaded development of production-grade bioinformatics pipeline leveraging distributed computing on AWS EC2, implementing parallel processing optimizations.',
        'Engineered state-of-the-art data integration system using RPCA and ensemble machine learning algorithms, achieving 75% faster processing times.'
      ],
      tech: 'Python, R, Seurat, AWS, NumPy, Pandas, scikit-learn, Docker'
    },
    {
      title: 'Software Developer',
      company: 'BUILD UMASS | Aarti Home',
      period: 'August 2024 – Present',
      stats: [
        { value: '100%', label: 'Offline Capability' },
        { value: 'AI', label: 'Powered Chatbot' },
        { value: 'RAG', label: 'Knowledge Model' },
        { value: 'Mobile', label: 'First Approach' }
      ],
      description: [
        'Spearheaded the end-to-end development of a cutting-edge mobile app to empower women and girls in India.',
        'Collaborated with technical stakeholders to drive agile development, optimize scalability, and enforce rigorous QA and debugging protocols.'
      ],
      tech: 'React Native Expo, Node.js, Express, MongoDB, AWS'
    }
  ];

  // Projects data
  const projects = [
    {
      title: 'GradeWise',
      description: 'AI-powered educational platform for personalized exam preparation',
      highlights: [
        '1000+ Monthly Active Users',
        'Custom PyTorch ML models',
        'GPT-4 integration for grading'
      ],
      tech: ['Next.js', 'TypeScript', 'FastAPI', 'GPT-4', 'Firebase'],
      link: 'https://gradewise.ai',
      image: '/gradewise.png'
    },
    {
      title: 'CreditPro',
      description: 'SaaS platform for automated credit risk assessment and portfolio management',
      highlights: [
        'ML-powered risk scoring algorithm',
        'Real-time credit monitoring dashboard',
        'API integration with financial institutions',
        'Custom reporting and analytics suite'
      ],
      tech: ['Python', 'React', 'Flask', 'PostgreSQL', 'AWS'],
      period: 'January 2023 – May 2023',
      image: '/creditpro.png'
    }
  ];

  // Skills organization
  const expertise = [
    {
      title: 'AI & Machine Learning',
      description: 'Building production-grade ML systems using PyTorch, TensorFlow, and integrating with large language models like GPT-4',
      icon: <FaBrain className="h-6 w-6 text-purple-500" />,
      skills: ['OpenAI GPT', 'PyTorch', 'TensorFlow', 'Natural Language Processing', 'Computer Vision', 'scikit-learn']
    },
    {
      title: 'Full-Stack Development',
      description: 'Creating modern web and mobile applications with React, Next.js, and Node.js ecosystems',
      icon: <FaCode className="h-6 w-6 text-blue-500" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'FastAPI', 'Django', 'React Native']
    },
    {
      title: 'Data Engineering',
      description: 'Building data pipelines, analytics systems, and visualization platforms for enterprise-grade applications',
      icon: <FaServer className="h-6 w-6 text-green-500" />,
      skills: ['SQL', 'MongoDB', 'Firebase', 'Pandas', 'NumPy', 'Apache Hadoop', 'Data Visualization']
    },
    {
      title: 'DevOps & Cloud',
      description: 'Deploying and scaling applications on cloud platforms with modern CI/CD practices',
      icon: <FaRocket className="h-6 w-6 text-red-500" />,
      skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Heroku']
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Ahmed Abdul Rahman | Founder & Developer</title>
        <meta name="description" content="Ahmed Abdul Rahman - Founder, AI Developer, and Computer Science Student" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex md:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setActiveSection(link.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === link.id
                      ? scrollY > 50 
                        ? 'text-indigo-600 bg-indigo-50' 
                        : 'text-white bg-indigo-500 bg-opacity-20'
                      : scrollY > 50 
                        ? 'text-gray-700 hover:text-indigo-600' 
                        : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center">
              <a
                href="#contact"
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  scrollY > 50
                    ? 'text-white bg-indigo-600 hover:bg-indigo-700'
                    : 'text-indigo-600 bg-white hover:bg-gray-100'
                }`}
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section 
          id="home" 
          className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden"
        >
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
            >
              Ahmed Abdul Rahman
            </motion.h1>
            
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              Founder & Software Engineer
            </motion.p>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
              >
                See My Portfolio
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10"
              >
                Connect With Me
              </a>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-10 flex justify-center space-x-6"
            >
              <a href="https://github.com/ahmedar04" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaGithub className="h-8 w-8" />
              </a>
              <a href="https://linkedin.com/in/ahmed-ar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaLinkedin className="h-8 w-8" />
              </a>
              <a href="mailto:ahmedarwork@gmail.com" className="text-white hover:text-gray-300">
                <FaEnvelope className="h-8 w-8" />
              </a>
            </motion.div>
          </div>
        </section>
        

        

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
                transition={{ duration: 0.7 }}
                className="lg:max-w-lg"
              >
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Building the Future with Technology
                </p>
                <div className="mt-6 prose prose-indigo prose-lg text-gray-500">
                  <p>
                    I&apos;m a CS student at UMass Amherst and founder of GradeWise, an AI-powered educational platform serving 1000+ active users. I specialize in building AI solutions that deliver tangible results across education, healthcare, and finance.
                  </p>
                  <p>
                    My technical expertise in ML/AI systems combined with business acumen allows me to transform complex technologies into user-centered applications that solve real problems. I&apos;m passionate about leveraging technology to create meaningful impact.
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="#portfolio"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    My Portfolio <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                transition={{ duration: 0.7 }}
                className="mt-12 lg:mt-0"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8">
                    <h3 className="text-lg font-medium text-gray-900">Education</h3>
                    <div className="mt-4 border-t border-gray-200 pt-4">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">University of Massachusetts Amherst</h4>
                          <p className="text-gray-700">B.S in Computer Science</p>
                          <p className="text-gray-600 mt-1">GPA: 3.7 | Graduation: May 2025</p>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                            <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-sm font-medium text-gray-500">Achievements</h4>
                        <ul className="mt-2 space-y-2">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="ml-3 text-sm text-gray-700">Chancellor&apos;s Scholarship Award</p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="ml-3 text-sm text-gray-700">Dean&apos;s List honoree (Fall 2022 – Fall 2024)</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Portfolio</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                My Journey
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Building innovative solutions and leading technological initiatives
              </p>
            </div>

            <div className="mt-16 space-y-16">
              {portfolio.map((portfolio, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={scaleUp}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-1">
                      <h3 className="text-2xl font-bold text-gray-900">{portfolio.company}</h3>
                      <p className="mt-1 text-lg font-medium text-indigo-600">{portfolio.title}</p>
                      <p className="mt-1 text-sm text-gray-500">{portfolio.period}</p>
                      
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        {portfolio.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                              <dt className="text-sm font-medium text-gray-500 truncate">{stat.label}</dt>
                              <dd className="mt-1 text-3xl font-semibold text-indigo-600">{stat.value}</dd>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 lg:mt-0 lg:col-span-2">
                      <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                          <div className="space-y-4">
                            {portfolio.description.map((desc, i) => (
                              <p key={i} className="text-gray-600">
                                {desc}
                              </p>
                            ))}
                          </div>
                          
                          <div className="mt-6">
                            <h4 className="text-sm font-medium text-gray-500">Technologies</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {portfolio.tech.split(', ').map((tech, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Projects</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Featured Work
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                A showcase of my technical expertise and problem-solving capabilities
              </p>
            </div>

            <div className="mt-16 space-y-16">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  transition={{ duration: 0.7 }}
                  className="lg:grid lg:grid-cols-12 lg:gap-8 items-center"
                >
                  <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full object-cover aspect-video"
                      />
                    </div>
                  </div>
                  
                  <div className={`mt-6 lg:mt-0 lg:col-span-5 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <p className="text-lg text-gray-600">{project.description}</p>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Key Highlights</h4>
                        <ul className="mt-3 space-y-3">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start">
                              <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <p className="ml-3 text-base text-gray-700">{highlight}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                          >
                            Visit Site <FaArrowRight className="ml-2" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Expertise Section */}
        <section id="expertise" className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Expertise</h2>
                              <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Technical Capabilities
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                Specialized knowledge areas where I excel and create value
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {expertise.map((skill, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
                >
                  <div className="px-6 py-8">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-700 text-white mx-auto">
                      {skill.icon}
                    </div>
                    <div className="mt-5 text-center">
                      <h3 className="text-lg font-medium text-white">{skill.title}</h3>
                      <p className="mt-2 text-sm text-gray-300">{skill.description}</p>
                    </div>
                    <div className="mt-6">
                      <div className="flex flex-wrap justify-center gap-2">
                        {skill.skills.slice(0, 4).map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-700 text-gray-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20">
              <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                <div className="px-6 py-8 sm:px-8 sm:py-10">
                  <h3 className="text-2xl font-bold text-white text-center">Comprehensive Skill Set</h3>
                  
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Object.entries({
                      "Languages": ["Python", "JavaScript", "TypeScript", "SQL", "R"],
                      "Frameworks": ["React", "Next.js", "FastAPI", "Django", "Node.js", "Express", "Vue.js"],
                      "AI & ML": ["OpenAI GPT", "PyTorch", "TensorFlow", "scikit-learn", "NLP", "Computer Vision"],
                      "Data": ["Pandas", "NumPy", "MongoDB", "PostgreSQL", "Firebase", "Hadoop"],
                      "Cloud & DevOps": ["AWS", "Google Cloud", "Docker", "Kubernetes", "Vercel", "CI/CD"],
                      "Tools": ["Git", "REST APIs", "GraphQL", "Framer Motion", "Figma"]
                    }).map(([category, items], index) => (
                      <div key={index} className="col-span-2 md:col-span-1">
                        <h4 className="text-lg font-medium text-indigo-400">{category}</h4>
                        <ul className="mt-2 space-y-1">
                          {items.map((item, i) => (
                            <li key={i} className="text-gray-300 text-sm">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </div>
            </section>

            {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Let&apos;s Connect
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Whether you&apos;re interested in collaboration, investment opportunities, or just want to chat about tech, I&apos;d love to hear from you.
              </p>
            </div>

            <div className="mt-16">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="lg:grid lg:grid-cols-2">
                  <div className="py-16 px-6 sm:px-12 lg:py-24 lg:px-12 bg-indigo-700">
                    <div className="max-w-lg mx-auto">
                      <h3 className="text-2xl font-extrabold text-white">Get in touch</h3>
                      <p className="mt-4 text-lg text-indigo-100">
                        I&apos;m always looking for new opportunities and connections. Reach out and let&apos;s discuss how we can work together.
                      </p>
                      
                      <div className="mt-12 space-y-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <FaEnvelope className="h-6 w-6 text-indigo-200" />
                          </div>
                          <div className="ml-3 text-lg text-white">
                            <p>ahmedarwork@gmail.com</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <FaLinkedin className="h-6 w-6 text-indigo-200" />
                          </div>
                          <div className="ml-3 text-lg text-white">
                            <a href="https://linkedin.com/in/ahmed-ar" target="_blank" rel="noopener noreferrer" className="underline">
                              linkedin.com/in/ahmed-ar
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <FaGithub className="h-6 w-6 text-indigo-200" />
                          </div>
                          <div className="ml-3 text-lg text-white">
                            <a href="https://github.com/ahmedar04" target="_blank" rel="noopener noreferrer" className="underline">
                              github.com/ahmedar04
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-16 px-6 sm:px-12 lg:py-24 lg:px-12">
                    <div className="max-w-lg mx-auto">
                      <h3 className="text-2xl font-extrabold text-gray-900">Send me a message</h3>
                      <form action="#" method="POST" className="mt-8 grid grid-cols-1 gap-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              autoComplete="name"
                              className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                              placeholder="Your name"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                              placeholder="you@example.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">Purpose</label>
                          <div className="mt-1">
                            <select
                              id="purpose"
                              name="purpose"
                              className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            >
                              <option>Job opportunity</option>
                              <option>Collaboration</option>
                              <option>Investment</option>
                              <option>Speaking engagement</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                          <div className="mt-1">
                            <textarea
                              id="message"
                              name="message"
                              rows={4}
                              className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                              placeholder="Your message"
                            ></textarea>
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

            </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/ahmedar04" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/ahmed-ar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="mailto:ahmedarwork@gmail.com" className="text-gray-400 hover:text-white">
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 md:mt-0 flex items-center justify-center md:justify-end">
              <div className="text-base text-gray-400">
                &copy; {new Date().getFullYear()} Ahmed Abdul Rahman. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg z-50 transform transition-opacity duration-300 ${
          scrollY > 300 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}
