import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-20 h-20 bg-purple-100 rounded-br-full z-0"></div>
    <div className="relative z-10">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full border-4 border-purple-500 mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
      <p className="text-gray-600 mb-4">{testimonial.company}</p>
      <p className="text-gray-800 italic">"{testimonial.text}"</p>
    </div>
  </motion.div>
);

function Testimonials() {
  const testimonials = [
    {
      name: "Amit Patil",
      company: "Hotel Delights",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Working with this team was an absolute pleasure. They transformed our online presence and helped us reach new heights.",
    },
    {
      name: "Priya Patel",
      company: "DesignHub",
      image: "https://randomuser.me/api/portraits/women/19.jpg",
      text: "The creativity and attention to detail in their work is unparalleled. Our new website has received countless compliments.",
    },
    {
      name: "Rohit Verma",
      company: "InnovateTech",
      image: "https://randomuser.me/api/portraits/men/69.jpg",
      text: "Their expertise in the latest technologies and trends really sets them apart. They delivered beyond our expectations.",
    },
  ];
  

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          {/* <a
            href="/testimonials"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition duration-300 inline-block"
          >
            View All Testimonials
          </a> */}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
