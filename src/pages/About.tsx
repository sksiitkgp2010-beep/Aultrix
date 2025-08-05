import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, Heart, Zap, TrendingUp, Globe, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Product-First Mindset',
      description: 'We focus on building solutions that solve real business problems and deliver measurable value to your customers.'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'ROI-Driven Delivery',
      description: 'Every project is designed with clear success metrics and ROI targets, ensuring your investment generates returns.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation & Automation',
      description: 'We leverage cutting-edge technologies and automation to create efficient, scalable solutions for the future.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Client-First Culture',
      description: 'Your success is our priority. We build long-term partnerships based on trust, transparency, and results.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former tech lead at Google with 12+ years in digital transformation. Passionate about helping businesses scale through technology.',
      expertise: ['Product Strategy', 'Team Leadership', 'Digital Transformation']
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Head of Development',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Full-stack architect with expertise in AI/ML integration and cloud-native solutions. Led development teams at multiple startups.',
      expertise: ['AI/ML Integration', 'Cloud Architecture', 'Team Management']
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Automation',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Workflow automation specialist with deep expertise in process optimization and custom integration solutions.',
      expertise: ['Process Automation', 'Integration Design', 'Workflow Optimization']
    }
  ];

  const metrics = [
    { label: 'Quality Solutions', sublabel: 'Modern tech stack' },
    { label: 'Client Focused', sublabel: 'Tailored approach' },
    { label: 'Fresh Perspective', sublabel: 'New business 2024' },
    { label: 'Expert Team', sublabel: 'Skilled developers' }
  ];

  const journey = [
    {
      year: '2019',
      title: 'Founded Aultrix',
      description: 'Started with a vision to help businesses leverage technology for growth and efficiency.'
    },
    {
      year: '2020',
      title: 'First AI Integration',
      description: 'Pioneered AI-powered solutions for client automation, setting the foundation for our AI expertise.'
    },
    {
      year: '2021',
      title: '50+ Successful Projects',
      description: 'Reached milestone of 50 completed projects with 100% client satisfaction rate.'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Named "Top Digital Transformation Partner" by TechReview Magazine.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded services globally, working with clients across North America, Europe, and Asia.'
    },
    {
      year: '2024',
      title: 'AI Innovation Lab',
      description: 'Launched dedicated AI research lab to develop cutting-edge solutions for our clients.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Aultrix</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're a team of passionate technologists, strategists, and innovators dedicated to transforming 
              businesses through intelligent digital solutions and automation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses with intelligent digital solutions that drive growth, efficiency, 
                    and innovation. We bridge the gap between complex technology and practical business outcomes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-3">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become the leading partner for businesses seeking digital transformation, known for our 
                    innovative approach, exceptional results, and commitment to client success.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why We Started Aultrix</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                After years of working with enterprises and seeing the gap between business needs and 
                technical solutions, we founded Aultrix to create a bridge. We believe every business 
                deserves access to cutting-edge technology that actually solves their problems and drives growth.
              </p>
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Global Impact</div>
                  <div className="text-blue-100 text-sm">Serving clients across 15+ countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture & Impact</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Continuous Learning</h3>
                    <p className="text-gray-600">We invest in our team's growth with regular training, conferences, and certification programs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Remote-First Approach</h3>
                    <p className="text-gray-600">Our distributed team works from around the world, bringing diverse perspectives to every project.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Community Impact</h3>
                    <p className="text-gray-600">We dedicate 10% of our time to pro-bono work for non-profits and social impact organizations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the businesses that are transforming their operations with Aultrix. 
            Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;