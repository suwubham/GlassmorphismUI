function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Get In Touch
        </h2>
        
        <div className="glass p-8 rounded-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-white mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="How can we help?"
              />
            </div>
            
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 h-32"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
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
}

export default Contact;