import { useState } from 'react';

const TeamSection = () => {
  const initialTeam = [
    {
      name: 'Dr. Pallavi',
      position: 'Chief Technical Expert',
      bio: `She was responsible for the initial product formulation to account for maximum shelf life specifications. Due to her expertise in food formulation and experience in food regulatory management, the finished product adheres to standard guidelines. To allow minimal variation at end user level, innovative packaging means were identified by her.`,
      image: '/WhatsApp Image 2025-07-04 at 11.27.09_51ad3089.jpg'
    },
{
  name: 'Dr. Balkumar',
  position: 'Mentor – Product & Formulation Support',
  bio: 'Helped in ideation and development of product/process.',
  image: '/WhatsApp Image 2025-07-04 at 11.28.11_5958b242.jpg'
},

    {
      name: 'Janaki Ram Reddy',
      position: 'Founder and CEO',
      bio: 'PhD in Sports Science, leading our formula innovation',
      image: '/WhatsApp Image 2025-07-04 at 11.28.30_8fa8cab8.jpg'
    },
    {
      name: 'Rama Krishna Raju Mandapati',
      position: 'Sales and Marketing',
      bio: 'Professional marathon runner and performance coach',
      image: '/WhatsApp Image 2025-07-04 at 11.28.31_5c6e2973.jpg'
    },
    {
      name: 'Deo Gracias Ilunga',
      position: 'Chief Financial Officer',
      bio: 'Certified sports nutritionist working with elite athletes',
      image: '/WhatsApp Image 2025-07-04 at 11.28.30_f182d337.jpg'
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-orange-600">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The experts behind your performance enhancement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {initialTeam.map((member, index) => {
            const isExpanded = expandedIndex === index;
            const bioPreview = member.bio.length > 100 && !isExpanded
              ? member.bio.slice(0, 100) + '...'
              : member.bio;

            return (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-orange-600">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">{bioPreview}</p>

                {member.bio.length > 100 && (
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="text-sm text-orange-500 hover:text-orange-400 underline focus:outline-none"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
