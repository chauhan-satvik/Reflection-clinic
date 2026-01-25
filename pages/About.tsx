import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-royal-900 text-white min-h-screen">
       <div className="container mx-auto px-6">
           {/* Header */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
               <div>
                   <h1 className="font-display text-6xl mb-8 leading-tight">The <span className="text-gold-500">Genesis</span> of Perfection</h1>
                   <div className="w-24 h-1 bg-gold-600 mb-8"></div>
                   <p className="text-lg text-slate-300 leading-loose mb-6 font-light">
                       REFLECTION Clinic was born from a singular vision: to create a healthcare facility that transcends the clinical and enters the realm of the majestic. We looked at the standard of care in our town and decided it wasn't enough.
                   </p>
                   <p className="text-lg text-slate-300 leading-loose font-light">
                       We built a monster. A facility so advanced, so luxurious, and so detail-oriented that it stands alone. We combine the precision of modern science with the hospitality of a platinum court.
                   </p>
               </div>
               <div className="relative">
                   <img src="https://picsum.photos/id/1033/800/1000" alt="Clinic Architecture" className="w-full h-full object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" />
                   <div className="absolute -bottom-10 -left-10 bg-royal-800 p-8 shadow-xl border border-gold-500/20 max-w-xs hidden md:block">
                       <p className="font-serif italic text-gold-400 text-lg">"We don't compete. We dominate through excellence."</p>
                   </div>
               </div>
           </div>

           {/* Values */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
               {[
                   { title: 'Sovereignty', desc: 'You are the ruler of your health. We are your loyal advisors.' },
                   { title: 'Opulence', desc: 'Every touchpoint, from the waiting area to the treatment chair, is premium.' },
                   { title: 'Precision', desc: 'Zero compromise on medical standards and technological accuracy.' }
               ].map((v, i) => (
                   <div key={i} className="bg-royal-800 p-10 border-t-2 border-gold-600 hover:bg-royal-700 transition-colors">
                       <h3 className="font-display text-2xl mb-4">{v.title}</h3>
                       <p className="text-slate-400">{v.desc}</p>
                   </div>
               ))}
           </div>

           {/* Team */}
           <div className="text-center mb-16">
               <h2 className="font-display text-4xl mb-12">The Masters</h2>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                   {[1, 2, 3, 4].map((i) => (
                       <div key={i} className="group">
                           <div className="overflow-hidden mb-4 relative">
                               <img src={`https://picsum.photos/id/${100 + i}/400/500`} alt="Doctor" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                               <div className="absolute inset-0 bg-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           </div>
                           <h4 className="font-display text-xl">Dr. Name Surname</h4>
                           <p className="text-xs uppercase tracking-widest text-gold-500">Specialist</p>
                       </div>
                   ))}
               </div>
           </div>
       </div>
    </div>
  );
};

export default About;