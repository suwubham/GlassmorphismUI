function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll to element
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="glass fixed w-full p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">GlassmorphismUI</div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="text-white hover:text-purple-200 transition"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("features");
            }}
            className="text-white hover:text-purple-200 transition"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("pricing");
            }}
            className="text-white hover:text-purple-200 transition"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="text-white hover:text-purple-200 transition"
          >
            Contact
          </a>
        </div>
        <button className="bg-white font-medium px-4 py-2 rounded-lg hover:bg-purple-100 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
