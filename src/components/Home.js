import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

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
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
        <div className="container mx-auto py-20 px-4 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h1 className="text-5xl font-bold mb-6">
              Elevate Your Digital Presence
            </h1>
            <p className="text-xl mb-8">
              We craft stunning websites and powerful digital solutions to help
              your business thrive in the online world.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-100 transition duration-300"
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Digital Marketing"
              className="rounded-lg shadow-xl"
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

      {/* Testimonial Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16">
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
      </div>

      {/* Our Previous Projects Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Previous Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "E-commerce Platform",
                description:
                  "A fully responsive online store built with React and Node.js",
                image:
                  "https://via.placeholder.com/300x200.png?text=E-commerce+Platform",
                github: "https://github.com/yourusername/ecommerce-platform",
              },
              {
                id: 2,
                name: "Social Media Dashboard",
                description:
                  "Real-time analytics dashboard for social media management",
                image:
                  "https://via.placeholder.com/300x200.png?text=Social+Media+Dashboard",
                github:
                  "https://github.com/yourusername/social-media-dashboard",
              },
              {
                id: 3,
                name: "Fitness Tracker App",
                description: "Mobile app for tracking workouts and nutrition",
                image:
                  "https://via.placeholder.com/300x200.png?text=Fitness+Tracker+App",
                github: "https://github.com/yourusername/fitness-tracker-app",
              },
            ].map((project, index) => (
              <AnimatedCard key={index}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description.substring(0, 100)}...
                </p>
                <Link
                  to={`/project/${project.id}`}
                  className="text-purple-600 hover:text-purple-800 transition duration-300"
                >
                  View Project Details
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
