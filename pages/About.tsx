import React, { useEffect } from 'react';
import { ShieldCheck, Heart, Stethoscope, Users, CheckCircle, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const About: React.FC = () => {
  useScrollReveal();
  const navigate = useNavigate();

  return (
    <div className="bg-royal-950 min-h-screen pt-32 pb-20 text-slate-200">
      
      {/* 1. Page Header */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl text-white mb-6 reveal-on-scroll opacity-0 translate-y-10">
          About <span className="text-gold-500">Reflection</span>
        </h1>
        <div className="w-24 h-[1px] bg-gold-500/50 mx-auto mb-8 reveal-on-scroll opacity-0 translate-y-10 delay-100"></div>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed reveal-on-scroll opacity-0 translate-y-10 delay-200">
          Excellence in care. Integrity in practice. A multi-disciplinary medical centre dedicated to your holistic well-being.
        </p>
      </section>

      {/* 2. Introduction & Philosophy */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal-on-scroll opacity-0 translate-y-10">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Medical Excellence, <br/>Human Touch.</h2>
            <p className="text-slate-400 font-light leading-loose mb-6">
              At REFLECTION Clinic, we believe that true healthcare goes beyond treating symptoms. It is about understanding the person behind the patient. 
            </p>
            <p className="text-slate-400 font-light leading-loose mb-6">
              Founded on the principles of precision and empathy, our facility bridges the gap between specialized medical treatment and the comfort of a premium care environment. Whether you are visiting for complex oral surgery, oncological guidance, or aesthetic restoration, our approach remains the same: <strong>uncompromising quality and absolute transparency.</strong>
            </p>
            <div className="flex items-center gap-4 text-gold-500 font-serif italic">
               <div className="h-[1px] w-12 bg-gold-500"></div>
               <span>Your health is our sovereign duty.</span>
            </div>
          </div>
          <div className="relative reveal-on-scroll opacity-0 translate-y-10 delay-200">
             <div className="absolute inset-0 bg-gold-500/10 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
             <img 
               src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
               alt="Medical Consultation" 
               className="relative z-10 w-full h-[500px] object-cover rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
             />
          </div>
        </div>
      </section>

      {/* 3. Core Pillars (Values) */}
      <section className="bg-royal-900/50 border-y border-white/5 py-24 mb-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10">
             <span className="text-gold-500 text-xs uppercase tracking-[0.3em] block mb-3">Our Standards</span>
             <h2 className="font-display text-3xl md:text-4xl text-white">The Pillars of Practice</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Pillar 1 */}
            <div className="text-center reveal-on-scroll opacity-0 translate-y-10 delay-100">
               <div className="w-16 h-16 mx-auto bg-royal-950 border border-gold-500/30 rounded-full flex items-center justify-center mb-6 text-gold-500">
                 <ShieldCheck size={28} />
               </div>
               <h3 className="font-display text-xl text-white mb-4">Uncompromising Hygiene</h3>
               <p className="text-slate-400 font-light leading-relaxed text-sm">
                 We adhere to strict international sterilization protocols. Your safety is non-negotiable, and we maintain hospital-grade cleanliness across all operatories and suites.
               </p>
            </div>

            {/* Pillar 2 */}
            <div className="text-center reveal-on-scroll opacity-0 translate-y-10 delay-200">
               <div className="w-16 h-16 mx-auto bg-royal-950 border border-gold-500/30 rounded-full flex items-center justify-center mb-6 text-gold-500">
                 <Users size={28} />
               </div>
               <h3 className="font-display text-xl text-white mb-4">Patient-Centric Ethics</h3>
               <p className="text-slate-400 font-light leading-relaxed text-sm">
                 We prioritize honest advice over unnecessary procedures. Every treatment plan is discussed transparently, ensuring you are fully informed and comfortable before proceeding.
               </p>
            </div>

            {/* Pillar 3 */}
            <div className="text-center reveal-on-scroll opacity-0 translate-y-10 delay-300">
               <div className="w-16 h-16 mx-auto bg-royal-950 border border-gold-500/30 rounded-full flex items-center justify-center mb-6 text-gold-500">
                 <Activity size={28} />
               </div>
               <h3 className="font-display text-xl text-white mb-4">Advanced Diagnostics</h3>
               <p className="text-slate-400 font-light leading-relaxed text-sm">
                 Investing in the latest diagnostic technology allows us to detect issues early and treat them with minimal invasiveness, ensuring faster recovery and better outcomes.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Medical Team Overview */}
      <section className="container mx-auto px-6 mb-32">
         <div className="bg-gradient-to-br from-royal-900 to-royal-950 border border-white/5 rounded-[3rem] p-10 md:p-20 flex flex-col md:flex-row items-center gap-12 reveal-on-scroll opacity-0 translate-y-10">
            <div className="w-full md:w-1/2">
               <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Expertise You Can Trust</h2>
               <p className="text-slate-300 font-light leading-loose mb-6">
                 REFLECTION is led by Dr. Vaishali Dave and Dr. Saroj Singh, practitioners who have dedicated decades to mastering their respective fields of Pediatric Dentistry, Oral Pathology, and Oncology.
               </p>
               <p className="text-slate-300 font-light leading-loose mb-8">
                 Our team continually updates their skills with global advancements, ensuring that our patients in Bhuj receive care comparable to international standards. We combine clinical rigor with a compassionate bedside manner.
               </p>
               <button 
                 onClick={() => navigate('/doctors')}
                 className="text-gold-500 uppercase tracking-widest text-xs font-bold border-b border-gold-500/50 pb-1 hover:text-white hover:border-white transition-colors"
               >
                 Meet The Doctors
               </button>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
               <div className="bg-royal-800/50 p-6 rounded-2xl text-center border border-white/5">
                  <Stethoscope className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                  <span className="text-white font-display block">Specialized Care</span>
               </div>
               <div className="bg-royal-800/50 p-6 rounded-2xl text-center border border-white/5">
                  <Heart className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                  <span className="text-white font-display block">Oncology Support</span>
               </div>
               <div className="col-span-2 bg-royal-800/50 p-6 rounded-2xl text-center border border-white/5">
                  <CheckCircle className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                  <span className="text-white font-display block">Certified Protocols</span>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Soft CTA */}
      <section className="container mx-auto px-6 mb-10 text-center reveal-on-scroll opacity-0 translate-y-10">
        <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Your Health, Our Commitment</h2>
        <p className="text-slate-400 font-light mb-8 max-w-xl mx-auto">
          We invite you to visit our facility and experience a standard of care designed around your safety and comfort.
        </p>
        <button 
          onClick={() => navigate('/book')}
          className="bg-gold-600 text-royal-950 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg"
        >
          Schedule A Visit
        </button>
      </section>

    </div>
  );
};

export default About;