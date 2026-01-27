import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Mail, MapPin, Phone, User, CheckCircle, ChevronDown, Sparkles } from 'lucide-react';

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

const BookVisit: React.FC = () => {
  useScrollReveal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-royal-950 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Success Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/80 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-2xl bg-royal-900/40 backdrop-blur-xl p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-gold-500/30 shadow-[0_0_100px_rgba(198,156,109,0.2)] animate-fade-in-up">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(198,156,109,0.6)]">
            <CheckCircle className="text-royal-950 w-10 h-10 md:w-12 md:h-12" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6">Reservation Secured</h2>
          <p className="text-slate-300 text-base md:text-lg font-light leading-loose mb-10">
            Your request has been received by our concierge desk. We will contact you shortly on <span className="text-gold-500 font-bold">{formData.phone}</span> to finalize your private consultation.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-xs uppercase tracking-[0.3em] text-gold-500 hover:text-white transition-colors border-b border-gold-500/50 hover:border-white pb-1"
          >
            Return to Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-royal-950 min-h-screen pt-24 pb-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 reveal-on-scroll opacity-0 translate-y-10">
            <h1 className="font-display text-4xl md:text-7xl text-white mb-6">Secure Your <span className="text-gold-500">Audience</span></h1>
            <p className="text-slate-400 font-light text-base md:text-lg max-w-2xl mx-auto px-4">
              Begin your journey to perfection. Our schedule is tailored to offer exclusivity and privacy for every guest.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 shadow-2xl reveal-on-scroll opacity-0 translate-y-10 delay-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5">
            
            {/* Left Side: The Sanctuary Info */}
            <div className="w-full lg:w-5/12 relative min-h-[400px] lg:min-h-[600px] bg-royal-900 flex flex-col justify-between p-8 md:p-12 overflow-hidden group order-2 lg:order-1">
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0 z-0">
                   <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                      alt="Luxury Clinic" 
                      className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[2s]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-b from-royal-950/80 via-royal-900/60 to-royal-950/90"></div>
                </div>

                <div className="relative z-10 mb-8 lg:mb-0">
                   <h3 className="font-display text-3xl text-white mb-2">The Sanctuary</h3>
                   <div className="w-12 h-1 bg-gold-500"></div>
                </div>

                <div className="relative z-10 space-y-8 md:space-y-10">
                   {/* Location */}
                   <div className="flex items-start gap-4 md:gap-6 group/item cursor-default">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold-500/30 flex items-center justify-center bg-royal-950/50 backdrop-blur-sm shrink-0 group-hover/item:border-gold-500 group-hover/item:shadow-[0_0_15px_rgba(198,156,109,0.3)] transition-all duration-500">
                         <MapPin className="text-gold-500 w-4 h-4 md:w-5 md:h-5 group-hover/item:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                         <span className="text-[10px] md:text-xs uppercase tracking-widest text-gold-400 block mb-2 group-hover/item:text-white transition-colors">Our Location</span>
                         <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base group-hover/item:text-slate-100 transition-colors">
                            Shop No.1, Platinum Plaza,<br/>
                            Mundra Rd, nr. Chanakya School,<br/>
                            Bohra Colony, Bhuj, Gujarat 370040
                         </p>
                      </div>
                   </div>

                   {/* Phone */}
                   <div className="flex items-start gap-4 md:gap-6 group/item cursor-default">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold-500/30 flex items-center justify-center bg-royal-950/50 backdrop-blur-sm shrink-0 group-hover/item:border-gold-500 group-hover/item:shadow-[0_0_15px_rgba(198,156,109,0.3)] transition-all duration-500">
                         <Phone className="text-gold-500 w-4 h-4 md:w-5 md:h-5 group-hover/item:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                         <span className="text-[10px] md:text-xs uppercase tracking-widest text-gold-400 block mb-2 group-hover/item:text-white transition-colors">Private Concierge</span>
                         <p className="text-slate-300 font-light text-lg md:text-xl group-hover/item:text-white transition-colors">+91 08980736378</p>
                      </div>
                   </div>

                   {/* Hours */}
                   <div className="flex items-start gap-4 md:gap-6 group/item cursor-default">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold-500/30 flex items-center justify-center bg-royal-950/50 backdrop-blur-sm shrink-0 group-hover/item:border-gold-500 group-hover/item:shadow-[0_0_15px_rgba(198,156,109,0.3)] transition-all duration-500">
                         <Clock className="text-gold-500 w-4 h-4 md:w-5 md:h-5 group-hover/item:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                         <span className="text-[10px] md:text-xs uppercase tracking-widest text-gold-400 block mb-2 group-hover/item:text-white transition-colors">Visiting Hours</span>
                         <p className="text-slate-300 font-light text-sm md:text-base group-hover/item:text-slate-100 transition-colors">Mon - Sat: 09:00 - 20:00</p>
                         <p className="text-slate-400 font-light text-xs md:text-sm mt-1">Sunday by special appointment only.</p>
                      </div>
                   </div>
                </div>
            </div>

            {/* Right Side: The Protocol (Form) */}
            <div className="w-full lg:w-7/12 bg-royal-800 p-6 md:p-16 relative order-1 lg:order-2">
                {/* Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-8 md:space-y-12">
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <div className="group relative">
                        <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold-500 block mb-2 md:mb-4 group-focus-within:text-white transition-colors">Full Name</label>
                        <div className="relative">
                          <input 
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text" 
                            className="w-full bg-transparent border-b border-slate-700 pb-2 md:pb-4 text-white text-base md:text-lg focus:outline-none focus:border-gold-500 transition-all placeholder:text-slate-700"
                            placeholder="e.g. Alexander Sterling"
                          />
                          <User className="absolute right-0 bottom-3 md:bottom-4 text-slate-700 group-focus-within:text-gold-500 transition-colors w-4 h-4 md:w-5 md:h-5" />
                        </div>
                      </div>

                      <div className="group relative">
                        <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold-500 block mb-2 md:mb-4 group-focus-within:text-white transition-colors">Contact Number</label>
                        <div className="relative">
                          <input 
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel" 
                            className="w-full bg-transparent border-b border-slate-700 pb-2 md:pb-4 text-white text-base md:text-lg focus:outline-none focus:border-gold-500 transition-all placeholder:text-slate-700"
                            placeholder="+91"
                          />
                          <Phone className="absolute right-0 bottom-3 md:bottom-4 text-slate-700 group-focus-within:text-gold-500 transition-colors w-4 h-4 md:w-5 md:h-5" />
                        </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <div className="group relative">
                        <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold-500 block mb-2 md:mb-4 group-focus-within:text-white transition-colors">Service Suite</label>
                        <div className="relative">
                          <select 
                            required
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-slate-700 pb-2 md:pb-4 text-white text-base md:text-lg focus:outline-none focus:border-gold-500 transition-all appearance-none cursor-pointer [&>option]:bg-royal-900"
                          >
                            <option value="" disabled>Select Preference</option>
                            <option value="dental">Signature Dentistry</option>
                            <option value="cosmetology">High Cosmetology</option>
                            <option value="trichology">Trichology Restoration</option>
                            <option value="oncology">Oncology Consultation</option>
                            <option value="diet">Clinical Nutrition</option>
                          </select>
                          <ChevronDown className="absolute right-0 bottom-3 md:bottom-4 text-slate-700 group-focus-within:text-gold-500 transition-colors w-4 h-4 md:w-5 md:h-5" />
                        </div>
                      </div>

                      <div className="group relative">
                        <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold-500 block mb-2 md:mb-4 group-focus-within:text-white transition-colors">Preferred Date</label>
                        <div className="relative">
                          <input 
                            required
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            type="date" 
                            className="w-full bg-transparent border-b border-slate-700 pb-2 md:pb-4 text-white text-base md:text-lg focus:outline-none focus:border-gold-500 transition-all [color-scheme:dark]"
                          />
                        </div>
                      </div>
                   </div>

                   <div className="group relative">
                        <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold-500 block mb-2 md:mb-4 group-focus-within:text-white transition-colors">Personal Notes</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={2}
                          className="w-full bg-transparent border-b border-slate-700 pb-2 md:pb-4 text-white text-base md:text-lg focus:outline-none focus:border-gold-500 transition-all resize-none placeholder:text-slate-700"
                          placeholder="Any specific requirements or concerns..."
                        ></textarea>
                   </div>

                   <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gold-600 hover:bg-white text-royal-950 py-4 md:py-6 text-xs md:text-sm font-bold uppercase tracking-widest md:tracking-[0.3em] transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-4 group"
                   >
                     {isSubmitting ? 'Confirming...' : 'Request Appointment'}
                     {!isSubmitting && <Sparkles size={16} className="group-hover:text-royal-950 transition-colors" />}
                   </button>

                   <p className="text-center text-slate-500 text-[10px] uppercase tracking-widest mt-6">
                     By submitting, you agree to our privacy policy. Your information remains strictly confidential.
                   </p>

                </form>
            </div>

        </div>

      </div>
    </div>
  );
};

export default BookVisit;