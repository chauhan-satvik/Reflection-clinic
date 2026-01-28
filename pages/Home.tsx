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
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-royal-950/90 via-royal-950/70 to-royal-950 z-10"></div>
            <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                alt="Luxury Clinic Interior" 
                className="w-full h-full object-cover animate-slow-zoom opacity-40"
            />
        </div>

        <div className="relative z-20 text-center container mx-auto px-4 sm:px-6 max-w-5xl flex flex-col items-center">
          <div className="mb-8 md:mb-12 opacity-0 translate-y-10 reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
             <span className="inline-flex items-center gap-2 sm:gap-3 py-2 sm:py-3 px-6 sm:px-8 border border-gold-500/50 rounded-full bg-royal-950/80 backdrop-blur-xl text-gold-400 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase shadow-[0_0_30px_rgba(198,156,109,0.3)]">
               <Crown size={12} className="fill-gold-500" /> The Platinum Standard
             </span>
          </div>
          
          {/* UNIQUE BRANDING ELEMENT - MONSTER HIGHLIGHT */}
          <div className="relative mb-8 md:mb-12 opacity-0 translate-y-10 reveal-on-scroll w-full" style={{ animationDelay: '0.3s' }}>
              {/* Background Giant 'R' - Subtle Depth */}
              <div className="text-[10rem] sm:text-[15rem] md:text-[22rem] leading-none font-display text-transparent bg-clip-text bg-gradient-to-b from-gold-500/5 to-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 blur-sm">
                  R
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center">
                {/* 1. Outer Bloom (Large diffuse glow) */}
                <h1 className="absolute font-display text-4xl sm:text-6xl md:text-9xl font-bold leading-tight text-gold-600 blur-[40px] md:blur-[60px] opacity-40 select-none scale-110 whitespace-nowrap" aria-hidden="true">
                  REFLECTION
                </h1>

                {/* 2. Inner Bloom (Tighter brighter glow) */}
                <h1 className="absolute font-display text-4xl sm:text-6xl md:text-9xl font-bold leading-tight text-gold-400 blur-[15px] md:blur-[20px] opacity-60 select-none whitespace-nowrap" aria-hidden="true">
                  REFLECTION
                </h1>

                {/* 3. Main Text (High Contrast Gradient) */}
                <h1 className="relative font-display text-4xl sm:text-6xl md:text-9xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-gold-200 to-gold-600 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] filter brightness-110 tracking-tight sm:tracking-normal whitespace-nowrap px-4">
                  REFLECTION
                </h1>
              </div>

              <div className="h-[1px] md:h-[2px] w-24 sm:w-32 md:w-64 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6 md:mt-8 mb-6 md:mb-8 shadow-[0_0_20px_#fbbf24]"></div>
              
              <span className="text-white font-serif italic text-xl sm:text-3xl md:text-5xl block tracking-wide drop-shadow-lg px-2">
                <span className="text-gold-300">Premium</span> Healthcare
              </span>
          </div>
          
          <p className="text-sm sm:text-lg md:text-xl text-slate-300 max-w-md sm:max-w-2xl mx-auto mb-10 md:mb-16 font-light leading-relaxed opacity-0 translate-y-10 reveal-on-scroll drop-shadow-md px-4" style={{ animationDelay: '0.6s' }}>
            A sanctuary for those who demand the absolute best in Dental, Aesthetic, and Oncology care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center opacity-0 translate-y-10 reveal-on-scroll w-full px-6" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={() => navigate('/doctors')}
              type="button"
              className="w-full sm:w-auto group relative bg-gold-600 text-royal-950 px-8 md:px-12 py-4 md:py-5 rounded-full uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold hover:bg-white hover:text-royal-950 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-500 cursor-pointer flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_20px_rgba(198,156,109,0.4)]"
            >
              <span className="relative z-10">Meet The Masters</span>
              <span className="relative z-10 transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
            <button 
              onClick={() => handleScrollToExpertise()}
              type="button"
              className="w-full sm:w-auto group relative bg-transparent border border-white/20 text-white px-8 md:px-12 py-4 md:py-5 rounded-full uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold hover:border-gold-500 hover:text-gold-500 transition-all duration-500 cursor-pointer flex items-center justify-center gap-3 overflow-hidden backdrop-blur-sm"
            >
              <span className="relative z-10">Explore Services</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="relative group reveal-on-scroll opacity-0 translate-y-10">
                    <div className="absolute -inset-4 md:-inset-10 bg-gold-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                      alt="Premium Care" 
                      className="relative z-10 w-full rounded-[2rem] md:rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out object-cover h-[300px] md:h-[500px]"
                    />
                </div>
                
                <div className="space-y-8 md:space-y-10 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
                    <h2 className="font-display text-4xl md:text-5xl text-white leading-tight text-center md:text-left">
                        We Don't Compete. <br/>
                        <span className="text-gold-500 font-serif italic">We Reign.</span>
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg leading-loose font-light text-center md:text-left">
                        Every corner of our clinic is designed to soothe, impress, and heal. From the curved marble architecture to the silence of our private suites, REFLECTION is a statement against mediocrity.
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:gap-6 max-w-sm mx-auto md:mx-0">
                        {['Bespoke Treatments', 'Privacy Guaranteed', 'World-Class Technology'].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 bg-royal-900/50 p-3 rounded-lg border border-white/5 md:bg-transparent md:border-0 md:p-0">
                                <Star size={14} className="text-gold-500 shrink-0" />
                                <span className="text-slate-300 uppercase tracking-widest text-xs md:text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. EXPERTISE - COLLECTION */}
      <section id="expertise" className="py-20 md:py-32 bg-royal-900 relative rounded-t-[3rem] md:rounded-t-[4rem] border-t border-white/5 -mt-10 z-20">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16 md:mb-24 reveal-on-scroll opacity-0 translate-y-10">
                  <span className="text-gold-500 text-xs uppercase tracking-[0.4em] block mb-4">The Collection</span>
                  <h2 className="font-display text-3xl md:text-6xl text-white">Curated Services</h2>
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
                        className="group relative h-[350px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden reveal-on-scroll opacity-0 translate-y-10 cursor-default shadow-2xl"
                        style={{ transitionDelay: `${idx * 150}ms` }}
                      >
                          <img 
                            src={s.img} 
                            alt={s.title} 
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-50" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent"></div>
                          
                          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                              <p className="text-gold-500 text-[10px] md:text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{s.sub}</p>
                              <h3 className="font-display text-2xl md:text-3xl text-white mb-2 md:mb-6 group-hover:text-gold-200 transition-colors">{s.title}</h3>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-20 md:py-40 relative bg-royal-950 z-20">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16 md:mb-24 reveal-on-scroll opacity-0 translate-y-10">
                  <span className="text-gold-500 text-xs uppercase tracking-[0.4em] block mb-4">Unmatched Excellence</span>
                  <h2 className="font-display text-3xl md:text-6xl text-white mb-8">Why Choose REFLECTION</h2>
                  <div className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {/* USP 1: Integrated Care */}
                  <div className="bg-royal-900/40 border border-white/5 p-8 md:p-12 rounded-[2rem] hover:border-gold-500/30 transition-all duration-700 group hover:-translate-y-2 reveal-on-scroll opacity-0 translate-y-10">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-royal-950 rounded-full flex items-center justify-center border border-gold-500/20 mb-8 md:mb-10 group-hover:shadow-[0_0_30px_rgba(198,156,109,0.3)] transition-all duration-500">
                          <ShieldCheck className="text-gold-500 w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h3 className="font-display text-xl md:text-2xl text-white mb-4 group-hover:text-gold-200 transition-colors">Integrated Mastery</h3>
                      <p className="text-slate-400 font-light leading-loose text-sm">
                          We don't just treat symptoms; we harmonize health. From precise dental architecture to complex oncological nutrition, our multi-disciplinary ecosystem ensures every aspect of your well-being is expertly orchestrated under one sovereign roof.
                      </p>
                  </div>

                  {/* USP 2: Expert Specialists */}
                  <div className="bg-royal-900/40 border border-white/5 p-8 md:p-12 rounded-[2rem] hover:border-gold-500/30 transition-all duration-700 group hover:-translate-y-2 reveal-on-scroll opacity-0 translate-y-10" style={{ transitionDelay: '0.15s' }}>
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-royal-950 rounded-full flex items-center justify-center border border-gold-500/20 mb-8 md:mb-10 group-hover:shadow-[0_0_30px_rgba(198,156,109,0.3)] transition-all duration-500">
                          <UserCheck className="text-gold-500 w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h3 className="font-display text-xl md:text-2xl text-white mb-4 group-hover:text-gold-200 transition-colors">Elite Specialists</h3>
                      <p className="text-slate-400 font-light leading-loose text-sm">
                          Led by the visionary Dr. Vaishali Dave and the multi-specialist Dr. Saroj Singh, our team represents the absolute pinnacle of medical authority. Decades of rigorous training combined with an artist's intuition define our clinical standard.
                      </p>
                  </div>

                  {/* USP 3: Luxurious Experience */}
                  <div className="bg-royal-900/40 border border-white/5 p-8 md:p-12 rounded-[2rem] hover:border-gold-500/30 transition-all duration-700 group hover:-translate-y-2 reveal-on-scroll opacity-0 translate-y-10" style={{ transitionDelay: '0.3s' }}>
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-royal-950 rounded-full flex items-center justify-center border border-gold-500/20 mb-8 md:mb-10 group-hover:shadow-[0_0_30px_rgba(198,156,109,0.3)] transition-all duration-500">
                          <Sparkles className="text-gold-500 w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h3 className="font-display text-xl md:text-2xl text-white mb-4 group-hover:text-gold-200 transition-colors">The Royal Standard</h3>
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