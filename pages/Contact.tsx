import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-royal-900 min-h-screen text-white relative">
        <div className="container mx-auto px-6 relative z-10">
            <h1 className="font-display text-5xl text-center mb-16">Secure Your Audience</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-royal-800/50 backdrop-blur-sm p-8 border border-white/5 shadow-2xl">
                {/* Form */}
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gold-500">First Name</label>
                            <input type="text" className="w-full bg-royal-900 border border-slate-700 p-3 focus:border-gold-500 outline-none text-slate-200 transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gold-500">Last Name</label>
                            <input type="text" className="w-full bg-royal-900 border border-slate-700 p-3 focus:border-gold-500 outline-none text-slate-200 transition-colors" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gold-500">Service Required</label>
                        <select className="w-full bg-royal-900 border border-slate-700 p-3 focus:border-gold-500 outline-none text-slate-200 transition-colors">
                            <option>Dental Services</option>
                            <option>Cosmetology</option>
                            <option>Trichology</option>
                            <option>Oncology Dietitian</option>
                            <option>Oncologist Consultation</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gold-500">Message</label>
                        <textarea rows={4} className="w-full bg-royal-900 border border-slate-700 p-3 focus:border-gold-500 outline-none text-slate-200 transition-colors"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-gold-600 text-royal-900 font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors">
                        Request Appointment
                    </button>
                </form>

                {/* Info */}
                <div className="flex flex-col justify-between space-y-8 md:space-y-0 p-4 md:p-8 border-t md:border-t-0 md:border-l border-white/5">
                    <div>
                        <h3 className="font-display text-2xl mb-6 text-white">The Estate</h3>
                        <p className="text-slate-400 font-light leading-relaxed mb-8">
                            Our clinic is located in the heart of the city's most exclusive district. Valet parking is complimentary for all guests.
                        </p>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="bg-royal-900 p-3 rounded-full text-gold-500"><MapPin size={20} /></div>
                                <div>
                                    <h4 className="uppercase text-xs tracking-widest text-slate-500 mb-1">Address</h4>
                                    <p>Shop No.1, Platinum Plaza, Mundra Rd, nr. Chanakya School, Bohra Colony, Bhuj, Gujarat 370040</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-royal-900 p-3 rounded-full text-gold-500"><Phone size={20} /></div>
                                <div>
                                    <h4 className="uppercase text-xs tracking-widest text-slate-500 mb-1">Private Line</h4>
                                    <p>+91 08980736378</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-royal-900 p-3 rounded-full text-gold-500"><Clock size={20} /></div>
                                <div>
                                    <h4 className="uppercase text-xs tracking-widest text-slate-500 mb-1">Hours</h4>
                                    <p>Mon - Sat: 09:00 - 20:00 <br/> Sun: By Special Request</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
    </div>
  );
};

export default Contact;