import React, { useEffect } from 'react';
import { Diamond, Star } from 'lucide-react';

const useScrollReveal = () => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up', 'opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
          });
        },
        { threshold: 0.1 }
      );
  
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observer.observe(el));
  
      return () => elements.forEach((el) => observer.unobserve(el));
    }, []);
};

const Services: React.FC = () => {
  useScrollReveal();

  const categories = [
    {
      id: 'dental',
      title: 'Dental & Oral Care',
      subtitle: 'Precision & Aesthetics',
      services: [
        {
          name: "Pediatric Dentistry",
          detail: "Comprehensive dental care for infants, children, and adolescents. Our specialists focus on fear-free experiences and early preventive protocols to ensure lifelong oral health.",
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Orthodontics",
          detail: "Advanced correction of dental and jaw alignment. We utilize state-of-the-art braces and clear aligner technologies to engineer the perfect functional and aesthetic bite.",
          image: "https://images.unsplash.com/photo-1606811841689-230391b42a21?q=80&w=1974&auto=format&fit=crop"
        },
        {
          name: "Oral Pathology",
          detail: "Clinical diagnosis of oral diseases, biopsies, and rigorous oral cancer screenings. We prioritize early detection and accurate histopathological analysis.",
          image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
        }
      ]
    },
    {
      id: 'oncology',
      title: 'Oncology & Support',
      subtitle: 'Compassion & Science',
      services: [
        {
          name: "Oncology Consultation",
          detail: "Expert medical management and personalized treatment planning by leading Oncologists. We offer a private, unhurried environment for discussing complex medical decisions.",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Oncology Nutrition",
          detail: "Specialized clinical nutrition designed to maintain strength, immunity, and recovery rates during and after cancer treatment.",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
        }
      ]
    },
    {
      id: 'hair',
      title: 'Trichology',
      subtitle: 'Restoration & Volume',
      services: [
        {
          name: "Clinical Trichology",
          detail: "In-depth diagnosis and treatment of alopecia, scalp disorders, and hair shaft abnormalities. We combine medical therapies with restorative treatments for visible results.",
          image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=2080&auto=format&fit=crop"
        }
      ]
    },
    {
      id: 'skin',
      title: 'Skin & Aesthetics',
      subtitle: 'Radiance & Rejuvenation',
      services: [
        {
          name: "Medical Cosmetology",
          detail: "High-efficacy aesthetic treatments for anti-aging, pigmentation, and skin rejuvenation, administered under strict medical supervision.",
          image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Korean Skin Therapies",
          detail: "Advanced dermatological protocols inspired by Korean innovation. Focusing on hydration, barrier repair, and the signature 'Glass Skin' texture.",
          image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
        }
      ]
    }
  ];

  return (
    <div className="bg-royal-950 min-h-screen pt-32 pb-20 text-slate-200">
      
      {/* 1. Header */}
      <section className="container mx-auto px-6 mb-24 text-center">
        <h1 className="font-display text-5xl md:text-6xl text-white mb-6 reveal-on-scroll opacity-0 translate-y-10">
          Our Services
        </h1>
        <div className="flex justify-center items-center gap-4 reveal-on-scroll opacity-0 translate-y-10 delay-100">
             <div className="h-[1px] w-12 bg-gold-500/50"></div>
             <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold">The Platinum Collection</span>
             <div className="h-[1px] w-12 bg-gold-500/50"></div>
        </div>
      </section>

      {/* 2. Service Catalog */}
      <div className="container mx-auto px-6">
        {categories.map((cat, i) => (
          <div key={cat.id} className="mb-32 last:mb-0">
             
             {/* Category Title */}
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/5 pb-6 reveal-on-scroll opacity-0 translate-y-10">
                <div>
                    <span className="text-gold-500 font-serif italic text-xl mb-2 block flex items-center gap-2"><Star size={12} className="fill-gold-500" /> {cat.subtitle}</span>
                    <h2 className="text-4xl md:text-5xl font-display text-white">{cat.title}</h2>
                </div>
                <div className="mt-4 md:mt-0">
                    <Diamond className="text-gold-500/20 w-10 h-10 animate-pulse" />
                </div>
             </div>

             {/* Cards Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {cat.services.map((service, idx) => (
                  <div 
                    key={idx}
                    className="group relative bg-royal-900/50 border border-white/5 hover:border-gold-500/30 transition-all duration-700 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),0_0_30px_-5px_rgba(198,156,109,0.1)] reveal-on-scroll opacity-0 translate-y-10 rounded-sm overflow-hidden"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    {/* Hover Glow Effect - Inner Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    {/* Image Area */}
                    <div className="relative h-72 overflow-hidden border-b border-white/5">
                        <div className="absolute inset-0 bg-royal-950/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                        <img 
                            src={service.image} 
                            alt={service.name} 
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,1,0.3,1)] group-hover:scale-110 grayscale group-hover:grayscale-0" 
                        />
                    </div>

                    {/* Content Area */}
                    <div className="p-8 flex flex-col flex-grow relative z-20">
                        {/* Title with movement and glow */}
                        <h3 className="font-display text-2xl text-white mb-4 group-hover:text-gold-400 transition-all duration-500 group-hover:translate-x-2 group-hover:drop-shadow-[0_0_15px_rgba(198,156,109,0.3)]">
                            {service.name}
                        </h3>
                        
                        {/* Decorative animated line with glow */}
                        <div className="w-12 h-[1px] bg-gold-500/50 mb-6 group-hover:w-full transition-all duration-1000 ease-out group-hover:bg-gold-400/80 group-hover:shadow-[0_0_10px_rgba(198,156,109,0.5)]"></div>
                        
                        {/* Description */}
                        <p className="text-slate-400 font-light leading-loose text-sm flex-grow group-hover:text-slate-300 transition-colors duration-500">
                            {service.detail}
                        </p>

                         {/* Subtle icon appearance in corner */}
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                            <Diamond className="text-gold-500/20 w-8 h-8 rotate-45" />
                        </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;