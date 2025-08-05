import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Web & App Development',
    'AI/ML Integration',
    'Workflow Automation',
    'Analytics & Dashboards',
    'Digital Marketing & SEO',
    'Product Strategy & Consulting',
    'Not Sure - Need Consultation'
  ];

  const budgetRanges = [
    'Under $10K',
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K+',
    'Prefer to discuss'
  ];

  const timelines = [
    'ASAP (Rush Project)',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Flexible timing'
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      content: 'sksiitkgp2010@gmail.com',
      subtitle: 'Get a response within 2 hours'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      content: '9999418369',
      subtitle: 'Available all week'
    },
  ];

  const faqs = [
    {
      question: 'How quickly can you start my project?',
      answer: 'We can typically start new projects within 1-2 weeks after contract signing, depending on project complexity and team availability.'
    },
    {
      question: 'Do you work with startups or only enterprises?',
      answer: 'We work with businesses of all sizes, from early-stage startups to large enterprises. Our approach is tailored to your specific needs and budget.'
    }
  ];

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">
              We've received your message and will get back to you within 2 hours during business hours.
            </p>
            <p className="text-gray-600 mb-8">
              In the meantime, feel free to explore our case studies or connect with us on social media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setSubmitted(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Send Another Message
              </button>
              <a
                href="/case-studies"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Talk</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to transform your business? Get a free consultation and detailed project roadmap. 
            We typically respond within 2 hours during business hours.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg font-bold text-blue-600 mb-1">{info.content}</p>
                <p className="text-sm text-gray-600">{info.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600">
                Ready to start your project? Contact us directly using the information below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg font-bold text-blue-600 mb-1">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-6">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Immediate Response</h4>
                      <p className="text-blue-100 text-sm">We'll acknowledge your message within 2 hours and schedule a call.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Discovery Call</h4>
                      <p className="text-blue-100 text-sm">30-minute consultation to understand your needs and goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Custom Proposal</h4>
                      <p className="text-blue-100 text-sm">Detailed roadmap, timeline, and pricing tailored to your project.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;