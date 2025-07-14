// import React from "react";
import { Link } from "react-router-dom";
import TopicCard from "../components/TopicCard";
import { financialTopics } from "../data/financialTopics";
import SmartChatbot from "../components/SmartChatbot";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#002244] via-[#003366] to-[#004488] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
            🚀 Welcome to FinEdu
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            AI Powered Financial Learning Platform for Beginners.
          </p>
          <Link
            to="/investments"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition shadow-lg"
          >
            💹 Start Exploring
          </Link>
        </motion.section>

        {/* Topics Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {financialTopics.map((topic, index) => (
            <motion.div
  key={index}
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  custom={index}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 400, damping: 30 }}
  className="bg-white text-gray-800 rounded-2xl p-6 
    border border-gray-300 
    shadow-[0_4px_12px_rgba(0,0,0,0.1)] 
    transition-all duration-300"
>
  <TopicCard
    id={topic.id}
    icon={topic.icon}
    title={topic.title}
    subtopics={topic.subtopics}
  />
</motion.div>

          ))}
        </section>

        {/* Quiz Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mb-12"
        >
          <Link
            to="/quiz"
            className="bg-yellow-300 text-black font-bold text-lg sm:text-xl px-8 py-3 rounded-full hover:bg-green-300 transition shadow-lg w-full sm:w-auto"
          >
            🧠 Check Your Knowledge
          </Link>
        </motion.div>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl font-semibold mb-3 text-yellow-400">
            📈 Ready to Invest?
          </h2>
          <p className="text-blue-100 mb-6">
            Discover top platforms trusted by millions of Indian investors.
          </p>
          <Link
            to="/investments"
            className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Explore Investment Platforms
          </Link>
        </motion.section>

        {/* Chatbot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <SmartChatbot />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
