// // client/src/components/StockPredictor.jsx
// import { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// const suggestions = ["TATASTEEL.NS", "RELIANCE.NS", "AAPL", "MSFT", "INFY.NS"];

// const StockPredictor = () => {
//   const [symbol, setSymbol] = useState("");
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handlePredict = async () => {
//     if (!symbol) return;
//     setLoading(true);
//     setError("");
//     setResult(null);

//     try {
//       const res = await axios.get(`http://localhost:5000/api/stock/${symbol}`);
//       setResult(res.data);
//     } catch (err) {
//       setError("❌ Unable to fetch stock data. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="bg-white p-6 rounded-xl shadow-lg mb-10 max-w-2xl mx-auto"
//     >
//       <h2 className="text-3xl font-bold mb-4 text-indigo-800 text-center">📊 Stock Market Predictor</h2>

//       <div className="flex flex-col sm:flex-row items-center gap-4">
//         <input
//           type="text"
//           list="symbol-options"
//           placeholder="Enter stock symbol (e.g. RELIANCE.NS)"
//           value={symbol}
//           onChange={(e) => setSymbol(e.target.value.toUpperCase())}
//           className="w-full sm:flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />
//         <datalist id="symbol-options">
//           {suggestions.map((item, idx) => (
//             <option value={item} key={idx} />
//           ))}
//         </datalist>

//         <button
//           onClick={handlePredict}
//           className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
//         >
//           {loading ? "⏳ Predicting..." : "🔍 Predict"}
//         </button>
//       </div>

//       {result && (
//         <div className="mt-6 bg-green-50 border border-green-300 rounded-lg p-4 text-green-900 shadow-inner space-y-2">
//           <p><strong>🔖 Symbol:</strong> {result.symbol}</p>
//           <p><strong>📉 Previous Close:</strong> ₹{result.previousClose}</p>
//           <p><strong>📈 Latest Close:</strong> ₹{result.latestClose}</p>
//           <p><strong>📊 Prediction:</strong> <span className="font-bold text-lg">{result.prediction}</span></p>
//         </div>
//       )}

//       {error && (
//         <div className="mt-6 bg-red-50 border border-red-300 rounded-lg p-4 text-red-800 shadow-inner">
//           {error}
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default StockPredictor;
import { useState } from "react";

const StockPredictor = () => {
  const [symbol, setSymbol] = useState("GOOG");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">📈 Stock Chart Viewer</h2>
      <form onSubmit={handleSubmit} className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter stock symbol (e.g. TATASTEEL.NS,GOOG,AAPL)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="flex-1 border p-2 rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Load Chart
        </button>
      </form>

      {submitted && (
        <div>
          <h3 className="text-xl font-semibold mb-2 text-center">Chart for {symbol}</h3>
          <img
            src={`http://127.0.0.1:5001/plot?stock=${symbol}`}
            alt={`${symbol} chart`}
            className="w-full border rounded"
          />
        </div>
      )}
    </div>
  );
};

export default StockPredictor;


