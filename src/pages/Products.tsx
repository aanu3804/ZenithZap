import { useState } from 'react';
import { X } from 'lucide-react';

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleKnowMore = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setShowModal(true);
  };


  const products = [
    {
      name: 'Protona',
      category: 'Protona',
      stage: 'Pre-Workout Energy Booster',
      image: '/Protona_White.png',
      price: 149,
      description: 'Ignite your workout with Protona’s sustained energy formula crafted for maximum performance.',
      benefits: [
        'Natural caffeine boost for enhanced energy',
        'B-vitamins for mental focus and clarity',
        'Electrolytes for optimal hydration',
        'Zero sugar crash formula',
        '₹149 per sachet'
      ],
      bgColor: 'bg-gradient-to-br from-orange-600 to-orange-800',
      textColor: 'text-white',
      buttonColor: 'bg-amber-500 hover:bg-amber-600 text-gray-900',
      knowMore: `Protona is a powerful pre-workout formula developed for athletes who need both mental sharpness and physical stamina. It helps activate metabolic pathways for glycogen sparing and supports neurotransmitter balance for sharper focus. Designed to be consumed 30–45 minutes before performance, Protona combines natural caffeine, B-vitamins, and electrolyte support to prime the body for sustained energy output. Whether you're stepping onto the field for an early morning match or preparing for a full tournament day, Protona ensures your muscles are fueled, your mind is focused, and your performance is optimized from the start. Scientifically formulated, it reduces early fatigue, boosts endurance, and offers a clean energy lift without sugar crashes — making it an essential tool in any serious athlete’s game-day arsenal.`
    },
    {
      name: 'Electrona',
      category: 'Electrona',
      stage: 'During-Workout Hydration',
      image: '/Electrona_White.png',
      price: 129,
      description: 'Stay in the zone with Electrona’s hydration blend that fuels endurance and peak output.',
      benefits: [
        'Rapid electrolyte replenishment',
        'Sustained energy release',
        'Prevents muscle cramps',
        'Light, refreshing taste',
        '₹129 per sachet'
      ],
      bgColor: 'bg-gradient-to-br from-sky-400 to-sky-600',
      textColor: 'text-white',
      buttonColor: 'bg-white hover:bg-gray-100 text-sky-600',
      knowMore: `Electrona is a precision-formulated hydration solution crafted for athletes in the middle of intense training or competitive play. As sweat depletes vital electrolytes, Electrona replenishes sodium, potassium, and magnesium to maintain fluid balance, prevent cramping, and support sustained energy output. Its rapid-absorption formula keeps nerves firing and muscles contracting efficiently, even under heat or fatigue. Unlike plain water, Electrona ensures hydration at the cellular level — supporting both physical stamina and cognitive sharpness. With its light, refreshing taste and science-backed composition, Electrona is ideal for mid-match fueling, especially in matches exceeding 45 minutes. It delivers more than just hydration — it sustains focus, energy, and resilience when performance matters most.`
    },
    {
      name: 'Neutrona',
      category: 'Neutrona',
      stage: 'Post-Workout Recovery',
      image: '/Neutrona.png',
      price: 169,
      description: 'Rebuild fast with Neutrona’s recovery blend of protein, electrolytes, and anti-inflammatories.',
      benefits: [
        '20g high-quality whey protein',
        'Anti-inflammatory compounds',
        'Muscle recovery acceleration',
        'Glycogen replenishment',
        '₹169 per sachet'
      ],
      bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200',
      textColor: 'text-gray-900',
      buttonColor: 'bg-orange-600 hover:bg-orange-700 text-white',
      knowMore: `Neutrona is a post-match recovery blend formulated to accelerate muscle repair, restore glycogen stores, and rehydrate the body after intense exertion. Packed with 20g of high-quality whey protein, fast-absorbing carbohydrates, and anti-inflammatory nutrients, it’s engineered to take full advantage of the critical 30-minute recovery window after exercise. Neutrona works to reduce soreness, promote muscle regeneration, and replenish lost electrolytes — supporting both short-term performance recovery and long-term physical development. For athletes who train or compete regularly, Neutrona is essential in reducing downtime and improving consistency. It offers a complete recovery solution that not only restores what’s lost but prepares the body for what’s next.`
    }
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-orange-600">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Scientifically formulated hydration and energy boosters for every phase of your performance.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            {['All', 'Protona', 'Electrona', 'Neutrona'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-semibold ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } transition-all duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`${product.bgColor} rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img src={product.image} alt={product.name} className="w-full max-w-sm rounded-xl mb-6" />
                  <h2 className={`text-3xl md:text-4xl font-bold ${product.textColor} mb-2`}>
                    {product.name}
                  </h2>
                  <p className={`text-lg ${product.textColor} opacity-80 mb-4`}>
                    {product.stage}
                  </p>
                  <p className={`text-xl ${product.textColor} mb-8 leading-relaxed`}>
                    {product.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-8">

                    <button
                      onClick={() => handleKnowMore(product.name, product.knowMore)}
                      className={`border-2 ${product.textColor === 'text-white' ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'} px-8 py-3 rounded-lg font-bold transition-all duration-300`}
                    >
                      Know More
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className={`text-2xl font-bold ${product.textColor} mb-6`}>
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className={`${product.textColor} flex items-center`}>
                        <div className={`w-2 h-2 rounded-full ${product.textColor === 'text-white' ? 'bg-white' : 'bg-orange-600'} mr-3`}></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Know More Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-4">
          <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl p-8 max-w-2xl w-full text-white relative shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-red-300"
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold mb-4">{modalTitle}</h2>
            <p className="text-lg leading-relaxed whitespace-pre-line">{modalContent}</p>
          </div>
        </div>
      )}

      {/* Buy Now Modal */}
      {showBuyModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-4">
          <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl p-8 w-full max-w-md text-white relative">
            <button
              onClick={() => setShowBuyModal(false)}
              className="absolute top-4 right-4 text-white hover:text-red-300"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6">{selectedProduct.name} - Buy Now</h2>
            <label className="block text-lg mb-2">Select Quantity</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full text-gray-900 rounded-lg p-2 mb-4"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <p className="text-xl mb-4">Total: ₹{selectedProduct.price * quantity}</p>
            <button
              onClick={() => alert('Purchase Confirmed!')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold"
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
