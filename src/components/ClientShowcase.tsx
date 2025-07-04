
import { useEffect, useState } from 'react';

const ClientShowcase = () => {
  const [position, setPosition] = useState(0);

  const clients = [
    'Elite Fitness', 'PowerGym Pro', 'Athletic Performance Center', 'CrossFit Champions',
    'Endurance Sports Club', 'Peak Performance Training', 'Iron Will Gym', 'Victory Sports',
    'Champion Athletics', 'Apex Training', 'Phoenix Fitness', 'Thunder Sports'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % (clients.length * 200));
    }, 50);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="py-16 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Trusted by <span className="text-orange-600">Champions</span>
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto">
          Join thousands of athletes and fitness centers who trust Zenith Zap for peak performance
        </p>
      </div>
      
      <div className="relative">
        <div 
          className="flex space-x-12 items-center"
          style={{ 
            transform: `translateX(${position}px)`,
            width: `${clients.length * 200}px`
          }}
        >
          {clients.concat(clients).map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-2xl font-bold text-gray-400 hover:text-orange-600 transition-colors duration-300 whitespace-nowrap"
            >
              {client}
            </div>
          ))}
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default ClientShowcase;
