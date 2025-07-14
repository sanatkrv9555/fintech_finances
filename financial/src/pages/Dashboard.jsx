// import { useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import { Link } from "react-router-dom";
// import ExpertList from "../components/ExpertList"; // Add this at top

// const Dashboard = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [item, setItem] = useState("");
//   const [amount, setAmount] = useState("");
//   const [date, setDate] = useState("");
//   const [isEssential, setIsEssential] = useState(false);

//   const addExpense = (e) => {
//     e.preventDefault();
//     const newExpense = {
//       item,
//       amount: parseFloat(amount),
//       date,
//       isEssential,
//     };
//     setExpenses([...expenses, newExpense]);
//     setItem("");
//     setAmount("");
//     setDate("");
//     setIsEssential(false);
//   };

//   // --- Analytics ---
//   const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
//   const essentialSpent = expenses
//     .filter((e) => e.isEssential)
//     .reduce((sum, e) => sum + e.amount, 0);
//   const nonEssentialSpent = totalSpent - essentialSpent;
//   const predictedSaving = (nonEssentialSpent * 0.5).toFixed(2); // 50% save

//   // Group expenses by date (daily)
//   const dailyData = expenses.reduce((acc, e) => {
//     const d = new Date(e.date).toLocaleDateString();
//     const found = acc.find((a) => a.date === d);
//     if (found) {
//       found.amount += e.amount;
//     } else {
//       acc.push({ date: d, amount: e.amount });
//     }
//     return acc;
//   }, []);

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6 text-center">📅 Monthly Expense Tracker</h1>
//       <div className="flex justify-end mb-4">
//   <Link to="/emi">
//     <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
//       💡 EMI Calculator
//     </button>
//   </Link>
// </div>
//       {/* Input Form */}
//       <form
//         onSubmit={addExpense}
//         className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 bg-white p-4 rounded shadow"
//       >
//         <input
//           type="text"
//           placeholder="Item name"
//           value={item}
//           required
//           onChange={(e) => setItem(e.target.value)}
//           className="p-2 border rounded col-span-1"
//         />
//         <input
//           type="number"
//           placeholder="Amount"
//           value={amount}
//           required
//           onChange={(e) => setAmount(e.target.value)}
//           className="p-2 border rounded col-span-1"
//         />
//         <input
//           type="date"
//           value={date}
//           required
//           onChange={(e) => setDate(e.target.value)}
//           className="p-2 border rounded col-span-1"
//         />
//         <label className="flex items-center gap-2 col-span-1">
//           <input
//             type="checkbox"
//             checked={isEssential}
//             onChange={(e) => setIsEssential(e.target.checked)}
//           />
//           Essential
//         </label>
//         <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 col-span-1">
//           Add
//         </button>
//       </form>

//       {/* Inventory List */}
//       <div className="bg-white p-4 rounded shadow mb-6">
//         <h2 className="text-xl font-semibold mb-4">🧾 Inventory</h2>
//         <ul className="space-y-2">
//           {expenses.map((e, i) => (
//             <li
//               key={i}
//               className="flex justify-between border-b pb-1 text-sm text-gray-700"
//             >
//               <span>{e.item}</span>
//               <span>₹{e.amount}</span>
//               <span>{e.isEssential ? "✅ Essential" : "❌ Non-Essential"}</span>
//               <span>{new Date(e.date).toLocaleDateString()}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Chart */}
//       <div className="bg-white p-4 rounded shadow mb-6">
//         <h2 className="text-xl font-semibold mb-4">📊 Daily Expense Chart</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={dailyData}>
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="amount" fill="#3b82f6" name="₹ Spent" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Summary */}
//       <div className="bg-white p-4 rounded shadow">
//         <h2 className="text-xl font-semibold mb-2">💡 Summary</h2>
//         <p>Total Spent: ₹{totalSpent}</p>
//         <p>Essential: ₹{essentialSpent}</p>
//         <p>Non-Essential: ₹{nonEssentialSpent}</p>
//         <p className="text-green-600 font-semibold">
//           💰 You could have saved ₹{predictedSaving} by cutting 50% of non-essential expenses.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";
import ExpertList from "../components/ExpertList"; // Import expert component

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isEssential, setIsEssential] = useState(false);
  const [showExperts, setShowExperts] = useState(false); // Toggle expert visibility

  const addExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      item,
      amount: parseFloat(amount),
      date,
      isEssential,
    };
    setExpenses([...expenses, newExpense]);
    setItem("");
    setAmount("");
    setDate("");
    setIsEssential(false);
  };

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const essentialSpent = expenses
    .filter((e) => e.isEssential)
    .reduce((sum, e) => sum + e.amount, 0);
  const nonEssentialSpent = totalSpent - essentialSpent;
  const predictedSaving = (nonEssentialSpent * 0.5).toFixed(2);

  const dailyData = expenses.reduce((acc, e) => {
    const d = new Date(e.date).toLocaleDateString();
    const found = acc.find((a) => a.date === d);
    if (found) {
      found.amount += e.amount;
    } else {
      acc.push({ date: d, amount: e.amount });
    }
    return acc;
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📅 Monthly Expense Tracker
      </h1>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-end mb-4 gap-3">
        <Link to="/stock-predictor">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
         📊 Stock Market Predictor
         </button>
      </Link>
        <Link to="/emi">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            💡 EMI Calculator
          </button>
        </Link>
        <button
          onClick={() => setShowExperts(!showExperts)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          🤝 Connect to Expert
        </button>
      </div>

      {/* Show Experts ABOVE inventory */}
      {showExperts && (
        <div className="mb-6">
          
          <ExpertList />
        </div>
      )}

      {/* Input Form */}
      <form
        onSubmit={addExpense}
        className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 bg-white p-4 rounded shadow"
      >
        <input
          type="text"
          placeholder="Item name"
          value={item}
          required
          onChange={(e) => setItem(e.target.value)}
          className="p-2 border rounded col-span-1"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          required
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded col-span-1"
        />
        <input
          type="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded col-span-1"
        />
        <label className="flex items-center gap-2 col-span-1">
          <input
            type="checkbox"
            checked={isEssential}
            onChange={(e) => setIsEssential(e.target.checked)}
          />
          Essential
        </label>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 col-span-1">
          Add
        </button>
      </form>

      {/* Inventory List */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">🧾 Inventory</h2>
        <ul className="space-y-2">
          {expenses.map((e, i) => (
            <li
              key={i}
              className="flex justify-between border-b pb-1 text-sm text-gray-700"
            >
              <span>{e.item}</span>
              <span>₹{e.amount}</span>
              <span>{e.isEssential ? "✅ Essential" : "❌ Non-Essential"}</span>
              <span>{new Date(e.date).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">📊 Daily Expense Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dailyData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#3b82f6" name="₹ Spent" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">💡 Summary</h2>
        <p>Total Spent: ₹{totalSpent}</p>
        <p>Essential: ₹{essentialSpent}</p>
        <p>Non-Essential: ₹{nonEssentialSpent}</p>
        <p className="text-green-600 font-semibold">
          💰 You could have saved ₹{predictedSaving} by cutting 50% of
          non-essential expenses.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
