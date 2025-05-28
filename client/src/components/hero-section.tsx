export default function HeroSection() {
  return (
    <section id="home" className="hero-3d min-h-screen flex items-center justify-center relative mt-20">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="floating-animation">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Somali Books
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Buugaagta Casriga ah ee Teknoolajiyada - Baro Macalin La'aan
          </p>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            Hel buugaagta ugu horeysay ee af-soomaali ah oo ku saabsan AI, Programming, Linux, iyo Computer Science
          </p>
          <a 
            href="#books" 
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-4 rounded-lg text-white font-semibold text-lg hover:from-blue-400 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Daawad Buugaagta
            <i className="fas fa-arrow-down ml-2"></i>
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
}
