import { Link } from "react-router-dom";

const TopicCard = ({ id, icon, title, subtopics, presentationLink }) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-2">{icon} {title}</h2>
        <ul className="text-sm text-gray-700 mb-4">
          {subtopics.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* ✅ Show "View Slides" if presentationLink exists */}
      {presentationLink ? (
        <a
          href={presentationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-full hover:bg-yellow-300 transition text-center"
        >
          📄 View Slides
        </a>
      ) : (
        <Link
          to={`/topic/${id}`}
          className="mt-auto inline-block bg-black text-white font-bold px-4 py-2 rounded-full hover:bg-violet-800 transition text-center"
        >
          🔍 Explore
        </Link>
      )}
    </div>
  );
};

export default TopicCard;
