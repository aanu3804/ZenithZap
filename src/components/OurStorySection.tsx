import { motion, useMotionValue, useTransform } from "framer-motion";

const storyPoints = [
  {
    title: "Importance of Hydration in Sports",
    desc: "Hydration is essential. Even a 2% loss in body weight can impair performance. It affects thermoregulation, joint lubrication, cardiovascular efficiency, digestion, and mood. Dehydration increases cramps, fatigue, and injury risk.",
  },
  {
    title: "Pre-Match Nutrition (Protona)",
    desc: "Protona is rich in carbs, moderate in protein, and low in fat and fiber. It fuels muscles, supports glycogen stores, and enhances focus before play begins.",
  },
  {
    title: "Mid-Match Hydration (Electrona)",
    desc: "Provides essential electrolytes and hydration for prolonged performance. According to ACSM, 6–12 oz every 20 minutes is recommended during activity.",
  },
  {
    title: "Post-Match Recovery (Neutrona)",
    desc: "Rehydrates and repairs muscles. Combines protein, carbs, and electrolytes. Best consumed within 30 minutes after activity for optimal glycogen and muscle recovery.",
  },
  {
    title: "Nutrition for Grassroots Athletes",
    desc: "Supplements and hydration support growth, health, and performance — even for amateur players.",
  },
  {
    title: "Coach-Led Nutrition",
    desc: "Coaches play a crucial role by encouraging hydration breaks and promoting proper refueling habits on the field.",
  },
  {
    title: "Natural Nutrition",
    desc: "A whole-food-rich diet supports long-term health, performance, and immunity.",
  },
  {
    title: "Science-Based Formulations",
    desc: "Nutrition needs change pre-, during-, and post-match. Zenith Zap tailors support to each phase based on the latest research.",
  },
  {
    title: "Functional Foods",
    desc: "Our drinks include nutrients that reduce inflammation, boost recovery, and improve immunity, such as antioxidants and BCAAs.",
  },
  {
    title: "Electrolyte Balance",
    desc: "Sodium, potassium, calcium, and magnesium aid nerve function and prevent cramps. Balanced drinks lead to better muscle performance.",
  },
  {
    title: "Energy on Game Day",
    desc: "Proper hydration and carbs support stamina and focus. Personalized nutrition plans improve endurance and cognition.",
  },
  {
    title: "Hydration Myths",
    desc: "Water isn't always enough; thirst is not a reliable indicator. Balanced sports drinks outperform plain water in long matches.",
  },
  {
    title: "Ready-to-Mix Sachets",
    desc: "Provide travel-friendly, reliable nutrition. They remove guesswork and support consistent intake.",
  },
  {
    title: "QR-Based Assistant",
    desc: "Scanning a code gives athletes tailored hydration and nutrition guidance — a great tool for coaches and players on-the-go.",
  },
  {
    title: "Why Traditional Drinks Fail",
    desc: "Sugary drinks don’t restore electrolytes or provide performance support. Zenith Zap offers optimized hydration and fuel for athletes.",
  },
];

const TiltCard = ({ title, desc }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="w-full p-[1px] bg-gradient-to-r from-orange-400/40 via-pink-500/20 to-yellow-500/30 rounded-3xl"
    >
      <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-orange-300/10">
        <h3 className="text-xl font-bold text-orange-400 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

const OurStorySection = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-orange-400 via-yellow-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
          Our Story
        </h2>

        <div className="space-y-32 relative">
          {storyPoints.map((point, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === storyPoints.length - 1;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-10`}
              >
                {/* Connector line */}
                {!isLast && (
                  <div
                    className={`hidden md:block absolute w-0.5 h-28 bg-gradient-to-b from-orange-500 via-pink-500 to-yellow-500 rounded-full z-0 top-full ${
                      isEven ? "md:left-[55%]" : "md:left-[45%]"
                    }`}
                  ></div>
                )}

                <div className="w-full md:w-1/2 z-10">
                  <TiltCard title={point.title} desc={point.desc} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
