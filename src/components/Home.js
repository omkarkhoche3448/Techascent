import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import image1 from "./image1.png";
import image2 from "./image2.jpg";
import image3 from "./image3.webp";
import social from "./prImages/social.jpg";
import ecom from "./prImages/ecom.png";
import code from "./prImages/code.png";
import fitness from "./prImages/fitness.jpg";
import food from "./prImages/food.png";
import job from "./prImages/job.png";
import {
  faHeadset,
  faStar,
  faLaptopCode,
  faBrain,
  faClock,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import Testimonials from "./Testimonials";

const projects = [
  {
    id: 1,
    name: "MBBS Abroad Consultation Platform",
    description:
      "An all-in-one platform for MBBS aspirants aiming to study medicine abroad. The platform provides AI-driven recommendations for universities and countries, guiding students through the entire admission process. Features include a virtual assistant powered by a chatbot, scholarship opportunities, and direct access to application resources, all designed to simplify the complexities of pursuing medical education overseas.",
    videoUrl: "https://www.youtube.com/embed/your-video-id", // Replace with your actual video URL
    tags: ["MERN", "AWS (EC2, S3, CloudFront)"],
    demo: "http://mbbsroutes.com",
    image:
      "https://res.cloudinary.com/dkbzscmmq/image/upload/v1733998424/Projects/sruxo05lwoijdaohm1i8.png",
    github: "https://github.com/yourusername/mbbs-abroad-platform",
  },
  {
    id: 2,
    name: "Brainwave Academy-EdTech",
    description:
      "An innovative EdTech platform designed to enhance the learning experience with interactive video lessons, quizzes, and personalized course recommendations. Brainwave Academy focuses on empowering students to learn at their own pace with tools that support real-time progress tracking, community-driven learning, and AI-powered course suggestions to help learners achieve their academic goals efficiently.",
    image:
      "https://res.cloudinary.com/dkbzscmmq/image/upload/v1728483934/Projects/dfmxk9unh92ms43vul9g.png",
    github: "https://github.com/yourusername/brainwave-academy",
    demo: "https://brainwaveacademy.vercel.app",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    name: "CineFlex Movies",
    description:
      "CineFlex is a cutting-edge movie discovery platform that allows users to easily browse movies, watch trailers, and add their favorites to a personalized wish list. The app’s sleek design and intuitive user interface make movie exploration enjoyable, while seamless integration with popular movie APIs provides up-to-date information on movie ratings, genres, and release dates.",
    image:
      "https://res.cloudinary.com/dkbzscmmq/image/upload/v1728483936/Projects/weqy7bhqkf6njmuvs3il.png",
    github: "https://github.com/yourusername/cineflex-movies",
    demo: "https://cineflex-movies.vercel.app",
    tags: ["React", "Node.js", "API Integration"],
  },
  {
    id: 4,
    name: "E-commerce Platform",
    description:
      "A fully responsive and scalable e-commerce platform built with React and Node.js, allowing users to browse products, add them to their shopping cart, and complete secure transactions through integrated payment gateways. The admin panel empowers store owners to manage products, track orders, and analyze sales data. This project focuses on providing a seamless shopping experience across all devices and screen sizes.",
    image: ecom,
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://demo-ecommerce.example.com",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 5,
    name: "Social Media Dashboard",
    description:
      "A real-time analytics dashboard designed for social media management, providing insights into engagement, reach, and audience demographics. Built using Vue.js and D3.js, the platform offers visually appealing charts and data visualizations to help businesses track social media performance and make data-driven decisions. Firebase is used for seamless data synchronization and real-time updates.",
    image: social,
    github: "https://github.com/yourusername/social-media-dashboard",
    demo: "https://demo-dashboard.example.com",
    tags: ["Vue.js", "D3.js", "Firebase"],
  },
  {
    id: 6,
    name: "Fitness Tracker App",
    description:
      "A mobile app built with Flutter that helps users track their workouts, nutrition, and overall fitness progress. The app allows users to log exercises, set fitness goals, and monitor their daily calorie intake. It also integrates with AWS for cloud storage and real-time data synchronization, providing users with a personalized fitness journey and insights to achieve their health goals.",
    image: fitness,
    github: "https://github.com/yourusername/fitness-tracker-app",
    demo: "https://demo-fitness.example.com",
    tags: ["Flutter", "GraphQL", "AWS"],
  },
  {
    id: 7,
    name: "Code Editor",
    description:
      "A versatile, cloud-based code editor designed to provide developers with an enhanced coding environment. This editor supports syntax highlighting, auto-completion, error detection, and custom extensions. It integrates with MongoDB and AWS to store user code and projects, making it an ideal tool for developers who want to code from anywhere with a seamless experience across devices.",
    image: code,
    github: "https://github.com/yourusername/code-editor",
    demo: "https://demo-code-editor.example.com",
    tags: ["React", "MongoDB", "AWS"],
  },
  {
    id: 8,
    name: "AI-Powered Job Hunt Platform",
    description:
      "A job search platform that leverages AI to recommend the most relevant job opportunities based on user profiles, skills, and preferences. The platform uses machine learning algorithms to match job seekers with companies that fit their qualifications, while providing resources like resume building, interview tips, and salary predictions to help users succeed in their job search.",
    image: job,
    github: "https://github.com/yourusername/job-hunt-platform",
    demo: "https://demo-job-hunt.example.com",
    tags: ["React", "Node.js", "AI"],
  },
  {
    id: 9,
    name: "Online Food Ordering App",
    description:
      "An intuitive food ordering app that lets users browse menus, place orders, and track deliveries with ease. The app integrates with Stripe for secure payments and Firebase for real-time updates on order status. With a smooth and engaging interface, users can quickly select their favorite meals, save them for future orders, and enjoy a hassle-free food delivery experience.",
    image: food,
    github: "https://github.com/yourusername/food-ordering-app",
    demo: "https://demo-food-ordering.example.com",
    tags: ["Flutter", "Firebase", "Stripe"],
  },
];

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

        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 px-10">
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
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-purple-100 transition duration-300 shadow-lg"
            >
              Get Started
            </motion.button> */}
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
          {[
            {
              service: "Web Development & Design",
              image: image1,
              description:
                "Crafting visually stunning and highly responsive websites that capture the essence of your brand. Our designs are tailored to provide a seamless user experience, ensuring your online presence stands out.",
            },
            {
              service: "App Development",
              image: image2,
              description:
                "Building powerful and scalable applications that are custom-made using cutting-edge technologies. We develop apps from scratch, revamp existing ones, and provide maintenance services for ongoing support.",
            },
            {
              service: "Data Analytics & SEO",
              image: image3,
              description:
                "Leveraging data analytics to track and measure the performance of your website. We provide SEO services to help you rank higher on search engines and attract more visitors to your site.",
            },
          ].map(({ service, image, description }, index) => (
            <AnimatedCard key={index}>
              <img
                src={image}
                alt={service}
                className="w-full h-48 object-cover mb-6 rounded"
              />
              <h3 className="text-2xl font-bold mb-4">{service}</h3>
              <p>{description}</p>
            </AnimatedCard>
          ))}
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
          <div className="flex flex-wrap justify-center items-center gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full max-w-sm h-[700px]"
              >
                <div
                  className=" bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    height: "200px",
                  }}
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow overflow-hidden">
                    {project.description}
                  </p>
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
                  <div className="flex justify-between items-center mt-auto">
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
