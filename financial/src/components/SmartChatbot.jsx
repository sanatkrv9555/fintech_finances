import React, { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import financeDataset from "../data/financeDataset";

const SmartChatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! Ask me any financial question!" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getAnswerFromDataset = (query) => {
    const lowerQuery = query.toLowerCase();
    for (let item of financeDataset) {
      if (item.questionKeywords.some((word) => lowerQuery.includes(word))) {
        return item.answer;
      }
    }
    return "Sorry, I couldn't understand. Try asking about EMI, credit card, SIP, or PAN card.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botReply = {
      sender: "bot",
      text: getAnswerFromDataset(input),
    };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          <FiMessageSquare size={22} />
        </button>
      ) : (
        <div className="w-80 h-96 bg-white border rounded-xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-black text-white p-3 flex justify-between items-center">
            <span>💬 Smart Chatbot</span>
            <button onClick={() => setIsOpen(false)} className="text-sm">✖</button>
          </div>

          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-200 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
              className="flex-1 px-2 py-1 border rounded"
            />
            <button
              onClick={sendMessage}
              className="bg-black text-white px-3 rounded hover:scale-105 transition"
            >
              <IoIosSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartChatbot;
