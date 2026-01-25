import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-royal-950 border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="space-y-6 max-w-sm">
            <h3 className="font-display text-3xl text-white tracking-widest">REFLECTION</h3>
            <p className="text-slate-400 font-serif italic text-lg">
              The only clinic in town where science meets sovereignty.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-16">
            <div className="max-w-xs">
              <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-8">Contact</h4>
              <ul className="space-y-6 text-slate-400 text-sm">
                <li className="flex items-start gap-4 group">
                  <div className="p-2 rounded-full bg-royal-900 border border-white/10 group-hover:border-gold-500/50 transition-colors shrink-0">
                    <MapPin size={16} className="text-gold-500" />
                  </div>
                  <span className="mt-1 group-hover:text-white transition-colors leading-relaxed">
                    Shop No.1, Platinum Plaza,<br/>
                    Mundra Rd, nr. Chanakya School,<br/>
                    Bohra Colony, Bhuj, Gujarat 370040
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="p-2 rounded-full bg-royal-900 border border-white/10 group-hover:border-gold-500/50 transition-colors shrink-0">
                     <Phone size={16} className="text-gold-500" />
                  </div>
                  <span className="group-hover:text-white transition-colors">+91 08980736378</span>
                </li>
              </ul>
            </div>
            
            <div>
                 <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-8">Social</h4>
                 <div className="flex gap-4">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 rounded-full bg-royal-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-500 hover:border-gold-500 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                      <Icon size={18} />
                    </button>
                  ))}
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} REFLECTION Clinic.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <button className="cursor-pointer hover:text-gold-500 transition-colors bg-transparent border-none">Privacy</button>
            <button className="cursor-pointer hover:text-gold-500 transition-colors bg-transparent border-none">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;