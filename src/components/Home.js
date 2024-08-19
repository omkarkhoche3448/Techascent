import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import {
  faHeadset,
  faStar,
  faLaptopCode,
  faBrain,
  faClock,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import Testimonials from "./Testimonials";

const AnimatedCard = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-lg text-center"
    >
      {children}
    </motion.div>
  );
};

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="text-white bg-cover bg-center h-screen flex items-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h1 className="text-6xl font-extrabold mb-6 leading-tight">
              Elevate Your Digital Presence
            </h1>
            <p className="text-2xl mb-8 font-light">
              We craft stunning websites and powerful digital solutions to help
              your business thrive in the online world.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-purple-100 transition duration-300 shadow-lg"
            >
              Get Started
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="Digital Innovation"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Web Design", "Branding", "Digital Marketing"].map(
            (service, index) => (
              <AnimatedCard key={index}>
                <img
                  src={`https://images.unsplash.com/photo-${
                    index + 1
                  }?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
                  alt={service}
                  className="w-full h-48 object-cover mb-6 rounded"
                />
                <h3 className="text-2xl font-bold mb-4">{service}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </AnimatedCard>
            )
          )}
        </div>
      </div>

      {/* Why Clients Choose Us Section */}
      <div className="bg-gradient-to-b from-purple-100 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-purple-800">
            Why Clients Choose Us
          </h2>
          <p className="text-center text-xl mb-12 text-gray-700">
            We provide high quality software development services for our
            clients across a wide range of technologies, supported by testing,
            design, user experience and managed services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellent Support",
                description:
                  "We specialize in support for all our services without taking too much time.",
                icon: faHeadset,
                color: "text-blue-500",
              },
              {
                title: "Qualitative Work",
                description:
                  "We specialize in design-led brand communication and digital innovation.",
                icon: faStar,
                color: "text-yellow-500",
              },
              {
                title: "Updated Technologies",
                description:
                  "We specialize in using updated technology that get you different from competitor.",
                icon: faLaptopCode,
                color: "text-green-500",
              },
              {
                title: "Our Expertise",
                description:
                  "Passion for innovation and desperation for excellence are our core expertise.",
                icon: faBrain,
                color: "text-red-500",
              },
              {
                title: "24 x 7 Support & Availability",
                description:
                  "Driven by passion, our support team delivers unlimited support for 24/7/365",
                icon: faClock,
                color: "text-indigo-500",
              },
              {
                title: "Affordable Pricing",
                description:
                  "We specialize in caring our client's money and help them to get best.",
                icon: faPiggyBank,
                color: "text-pink-500",
              },
            ].map((item, index) => (
              <AnimatedCard key={index}>
                <div className={`${item.color} text-5xl mb-4`}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      {/* <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "John Doe",
                company: "TechCorp",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
                text: "Working with this team was an absolute pleasure. They transformed our online presence and helped us reach new heights.",
              },
              {
                name: "Jane Smith",
                company: "DesignHub",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
                text: "The creativity and attention to detail in their work is unparalleled. Our new website has received countless compliments.",
              },
              {
                name: "Jane Smith",
                company: "DesignHub",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
                text: "The creativity and attention to detail in their work is unparalleled. Our new website has received countless compliments.",
              },
              {
                name: "Jane Smith",
                company: "DesignHub",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
                text: "The creativity and attention to detail in their work is unparalleled. Our new website has received countless compliments.",
              },
            ].map((testimonial, index) => (
              <AnimatedCard key={index}>
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div> */}

      <Testimonials />

      {/* Our Previous Projects Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-16 text-gray-800"
          >
            Our Previous Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                id: 1,
                name: "E-commerce Platform",
                description:
                  "A fully responsive online store built with React and Node.js",
                image:
                  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
                github: "https://github.com/yourusername/ecommerce-platform",
                demo: "https://demo-ecommerce.example.com",
                tags: ["React", "Node.js", "MongoDB"],
              },
              {
                id: 2,
                name: "Social Media Dashboard",
                description:
                  "Real-time analytics dashboard for social media management",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
                github:
                  "https://github.com/yourusername/social-media-dashboard",
                demo: "https://demo-dashboard.example.com",
                tags: ["Vue.js", "D3.js", "Firebase"],
              },
              {
                id: 3,
                name: "Fitness Tracker App",
                description: "Mobile app for tracking workouts and nutrition",
                image:
                  "https://images.unsplash.com/photo-1564930570037-bc7fe0d67f3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
                github: "https://github.com/yourusername/fitness-tracker-app",
                demo: "https://demo-fitness.example.com",
                tags: ["React Native", "GraphQL", "AWS"],
              },
              // ... (add more projects as needed)
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                    >
                      View Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            © Copyright <strong>Tech Ascent</strong>. All Rights Reserved
          </p>
          <p>A Software & Website Development Company</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
