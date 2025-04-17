"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! We'll be in touch soon.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      service: "",
    });
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const contactMethods = [
    {
      title: "Email",
      value: "info@nuvianix.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Phone",
      value: "+1 (555) 123-4567",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: "Location",
      value: "New York, NY",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Have a project in mind or want to learn more about our services?
              We&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerVariants}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div variants={fadeInVariants}>
                <h2 className="text-3xl font-bold mb-8 text-white">
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-10">
                  We&apos;re here to help with any questions you might have
                  about our services, pricing, or how we can help your business
                  succeed in the digital world.
                </p>

                <div className="space-y-6 mb-10">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-gray-800 p-3 rounded-lg mr-4">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {method.title}
                        </h3>
                        <p className="text-gray-300">{method.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Office Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="text-white font-medium">
                        9:00 AM - 6:00 PM EST
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Saturday</span>
                      <span className="text-white font-medium">
                        10:00 AM - 2:00 PM EST
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sunday</span>
                      <span className="text-white font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={fadeInVariants}>
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                  <h2 className="text-2xl font-bold mb-6 text-white">
                    Send Us a Message
                  </h2>

                  {formStatus.submitted ? (
                    <div className="bg-green-500/20 border border-green-500 text-green-300 p-4 rounded-lg mb-6">
                      {formStatus.message}
                    </div>
                  ) : formStatus.error ? (
                    <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg mb-6">
                      {formStatus.message}
                    </div>
                  ) : null}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Service You&apos;re Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="cloud">Cloud Solutions</option>
                        <option value="devops">DevOps Engineering</option>
                        <option value="web">Web Development</option>
                        <option value="app">App Development</option>
                        <option value="sqa">SQA & Test Automation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div
              variants={fadeInVariants}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services and how we
                work with clients.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-bold mb-3 text-white">
                  What industries do you specialize in?
                </h3>
                <p className="text-gray-300">
                  We work with clients across various industries, including
                  fintech, healthcare, e-commerce, manufacturing, and more. Our
                  team has experience delivering solutions for diverse business
                  needs.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-bold mb-3 text-white">
                  How long does a typical project take?
                </h3>
                <p className="text-gray-300">
                  Project timelines vary depending on scope and complexity. A
                  simple web application might take 4-8 weeks, while a
                  comprehensive cloud migration could take 3-6 months. We&apos;ll
                  provide a detailed timeline during our initial consultation.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-bold mb-3 text-white">
                  Do you offer ongoing support after project completion?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer various support and maintenance packages to
                  ensure your solution continues to perform optimally. We can
                  tailor a support plan to meet your specific needs and budget.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-bold mb-3 text-white">
                  How do you handle project pricing?
                </h3>
                <p className="text-gray-300">
                  We offer flexible pricing models, including fixed-price
                  projects, time and materials, and retainer arrangements. After
                  understanding your requirements, we&apos;ll recommend the most
                  suitable approach for your project.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-bold mb-3 text-white">
                  Can you work with our existing team?
                </h3>
                <p className="text-gray-300">
                  Absolutely! We often collaborate with in-house teams,
                  providing specialized expertise while integrating seamlessly
                  with your existing workflows and processes.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-bold mb-3 text-white">
                  What is your development process?
                </h3>
                <p className="text-gray-300">
                  We follow an agile methodology with regular sprints, demos,
                  and feedback cycles. This approach ensures transparency,
                  flexibility, and allows us to adapt to changing requirements
                  throughout the project.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="max-w-7xl mx-auto"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 h-96 flex items-center justify-center">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-gray-500 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="text-gray-400">
                  Interactive map will be displayed here
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Contact us today to discuss how Nuvianix can help you achieve your
              technology goals and drive your business forward.
            </p>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
