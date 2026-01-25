import React, { useEffect } from 'react';
import { Activity, Stethoscope, Microscope, Sparkles, Feather } from 'lucide-react';

// Reusing the scroll reveal hook
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

const Doctors: React.FC = () => {
  useScrollReveal();

  return (
    <div className="bg-royal-950 min-h-screen pt-20 pb-20">
      
      {/* Header */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl -z-10"></div>
        <span className="text-gold-500 text-xs uppercase tracking-[0.5em] mb-4 block reveal-on-scroll opacity-0 translate-y-10">The Architects of Wellbeing</span>
        <h1 className="font-display text-6xl md:text-7xl text-white mb-6 reveal-on-scroll opacity-0 translate-y-10 delay-100">The Masters</h1>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto reveal-on-scroll opacity-0 translate-y-10 delay-200"></div>
      </section>

      {/* Dr. Vaishali Dave */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative group reveal-on-scroll opacity-0 translate-y-10">
              <div className="absolute -inset-4 border border-gold-500/20 rounded-[3rem] transform rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="relative rounded-[3rem] overflow-hidden h-[600px] shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                    alt="Dr. Vaishali Dave" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 hover:scale-105"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-royal-950 to-transparent p-10">
                    <Feather className="text-gold-500 w-8 h-8 mb-4" />
                 </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-8 reveal-on-scroll opacity-0 translate-y-10 delay-200">
               <div>
                 <h2 className="font-display text-4xl md:text-5xl text-white mb-2">Dr. Vaishali Dave</h2>
                 <p className="text-gold-500 font-serif italic text-xl">The Guardian of Future Smiles</p>
               </div>
               
               <div className="w-12 h-[2px] bg-gold-500/50"></div>

               <p className="text-slate-300 font-light leading-loose text-lg">
                 Pediatric dentistry requires a gentle soul and a precise hand. Dr. Dave is a specialist Pedodontist who has dedicated her career to ensuring that our youngest patients grow up with confidence and health. Her approach combines child psychology with advanced dental care to create a fear-free sanctuary.
               </p>

               <div className="grid grid-cols-1 gap-4">
                 <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/5 rounded-2xl">
                    <Sparkles size={20} className="text-gold-500" />
                    <span className="text-sm uppercase tracking-widest text-slate-200">Pedodontist Specialist</span>
                 </div>
                 <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/5 rounded-2xl">
                    <Stethoscope size={20} className="text-gold-500" />
                    <span className="text-sm uppercase tracking-widest text-slate-200">Child Behaviour Management</span>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dr. Saroj Singh */}
      <section className="py-20 md:py-32 bg-royal-900 relative rounded-t-[5rem] -mt-20 z-10 pb-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
            
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative group reveal-on-scroll opacity-0 translate-y-10">
              <div className="absolute -inset-4 border border-gold-500/20 rounded-[3rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="relative rounded-[3rem] overflow-hidden h-[600px] shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1614608682850-e0d6ed316d46?q=80&w=1995&auto=format&fit=crop" 
                    alt="Dr. Saroj Singh" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 hover:scale-105"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-royal-900 to-transparent p-10">
                    <Microscope className="text-gold-500 w-8 h-8 mb-4" />
                 </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-8 reveal-on-scroll opacity-0 translate-y-10 delay-200">
               <div>
                 <h2 className="font-display text-4xl md:text-5xl text-white mb-2">Dr. Saroj Singh</h2>
                 <p className="text-gold-500 font-serif italic text-xl">The Multidisciplinary Visionary</p>
               </div>
               
               <div className="w-12 h-[2px] bg-gold-500/50"></div>

               <p className="text-slate-300 font-light leading-loose text-lg">
                 A rare convergence of specialties, Dr. Singh bridges the gap between pathology, nutrition, and aesthetics. As an Oral Pathologist, Onco-Nutritionist, and Dermatologist, she offers a holistic view of health that is unmatched in the region. She doesn't just treat symptoms; she architects resilience and beauty from within.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="flex items-center gap-3 p-3 border border-white/5 bg-white/5 rounded-xl">
                    <Activity size={16} className="text-gold-500" />
                    <span className="text-xs uppercase tracking-widest text-slate-200">Oral Pathologist</span>
                 </div>
                 <div className="flex items-center gap-3 p-3 border border-white/5 bg-white/5 rounded-xl">
                    <Activity size={16} className="text-gold-500" />
                    <span className="text-xs uppercase tracking-widest text-slate-200">Onco-Nutritionist</span>
                 </div>
                 <div className="flex items-center gap-3 p-3 border border-white/5 bg-white/5 rounded-xl">
                    <Sparkles size={16} className="text-gold-500" />
                    <span className="text-xs uppercase tracking-widest text-slate-200">Dermatologist</span>
                 </div>
                 <div className="flex items-center gap-3 p-3 border border-white/5 bg-white/5 rounded-xl">
                    <Microscope size={16} className="text-gold-500" />
                    <span className="text-xs uppercase tracking-widest text-slate-200">Onco-Dermatology</span>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Doctors;