"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioPage() {
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

  const projects = [
    {
      id: "fintech",
      title: "Cloud-Native Fintech SaaS",
      category: "Cloud & DevOps",
      description:
        "Re-architected legacy infrastructure with AWS & Kubernetes, automated deployments, and boosted uptime to 99.99%.",
      challenge:
        "A leading fintech company was struggling with an outdated monolithic architecture that couldn't scale to meet growing demand. Frequent outages and slow deployments were impacting their business.",
      solution:
        "We implemented a cloud-native architecture on AWS using containerization with Kubernetes. Our team developed a comprehensive CI/CD pipeline with GitOps workflows and implemented infrastructure as code using Terraform.",
      results: [
        "Reduced deployment time from days to minutes",
        "Improved system uptime from 99.5% to 99.99%",
        "Reduced infrastructure costs by 35%",
        "Enabled rapid feature development with microservices",
      ],
      technologies: [
        "AWS",
        "Kubernetes",
        "Terraform",
        "GitOps",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      id: "ecommerce",
      title: "E-commerce Web Experience",
      category: "Web Development",
      description:
        "Built storefront with Next.js & TailwindCSS, real-time analytics dashboard, and payment integrations.",
      challenge:
        "A retail company needed to modernize their online presence with a fast, responsive e-commerce platform that could handle high traffic volumes and provide a seamless shopping experience.",
      solution:
        "We developed a custom e-commerce solution using Next.js for the frontend and a headless CMS for content management. The application featured server-side rendering for SEO optimization, a responsive design with TailwindCSS, and integration with multiple payment gateways.",
      results: [
        "Increased conversion rate by 28%",
        "Improved page load speed by 65%",
        "Enhanced mobile user experience with responsive design",
        "Streamlined inventory management with real-time updates",
      ],
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Headless CMS",
        "Stripe",
        "GraphQL",
        "Redis",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare Mobile App",
      category: "App Development",
      description:
        "HIPAA-compliant Flutter mobile app with realtime scheduling, chat, and secure backend.",
      challenge:
        "A healthcare provider needed a secure, HIPAA-compliant mobile application to streamline patient scheduling, enable secure messaging, and provide access to medical records.",
      solution:
        "We built a cross-platform mobile application using Flutter with a secure Firebase backend. The app featured real-time appointment scheduling, encrypted messaging, and secure access to patient records. We implemented comprehensive authentication and authorization controls to ensure HIPAA compliance.",
      results: [
        "Reduced appointment no-shows by 45%",
        "Improved patient satisfaction scores by 32%",
        "Streamlined administrative workflows",
        "Enabled secure access to medical information",
      ],
      technologies: [
        "Flutter",
        "Firebase",
        "Cloud Functions",
        "OAuth 2.0",
        "WebRTC",
        "FHIR API",
      ],
    },
    {
      id: "analytics",
      title: "Data Analytics Platform",
      category: "Data & Analytics",
      description:
        "Built scalable data pipeline and interactive dashboard for real-time business intelligence.",
      challenge:
        "A multinational corporation was struggling to make sense of their disparate data sources and needed a unified analytics platform to drive business decisions.",
      solution:
        "We designed and implemented a comprehensive data pipeline using AWS services, including S3, Glue, and Redshift. We developed interactive dashboards with Tableau and implemented machine learning models for predictive analytics.",
      results: [
        "Consolidated data from 12+ sources into a unified platform",
        "Reduced reporting time from days to minutes",
        "Enabled data-driven decision making across departments",
        "Implemented predictive models with 85% accuracy",
      ],
      technologies: [
        "AWS Glue",
        "Redshift",
        "Tableau",
        "Python",
        "Apache Airflow",
        "TensorFlow",
      ],
    },
    {
      id: "iot",
      title: "IoT Monitoring System",
      category: "IoT & Edge Computing",
      description:
        "Developed end-to-end IoT solution for industrial equipment monitoring with edge computing.",
      challenge:
        "A manufacturing company needed to monitor their industrial equipment in real-time to predict maintenance needs and prevent costly downtime.",
      solution:
        "We developed an end-to-end IoT solution with custom sensors, edge computing devices, and a cloud-based analytics platform. The system collected and processed data at the edge, sending only relevant information to the cloud for analysis and visualization.",
      results: [
        "Reduced equipment downtime by 37%",
        "Decreased maintenance costs by 25%",
        "Extended equipment lifespan through predictive maintenance",
        "Improved operational efficiency with real-time monitoring",
      ],
      technologies: [
        "Arduino",
        "Raspberry Pi",
        "MQTT",
        "AWS IoT Core",
        "Time Series Database",
        "React",
      ],
    },
    {
      id: "security",
      title: "Security Compliance Platform",
      category: "Security & Compliance",
      description:
        "Implemented automated security scanning and compliance reporting for financial services.",
      challenge:
        "A financial services company needed to ensure compliance with multiple regulatory frameworks while maintaining a strong security posture.",
      solution:
        "We developed an automated security and compliance platform that continuously scanned infrastructure and applications for vulnerabilities and compliance issues. The system generated comprehensive reports and dashboards for different stakeholders.",
      results: [
        "Achieved compliance with SOC 2, PCI DSS, and GDPR",
        "Reduced security incident response time by 60%",
        "Automated 85% of compliance reporting tasks",
        "Identified and remediated critical vulnerabilities",
      ],
      technologies: [
        "OWASP ZAP",
        "Nessus",
        "Docker",
        "Kubernetes",
        "Terraform",
        "ELK Stack",
      ],
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
              Our Portfolio
            </motion.h1>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Explore our recent projects and see how we&apos;ve helped
              businesses across industries achieve their technology goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerVariants}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeInVariants}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl group"
                >
                  <div className="h-48 bg-gray-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-blue-900/50">
                      <span className="text-2xl font-bold text-white">
                        {project.title.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
                    >
                      View Case Study
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
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
                Featured Project
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A closer look at one of our most impactful recent projects.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-80 lg:h-auto bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-blue-900/50">
                    <span className="text-3xl font-bold text-white">
                      Fintech
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Cloud-Native Fintech SaaS
                  </h3>
                  <p className="text-gray-300 mb-6">
                    A leading fintech company was struggling with an outdated
                    monolithic architecture that couldn&apos;t scale to meet
                    growing demand. We implemented a cloud-native architecture
                    on AWS using containerization with Kubernetes.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-white">
                      Key Results:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
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
                        <span className="text-gray-300">
                          Reduced deployment time from days to minutes
                        </span>
                      </li>
                      <li className="flex items-start">
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
                        <span className="text-gray-300">
                          Improved system uptime from 99.5% to 99.99%
                        </span>
                      </li>
                      <li className="flex items-start">
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
                        <span className="text-gray-300">
                          Reduced infrastructure costs by 35%
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/portfolio/fintech"
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    View Full Case Study
                  </Link>
                </div>
              </div>
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
              Ready to Build Something Great?
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
