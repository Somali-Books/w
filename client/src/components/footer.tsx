import { useEffect, useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!footerRef.current) return;
      
      const rect = footerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      
      // Add subtle background shift
      const backgroundElement = footerRef.current.querySelector('.footer-bg') as HTMLElement;
      if (backgroundElement) {
        backgroundElement.style.background = `
          radial-gradient(circle at ${percentX}% ${percentY}%, 
            rgba(59, 130, 246, 0.15) 0%, 
            transparent 60%),
          linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(37, 99, 235) 100%)
        `;
      }
    };

    const footerElement = footerRef.current;
    if (footerElement) {
      footerElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (footerElement) {
        footerElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      <div className="footer-bg absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 transition-all duration-300 ease-out"></div>
      
      <div className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/attached_assets/Somalibook-logo.webp" 
                alt="Somali Books Logo"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Somali Books</h3>
                <p className="text-blue-200 text-sm">Buugaagta Waxbarashada Teknoolajiyada</p>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a 
                href="https://www.youtube.com/@Somali_BaroAI"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-youtube text-xl text-blue-100 group-hover:text-white"></i>
                </div>
              </a>
              <a 
                href="https://t.me/somalibooks"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-telegram text-xl text-blue-100 group-hover:text-white"></i>
                </div>
              </a>
              <a 
                href="https://www.facebook.com/soomaalibooks/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-facebook text-xl text-blue-100 group-hover:text-white"></i>
                </div>
              </a>
              <a 
                href="mailto:somalibok@gmail.com" 
                className="group"
              >
                <div className="w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <i className="fas fa-envelope text-xl text-blue-100 group-hover:text-white"></i>
                </div>
              </a>
              <a 
                href="https://wa.me/252634048063" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 bg-green-600 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <i className="fab fa-whatsapp text-xl text-green-100 group-hover:text-white"></i>
                </div>
              </a>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-blue-200 mb-2">© 2024 Somali Books. Dhammaan xuquuqdu way xifdilan yihiin.</p>
              <p className="text-blue-300 text-sm">Masala area, Hargeisa, Somalia</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
