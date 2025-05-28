import { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const mouseEffectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !mouseEffectRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create dynamic gradient that follows mouse
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      
      mouseEffectRef.current.style.background = `
        radial-gradient(circle at ${percentX}% ${percentY}%, 
          rgba(59, 130, 246, 0.3) 0%, 
          rgba(37, 99, 235, 0.2) 25%, 
          rgba(30, 58, 138, 0.1) 50%, 
          transparent 70%)
      `;
      
      // Add subtle transform to content based on mouse position
      const moveX = (percentX - 50) * 0.02;
      const moveY = (percentY - 50) * 0.02;
      
      const content = heroRef.current.querySelector('.hero-content') as HTMLElement;
      if (content) {
        content.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="hero-interactive min-h-screen flex items-center justify-center relative mt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 overflow-hidden"
    >
      {/* Interactive mouse effect overlay */}
      <div 
        ref={mouseEffectRef}
        className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="hero-content floating-animation transition-transform duration-300 ease-out">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
            Somali Books
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200 max-w-3xl mx-auto">
            Buugaagta Casriga ah ee Teknoolajiyada - Baro Macalin La'aan
          </p>
          <p className="text-lg mb-12 text-blue-300 max-w-2xl mx-auto">
            Hel buugaagta ugu horeysay ee af-soomaali ah oo ku saabsan AI, Programming, Linux, iyo Computer Science
          </p>
          <a 
            href="#books" 
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-4 rounded-lg text-white font-semibold text-lg hover:from-blue-400 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
          >
            Daawad Buugaagta
            <i className="fas fa-arrow-down ml-2"></i>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-blue-200 text-2xl"></i>
      </div>
    </section>
  );
}
