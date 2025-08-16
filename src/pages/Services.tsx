import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Bot, Cog, BarChart3, Globe, Search, Smartphone, Zap, Users, Target } from 'lucide-react';

const Services = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const services = [
    {
      id: 'web-app-development',
      title: 'Web & App Development',
      description: 'Custom web applications and mobile apps built with modern technologies for optimal performance and user experience.',
      icon: <Smartphone className="h-8 w-8" />,
      problem: 'Outdated systems, poor user experience, and scalability issues limiting business growth.',
      approach: [
        'User-centered design process',
        'Agile development methodology',
        'Performance optimization',
        'Cloud-native architecture'
      ],
      tools: ['React/Next.js', 'Node.js', 'TypeScript', 'AWS/Azure', 'MongoDB/PostgreSQL'],
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'API Integration',
        'Real-time Features',
        'Mobile Optimization',
        'SEO Ready'
      ]
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      description: 'Streamline business processes with intelligent automation using n8n, Zapier, and custom solutions.',
      icon: <Cog className="h-8 w-8" />,
      problem: 'Manual processes, data silos, and repetitive tasks consuming valuable time and resources.',
      approach: [
        'Process mapping & analysis',
        'Automation strategy design',
        'Integration planning',
        'Testing & optimization'
      ],
      tools: ['n8n', 'Zapier', 'Make.com', 'Python', 'API Connectors'],
      features: [
        'Process Automation',
        'Data Synchronization',
        'Custom Integrations',
        'Workflow Monitoring',
        'Error Handling',
        'Scalable Solutions'
      ]
    },
    {
      id: 'ai-ml-integration',
      title: 'AI/ML Integration',
      description: 'Intelligent solutions with chatbots, RAG systems, LLM integration, and machine learning models.',
      icon: <Bot className="h-8 w-8" />,
      problem: 'Lack of intelligent automation, poor customer support efficiency, and untapped data insights.',
      approach: [
        'AI strategy consultation',
        'Model selection & training',
        'Integration planning',
        'Performance monitoring'
      ],
      tools: ['OpenAI API', 'Langchain', 'TensorFlow', 'Python', 'Vector Databases'],
      features: [
        'Custom Chatbots',
        'Document Processing',
        'Predictive Analytics',
        'Natural Language Processing',
        'Automated Insights',
        'Smart Recommendations'
      ]
    },
    {
      id: 'digital-marketing',
      title: 'SEO & Digital Marketing',
      description: 'Data-driven marketing strategies to increase visibility, generate leads, and drive conversions.',
      icon: <Search className="h-8 w-8" />,
      problem: 'Low online visibility, poor lead generation, and ineffective marketing spend allocation.',
      approach: [
        'Market research & analysis',
        'SEO strategy development',
        'Content marketing plan',
        'Performance tracking'
      ],
      tools: ['Google Analytics', 'SEMrush', 'HubSpot', 'WordPress', 'Social Media APIs'],
      features: [
        'SEO Optimization',
        'Content Strategy',
        'Lead Generation',
        'Social Media Management',
        'Email Marketing',
        'Analytics & Reporting'
      ]
    },
    {
      id: 'product-strategy',
      title: 'Product Strategy & Consulting',
      description: 'Strategic guidance for product development, digital transformation, and technology roadmaps.',
      icon: <Target className="h-8 w-8" />,
      problem: 'Unclear product direction, technology debt, and misaligned business and technical goals.',
      approach: [
        'Business analysis',
        'Technology assessment',
        'Roadmap development',
        'Implementation planning'
      ],
      tools: ['Figma', 'Miro', 'Jira', 'Confluence', 'Google Workspace'],
      features: [
        'Strategic Planning',
        'Technology Audit',
        'Roadmap Development',
        'Stakeholder Alignment',
        'Risk Assessment',
        'Implementation Support'
      ]
    }
  ];

  const industries = [
    { name: 'Mobility', icon: <Globe className="h-6 w-6" /> },
    { name: 'Fintech', icon: <BarChart3 className="h-6 w-6" /> },
    { name: 'SaaS', icon: <Code className="h-6 w-6" /> },
    { name: 'AgriTech', icon: <Zap className="h-6 w-6" /> },
    { name: 'Retail', icon: <Users className="h-6 w-6" /> },
    { name: 'Healthcare', icon: <Target className="h-6 w-6" /> }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Strategic digital solutions designed to transform your business operations, 
            enhance efficiency, and drive sustainable growth.
          </p>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            Get Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Problem We Solve:</h4>
                  <p className="text-gray-600 text-sm">{service.problem}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Our Approach:</h4>
                  <ul className="space-y-2">
                    {service.approach.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
            <p className="text-xl text-gray-600">Real solutions we've delivered for our clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Smartphone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fleet Ticket Management System</h3>
              <p className="text-gray-600 mb-4">Comprehensive fleet management solution with real-time tracking, maintenance scheduling, and automated ticketing system.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <Cog className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workshop Management System</h3>
              <p className="text-gray-600 mb-4">Complete workshop automation with inventory management, job scheduling, and customer communication tools.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">API Integration</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hospital ERP System</h3>
              <p className="text-gray-600 mb-4">Integrated hospital management system covering patient records, billing, inventory, and staff management.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">MySQL</span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Security</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio Maker</h3>
              <p className="text-gray-600 mb-4">Professional portfolio creation platform with customizable templates and easy content management.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm">Tailwind</span>
                <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm">CMS</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 md:col-span-2 lg:col-span-1">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Presence for Business</h3>
              <p className="text-gray-600 mb-4">Complete digital transformation package including website, SEO optimization, and social media integration.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">SEO</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">Marketing</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Configurator CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Not sure which services you need? Use our interactive configurator to get a 
            personalized recommendation and detailed roadmap for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Start Configuration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/case-studies"
              onClick={scrollToTop}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;