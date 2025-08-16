import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Minus, MessageSquare, Phone, Mail, Clock } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const faqCategories = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'How do I get started with Aultrix?',
          answer: 'Getting started is simple! Book a free consultation through our contact form or call us directly. We\'ll discuss your project needs, provide a detailed proposal with timeline and pricing, and can typically start within 1-2 weeks after contract signing.'
        },
        {
          question: 'What information do you need for a project quote?',
          answer: 'We need to understand your business goals, target users, required features, timeline, and budget range. During our discovery call, we\'ll ask about your current systems, integrations needed, and success metrics. The more details you provide, the more accurate our proposal will be.'
        },
        {
          question: 'Do you work with startups or only established companies?',
          answer: 'We work with businesses of all sizes! From early-stage startups to Fortune 500 companies. Our approach is tailored to your specific needs, budget, and growth stage. We offer flexible engagement models to support companies at every phase.'
        },
        {
          question: 'What\'s included in your free consultation?',
          answer: 'Our free consultation includes: project requirements analysis, technology recommendations, timeline estimation, budget discussion, team structure proposal, and a detailed written proposal. It typically lasts 30-60 minutes and there\'s absolutely no obligation.'
        }
      ]
    },
    {
      title: 'Services & Pricing',
      faqs: [
        {
          question: 'What are your typical project costs?',
          answer: 'Project costs vary based on complexity and scope. Simple websites start around $10K, custom web applications range from $25K-$100K, and enterprise solutions can be $100K+. We provide detailed cost breakdowns and offer flexible payment terms to fit your budget.'
        },
        {
          question: 'Do you offer ongoing support and maintenance?',
          answer: 'Yes! We offer comprehensive support packages including bug fixes, security updates, performance monitoring, and feature enhancements. Our support plans start at $2K/month and include 24/7 monitoring, monthly reports, and dedicated support channels.'
        },
        {
          question: 'Can you integrate with our existing systems?',
          answer: 'Absolutely! We specialize in system integrations and have experience with most popular platforms including Salesforce, HubSpot, Shopify, WordPress, and custom APIs. We\'ll analyze your current tech stack and design seamless integrations.'
        },
        {
          question: 'Do you provide training for our team?',
          answer: 'Yes, we include comprehensive training as part of every project. This includes user manuals, video tutorials, live training sessions, and ongoing support. We ensure your team is fully equipped to manage and maintain the solution.'
        }
      ]
    },
    {
      title: 'Process & Timeline',
      faqs: [
        {
          question: 'How long do projects typically take?',
          answer: 'Timelines depend on project complexity: Simple websites: 2-4 weeks, Custom web apps: 2-4 months, Enterprise solutions: 4-8 months, AI/ML integrations: 1-3 months. We provide detailed timeline estimates during our initial consultation.'
        },
        {
          question: 'What is your development process?',
          answer: 'We follow an agile development methodology: 1) Discovery & Planning (1-2 weeks), 2) Design & Prototyping (2-3 weeks), 3) Development & Testing (4-12 weeks), 4) Launch & Optimization (ongoing). You\'ll have regular updates and opportunities for feedback throughout.'
        },
        {
          question: 'How do you handle project changes or additions?',
          answer: 'We understand that requirements can evolve. Minor changes are typically included, while major scope changes are handled through a change request process. We\'ll provide cost and timeline impact assessments before implementing any significant changes.'
        },
        {
          question: 'What happens if I\'m not satisfied with the results?',
          answer: 'We stand behind our work with a 100% satisfaction guarantee. If you\'re not happy with the results, we\'ll work to make it right at no additional cost. Our goal is your complete satisfaction and long-term success.'
        }
      ]
    },
    {
      title: 'Technical & Security',
      faqs: [
        {
          question: 'How do you ensure data security and privacy?',
          answer: 'Security is our top priority. We implement industry-standard encryption, secure authentication, regular security audits, and comply with GDPR, HIPAA, and other relevant regulations. All team members sign NDAs and we use secure development practices.'
        },
        {
          question: 'Do you provide hosting and domain management?',
          answer: 'We can handle all hosting and domain management, or work with your preferred providers. We typically recommend cloud platforms like AWS, Google Cloud, or Vercel for optimal performance and scalability. Hosting costs are separate from development fees.'
        },
        {
          question: 'What technologies do you specialize in?',
          answer: 'We specialize in modern tech stacks including React/Next.js, Node.js, Python, TypeScript, PostgreSQL/MongoDB, AWS/Google Cloud, and AI/ML frameworks. We choose technologies based on your specific needs and long-term goals.'
        },
        {
          question: 'How do you handle intellectual property?',
          answer: 'You own all intellectual property for custom solutions we build for you. We sign comprehensive IP assignment agreements ensuring all code, designs, and assets belong to you. We only retain rights to our proprietary frameworks and tools.'
        }
      ]
    },
    {
      title: 'Communication & Support',
      faqs: [
        {
          question: 'How often will I receive project updates?',
          answer: 'We provide weekly progress reports including completed work, upcoming milestones, and any blockers. You\'ll have access to our project dashboard for real-time updates, and we schedule regular calls based on your preference (weekly/bi-weekly).'
        },
        {
          question: 'Who will be my main point of contact?',
          answer: 'You\'ll have a dedicated project manager as your primary contact, plus direct access to the development team when needed. Your project manager will coordinate all communication and ensure nothing falls through the cracks.'
        },
        {
          question: 'Do you work with international clients?',
          answer: 'Yes! We work with clients globally and have experience across different time zones. We adapt our communication schedule to overlap with your business hours and use collaborative tools that work across time zones.'
        },
        {
          question: 'What happens after project completion?',
          answer: 'After launch, we provide a transition period with enhanced support, comprehensive documentation, training, and performance monitoring. We also offer ongoing maintenance plans and are available for future enhancements or expansions.'
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const contactOptions = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Call Us',
      content: '9999418369',
      description: 'Mon-Fri 9AM-6PM PST'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email Us',
      content: 'sksiitkgp2010@gmail.com',
      description: 'Response within 2 hours'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get answers to common questions about our services, process, pricing, and support. 
            Can't find what you're looking for? We're here to help!
          </p>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            Ask Your Question
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactOptions.map((option, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600">
                  {option.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{option.content}</p>
                <p className="text-xs text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex; // Unique index across all FAQs
                  const isOpen = openFaq === globalIndex;
                  
                  return (
                    <div key={faqIndex} className="bg-white rounded-lg shadow-sm border">
                      <button
                        onClick={() => toggleFaq(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <Minus className="h-5 w-5 text-blue-600" />
                          ) : (
                            <Plus className="h-5 w-5 text-blue-600" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="border-t pt-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is ready to provide personalized answers and discuss your specific project needs. 
            Get in touch for a free consultation.
          </p>
          
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6">
              Book a free consultation and get detailed answers to your questions, 
              plus a custom project roadmap and pricing estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:9999498549"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
              <p className="text-gray-600">Average response time under 2 hours during business hours</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">No Obligation</h4>
              <p className="text-gray-600">Free consultation with no strings attached or pressure</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Expert Advice</h4>
              <p className="text-gray-600">Direct access to senior developers and project managers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Explore More Resources
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Learn more about our services, see our work, and understand our approach
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/services"
                onClick={scrollToTop}
                className="bg-white bg-opacity-10 text-white px-6 py-4 rounded-lg font-semibold hover:bg-opacity-20 transition-all duration-200 backdrop-blur-sm"
              >
                Our Services
              </Link>
              <Link
                to="/about"
                onClick={scrollToTop}
                className="bg-white bg-opacity-10 text-white px-6 py-4 rounded-lg font-semibold hover:bg-opacity-20 transition-all duration-200 backdrop-blur-sm"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;