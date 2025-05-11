function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "per month",
      features: ["5 Projects", "10 GB Storage", "Basic Support", "1 User"],
      isFeatured: false,
    },
    {
      name: "Pro",
      price: "$79",
      period: "per month",
      features: ["15 Projects", "50 GB Storage", "Priority Support", "5 Users"],
      isFeatured: true,
    },
    {
      name: "Enterprise",
      price: "$129",
      period: "per month",
      features: [
        "Unlimited Projects",
        "500 GB Storage",
        "24/7 Support",
        "Unlimited Users",
      ],
      isFeatured: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Choose Your Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass p-8 rounded-xl flex flex-col ${
                plan.isFeatured ? "border-2 border-white" : ""
              }`}
            >
              {plan.isFeatured && (
                <span className="bg-white text-xs font-bold uppercase px-3 py-1 rounded-full self-start mb-4">
                  Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-white/70 ml-1">{plan.period}</span>
              </div>

              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-white/80 mb-3">
                    <svg
                      className="w-5 h-5 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  plan.isFeatured
                    ? "bg-white  hover:bg-purple-100"
                    : "border border-white text-white hover:bg-white/10"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
