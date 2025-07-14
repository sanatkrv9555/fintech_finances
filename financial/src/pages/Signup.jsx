// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     localStorage.setItem("userEmail", email);
//     localStorage.setItem("userPassword", password);
//     alert("Sign up successful!");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-50">
//       <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           className="w-full mb-4 p-2 border rounded"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           className="w-full mb-4 p-2 border rounded"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


// client/src/pages/Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Sign up successful!");
        navigate("/login");
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert("Signup failed");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input type="email" placeholder="Email" required className="w-full mb-4 p-2 border rounded" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required className="w-full mb-4 p-2 border rounded" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
