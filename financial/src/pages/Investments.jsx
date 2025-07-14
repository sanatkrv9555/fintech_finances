import React from "react";
import zerodha from "../assets/zerodha.png";
import groww from "../assets/groww.png";
import upstox from "../assets/upstox.png";
import angel from "../assets/angel.png";
import paytm from "../assets/paytm.png";
import icici from "../assets/icici.png";

const investments = [
  { name: "Zerodha", img: zerodha, url: "https://zerodha.com" },
  { name: "Groww", img: groww, url: "https://groww.in" },
  { name: "Upstox", img: upstox, url: "https://upstox.com" },
  { name: "Angel One", img: angel, url: "https://angelone.in" },
  { name: "Paytm Money", img: paytm, url: "https://paytmmoney.com" },
  { name: "ICICI Direct", img: icici, url: "https://icicidirect.com" },
];

const Investments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100 p-6 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 animate-fade-in-down">
          📈 Top Places to Invest
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {investments.map((site, index) => (
            <a
              href={site.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-all duration-300 border border-gray-200 p-4 rounded-2xl shadow hover:shadow-xl bg-white flex flex-col items-center"
            >
              <img
                src={site.img}
                alt={site.name}
                className="w-32 h-32 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">{site.name}</h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investments;
