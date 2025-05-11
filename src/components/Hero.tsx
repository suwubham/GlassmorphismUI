function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="glass p-8 max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Modern Glassmorphism Design
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Create stunning user interfaces with our elegant glassmorphism
            design system. Perfect for modern web applications and landing
            pages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <button className="bg-white text-purple-400 font-semibold px-6 py-3 rounded-lg hover:bg-purple-100 transition"> */}
            <button className="bg-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-100 transition">
              Get Started
            </button>
            <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
