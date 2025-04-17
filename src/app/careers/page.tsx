"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CareersPage() {
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

  const jobOpenings = [
    {
      id: "senior-cloud-engineer",
      title: "Senior Cloud Engineer",
      location: "Remote",
      type: "Full-time",
      description:
        "We're looking for a Senior Cloud Engineer to design and implement scalable cloud solutions for our clients. You'll work with cutting-edge technologies and collaborate with cross-functional teams.",
      requirements: [
        "5+ years of experience with AWS, Azure, or GCP",
        "Strong knowledge of infrastructure as code (Terraform, CloudFormation)",
        "Experience with containerization (Docker, Kubernetes)",
        "Understanding of networking, security, and compliance in cloud environments",
        "Excellent problem-solving and communication skills",
      ],
      responsibilities: [
        "Design and implement cloud architectures for client projects",
        "Automate infrastructure deployment and management",
        "Optimize cloud resources for performance and cost",
        "Collaborate with development teams to ensure smooth deployment",
        "Stay current with cloud technologies and best practices",
      ],
    },
    {
      id: "fullstack-developer",
      title: "Fullstack Developer",
      location: "Remote",
      type: "Full-time",
      description:
        "We're seeking a talented Fullstack Developer to build modern web applications using Next.js, React, and Node.js. You'll be responsible for both frontend and backend development.",
      requirements: [
        "3+ years of experience with React and modern JavaScript",
        "Experience with Next.js and server-side rendering",
        "Knowledge of Node.js and RESTful API design",
        "Familiarity with database technologies (SQL, NoSQL)",
        "Understanding of web performance optimization",
      ],
      responsibilities: [
        "Develop responsive and accessible user interfaces",
        "Build scalable backend services and APIs",
        "Collaborate with designers to implement UI/UX designs",
        "Write clean, maintainable, and well-tested code",
        "Participate in code reviews and technical discussions",
      ],
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      description:
        "We're looking for a DevOps Engineer to streamline our development and deployment processes. You'll implement CI/CD pipelines and ensure the reliability of our systems.",
      requirements: [
        "3+ years of experience in DevOps or SRE roles",
        "Strong knowledge of CI/CD tools (Jenkins, GitHub Actions, GitLab CI)",
        "Experience with configuration management (Ansible, Chef, Puppet)",
        "Familiarity with monitoring and observability tools",
        "Understanding of security best practices",
      ],
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Automate build, test, and deployment processes",
        "Set up monitoring and alerting systems",
        "Troubleshoot and resolve infrastructure issues",
        "Collaborate with development teams to improve processes",
      ],
    },
    {
      id: "mobile-developer",
      title: "Mobile Developer",
      location: "Remote",
      type: "Full-time",
      description:
        "We're seeking a Mobile Developer with experience in Flutter or React Native to build cross-platform mobile applications for our clients.",
      requirements: [
        "3+ years of experience with Flutter or React Native",
        "Understanding of mobile app architecture and state management",
        "Experience with RESTful APIs and data persistence",
        "Knowledge of app store submission processes",
        "Familiarity with native modules and platform-specific code",
      ],
      responsibilities: [
        "Develop cross-platform mobile applications",
        "Implement responsive and intuitive user interfaces",
        "Integrate with backend services and APIs",
        "Optimize app performance and user experience",
        "Collaborate with design and backend teams",
      ],
    },
  ];

  const benefits = [
    {
      title: "Remote-First Culture",
      description:
        "Work from anywhere with flexible hours and a focus on results rather than location.",
      icon: (
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      title: "Competitive Compensation",
      description:
        "We offer competitive salaries, performance bonuses, and equity options for all team members.",
      icon: (
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, wellness programs, and mental health support for you and your family.",
      icon: (
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Professional Growth",
      description:
        "Continuous learning opportunities, conference stipends, and a dedicated budget for courses and certifications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
    {
      title: "Work-Life Balance",
      description:
        "Generous PTO, flexible schedules, and a culture that respects your time outside of work.",
      icon: (
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
      ),
    },
    {
      title: "Collaborative Environment",
      description:
        "Work with talented professionals in a supportive, inclusive, and collaborative culture.",
      icon: (
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
              Join Our Team
            </motion.h1>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              We&apos;re looking for talented individuals who are passionate
              about technology and innovation to help us build the future.
            </motion.p>
            <motion.div variants={fadeInVariants}>
              <Link
                href="#openings"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-black">
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
                Why Join Nuvianix?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer a supportive, innovative environment where you can grow
                your career while working on cutting-edge technologies.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
                >
                  <div className="bg-purple-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-20 bg-gray-900">
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
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for
                your skills and interests.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              className="space-y-8"
            >
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={fadeInVariants}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700"
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                            {job.location}
                          </span>
                          <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <button className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                        Apply Now
                      </button>
                    </div>

                    <p className="text-gray-300 mb-6">{job.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
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
                              <span className="text-gray-300">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
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
                              <span className="text-gray-300">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-black">
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
                Our Application Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We&apos;ve designed a straightforward process to help us find
                the right candidates while respecting your time.
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
                <h3 className="text-xl font-bold mb-4 text-white">
                  Application
                </h3>
                <p className="text-gray-400">
                  Submit your resume and a brief cover letter explaining why
                  you&apos;re interested in joining our team.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 relative"
              >
                <div className="absolute -top-4 -left-4 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Initial Interview
                </h3>
                <p className="text-gray-400">
                  A 30-minute video call with our HR team to discuss your
                  background, experience, and expectations.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 relative"
              >
                <div className="absolute -top-4 -left-4 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Technical Assessment
                </h3>
                <p className="text-gray-400">
                  A practical assessment relevant to the role, designed to
                  evaluate your skills and problem-solving abilities.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 relative"
              >
                <div className="absolute -top-4 -left-4 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Final Interview
                </h3>
                <p className="text-gray-400">
                  A comprehensive discussion with the team lead and potential
                  colleagues to ensure a good mutual fit.
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              We&apos;re always looking for talented individuals to join our
              team. If you don&apos;t see a role that matches your skills,
              submit your resume for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#openings"
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
