"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
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

  const services = [
    {
      id: "cloud",
      title: "Cloud Solutions",
      description:
        "Enterprise-grade cloud architectures on AWS, Azure, and GCP with infrastructure as code and optimization.",
      icon: "cloud",
      features: [
        "Cloud Migration & Modernization",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Serverless Architecture",
        "Containerization (Docker, Kubernetes)",
        "Cloud Cost Optimization",
        "Multi-Cloud Strategy",
      ],
    },
    {
      id: "devops",
      title: "DevOps Engineering",
      description:
        "Streamline your development workflow with CI/CD automation, configuration management, and monitoring.",
      icon: "settings",
      features: [
        "CI/CD Pipeline Implementation",
        "Infrastructure Automation",
        "Configuration Management",
        "Monitoring & Observability",
        "GitOps Workflows",
        "Security Integration (DevSecOps)",
      ],
    },
    {
      id: "web",
      title: "Web Development",
      description:
        "Modern web applications built with Next.js, React, and other cutting-edge technologies.",
      icon: "code",
      features: [
        "Next.js & React Applications",
        "Progressive Web Apps (PWAs)",
        "Responsive Design",
        "API Development & Integration",
        "Performance Optimization",
        "Accessibility Compliance",
      ],
    },
    {
      id: "app",
      title: "App Development",
      description:
        "Cross-platform mobile applications with Flutter and React Native for iOS and Android.",
      icon: "smartphone",
      features: [
        "Flutter Development",
        "React Native Applications",
        "Native iOS & Android",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
    },
    {
      id: "sqa",
      title: "SQA & Test Automation",
      description:
        "Comprehensive testing strategies with Selenium, Cypress, and Playwright for quality assurance.",
      icon: "check-circle",
      features: [
        "Test Strategy Development",
        "Automated UI Testing",
        "API Testing",
        "Performance Testing",
        "Security Testing",
        "Continuous Testing Integration",
      ],
    },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "cloud":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-400"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        );
      case "settings":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-400"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case "code":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-400"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case "smartphone":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-400"
          >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
        );
      case "check-circle":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-400"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-400"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
    }
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
              Our Services
            </motion.h1>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Comprehensive technology solutions tailored to your business needs,
              from cloud infrastructure to mobile applications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerVariants}
            className="max-w-7xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                variants={fadeInVariants}
                className="mb-20 last:mb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:order-2" : ""
                    } space-y-6`}
                  >
                    <div className="bg-purple-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center">
                      {renderIcon(service.icon)}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-300">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-400 mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:order-1" : ""
                    } bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 h-80`}
                  >
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-blue-900/50">
                      <div className="text-center">
                        <div className="bg-purple-500/20 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                          {renderIcon(service.icon)}
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful delivery of
                every project, from initial consultation to ongoing support.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 relative"
              >
                <div className="absolute -top-4 -left-4 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Discover</h3>
                <p className="text-gray-400">
                  We begin by understanding your business, audience, and goals
                  to create solutions that truly address your needs.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 relative"
              >
                <div className="absolute -top-4 -left-4 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Design</h3>
                <p className="text-gray-400">
                  We architect elegant, scalable, and user-friendly systems that
                  balance innovation with practicality.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 relative"
              >
                <div className="absolute -top-4 -left-4 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Develop</h3>
                <p className="text-gray-400">
                  We build robust applications with agility and precision, using
                  modern technologies and best practices.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 relative"
              >
                <div className="absolute -top-4 -left-4 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Deliver</h3>
                <p className="text-gray-400">
                  We ship and scale with confidence, backed by automation,
                  testing, and ongoing support.
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
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Get Started?
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
