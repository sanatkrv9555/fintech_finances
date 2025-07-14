import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "⏳ Please wait...";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      });
      const res = await response.json();
      result.innerHTML = response.status === 200 ? "✅ Form submitted successfully!" : `❌ ${res.message}`;
      form.reset();
    } catch {
      result.innerHTML = "❌ Something went wrong!";
    }

    setTimeout(() => {
      result.innerHTML = "";
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-white mt-20 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h5 className="text-xl font-semibold mb-3">🔗 Quick Links</h5>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">🏠 Home</a></li>
            <li><a href="#" className="hover:underline">✨ Features</a></li>
            <li><a href="#" className="hover:underline">💰 Pricing</a></li>
            <li><a href="#" className="hover:underline">❓ FAQs</a></li>
            <li><a href="#" className="hover:underline">ℹ️ About</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="text-xl font-semibold mb-3">📚 Resources</h5>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">📄 Documentation</a></li>
            <li><a href="#" className="hover:underline">🌐 Community</a></li>
            <li><a href="#" className="hover:underline">🎓 Tutorials</a></li>
            <li><a href="#" className="hover:underline">🛠️ Support</a></li>
            <li><a href="#" className="hover:underline">📝 Blog</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="text-xl font-semibold mb-3">🏢 Company</h5>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">👨‍💼 About Us</a></li>
            <li><a href="#" className="hover:underline">📈 Careers</a></li>
            <li><a href="#" className="hover:underline">📬 Contact</a></li>
            <li><a href="#" className="hover:underline">🤝 Partners</a></li>
            <li><a href="#" className="hover:underline">🔐 Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-bold mb-2">📬 Subscribe to our newsletter</h2>
          <p className="text-sm mb-3">🗓️ Monthly digest of what’s new and exciting.</p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <input
              type="hidden"
              name="access_key"
              value="15b15722-ff6e-4089-8ae3-d429072917a4"
            />
            <input
              type="email"
              name="email"
              placeholder="📧 Your Email"
              required
              className="px-3 py-2 rounded text-black"
            />
            <textarea
              name="message"
              placeholder="✍️ Your Message..."
              required
              className="px-3 py-2 rounded text-black"
            />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              ✅ Subscribe
            </button>
          </form>
          <div id="result" className="text-sm mt-2 text-green-300"></div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 🌱 GreenConnect Inc. All rights reserved.</p>
        <div className="space-x-3 mt-3 sm:mt-0">
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="LinkedIn">💼</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
