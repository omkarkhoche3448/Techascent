// components/About.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children }) => {
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
    >
      {children}
    </motion.div>
  );
};

const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Designer",
    linkedin: "https://linkedin.com/in/johndoe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Senior Developer",
    linkedin: "https://linkedin.com/in/janesmith",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Marketing Specialist",
    linkedin: "https://linkedin.com/in/mikejohnson",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Emily Brown",
    role: "UX Designer",
    linkedin: "https://linkedin.com/in/emilybrown",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Alex Lee",
    role: "Full Stack Developer",
    linkedin: "https://linkedin.com/in/alexlee",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

function About() {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Our Company</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We are a passionate team of creators, innovators, and
            problem-solvers dedicated to helping businesses succeed in the
            digital world.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <AnimatedSection>
        <div className="container mx-auto py-16 px-4">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-600">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4">
                At our core, we believe in the power of digital innovation to
                transform businesses and create meaningful connections with
                audiences. Our mission is to empower companies with cutting-edge
                web solutions and marketing strategies that drive growth and
                success.
              </p>
              <p className="text-gray-700">
                We're committed to staying at the forefront of technology and
                design trends, ensuring that our clients always receive the best
                possible solutions for their unique needs.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection>
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1 text-purple-600">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-500 hover:text-indigo-600 transition duration-300"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection>
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Innovation", "Collaboration", "Excellence"].map(
              (value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-purple-500"
                >
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">
                    {value}
                  </h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default About;
