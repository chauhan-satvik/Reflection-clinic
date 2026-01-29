import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    
    // Handle Hash Links (e.g., /#expertise)
    if (path.includes('#')) {
      const [pagePath, hash] = path.split('#');
      const targetPath = pagePath || '/'; // Default to root if empty string before #
      
      if (location.pathname !== targetPath) {
        navigate(targetPath);
        // Delay to allow page transition
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Standard Navigation
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'The Masters', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-4 md:px-0 py-6`}
    >
      <div className={`container mx-auto max-w-6xl transition-all duration-700 ${
        isScrolled 
          ? 'bg-royal-900/80 backdrop-blur-2xl border border-white/5 rounded-full px-8 py-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent px-6 py-4'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => handleNavClick('/')} className="group relative z-50 flex items-center gap-3 bg-transparent border-none p-0 cursor-pointer">
             <img 
               src="/logo.png" 
               alt="REFLECTION Clinic Logo" 
               className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-500 ease-out group-hover:scale-105 opacity-95 group-hover:opacity-100"
             />
             <div className="flex flex-col text-left">
               <span className="text-xl md:text-2xl font-display font-bold tracking-[0.15em] text-white group-hover:text-gold-500 transition-colors duration-500">REFLECTION</span>
             </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.path)}
                className="text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-gold-500 transition-all duration-500 font-medium relative group bg-transparent border-none cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('/book')}
              className="bg-gold-500 text-royal-950 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 transform hover:scale-105 shadow-[0_0_20px_rgba(198,156,109,0.3)] cursor-pointer"
            >
              Book Visit
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-50 p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Overlay */}
    <div className={`fixed inset-0 bg-royal-950 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-700 md:hidden ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
      {navLinks.map((link) => (
        <button 
          key={link.name}
          onClick={() => handleNavClick(link.path)}
          className="text-3xl font-display text-white hover:text-gold-500 transition-colors duration-300 bg-transparent border-none cursor-pointer"
        >
          {link.name}
        </button>
      ))}
      <button 
        onClick={() => handleNavClick('/book')}
        className="bg-gold-500 text-royal-950 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest mt-4 cursor-pointer"
      >
        Book Visit
      </button>
    </div>
    </>
  );
};

export default Header;