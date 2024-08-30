// components/Contact.js
import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Get in Touch
        </motion.h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              {/* <p className="mb-4">
                <strong>Address:</strong> 123 Web Dev Street, Digital City,
                12345
              </p> */}
              // <p className="mb-4">
              //   <strong>Phone: </strong> 
              //   <a href="tel:+1234567890" className="text-purple-500">
              //     +91 7058373993

              //   </a>
              // </p>
              <p className="mb-4">
            <strong>Email: </strong> 
                <a href="mailto:techascent07@gmail.com" className="text-purple-500">
               techascent07@gmail.com
                </a>
                </p>

              <div className="mt-8">
                <img
                  src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDJ1MXBnaTg5emFzdTlhZDV2MnkwcDNyYzV6b2JwYXoyeGtiNWt0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KCpK92XQHCutWBUz3W/giphy.gif"
                  alt="Contact"
                  className="w-full rounded-lg"
                />
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
