import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const products = [
  {
  id: 1,
  name: 'PROTONA',
  stage: 'Pre-Workout',
  description: 'Ignite your energy with our caffeine-enhanced hydration formula.',
  detailedInfo:
    'Protona delivers long-lasting energy with scientifically backed ingredients, including caffeine and electrolytes, to support endurance and reduce fatigue.',
  fullDetails: `Pre-match nutrition is about maximizing energy availability and ensuring the body is primed for peak performance. 
Research in Sports Nutrition journals recommends a meal rich in carbohydrates, moderate in protein, and low in fat and fiber, consumed 2–4 hours before competition. 
Protona, a science-driven pre-match formula, is designed to deliver sustained energy, support muscle function, and optimize glycogen stores.`,
  benefits: ['Increased Energy', 'Enhanced Focus', 'Optimal Hydration'],
  color: 'from-zinc-900 to-zinc-800',
  textColor: 'text-white',
  image: '/Protona.png'
  },

  {
    id: 2,
    name: 'ELECTRONA',
    stage: 'Mid-Workout',
    description: 'Sustain peak performance with electrolyte-rich endurance fuel.',
    detailedInfo:
      'Electrona supports hydration and stamina with an optimized mix of electrolytes and carbohydrates for prolonged performance.',
    fullDetails: `During prolonged activity, athletes lose fluids and electrolytes through sweat. 
Electrona, a scientifically formulated electrolyte drink, provides both fluids and essential electrolytes (like sodium and potassium) to maintain hydration, support nerve and muscle function, and sustain energy.`,
    benefits: ['Sustained Energy', 'Electrolyte Balance', 'Endurance Support'],
    color: 'from-black to-black-900',
    textColor: 'text-white',
    image: '/Electrona_White.png'
  },
  {
   
  id: 3,
  name: 'NEUTRONA',
  stage: 'Post-Workout',
  description: 'Accelerate recovery with protein-enhanced restoration blend.',
  detailedInfo:
    'Neutrona speeds up recovery with high-quality protein and rehydration agents that promote muscle repair and restore fluid balance.',
  fullDetails: `The body needs to replenish lost fluids, restore glycogen, and repair muscle tissue. 
Neutrona combines fast-absorbing carbohydrates, high-quality protein, and essential electrolytes to accelerate recovery. 
Consuming carbs and protein within 20–30 minutes post-exercise maximizes muscle repair.`,
  benefits: ['Muscle Recovery', 'Protein Synthesis', 'Rapid Rehydration'],
  color: 'from-gray-900 to-gray-800', 
  textColor: 'text-white',
  image: '/Neutrona_White.png'
}

  
];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-orange-600">Performance</span> Line
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three specialized formulas designed for every phase of your workout journey
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`w-full flex-shrink-0 bg-gradient-to-br ${product.color} p-10 md:p-14 min-h-[500px] flex flex-col md:flex-row items-center justify-center gap-10`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[250px] h-auto rounded-xl shadow-xl object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className={`text-3xl md:text-4xl font-bold ${product.textColor} mb-2`}>
                      {product.name}
                    </h3>
                    <p className={`text-lg ${product.textColor} opacity-80 mb-4`}>
                      {product.stage}
                    </p>
                    <p className={`text-xl ${product.textColor} mb-6`}>
                      {product.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className={`${product.textColor} opacity-90 font-semibold`}>
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <p className={`text-sm ${product.textColor} mb-6`}>
                      {product.detailedInfo}
                    </p>

                    <button
                      onClick={() => openModal(product)}
                      className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-orange-600' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedProduct && (
  <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
    <div className="backdrop-blur-md bg-white/10 border border-white/20 max-w-2xl w-full p-6 rounded-xl shadow-2xl overflow-y-auto max-h-[90vh] relative text-white">

      <button
        className="absolute top-3 right-4 text-white hover:text-gray-300 text-2xl"
        onClick={closeModal}
      >
        &times;
      </button>

      <h3 className="text-2xl font-bold mb-2 text-orange-500">
        {selectedProduct.name}
      </h3>
      <p className="text-gray-300 font-medium mb-4">
        <em>{selectedProduct.stage}</em>
      </p>
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="w-40 h-auto mb-4 mx-auto"
      />
      <p className="text-gray-200 whitespace-pre-line">{selectedProduct.fullDetails}</p>
    </div>
  </div>
)}

    </section>
  );
};

export default ProductCarousel;
