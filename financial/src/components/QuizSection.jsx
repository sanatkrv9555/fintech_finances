import React, { useState } from "react";
import QuizBarGraph from "./QuizBarGraph";

const quizData = [
  {
    question: "What does a PAN Card primarily help with?",
    options: ["Opening a bank account", "Paying taxes", "Buying groceries", "Booking flights"],
    answer: "Paying taxes",
  },
  {
    question: "What is the full form of EMI?",
    options: ["Easy Monthly Installment", "Equal Monthly Investment", "Equal Monthly Installment", "Equity Money Installment"],
    answer: "Equal Monthly Installment",
  },
  {
    question: "Which type of bank account is best for daily use?",
    options: ["Fixed Deposit", "Current Account", "Savings Account", "Recurring Deposit"],
    answer: "Savings Account",
  },
  {
    question: "Which document is required to file income tax in India?",
    options: ["Voter ID", "PAN Card", "Ration Card", "Passport"],
    answer: "PAN Card",
  },
  {
    question: "Which financial tool earns interest over time?",
    options: ["Debit Card", "Credit Card", "Savings Account", "Loan"],
    answer: "Savings Account",
  },
  {
    question: "What does CIBIL Score reflect?",
    options: ["Bank balance", "Tax status", "Creditworthiness", "Income"],
    answer: "Creditworthiness",
  },
];

const QuizSection = () => {
  const [answers, setAnswers] = useState(Array(6).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (qIndex, option) => {
    const updated = [...answers];
    updated[qIndex] = option;
    setAnswers(updated);
  };

  const getScore = () => {
    return answers.reduce((score, answer, i) => (
      answer === quizData[i].answer ? score + 1 : score
    ), 0);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-blue-900 p-8 rounded-2xl max-w-4xl mx-auto mt-10 shadow-xl border border-gray-200">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-blue-800">
        🧠 Check Your Knowledge
      </h2>

      {!submitted ? (
        <>
          {quizData.map((q, index) => (
            <div
              key={index}
              className="mb-6 border border-gray-200 p-5 rounded-lg bg-gray-50 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-3">
                {index + 1}. {q.question}
              </h3>
              <div className="space-y-2">
                {q.options.map((option, optIndex) => (
                  <label
                    key={optIndex}
                    className="block cursor-pointer hover:text-blue-600 transition"
                  >
                    <input
                      type="radio"
                      name={`q${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleOptionChange(index, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-8">
            <button
              onClick={handleSubmit}
              className="bg-blue-700 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-800 transition"
            >
              ✅ Submit Quiz
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-bold text-green-600 mt-4 mb-6">
            🎉 You scored {getScore()} / {quizData.length}
          </h3>
          <QuizBarGraph userScore={getScore()} maxScore={quizData.length} />
        </div>
      )}
    </div>
  );
};

export default QuizSection;
