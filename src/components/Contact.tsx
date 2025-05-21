import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/thank-you", { replace: true });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Get In Touch
        </h2>

        <div className="glass p-8 rounded-xl">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="+123 456 7890"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Type of Inquiry</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option className="bg-[#1a1a1a] text-gray-300">
                    General
                  </option>
                  <option className="bg-[#1a1a1a] text-gray-300">
                    Support
                  </option>
                  <option className="bg-[#1a1a1a] text-gray-300">
                    Partnership
                  </option>
                  <option className="bg-[#1a1a1a] text-gray-300">
                    Feedback
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 h-32"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <div className="flex items-start gap-2 text-white">
              <input
                type="checkbox"
                id="subscribe"
                className="mt-1 accent-purple-500"
                required
              />
              <label htmlFor="subscribe" className="text-sm">
                I'd like to receive occasional updates and newsletters.
              </label>
            </div>
            <br />
            <span className="text-white text-center italic text-xs">
              Please note that this is a dummy form.
            </span>
            <button
              type="submit"
              className="w-full bg-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-100 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
