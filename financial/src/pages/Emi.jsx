import { useState } from "react";

const Emi = () => {
  const [principal, setPrincipal] = useState("");
  const [interest, setInterest] = useState("");
  const [months, setMonths] = useState("");
  const [loanType, setLoanType] = useState("custom");
  const [emi, setEmi] = useState(null);

  const handleLoanType = (type) => {
    setLoanType(type);
    if (type === "home") setInterest(8.5);
    else if (type === "personal") setInterest(12.5);
    else if (type === "education") setInterest(10.0);
    else setInterest("");
  };

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const annualRate = parseFloat(interest);
    const N = parseInt(months);
    const R = annualRate / (12 * 100);
    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🧠 Smart EMI Calculator</h1>

      {/* Loan Type Selection */}
      <div className="flex gap-4 justify-center mb-4 flex-wrap">
        <button onClick={() => handleLoanType("home")} className="bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-600">🏠 Home</button>
        <button onClick={() => handleLoanType("personal")} className="bg-purple-500 px-4 py-2 text-white rounded hover:bg-purple-600">👤 Personal</button>
        <button onClick={() => handleLoanType("education")} className="bg-green-500 px-4 py-2 text-white rounded hover:bg-green-600">🎓 Education</button>
        <button onClick={() => handleLoanType("custom")} className="bg-gray-500 px-4 py-2 text-white rounded hover:bg-gray-600">🧩 Custom</button>
      </div>

      {/* EMI Form */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
        <input type="number" placeholder="Principal Amount (₹)" value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full p-2 border rounded" />
        <input type="number" placeholder="Interest Rate (% per annum)" value={interest} onChange={(e) => setInterest(e.target.value)} className="w-full p-2 border rounded" disabled={loanType !== "custom"} />
        <input type="number" placeholder="Loan Tenure (months)" value={months} onChange={(e) => setMonths(e.target.value)} className="w-full p-2 border rounded" />
        <button onClick={calculateEMI} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Calculate EMI</button>
      </div>

      {emi && (
        <div className="mt-6 text-xl font-semibold text-green-600 text-center">
          📦 Your Monthly EMI is: ₹{emi}
        </div>
      )}
    </div>
  );
};

export default Emi;
