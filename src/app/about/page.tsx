"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
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
              About Nuvianix
            </motion.h1>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              We are a team of passionate technologists dedicated to helping
              businesses thrive in the digital era through innovative solutions
              and cutting-edge technologies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInVariants}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Our Story
                </h2>
                <p className="text-gray-300 mb-6">
                  Founded in 2020, Nuvianix emerged from a vision to bridge the
                  gap between complex technology and business success. Our
                  founders, with decades of experience in enterprise technology,
                  recognized that many organizations struggle to leverage modern
                  cloud and software solutions effectively.
                </p>
                <p className="text-gray-300 mb-6">
                  What began as a small team of cloud architects has grown into
                  a comprehensive technology partner, offering end-to-end
                  solutions from infrastructure design to application
                  development.
                </p>
                <p className="text-gray-300">
                  Today, we serve clients across multiple industries, helping
                  them navigate their digital transformation journeys with
                  confidence and clarity.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Our Approach
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-purple-500/20 p-1 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-purple-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Discover</h4>
                      <p className="text-gray-400">
                        We begin by understanding your business, audience, and
                        goals to create solutions that truly address your needs.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500/20 p-1 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-purple-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Design</h4>
                      <p className="text-gray-400">
                        We architect elegant, scalable, and user-friendly
                        systems that balance innovation with practicality.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500/20 p-1 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-purple-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Develop</h4>
                      <p className="text-gray-400">
                        We build robust applications with agility and precision,
                        using modern technologies and best practices.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-500/20 p-1 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-purple-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-bold text-white mb-1">Deliver</h4>
                      <p className="text-gray-400">
                        We ship and scale with confidence, backed by automation,
                        testing, and ongoing support.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div
              variants={fadeInVariants}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the experts behind Nuvianix&apos;s success. Our diverse
                team brings together decades of experience across cloud,
                software, and digital innovation.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Team Member Cards - Placeholders */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="h-64 bg-gray-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-blue-900/50">
                      <span className="text-4xl font-bold text-white">
                        {String.fromCharCode(64 + index)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-white">
                      Team Member {index}
                    </h3>
                    <p className="text-purple-400 mb-4">Position Title</p>
                    <p className="text-gray-400">
                      Brief bio about the team member and their expertise in
                      technology and innovation.
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div
              variants={fadeInVariants}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core principles guide everything we do at Nuvianix, from
                how we build our solutions to how we interact with our clients.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              >
                <div className="bg-purple-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Excellence
                </h3>
                <p className="text-gray-400">
                  We are committed to delivering the highest quality in
                  everything we do, from code to client communication.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              >
                <div className="bg-purple-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Innovation
                </h3>
                <p className="text-gray-400">
                  We embrace new technologies and approaches, constantly seeking
                  better ways to solve complex problems.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              >
                <div className="bg-purple-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Collaboration
                </h3>
                <p className="text-gray-400">
                  We believe in the power of teamwork, both within our
                  organization and in partnership with our clients.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              >
                <div className="bg-purple-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Integrity</h3>
                <p className="text-gray-400">
                  We operate with transparency and honesty, building trust
                  through ethical practices and reliable delivery.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              >
                <div className="bg-purple-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Agility</h3>
                <p className="text-gray-400">
                  We adapt quickly to changing requirements and technologies,
                  ensuring our solutions remain relevant and effective.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              >
                <div className="bg-purple-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Commitment
                </h3>
                <p className="text-gray-400">
                  We are dedicated to our clients&apos; success, going above and
                  beyond to ensure their goals are achieved.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let&apos;s discuss how Nuvianix can help you achieve your
              technology goals and drive your business forward.
            </p>
            <Link
              href="/contact"
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
