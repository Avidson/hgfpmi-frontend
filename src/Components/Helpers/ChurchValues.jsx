import React from 'react';

const values = [
  {
    title: 'Faith',
    description: 'We believe in the power of faith as a driving force in our lives. We strive to deepen our relationship with God, embracing spirituality as a foundation for our actions and decisions. Through prayer, reflection, and worship, we seek to strengthen our faith and share it with others.',
    bgGradient: 'bg-gradient-to-br from-rose-400 to-purple-600',
    icon: '🕊️'
  },
  {
    title: 'Brotherhood',
    description: 'We value the bonds of brotherhood that unite us as a community. We foster an inclusive and supportive environment where every member feels valued, respected, and embraced. We encourage meaningful connections, mutual support, and a sense of belonging, creating lifelong friendships and a network of support.',
    bgGradient: 'bg-gradient-to-br from-blue-400 to-indigo-600',
    icon: '👥'
  },
  {
    title: 'Service',
    description: 'We are committed to making a positive impact on the world around us. We believe in selflessly serving others, extending a helping hand to those in need, and advocating for justice and equality. Through volunteer work, community service projects, and acts of kindness, we strive to uplift and empower individuals, families, and communities.',
    bgGradient: 'bg-gradient-to-br from-emerald-400 to-teal-600',
    icon: '💝'
  },
  {
    title: 'Integrity',
    description: 'We hold ourselves to high moral standards and ethical conduct. We value honesty, transparency, and accountability in all our actions. We strive to be people of integrity, consistently upholding our values and acting with integrity in all aspects of our lives. ',
    bgGradient: 'bg-gradient-to-br from-amber-400 to-orange-600',
    icon: '🛡️'
  },
  {
    title: 'Personal Growth',
    description: 'We believe in continuous personal growth and development. We encourage self-reflection, learning, and self-improvement. Through educational programs, workshops, and mentoring, we provide opportunities for individuals to grow intellectually, emotionally, and spiritually.',
    bgGradient: 'bg-gradient-to-br from-pink-400 to-red-600',
    icon: '📈'
  },
  {
    title: 'Unity',
    description: 'Our shared goal is fueled by our dedication to unity, which helps us advance in our love, service, and faith. Here, unity is about embracing our shared goal while appreciating our diversity, rather than forcing everyone to follow.',
    bgGradient: 'bg-gradient-to-br from-violet-400 to-purple-600',
    icon: '🤝'
  }
];

const stats = [
  { value: '10', label: 'Years of Foundation' },
  { value: '1.5k', label: 'Subscribers' },
  { value: '50k', label: 'Monthly Donors' },
  { value: '30+', label: 'Successful Events' }
];

const ChurchValues = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        {/* Scroll indicator */}
        <div className="flex items-center gap-2 text-slate-400 mb-6 animate-pulse">
          <svg 
            className="w-5 h-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
          <span className="text-sm font-medium">Scroll horizontally to see more</span>
        </div>

        {/* Horizontal scrolling container */}
        <div className="relative overflow-x-auto pb-8 hide-scrollbar">
          <div className="flex gap-6 w-max">
            {values.map((value, index) => (
              <div key={index} className="group [perspective:1000px]">
                <div className="relative h-[16rem] w-[20rem] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of card */}
                  <div className={`absolute inset-0 ${value.bgGradient} rounded-xl p-8 flex flex-col items-center justify-center [backface-visibility:hidden] shadow-lg`}>
                    <span className="text-6xl mb-6">{value.icon}</span>
                    <h3 className="text-3xl font-bold text-white mb-2">{value.title}</h3>
                    <div className="w-16 h-1 bg-white/30 rounded-full mb-4" />
                    
                    {/* Hover indicator */}
                    <div className="flex items-center gap-2 text-white/70 group-hover:opacity-0 transition-opacity duration-300">
                      <span className="text-sm font-medium">Hover to read more</span>
                      <svg 
                        className="w-5 h-5 animate-bounce" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 bg-white rounded-xl p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">{value.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-[10px]">{value.description}</p>
                      
                      {/* Back hover indicator */}
                      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 text-slate-400">
                        <svg 
                          className="w-5 h-5 animate-bounce rotate-180" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </svg>
                        <span className="text-sm font-medium">Hover to flip back</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
    <div className="my-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300 border border-slate-100"
            >
              <span className="block text-4xl font-bold text-[#9B111E] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-gray-500 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/*  for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ChurchValues;