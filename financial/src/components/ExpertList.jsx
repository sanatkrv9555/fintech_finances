import React from "react";

// Dummy expert data
const experts = [
  {
    name: "Ritika Shah",
    role: "Financial Analyst",
    experience: "7 years",
    email: "ritika.shah@example.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ankit Mehra",
    role: "Wealth Advisor",
    experience: "10 years",
    email: "ankit.mehra@example.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Kapoor",
    role: "Tax Consultant",
    experience: "5 years",
    email: "neha.kapoor@example.com",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Aman Gupta",
    role: "Investment Planner",
    experience: "8 years",
    email: "aman.gupta@example.com",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Divya Rao",
    role: "Mutual Fund Specialist",
    experience: "6 years",
    email: "divya.rao@example.com",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Rahul Yadav",
    role: "Credit Advisor",
    experience: "4 years",
    email: "rahul.yadav@example.com",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    name: "Priya Sen",
    role: "Loan Expert",
    experience: "9 years",
    email: "priya.sen@example.com",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
  },
];

const ExpertList = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        💼 Connect with Financial Experts
      </h2>

      {/* Horizontal scrollable container */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="min-w-[260px] bg-gray-50 rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-indigo-500"
            />
            <h3 className="text-lg font-semibold text-center text-gray-800">{expert.name}</h3>
            <p className="text-sm text-center text-gray-600">{expert.role}</p>
            <p className="text-sm text-center text-gray-500">🧠 {expert.experience}</p>
            <p className="text-sm text-center text-blue-600 mt-1">{expert.email}</p>
            <div className="text-center mt-3">
              <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition">
                💬 Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertList;
