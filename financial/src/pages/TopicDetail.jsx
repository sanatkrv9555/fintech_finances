import { useParams, useNavigate } from "react-router-dom";
import { financialTopics } from "../data/financialTopics";

const TopicDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = financialTopics.find((t) => t.id === id);

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#002244] via-[#003366] to-[#004488] text-white">
        <p className="text-xl text-red-400 font-semibold">❌ Topic not found.</p>
      </div>
    );
  }

  // Convert Google Drive view link to embeddable slide link
  const embedLink = topic.presentationLink
    ? topic.presentationLink.replace("/view?usp=sharing", "/preview")
    : null;

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-[#002244] via-[#003366] to-[#004488] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-cyan-300 mb-6 flex items-center justify-center gap-3">
          <span className="text-5xl">{topic.icon}</span> {topic.title}
        </h1>

        {embedLink ? (
          <div className="rounded-xl overflow-hidden shadow-2xl mb-10">
            <iframe
              title="Financial Presentation"
              src={embedLink}
              width="100%"
              height="600px"
              allowFullScreen
              className="w-full rounded-xl border border-white"
            ></iframe>
          </div>
        ) : (
          <p className="text-lg text-red-200">❌ Presentation not available.</p>
        )}

        <button
          onClick={() => navigate("/")}
          className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition shadow-md"
        >
          🔙 Back to Home
        </button>
      </div>
    </div>
  );
};

export default TopicDetail;
