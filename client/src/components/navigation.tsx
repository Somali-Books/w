import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`nav-glass fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900/95' : 'bg-blue-900/80'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Company Logo */}
            <img 
              src="/attached_assets/Somalibook-logo.jpeg" 
              alt="Somali Books Logo"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-white">Somali Books</h1>
              <p className="text-xs text-blue-300">Buugaagta Waxbarashada</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-blue-300 transition-colors">
              Guriga
            </a>
            <a href="#books" className="text-white hover:text-blue-300 transition-colors">
              Buugaag
            </a>
            <a href="#about" className="text-white hover:text-blue-300 transition-colors">
              Naga
            </a>
            <a href="#contact" className="text-white hover:text-blue-300 transition-colors">
              Xidhiidh
            </a>
          </div>
          <button className="md:hidden text-white">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
