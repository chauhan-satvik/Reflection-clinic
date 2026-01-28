import React, { useEffect } from 'react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, ArrowRight, Navigation } from 'lucide-react';
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

const Contact: React.FC = () => {
  useScrollReveal();
  const navigate = useNavigate();

  return (
    <div className="bg-royal-950 min-h-screen pt-24 pb-20 relative">
      <div className="container mx-auto px-6">
        
        {/* 1. Page Header */}
        <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10">
            <h1 className="font-display text-5xl md:text-7xl text-white mb-6">Get in <span className="text-gold-500">Touch</span></h1>
            <p className="text-slate-400 font-light text-lg max-w-2xl mx-auto">
              For general enquiries, directions, or immediate assistance from our front desk. 
              <br/>We are here to guide you.
            </p>
        </div>

        {/* 2. Direct Communication Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            {/* Phone Card */}
            <div className="bg-royal-900/40 border border-white/5 p-10 rounded-[2rem] hover:border-gold-500/30 transition-all duration-500 group reveal-on-scroll opacity-0 translate-y-10">
                <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 bg-royal-950 rounded-full flex items-center justify-center border border-gold-500/20 group-hover:shadow-[0_0_20px_rgba(198,156,109,0.2)] transition-all">
                        <Phone className="text-gold-500 w-8 h-8" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-slate-500 bg-royal-950 px-3 py-1 rounded-full border border-white/5">Voice</span>
                </div>
                <h3 className="font-display text-2xl text-white mb-2">Concierge Desk</h3>
                <p className="text-slate-400 font-light mb-8 text-sm">Available Mon-Sat, 09:00 - 20:00</p>
                <a href="tel:+9108980736378" className="inline-flex items-center gap-3 text-2xl md:text-3xl text-gold-500 hover:text-white transition-colors font-display">
                    +91 08980736378
                </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-royal-900/40 border border-white/5 p-10 rounded-[2rem] hover:border-green-500/30 transition-all duration-500 group reveal-on-scroll opacity-0 translate-y-10" style={{ transitionDelay: '100ms' }}>
                <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 bg-royal-950 rounded-full flex items-center justify-center border border-green-500/20 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all">
                        <MessageCircle className="text-green-500 w-8 h-8" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-slate-500 bg-royal-950 px-3 py-1 rounded-full border border-white/5">Chat</span>
                </div>
                <h3 className="font-display text-2xl text-white mb-2">WhatsApp Support</h3>
                <p className="text-slate-400 font-light mb-8 text-sm">Quick answers & directions</p>
                <a 
                    href="https://wa.me/9108980736378" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-900/20 text-green-500 border border-green-500/30 rounded-full hover:bg-green-500 hover:text-royal-950 transition-all font-bold uppercase tracking-widest text-xs"
                >
                    Start Chat <ArrowRight size={16} />
                </a>
            </div>
        </div>

        {/* 3. Location & Hours Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Info Panel */}
            <div className="lg:col-span-1 space-y-8 reveal-on-scroll opacity-0 translate-y-10">
                {/* Address */}
                <div className="bg-royal-900/40 p-8 rounded-3xl border border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                        <MapPin className="text-gold-500" size={20} />
                        <h3 className="text-white font-display text-xl">The Location</h3>
                    </div>
                    <p className="text-slate-300 font-light leading-relaxed mb-6">
                        Shop No.1, Platinum Plaza,<br/>
                        Mundra Rd, nr. Chanakya School,<br/>
                        Bohra Colony, Bhuj, Gujarat 370040
                    </p>
                    <a 
                        href="https://maps.google.com/?q=Reflection+Clinic+Platinum+Plaza+Bhuj" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-gold-500 text-xs uppercase tracking-widest hover:text-white transition-colors"
                    >
                        Get Directions <ExternalLink size={14} />
                    </a>
                </div>

                {/* Hours */}
                <div className="bg-royal-900/40 p-8 rounded-3xl border border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="text-gold-500" size={20} />
                        <h3 className="text-white font-display text-xl">Operating Hours</h3>
                    </div>
                    <ul className="space-y-4 text-slate-300 font-light text-sm">
                        <li className="flex justify-between border-b border-white/5 pb-2">
                            <span>Monday - Saturday</span>
                            <span className="text-white">09:00 - 20:00</span>
                        </li>
                        <li className="flex justify-between pb-2">
                            <span>Sunday</span>
                            <span className="text-gold-500 italic">By Appointment Only</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Map Embed */}
            <div className="lg:col-span-2 h-[400px] lg:h-auto bg-royal-900 rounded-[2rem] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 relative group reveal-on-scroll opacity-0 translate-y-10 delay-200">
                <iframe 
                    src="https://maps.google.com/maps?q=Platinum%20Plaza%2C%20Mundra%20Rd%2C%20nr.%20Chanakya%20School%2C%20Bohra%20Colony%2C%20Bhuj%2C%20Gujarat&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Clinic Location"
                    className="opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                ></iframe>
                <div className="absolute bottom-6 left-6">
                    <a 
                        href="https://maps.google.com/?q=Reflection+Clinic+Platinum+Plaza+Bhuj" 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-royal-950/80 backdrop-blur-md text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest border border-gold-500/30 flex items-center gap-2 hover:bg-gold-500 hover:text-royal-950 transition-colors"
                    >
                        <Navigation size={14} /> Navigate
                    </a>
                </div>
            </div>
        </div>

        {/* 4. Booking CTA (Distinction) */}
        <div className="bg-gradient-to-r from-royal-900 to-royal-800 rounded-[3rem] p-12 md:p-16 border border-white/5 text-center relative overflow-hidden reveal-on-scroll opacity-0 translate-y-10">
            <div className="absolute top-0 right-0 p-32 bg-gold-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <h2 className="font-display text-3xl md:text-5xl text-white mb-6 relative z-10">Ready to Visit The Sanctuary?</h2>
            <p className="text-slate-400 font-light text-lg mb-10 max-w-xl mx-auto relative z-10">
                If you are looking to schedule a consultation, please visit our dedicated reservation page to secure your slot.
            </p>
            <button 
                onClick={() => navigate('/book')}
                className="relative z-10 bg-gold-600 text-royal-950 px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_30px_rgba(198,156,109,0.3)]"
            >
                Proceed to Booking
            </button>
        </div>

      </div>
    </div>
  );
};

export default Contact;