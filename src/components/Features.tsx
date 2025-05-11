function Features() {
  const features = [
    {
      title: "Stunning Visuals",
      description: "Create beautiful user interfaces with minimal effort using our glassmorphism components.",
      icon: "✨"
    },
    {
      title: "Responsive Design",
      description: "All components are fully responsive and work seamlessly on all devices.",
      icon: "📱"
    },
    {
      title: "Easy Integration",
      description: "Simple to integrate with your existing React projects with minimal setup.",
      icon: "🔄"
    },
    {
      title: "Customizable",
      description: "Easily customize the look and feel to match your brand identity.",
      icon: "🎨"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Amazing Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass p-6 h-full flex flex-col items-center text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;