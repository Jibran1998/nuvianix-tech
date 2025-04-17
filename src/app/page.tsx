"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

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
      title: "Cloud Solutions",
      description:
        "Enterprise-grade cloud architectures on AWS, Azure, and GCP with infrastructure as code and optimization.",
      icon: "cloud",
      link: "/services#cloud",
    },
    {
      title: "DevOps Engineering",
      description:
        "Streamline your development workflow with CI/CD automation, configuration management, and monitoring.",
      icon: "settings",
      link: "/services#devops",
    },
    {
      title: "Web Development",
      description:
        "Modern web applications built with Next.js, React, and other cutting-edge technologies.",
      icon: "code",
      link: "/services#web",
    },
    {
      title: "App Development",
      description:
        "Cross-platform mobile applications with Flutter and React Native for iOS and Android.",
      icon: "smartphone",
      link: "/services#app",
    },
    {
      title: "SQA & Test Automation",
      description:
        "Comprehensive testing strategies with Selenium, Cypress, and Playwright for quality assurance.",
      icon: "check-circle",
      link: "/services#sqa",
    },
  ];

  const projects = [
    {
      title: "Cloud-Native Fintech SaaS",
      description:
        "Re-architected legacy infrastructure with AWS & Kubernetes, automated deployments, and boosted uptime to 99.99%.",
      image: "/images/project1.jpg",
      link: "/portfolio/fintech",
    },
    {
      title: "E-commerce Web Experience",
      description:
        "Built storefront with Next.js & TailwindCSS, real-time analytics dashboard, and payment integrations.",
      image: "/images/project2.jpg",
      link: "/portfolio/ecommerce",
    },
    {
      title: "Healthcare Mobile App",
      description:
        "HIPAA-compliant Flutter mobile app with realtime scheduling, chat, and secure backend.",
      image: "/images/project3.jpg",
      link: "/portfolio/healthcare",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Overview Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            ref={targetRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              What We Do
            </motion.h2>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-300 mb-12"
            >
              We partner with forward-thinking businesses to design, develop, and
              deploy world-class technology solutions—from DevOps automation to
              high-impact web and mobile apps.
            </motion.p>

            <motion.div
              variants={fadeInVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Senior Engineers
                </h3>
                <p className="text-gray-400">
                  Our team brings enterprise-grade experience to every project,
                  ensuring quality and scalability.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Rapid Delivery
                </h3>
                <p className="text-gray-400">
                  We deliver solutions quickly without compromising on quality or
                  attention to detail.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Tailored Engagement
                </h3>
                <p className="text-gray-400">
                  Flexible engagement models designed to fit your specific
                  business needs and goals.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions tailored to your business
                needs, from cloud infrastructure to mobile applications.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="inline-block bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500/10 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
              >
                View All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
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
                Featured Projects
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore some of our recent work delivering innovative solutions
                for clients across various industries.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="h-48 bg-gray-700 relative">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-blue-900/50">
                      <span className="text-2xl font-bold text-white">
                        {project.title.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <Link
                      href={project.link}
                      className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center"
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
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              className="text-center mt-12"
            >
              <Link
                href="/portfolio"
                className="inline-block bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500/10 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
              >
                View All Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our
                clients have to say about working with Nuvianix.
              </p>
            </motion.div>

            <TestimonialSlider />
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
              Ready to Transform Your Digital Presence?
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
