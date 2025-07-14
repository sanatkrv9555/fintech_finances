import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const QuizBarGraph = ({ userScore, maxScore }) => {
  const data = [
    { name: "Total", score: maxScore },
    { name: "You", score: userScore },
  ];

  return (
    <div className="w-full h-64 mt-6 bg-white/10 p-4 rounded-xl">
      <h4 className="text-white text-lg mb-4">📊 Your Score Overview</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Bar dataKey="score" fill="#FFD700" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default QuizBarGraph;
