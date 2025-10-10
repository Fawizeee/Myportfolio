import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                <div className="w-80 h-80 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-lg">
                  Professional Photo
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary-300 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-secondary-300 rounded-full"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With a passion for both software development and data science, I bring a unique perspective to every project. 
              I believe in creating solutions that are not only functional but also provide valuable insights through data analysis.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-primary-50 rounded-lg"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-secondary-50 rounded-lg"
              >
                <div className="text-3xl font-bold text-secondary-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </motion.div>
            </div>

            {/* Location */}
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
