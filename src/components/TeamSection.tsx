import { useState } from 'react';

const TeamSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const sections = [
    {
      title: 'Our Team',
      members: [
        {
          name: 'Janaki Ram Reddy',
          position: 'Founder and CEO',
          bio: 'Founder and CEO, leading our formula innovation',
          image: '/WhatsApp Image 2025-07-04 at 11.28.30_8fa8cab8.jpg',
        },
        {
          name: 'Rama Krishna Raju Mandapati',
          position: 'Sales and Marketing',
          bio: 'Professional marathon runner and performance coach',
          image: '/WhatsApp Image 2025-07-04 at 11.28.31_5c6e2973.jpg',
        },
        {
          name: 'Deo Gracias Ilunga',
          position: 'Chief Financial Officer',
          bio: 'Certified sports nutritionist working with elite athletes',
          image: '/WhatsApp Image 2025-07-04 at 11.28.30_f182d337.jpg',
        },
        
      ],
    },
    {
      title: 'Mentors',
      members: [
        {
          name: 'Dr. Pallavi',
          position: 'Chief Technical Expert',
          bio: `She was responsible for the initial product formulation to account for maximum shelf life specifications. Due to her expertise in food formulation and experience in food regulatory management, the finished product adheres to standard guidelines. To allow minimal variation at end user level, innovative packaging means were identified by her.`,
          image: '/WhatsApp Image 2025-07-04 at 11.27.09_51ad3089.jpg',
        },
        {
          name: 'Dr. Balkumar',
          position: 'Mentor – Product & Formulation Support',
          bio: 'Helped in ideation and development of product/process.',
          image: '/WhatsApp Image 2025-07-04 at 11.28.11_5958b242.jpg',
        },

      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-300 mt-3">
            The experts behind your performance enhancement
          </p>
        </div>

        {sections.map((section, secIndex) => (
          <div key={secIndex} className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-4">
              {section.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {section.members.map((member, index) => {
                const isExpanded =
                  expandedIndex === `${secIndex}-${index}`;
                const bioPreview =
                  member.bio.length > 100 && !isExpanded
                    ? member.bio.slice(0, 100) + '...'
                    : member.bio;

                return (
                  <div
                    key={`${secIndex}-${index}`}
                    className="group relative rounded-3xl p-6 border border-orange-400/20 bg-white/5 backdrop-blur-xl transition-all duration-500 shadow-xl hover:shadow-orange-600/30 hover:-translate-y-2 hover:scale-[1.03]"
                  >
                    <div className="absolute -top-2 -right-2 h-20 w-20 bg-orange-500 blur-[80px] opacity-20 rounded-full"></div>

                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-orange-500 shadow-orange-400 shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h4 className="text-2xl font-bold mt-2 mb-1">
                      {member.name}
                    </h4>

                    <p className="text-orange-400 text-sm font-medium mb-3 tracking-wide">
                      {member.position}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {bioPreview}
                    </p>

                    {member.bio.length > 100 && (
                      <button
                        onClick={() =>
                          toggleReadMore(`${secIndex}-${index}`)
                        }
                        className="text-sm text-orange-300 hover:text-orange-200 underline"
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
