import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+918179949749";
    const message = "Hi! I'm interested in learning more about Zenith Zap products.How Can I purchase them?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center justify-center py-20 overflow-hidden">

      {/* Floating background blur animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-green-500 opacity-20 rounded-full blur-3xl top-10 left-1/3 animate-pulse-slow" />
        <div className="absolute w-72 h-72 bg-orange-500 opacity-20 rounded-full blur-2xl bottom-10 right-1/4 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <MessageCircle className="w-24 h-24 text-green-500 mx-auto mb-8 animate-bounce" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-orange-600">Community</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Connect with fellow athletes, get personalized hydration advice, and stay updated with the latest 
            performance tips from our expert team. Join thousands of athletes who trust Zenith Zap for their 
            peak performance journey.
          </p>

          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 md:p-12 mb-10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">What you'll get:</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto relative perspective">
  {[
    {
      title: "Expert Advice",
      desc: "Personalized hydration and nutrition tips",
      icon: "🧠",
    },
    {
      title: "Exclusive Offers",
      desc: "First access to new products and discounts",
      icon: "🎁",
    },
    {
      title: "Community Support",
      desc: "Connect with like-minded athletes",
      icon: "🤝",
    },
    {
      title: "Latest Updates",
      desc: "Stay informed about new research and products",
      icon: "📰",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      whileHover={{
        rotateX: 12,
        rotateY: -12,
        scale: 1.07,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl shadow-2xl border border-white/10 transition-transform duration-300 cursor-pointer hover:shadow-green-400/30 hover:border-green-400/20"
    >
      {/* Glowing Animated Border Ring */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-green-400/20 via-yellow-300/20 to-green-400/20 blur-lg opacity-25 group-hover:opacity-40 transition duration-500 pointer-events-none z-0" />

      {/* Floating Icon */}
      <div className="absolute -top-6 -left-6 bg-gradient-to-br from-green-400 to-lime-300 p-4 rounded-full text-3xl shadow-xl animate-float z-10 border-2 border-white/20">
        {item.icon}
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        <h3 className="text-white font-semibold text-2xl mb-2 mt-6 group-hover:tracking-wide transition-all duration-300">
          {item.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  ))}
</div>

          </motion.div>

          <motion.button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center mx-auto group"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="mr-3 text-black group-hover:animate-ping" size={28} />
            Join Our Community
          </motion.button>

          <p className="text-gray-400 mt-6 text-sm">
            Click the button above to start chatting with our team on <b>WhatsApp</b>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatsApp;