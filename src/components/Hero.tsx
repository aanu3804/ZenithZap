import { ArrowDown } from 'lucide-react';
import './hero.css';
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="brand-glow">ZenithZap</span>
        </h1>


        <p className="text-2xl md:text-4xl font-bold text-amber-400 mb-8 tracking-wide">
          FUEL. PERFORM. RECOVER.
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Engineered hydration solutions for every stage of your workout.
          Push your limits with scientifically formulated drinks that power your performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("explore-products")}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Products
          </button>
          <button
            onClick={() => scrollToSection("our-story")}
            className="bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
          >
            Our Story
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-orange-600" size={32} />
      </div>
    </section>
  );
};

export default Hero;
