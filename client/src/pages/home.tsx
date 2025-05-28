import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BooksCatalog from "@/components/books-catalog";
import AboutSection from "@/components/about-section";
import LeadershipSection from "@/components/leadership-section";
import SocialSection from "@/components/social-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href?.includes('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <HeroSection />
      <div className="section-divider"></div>
      <BooksCatalog />
      <div className="section-divider"></div>
      <AboutSection />
      <div className="section-divider"></div>
      <LeadershipSection />
      <div className="section-divider"></div>
      <SocialSection />
      <div className="section-divider"></div>
      <ContactSection />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/252634048063" 
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-3xl transition-all duration-300 floating-animation"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
      </div>
    </div>
  );
}
