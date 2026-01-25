import React, { useEffect } from 'react';
import { Star, Crown, Diamond, ShieldCheck, UserCheck, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Animation Hook for scroll reveal
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

const Home: React.FC = () => {
  useScrollReveal();
  const navigate = useNavigate();

  const handleScrollToExpertise = () => {
    const element = document.getElementById('expertise');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-royal-950 overflow-hidden">
      
      {/* 1. HERO SECTION - IMMERSIVE & UNIQUE LOGO */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-royal-950/90 via-royal-950/60 to-royal-950 z-10"></div>
            <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                alt="Luxury Clinic Interior" 
                className="w-full h-full object-cover animate-slow-zoom opacity-50"
            />
        </div>

        <div className="relative z-20 text-center container mx-auto px-6 max-w-5xl flex flex-col items-center">
          <div className="mb-10 opacity-0 translate-y-10 reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
             <span className="inline-flex items-center gap-2 py-2 px-6 border border-gold-500/30 rounded-full bg-royal-950/50 backdrop-blur-md text-gold-500 text-xs tracking-[0.4em] uppercase shadow-[0_0_20px_rgba(198,156,109,0.2)]">
               <Diamond size={12} /> The Platinum Standard
             </span>
          </div>
          
          {/* UNIQUE BRANDING ELEMENT */}
          <div className="relative mb-8 opacity-0 translate-y-10 reveal-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="text-[12rem] md:text-[16rem] leading-none font-display text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-700 opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                  R
              </div>
              <h1 className="font-display text-6xl md:text-9xl text-white leading-tight relative z-10 drop-shadow-2xl">
                REFLECTION
              </h1>
              <div className="h-1 w-32 bg-gold-500 mx-auto mt-6 mb-6"></div>
              <span className="text-gold-200 font-serif italic text-3xl md:text-5xl block tracking-wide">
                Premium Healthcare
              </span>
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-14 font-light leading-relaxed opacity-0 translate-y-10 reveal-on-scroll" style={{ animationDelay: '0.6s' }}>
            A sanctuary for those who demand the absolute best in Dental, Aesthetic, and Oncology care.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center opacity-0 translate-y-10 reveal-on-scroll" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={() => navigate('/doctors')}
              type="button"
              className="group relative bg-transparent border border-gold-500/30 text-white px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:border-gold-500 hover:text-gold-500 hover:shadow-[0_0_30px_rgba(198,156,109,0.2)] transition-all duration-500 cursor-pointer flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Meet The Masters</span>
              <span className="relative z-10 transform group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-gold-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="relative group reveal-on-scroll opacity-0 translate-y-10">
                    <div className="absolute -inset-10 bg-gold-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                      alt="Premium Care" 
                      className="relative z-10 w-full rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out object-cover h-[500px]"
                    />
                </div>
                
                <div className="space-y-10 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
                    <h2 className="font-display text-5xl text-white leading-tight">
                        We Don't Compete. <br/>
                        <span className="text-gold-500 font-serif italic">We Reign.</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-loose font-light">
                        Every corner of our clinic is designed to soothe, impress, and heal. From the curved marble architecture to the silence of our private suites, REFLECTION is a statement against mediocrity.
                    </p>
                    <div className="grid grid-cols-1 gap-6">
                        {['Bespoke Treatments', 'Privacy Guaranteed', 'World-Class Technology'].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <Star size={14} className="text-gold-500" />
                                <span className="text-slate-300 uppercase tracking-widest text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. EXPERTISE - COLLECTION */}
      <section id="expertise" className="py-32 bg-royal-900 relative rounded-t-[4rem] border-t border-white/5 -mt-10 z-20">
          <div className="container mx-auto px-6">
              <div className="text-center mb-24 reveal-on-scroll opacity-0 translate-y-10">
                  <span className="text-gold-500 text-xs uppercase tracking-[0.4em] block mb-4">The Collection</span>
                  <h2 className="font-display text-5xl md:text-6xl text-white">Curated Services</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                      { 
                        title: 'Signature Dentistry', 
                        sub: 'Implants & Aesthetics',
                        img: 'https://images.unsplash.com/photo-1606811841689-230391b42a21?q=80&w=1974&auto=format&fit=crop'
                      },
                      { 
                        title: 'High Cosmetology', 
                        sub: 'Sculpting & Rejuvenation',
                        img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop'
                      },
                      { 
                        title: 'Oncology', 
                        sub: 'Advanced Care & Nutrition',
                        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
                      }
                  ].map((s, idx) => (
                      <div 
                        key={idx} 
                        className="group relative h-[450px] rounded-[3rem] overflow-hidden reveal-on-scroll opacity-0 translate-y-10 cursor-default shadow-2xl"
                        style={{ transitionDelay: `${idx * 150}ms` }}
                      >
                          <img 
                            src={s.img} 
                            alt={s.title} 
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-50" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent"></div>
                          
                          <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                              <p className="text-gold-500 text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{s.sub}</p>
                              <h3 className="font-display text-3xl text-white mb-6 group-hover:text-gold-200 transition-colors">{s.title}</h3>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-40 relative bg-royal-950 z-20">
          <div className="container mx-auto px-6">
              <div className="text-center mb-24 reveal-on-scroll opacity-0 translate-y-10">
                  <span className="text-gold-500 text-xs uppercase tracking-[0.4em] block mb-4">Unmatched Excellence</span>
                  <h2 className="font-display text-4xl md:text-6xl text-white mb-8">Why Choose REFLECTION Clinic for Your Needs</h2>
                  <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {/* USP 1: Integrated Care */}
                  <div className="bg-royal-900/40 border border-white/5 p-12 rounded-[2rem] hover:border-gold-500/30 transition-all duration-700 group hover:-translate-y-2 reveal-on-scroll opacity-0 translate-y-10">
                      <div className="w-20 h-20 bg-royal-950 rounded-full flex items-center justify-center border border-gold-500/20 mb-10 group-hover:shadow-[0_0_30px_rgba(198,156,109,0.3)] transition-all duration-500">
                          <ShieldCheck className="text-gold-500 w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h3 className="font-display text-2xl text-white mb-4 group-hover:text-gold-200 transition-colors">Integrated Mastery</h3>
                      <p className="text-slate-400 font-light leading-loose text-sm">
                          We don't just treat symptoms; we harmonize health. From precise dental architecture to complex oncological nutrition, our multi-disciplinary ecosystem ensures every aspect of your well-being is expertly orchestrated under one sovereign roof.
                      </p>
                  </div>

                  {/* USP 2: Expert Specialists */}
                  <div className="bg-royal-900/40 border border-white/5 p-12 rounded-[2rem] hover:border-gold-500/30 transition-all duration-700 group hover:-translate-y-2 reveal-on-scroll opacity-0 translate-y-10" style={{ transitionDelay: '0.15s' }}>
                      <div className="w-20 h-20 bg-royal-950 rounded-full flex items-center justify-center border border-gold-500/20 mb-10 group-hover:shadow-[0_0_30px_rgba(198,156,109,0.3)] transition-all duration-500">
                          <UserCheck className="text-gold-500 w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h3 className="font-display text-2xl text-white mb-4 group-hover:text-gold-200 transition-colors">Elite Specialists</h3>
                      <p className="text-slate-400 font-light leading-loose text-sm">
                          Led by the visionary Dr. Vaishali Dave and the multi-specialist Dr. Saroj Singh, our team represents the absolute pinnacle of medical authority. Decades of rigorous training combined with an artist's intuition define our clinical standard.
                      </p>
                  </div>

                  {/* USP 3: Luxurious Experience */}
                  <div className="bg-royal-900/40 border border-white/5 p-12 rounded-[2rem] hover:border-gold-500/30 transition-all duration-700 group hover:-translate-y-2 reveal-on-scroll opacity-0 translate-y-10" style={{ transitionDelay: '0.3s' }}>
                      <div className="w-20 h-20 bg-royal-950 rounded-full flex items-center justify-center border border-gold-500/20 mb-10 group-hover:shadow-[0_0_30px_rgba(198,156,109,0.3)] transition-all duration-500">
                          <Sparkles className="text-gold-500 w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h3 className="font-display text-2xl text-white mb-4 group-hover:text-gold-200 transition-colors">The Royal Standard</h3>
                      <p className="text-slate-400 font-light leading-loose text-sm">
                          Forget the clinical coldness of the past. Enter a sanctuary of marble, silence, and attentive care. We have reimagined the patient experience to be as comforting as a luxury retreat, ensuring your peace of mind is absolute.
                      </p>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Home;