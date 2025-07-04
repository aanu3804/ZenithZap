import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Protona: Pre-Workout Power',
      image: '/Protona.png',
      category: 'Pre-Workout',
      readTime: '2 min read',
      content: `Protona delivers sustained energy, supports muscle function, and optimizes glycogen stores, giving athletes the power to perform from the first whistle.

Pre-match nutrition is about maximizing energy availability and ensuring the body is primed for peak performance. Research recommends a meal rich in carbohydrates, moderate in protein, and low in fat and fiber, consumed 2–4 hours before competition.

Protona ensures muscles are fueled and ready, reducing early fatigue and supporting mental focus.

• Supports glycogen storage
• Enhances energy availability
• Ideal for 2–4 hours before activity`
    },
    {
      title: 'Electrona: Mid-Workout Power',
      image: '/Electrona_TM_Original.png',
      category: 'Mid-Workout',
      readTime: '2 min read',
      content: `Electrona keeps your body hydrated and mind sharp. It replaces critical electrolytes lost in sweat to avoid cramps and fatigue.

During prolonged activity, athletes lose fluids and electrolytes. Even mild dehydration can impair cognitive function, reaction time, and endurance.

Electrona provides:
• Balanced sodium, potassium, magnesium
• Sustained hydration
• Supports performance in hot, intense matches`
    },
    {
      title: 'Neutrona: Post-Workout Power',
      image: '/Neutrona.png',
      category: 'Post-Workout',
      readTime: '2 min read',
      content: `Neutrona accelerates post-match recovery with fast-absorbing carbs, protein, and electrolytes.

Post-match is the golden hour for refueling. Studies show that consuming carbs and protein within 20–30 minutes post-exercise helps rebuild muscles and restore energy.

Neutrona:
• Maximizes glycogen resynthesis
• Accelerates muscle repair
• Rehydrates effectively with sodium-based fluids`
    }
  ];

  const categories = ['All', 'Pre-Workout', 'Mid-Workout', 'Post-Workout'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPlans, setShowPlans] = useState(false);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPost(null);
  };

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const handleSubscribe = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setShowPlans(true);
  };

  const closePlans = () => {
    setShowPlans(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zenith <span className="text-orange-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Protona, Electrona, and Neutrona fuel your Workout before, during, and after.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:shadow-orange-500/40 transition duration-500"
            >
              <div className="h-60 bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-contain transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.content.slice(0, 100)}...
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Zenith Zap</span>
                  <button
                    onClick={() => openModal(post)}
                    className="text-orange-500 hover:text-orange-400 font-semibold transition-colors duration-300"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Read More Modal */}
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="max-w-2xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 text-left space-y-6">
              {selectedPost && (
                <>
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-24 h-24 object-contain mx-auto"
                  />
                  <Dialog.Title className="text-2xl font-bold text-orange-500 text-center">{selectedPost.title}</Dialog.Title>
                  <p className="text-white whitespace-pre-line">{selectedPost.content}</p>
                  <div className="text-right">
                    <button
                      onClick={closeModal}
                      className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* Subscribe Section */}
        <div className="mt-20 bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Performance Tips
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get the latest insights on sports nutrition, hydration science, and performance optimization delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 ${
                emailError ? 'ring-red-500' : 'focus:ring-yellow-400'
              }`}
            />
            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          {emailError && <p className="text-red-300 text-sm mt-2">{emailError}</p>}
        </div>

        {/* Subscription Options Modal */}
        <Dialog open={showPlans} onClose={closePlans} className="relative z-50">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Dialog.Panel className="max-w-xl w-full bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 text-center space-y-6 border border-orange-400/30 text-white">
                <Dialog.Title className="text-2xl font-bold text-orange-400">Choose Your Subscription</Dialog.Title>
                <p className="text-gray-200">Select a plan tailored to your training goals:</p>
                <div className="grid gap-4">
                  {[
                    ['Basic Plan', 'Free tips & weekly newsletter'],
                    ['Pro Plan – ₹199/mo', 'Advanced diet guides, expert Q&As'],
                    ['Elite Plan – ₹499/mo', '1-on-1 coaching, exclusive tools']
                  ].map(([title, desc], idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03 }}
                      className="border border-orange-400/30 rounded-lg p-4 bg-black/30 hover:border-orange-500"
                    >
                      <h4 className="text-lg font-semibold">{title}</h4>
                      <p className="text-sm text-gray-300">{desc}</p>
                    </motion.div>
                  ))}
                </div>
                <button
                  onClick={closePlans}
                  className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
                >
                  Close
                </button>
              </Dialog.Panel>
            </motion.div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Blog;
