import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";

const projects = [
  {
    id: "1",
    name: "E-commerce Platform",
    description:
      "A fully responsive online store built with React and Node.js, featuring user authentication, product management, and secure payment processing.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video URL
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    screenshots: [
      "https://via.placeholder.com/800x450.png?text=E-commerce+Screenshot+1",
      "https://via.placeholder.com/800x450.png?text=E-commerce+Screenshot+2",
      "https://via.placeholder.com/800x450.png?text=E-commerce+Screenshot+3",
    ],
    github: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: "2",
    name: "Social Media Dashboard",
    description:
      "A real-time analytics dashboard for social media management, offering insights on user engagement, follower growth, and content performance.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video URL
    technologies: ["React", "D3.js", "Node.js", "Express"],
    screenshots: [
      "https://via.placeholder.com/800x450.png?text=Social+Media+Screenshot+1",
      "https://via.placeholder.com/800x450.png?text=Social+Media+Screenshot+2",
      "https://via.placeholder.com/800x450.png?text=Social+Media+Screenshot+3",
    ],
    github: "https://github.com/yourusername/social-media-dashboard",
  },
  {
    id: "3",
    name: "Fitness Tracker App",
    description:
      "A mobile app for tracking workouts, nutrition, and progress, with features like goal setting, progress charts, and social sharing.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video URL
    technologies: ["React Native", "Firebase", "Redux"],
    screenshots: [
      "https://via.placeholder.com/800x450.png?text=Fitness+Tracker+Screenshot+1",
      "https://via.placeholder.com/800x450.png?text=Fitness+Tracker+Screenshot+2",
      "https://via.placeholder.com/800x450.png?text=Fitness+Tracker+Screenshot+3",
    ],
    github: "https://github.com/yourusername/fitness-tracker-app",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pt-9">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-extrabold mb-6 text-gray-800">
            {project.name}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {project.description}
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 mb-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-bold transition duration-300 flex items-center"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
                <a
                  href="#"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-bold transition duration-300 flex items-center"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src={project.videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Project Video"
                ></iframe>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <FaPlay className="text-4xl text-indigo-600" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mt-16 mb-8 text-gray-800">
            Screenshots
          </h2>
          <div className="relative">
            <motion.div
              key={activeScreenshot}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src={project.screenshots[activeScreenshot]}
                alt={`Screenshot ${activeScreenshot + 1}`}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-4">
              {project.screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreenshot(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeScreenshot ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Key Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Responsive design for all devices",
                "Intuitive and user-friendly interface",
                "High-performance optimization",
                "Comprehensive documentation included",
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
