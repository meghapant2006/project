import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Palette, Server, Sun, Moon, Instagram, Home, User, FolderOpen, MessageCircle, Trophy, Star, Calendar, Users } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    bg: isDarkMode ? 'bg-slate-900' : 'bg-gray-50',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-slate-300' : 'text-gray-600',
    textMuted: isDarkMode ? 'text-slate-400' : 'text-gray-500',
    navBg: isDarkMode ? 'bg-slate-900/95' : 'bg-white/95',
    navBorder: isDarkMode ? 'border-slate-800' : 'border-gray-200',
    cardBg: isDarkMode ? 'bg-slate-800/50' : 'bg-white',
    cardBgHover: isDarkMode ? 'bg-slate-800/70' : 'bg-gray-50',
    cardBorder: isDarkMode ? 'border-slate-700' : 'border-gray-200',
    sectionBg: isDarkMode ? 'bg-slate-800/30' : 'bg-gray-100/50',
    buttonPrimary: isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700',
    buttonSecondary: isDarkMode ? 'border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400' : 'border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600',
  };

  const skills = [
    { category: 'Frontend', icon: Code, items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', icon: Server, items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', icon: Database, items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'] },
    { category: 'Design', icon: Palette, items: ['UI/UX', 'Prototyping', 'Responsive Design', 'Accessibility'] }
  ];
  const projects = [
    { 
      title: 'Nike Website Clone',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '../public/Screenshot 2025-09-12 222937.png',
      livepreview: 'https://nikeshoeee.netlify.app/'
    },
    {
      title: 'IME Website',
      description: 'Collaborative task management application with real-time updates',
      tech: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      image: '../public/Screenshot 2025-09-12 223332.png',
      livepreview: 'https://imewebsitee.netlify.app/'
    },
    { 
      title: 'AI Advanced Virtual Assistant',
      description: 'Data visualization dashboard with interactive charts and reports',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      image: '../public/Screenshot 2025-09-12 224041.png',
      livepreview: 'https://virtualassist.netlify.app/'
    }
  ];

  const achievements = [
    {
      title: 'Bharat Shiksha Expo Winner',
      organization: ' Delhi',
      date: '2024',
      type: 'award',
      icon: Trophy,
      description: 'First place in 24-hour hackathon with team of 4 developers'
    },
    {
      title: 'DevCraft Co-Founder',
      organization: 'Developer Community ',
      date: '2021-Present',
      type: 'leadership',
      icon: Users,
      description: ' Successfully co-founded and scaled a development agency serving clients across multiple industries.'
    },
    {
      title: 'TecnoHack Champion',
      organization: 'Tech Conference 2023',
      date: '2023',
      type: 'award',
      icon: Trophy,
      description: 'Secured victory in the 48-hour hackathon by developing a groundbreaking AI-powered application.'
    },
    {
      title: 'Open Source Contributor',
      organization: 'GitHub',
      date: '2022-Present',
      type: 'contribution',
      icon: Star,
      description: '500+ contributions to various open source projects'
    },
    
  ];

  const navigationItems = [
    { id: 'home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses.bg} ${themeClasses.text}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${themeClasses.navBg} backdrop-blur-sm border-b ${themeClasses.navBorder} z-50 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-500">
              MP.dev
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-blue-500 ${
                    activeSection === id ? 'text-blue-500' : themeClasses.textSecondary
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${themeClasses.cardBg} hover:${themeClasses.cardBgHover}`}
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-600" />}
              </button>
              
                <div className="flex space-x-3">
                <a href="https://github.com/meghapant2006" className={`${themeClasses.textSecondary} hover:text-purple-500 transition-colors`}>
                  <Github size={20} />
                </a>
                <a href="mailto:pantmegha195@gmail.com" className={`${themeClasses.textSecondary} hover:text-red-500 transition-colors`}>
                  <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/meghapant2006/" className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors`}>
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/_megha_pant_/" className={`${themeClasses.textSecondary} hover:text-pink-500 transition-colors`}>
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <img
                  src="/public/photo.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className={themeClasses.text}>Hello, I'm </span>
              <span className="text-blue-500">Megha Pant</span>
            </h1>
            <p className={`text-xl sm:text-2xl ${themeClasses.textSecondary} mb-8 max-w-3xl mx-auto leading-relaxed`}>
              Full Stack Developer passionate about creating exceptional digital experiences. 
              I build modern web applications with cutting-edge technologies and always stay 
              open to new opportunities and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-8 py-3 ${themeClasses.buttonPrimary} text-white rounded-lg font-medium transition-colors`}
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-3 border ${themeClasses.buttonSecondary} rounded-lg font-medium transition-colors`}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
             I’m a passionate Full-Stack Developer with 2+ years of experience in building modern, scalable, and user-friendly web applications. Skilled in the MERN stack, Python, and C++, I enjoy solving complex problems with simple and efficient solutions. I’m constantly exploring new technologies, contributing to open-source, and sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${themeClasses.cardBg} rounded-lg p-6 text-center border ${themeClasses.cardBorder} hover:${themeClasses.cardBgHover} transition-colors`}>
              <Code className="text-blue-500 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className={themeClasses.textSecondary}>Creating responsive and interactive user interfaces with modern frameworks</p>
            </div>
            
            <div className={`${themeClasses.cardBg} rounded-lg p-6 text-center border ${themeClasses.cardBorder} hover:${themeClasses.cardBgHover} transition-colors`}>
              <Server className="text-green-500 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className={themeClasses.textSecondary}>Building scalable server-side applications and APIs</p>
            </div>
            
            <div className={`${themeClasses.cardBg} rounded-lg p-6 text-center border ${themeClasses.cardBorder} hover:${themeClasses.cardBgHover} transition-colors`}>
              <Palette className="text-purple-500 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className={themeClasses.textSecondary}>Designing user-centered experiences with attention to detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className={`text-xl ${themeClasses.textSecondary}`}>Technologies I work with</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map(({ category, icon: Icon, items }) => (
              <div key={category} className={`${themeClasses.cardBg} rounded-lg p-6 border ${themeClasses.cardBorder} hover:${themeClasses.cardBgHover} transition-colors`}>
                <div className="flex items-center mb-4">
                  <Icon className="text-blue-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className={themeClasses.textSecondary}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className={`text-xl ${themeClasses.textSecondary}`}>Some of my recent work</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${themeClasses.cardBg} rounded-lg overflow-hidden border ${themeClasses.cardBorder} hover:transform hover:scale-105 transition-all duration-300`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-500 hover:text-blue-400 transition-colors">
                    View Project
                    <ExternalLink className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Achievements & Certifications</h2>
            {/* <p className={`text-xl ${themeClasses.textSecondary}`}>my</p> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const getTypeColor = (type: string) => {
                switch (type) {
                  case 'certification': return 'text-blue-500';
                  case 'award': return 'text-yellow-500';
                  case 'contribution': return 'text-green-500';
                  case 'leadership': return 'text-purple-500';
                  default: return 'text-blue-500';
                }
              };
              
              const getTypeBg = (type: string) => {
                switch (type) {
                  case 'certification': return 'bg-blue-500/20';
                  case 'award': return 'bg-yellow-500/20';
                  case 'contribution': return 'bg-green-500/20';
                  case 'leadership': return 'bg-purple-500/20';
                  default: return 'bg-blue-500/20';
                }
              };

              return (
                <div key={index} className={`${themeClasses.cardBg} rounded-lg p-6 border ${themeClasses.cardBorder} hover:${themeClasses.cardBgHover} hover:transform hover:scale-105 transition-all duration-300`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${getTypeBg(achievement.type)}`}>
                      <IconComponent className={getTypeColor(achievement.type)} size={24} />
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {achievement.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className={`${themeClasses.textSecondary} font-medium mb-3`}>{achievement.organization}</p>
                  <p className={`${themeClasses.textMuted} text-sm leading-relaxed`}>{achievement.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeBg(achievement.type)} ${getTypeColor(achievement.type)}`}>
                      {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Achievement Stats */}
          <div className={`mt-16 ${themeClasses.sectionBg} rounded-lg p-8`}>
            <h3 className="text-2xl font-bold text-center mb-8">Quick Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">4+</div>
                <p className={themeClasses.textSecondary}>Certifications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">3+</div>
                <p className={themeClasses.textSecondary}>Awards Won</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
                <p className={themeClasses.textSecondary}>Open Source Contributions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">1000+</div>
                <p className={themeClasses.textSecondary}>Community Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-blue-500 mr-4" size={24} />
                  <div>
                    <p className={`${themeClasses.textMuted} mb-1`}>Email</p>
                    <p className="text-lg">pantmegha195@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-green-500 mr-4" size={24} />
                  <div>
                    <p className={`${themeClasses.textMuted} mb-1`}>Phone</p>
                    <p className="text-lg">+91 9258581085</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="text-red-500 mr-4" size={24} />
                  <div>
                    <p className={`${themeClasses.textMuted} mb-1`}>Location</p>
                    <p className="text-lg">Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                  Whether you have a question, project inquiry, or just want to say hello, I'll 
                  get back to you as soon as possible.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a 
                  href="https://www.linkedin.com/in/meghapant2006/" 
                  className={`${themeClasses.cardBg} hover:bg-blue-600/10 border ${themeClasses.cardBorder} hover:border-blue-500/50 rounded-lg p-6 text-center transition-all duration-300 group`}
                >
                  <Linkedin className="text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <p className="text-lg font-semibold">LinkedIn</p>
                </a>
                
                <a 
                  href="mailto:pantmegha195@gmail.com" 
                  className={`${themeClasses.cardBg} hover:bg-red-600/10 border ${themeClasses.cardBorder} hover:border-red-500/50 rounded-lg p-6 text-center transition-all duration-300 group`}
                >
                  <Mail className="text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <p className="text-lg font-semibold">Gmail</p>
                </a>
                
                <a 
                  href="https://github.com/meghapant2006" 
                  className={`${themeClasses.cardBg} hover:bg-purple-600/10 border ${themeClasses.cardBorder} hover:border-purple-500/50 rounded-lg p-6 text-center transition-all duration-300 group`}
                >
                  <Github className="text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <p className="text-lg font-semibold">GitHub</p>
                </a>
                
                <a 
                  href="https://www.instagram.com/_megha_pant_/" 
                  className={`${themeClasses.cardBg} hover:bg-pink-600/10 border ${themeClasses.cardBorder} hover:border-pink-500/50 rounded-lg p-6 text-center transition-all duration-300 group`}
                >
                  <Instagram className="text-pink-500 mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <p className="text-lg font-semibold">Instagram</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${themeClasses.navBorder} py-8 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={themeClasses.textMuted}>
            © 2025 Megha Pant, All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;