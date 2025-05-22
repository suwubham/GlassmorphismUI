const FloatingCards = () => {
  return (
    // <div className="fixed inset-0 -z-10 overflow-hidden">
    //   {/* Decorative floating elements;  */}
    //   <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full  animate-float"></div>
    //   <div className="absolute top-40 right-20 w-48 h-48 bg-pink-500/20 rounded-full  animate-float-delay"></div>
    //   <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/20 rounded-full  animate-float-slow"></div>
    //   <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-purple-500/20 rounded-full  animate-float-delay-slow"></div>
    // </div>
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/wave.svg')",
        }}
      />
      <div className="absolute inset-0  bg-white/1" />
    </div>
  );
};

export default FloatingCards;
