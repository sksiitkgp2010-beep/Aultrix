import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Target, TrendingUp, Zap, Bot, BarChart3, Globe, Smartphone, Cog } from 'lucide-react';

const Homepage = () => {
  const [selectedService, setSelectedService] = useState('web-development');

  const services = [
    {
      id: 'web-development',
      title: 'Web & App Development',
      description: 'Custom web applications and mobile apps that scale with your business',
      icon: <Smartphone className="h-6 w-6" />,
      features: ['React/Next.js', 'Mobile-First Design', 'Cloud Deployment', 'API Integration']
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      description: 'Streamline operations with n8n, Zapier, and custom automation solutions',
      icon: <Cog className="h-6 w-6" />,
      features: ['Process Automation', 'Integration Hub', 'Custom Workflows', 'API Connections']
    },
    {
      id: 'digital-marketing',
      title: 'SEO & Digital Marketing',
      description: 'Data-driven marketing strategies to increase visibility and drive conversions',
      icon: <Globe className="h-6 w-6" />,
      features: ['SEO Optimization', 'Content Strategy', 'Lead Generation', 'Analytics & Reporting']
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, FinTech Startup',
      company: 'PayFlow',
      content: 'Aultrix transformed our payment processing with automated workflows. ROI increased by 340% in just 6 months.',
      avatar: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Operations Director',
      company: 'AgriTech Solutions',
      content: 'Their workflow automation saved us 25 hours per week. The team delivered exactly what we needed, on time and on budget.',
      avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Founder & CEO',
      company: 'RetailMax',
      content: 'From concept to launch in 8 weeks. Their product-first approach and technical expertise made all the difference.',
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    }
  ];

  const stats = [
    { number: 'Fresh', label: 'New Business 2024' },
    { number: 'Custom', label: 'Tailored Solutions' },
    { number: 'Modern', label: 'Latest Technologies' },
    { number: '24/7', label: 'Support Available' }
  ];

  const clients = [
    'TechCorp', 'InnovateLab', 'DataFlow', 'CloudSync', 'AI Solutions', 'NextGen'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Digital Solutions Experts
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business with 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We help B2B companies accelerate growth through custom web development, 
                workflow automation, and data-driven strategies. From concept to scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Free Project Assessment
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  No Long-term Contracts
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-blue-100 mb-6">
                  Get a custom solution designed specifically for your industry and goals. 
                  Our experts will analyze your needs and provide a detailed roadmap.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Free consultation & project assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Custom solution roadmap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>ROI projections & timeline</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Core Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end digital solutions tailored to your industry needs. 
              From strategy to execution, we deliver results that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-200 ${
                    selectedService === service.id
                      ? 'bg-white shadow-lg border-2 border-blue-200'
                      : 'bg-white hover:shadow-md'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      selectedService === service.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-3">{service.description}</p>
                      {selectedService === service.id && (
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, index) => (
                            <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-blue-100 mb-6">
                  Get a custom solution designed specifically for your industry and goals. 
                  Our experts will analyze your needs and provide a detailed roadmap.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Free consultation & project assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Custom solution roadmap</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>ROI projections & timeline</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Purpose</span>
            </h2>
            <p className="text-xl text-gray-600">
              Driving digital transformation with purpose and vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                efficiency, and competitive advantage through strategic technology implementation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the trusted digital transformation partner, known for delivering 
                measurable results and building lasting client relationships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Goal</h3>
              <p className="text-gray-600 leading-relaxed">
                To help 500+ businesses achieve digital excellence by 2030, creating 
                measurable impact and sustainable growth through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the businesses that are transforming their operations with our digital solutions. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 inline-flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;