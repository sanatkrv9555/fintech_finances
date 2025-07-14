import axios from "axios";

export const fetchGeminiReply = async (prompt) => {
  try {
    const res = await axios.post(
      "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent",
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          key: import.meta.env.VITE_GEMINI_API_KEY,
        },
      }
    );

    return res.data.candidates?.[0]?.content?.parts?.[0]?.text || "No reply.";
  } catch (error) {
    console.error("Gemini Error:", error.response?.data || error.message);
    return "❌ Gemini API failed. Please try again later.";
  }
};
