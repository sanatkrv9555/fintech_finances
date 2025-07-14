import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaRobot, FaChartBar, FaBullseye, FaCalculator } from "react-icons/fa";

const cards = [
  {
    icon: <FaCalculator className="text-3xl mb-3 text-yellow-300" />,
    title: "Monthly Expense & EMI Calculator",
    desc: "Plan your spending smartly with intelligent EMI calculations and monthly budget tracking.",
  },
  {
    icon: <FaChartBar className="text-3xl mb-3 text-yellow-300" />,
    title: "Graphical Insights",
    desc: "Visualize quiz results and financial progress through interactive graphs and bar charts.",
  },
  {
    icon: <FaBrain className="text-3xl mb-3 text-yellow-300" />,
    title: "Knowledge Testing",
    desc: "Engage with quick quizzes, test your learning, and earn points to track improvement.",
  },
  {
    icon: <FaRobot className="text-3xl mb-3 text-yellow-300" />,
    title: "AI Chatbot",
    desc: "Ask any finance-related queries and get instant AI-powered responses 24x7.",
  },
  {
    icon: <FaBullseye className="text-3xl mb-3 text-yellow-300" />,
    title: "Goals & Aims",
    desc: "Set financial goals, track monthly savings, and receive smart tips to stay on course.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001d3d] via-[#002e5a] to-[#003f7f] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-yellow-400"
        >
          About FinEdu
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-blue-100 leading-relaxed mb-12"
        >
          💡 <span className="text-white font-semibold">FinEdu</span> is an{" "}
          <span className="font-bold text-white">AI-powered Financial Literacy Platform</span> created by{" "}
          <span className="font-bold text-white">Sanat Kumar Verma</span>. Learn, calculate, and visualize your financial life with powerful interactive tools.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white/10 border border-white/20 p-6 rounded-xl shadow-lg"
            >
              {card.icon}
              <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
              <p className="text-blue-100">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
