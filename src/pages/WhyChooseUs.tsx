import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Users, Zap, Shield, Clock, Award, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const differentiators = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Product-First Mindset',
      description: 'We don\'t just build features - we create solutions that solve real business problems and drive measurable results.',
      details: [
        'User-centered design approach',
        'Business outcome focused',
        'MVP to scale methodology',
        'Continuous user feedback integration'
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'ROI-Driven Delivery',
      description: 'Every project is designed with clear success metrics and ROI targets. Our clients see average 340% ROI within the first year.',
      details: [
        'Clear ROI projections before start',
        'Performance tracking & optimization',
        'Data-driven decision making',
        'Continuous improvement cycles'
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest in AI, automation, and cloud technologies to build future-ready solutions.',
      details: [
        'AI/ML integration expertise',
        'Modern tech stack (React, Node.js, Python)',
        'Cloud-native architecture',
        'Scalable and secure solutions'
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Client-First Culture',
      description: 'Your success is our priority. We build long-term partnerships based on trust, transparency, and exceptional results.',
      details: [
        'Dedicated project manager',
        'Weekly progress updates',
        'Direct access to development team',
        '24/7 support and maintenance'
      ]
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business goals, user needs, and technical requirements.',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Create user-centered designs and interactive prototypes for validation.',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Development & Testing',
      description: 'Agile development with continuous testing and client feedback integration.',
      duration: '4-12 weeks'
    },
    {
      step: 4,
      title: 'Launch & Optimization',
      description: 'Smooth deployment with monitoring, optimization, and ongoing support.',
      duration: 'Ongoing'
    }
  ];

  const toolsStack = [
    {
      category: 'Frontend Development',
      tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native']
    },
    {
      category: 'Backend & APIs',
      tools: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL']
    },
    {
      category: 'AI & Automation',
      tools: ['OpenAI API', 'Langchain', 'n8n', 'Zapier', 'TensorFlow']
    },
    {
      category: 'Cloud & DevOps',
      tools: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'Supabase']
    }
  ];

  const testimonials = [
    {
      quote: "What sets Aultrix apart is their strategic thinking. They don't just execute - they help you make the right decisions for long-term success.",
      author: 'Michael Chen',
      role: 'CTO, TechCorp',
      rating: 5
    },
    {
      quote: "The ROI we've achieved through their solutions is remarkable. They truly understand how to build products that drive business growth.",
      author: 'Sarah Williams',
      role: 'CEO, InnovateLab',
      rating: 5
    },
    {
      quote: "Their team becomes an extension of your team. The communication, expertise, and dedication are unmatched.",
      author: 'David Rodriguez',
      role: 'Head of Product, DataFlow',
      rating: 5
    }
  ];

  const guarantees = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee or we\'ll make it right at no extra cost.'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'On-Time Delivery',
      description: 'We meet deadlines consistently with our proven project management approach.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Expert Team',
      description: 'Senior developers with 5+ years experience in modern technologies.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Aultrix</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're not just another development agency. We're your strategic technology partner, 
            focused on delivering solutions that drive real business results and long-term growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {guarantee.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{guarantee.title}</h3>
                <p className="text-gray-600 text-sm">{guarantee.description}</p>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600">Our unique approach to digital transformation</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600">From idea to launch, we follow a structured approach that ensures success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {phase.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600">We use cutting-edge tools and technologies to build scalable solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {toolsStack.map((stack, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.tools.map((tool, idx) => (
                    <div key={idx} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700 shadow-sm">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Quality</div>
              <div className="text-gray-600">Focused Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Modern</div>
              <div className="text-gray-600">Tech Stack</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Fresh</div>
              <div className="text-gray-600">New Business</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Expert</div>
              <div className="text-gray-600">Development Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the businesses that are choosing Aultrix for their digital transformation. 
            Get a free consultation and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get Free Consultation
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

export default WhyChooseUs;