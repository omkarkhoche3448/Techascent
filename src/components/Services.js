// components/Services.js
import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

const services = [
  {
    title: "Web Development",
    description:
      "Create stunning, responsive websites tailored to your brand and optimized for performance.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mobile App Development",
    description:
      "Build powerful, user-friendly mobile applications for iOS and Android platforms.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "UI/UX Design",
    description:
      "Craft intuitive and visually appealing user interfaces that enhance user experience.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud Solutions",
    description:
      "Implement scalable and secure cloud infrastructure to support your digital operations.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Data Analytics",
    description:
      "Harness the power of your data with advanced analytics and visualization tools.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with cutting-edge security solutions and best practices.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

function Services() {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Our Services
      </motion.h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardBody className="p-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
              </CardBody>
              <CardFooter className="flex-col items-start">
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-sm mb-4">{service.description}</p>
                <Button color="primary" size="sm">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
