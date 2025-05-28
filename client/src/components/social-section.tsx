import { useEffect, useRef } from "react";

export default function SocialSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      
      const socialIcons = sectionRef.current.querySelectorAll('.social-icon');
      socialIcons.forEach((icon, index) => {
        const element = icon as HTMLElement;
        const moveX = (percentX - 50) * 0.01 * (index + 1);
        const moveY = (percentY - 50) * 0.01 * (index + 1);
        element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1)`;
      });
    };

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Interactive background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-100 fade-in-up">
            Nala Socoda Baraha Bulshada
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto fade-in-up">
            Xiriir nala sameysanaa si aad u hesho wararka ugu dambeeyay ee buugaagta cusub
          </p>
        </div>
        
        <div className="flex justify-center items-center space-x-8 md:space-x-12">
          {/* YouTube */}
          <a 
            href="https://www.youtube.com/@Somali_BaroAI"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon group"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border border-blue-600">
              <i className="fab fa-youtube text-3xl text-blue-100 group-hover:text-white transition-colors"></i>
            </div>
            <p className="text-blue-200 text-sm mt-3 font-medium text-center">YouTube</p>
          </a>

          {/* Telegram */}
          <a 
            href="https://t.me/somalibooks"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon group"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border border-blue-600">
              <i className="fab fa-telegram text-3xl text-blue-100 group-hover:text-white transition-colors"></i>
            </div>
            <p className="text-blue-200 text-sm mt-3 font-medium text-center">Telegram</p>
          </a>

          {/* Facebook */}
          <a 
            href="https://www.facebook.com/soomaalibooks/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon group"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border border-blue-600">
              <i className="fab fa-facebook text-3xl text-blue-100 group-hover:text-white transition-colors"></i>
            </div>
            <p className="text-blue-200 text-sm mt-3 font-medium text-center">Facebook</p>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/252634048063"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon group"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border border-green-500">
              <i className="fab fa-whatsapp text-3xl text-green-100 group-hover:text-white transition-colors"></i>
            </div>
            <p className="text-green-200 text-sm mt-3 font-medium text-center">WhatsApp</p>
          </a>
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-300 text-lg">
            Sii socda wararka iyo buugaagta cusub ee soo socda!
          </p>
        </div>
      </div>
    </section>
  );
}