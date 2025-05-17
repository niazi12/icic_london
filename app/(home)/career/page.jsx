"use client";

import { Send, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Career = () => {
  const positions = [
    {
      title: "Lift Engineer",
      description:
        "Experienced with installation, maintenance, and repair of lift systems. Certification and hands-on field experience required.",
    },
    {
      title: "Electrical Engineer",
      description:
        "Responsible for electrical system design, troubleshooting, and ensuring compliance with safety regulations.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className=""
    >
      {/* Hero Section */}
      <section className="bg-business-800 text-white py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(http://googleusercontent.com/image_generation_content/0)`,
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold mb-4"
          >
            Careers at Our Company
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl max-w-3xl mx-auto"
          >
            Join our growing team of professionals who are passionate about
            delivering exceptional building and maintenance services across
            London.
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">
            Why Work With Us?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 mb-4"
          >
            At our company, we value integrity, dedication, and innovation. We
            offer opportunities for career growth, continuous learning, and the
            chance to work on meaningful projects that make a real impact.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-gray-700">
            Whether you're just starting your career or bringing years of
            experience, we’re always looking for enthusiastic individuals to
            join our mission of excellence.
          </motion.p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-10"
          >
            Current Job Openings
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-business-700 w-6 h-6" />
                  <h3 className="text-xl font-semibold">{position.title}</h3>
                </div>
                <p className="text-gray-700">{position.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email CV Section */}
      <section className="py-20 bg-business-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-6"
          >
            We'd Love to Hear from You
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 mb-4"
          >
            Think you’d be a great fit? Send us your CV and a short cover
            letter telling us why. We value passion, commitment, and a
            willingness to learn.
          </motion.p>

          <motion.a
            href="mailto:kamrul@icic.london"
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-business-700 hover:bg-business-800 transition text-white font-medium py-3 px-6 rounded-full text-lg"
          >
            <Send className="w-5 h-5" />
            Email Your CV to kamrul@icic.london
          </motion.a>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 mt-4"
          >
            Please include the job title in the subject line of your email.
          </motion.p>
        </div>
      </section>
    </motion.main>
  );
};

export default Career;