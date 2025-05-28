export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white fade-in-up">
            Naga
          </h2>
          <div className="bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl fade-in-up">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Somali Books waa shirkad u takhasusay daabacaadda buugaagta casriga ah ee af-soomaali ah. 
              Ujeedkayagu waa in aan u sahalno dhammaan Soomaalida si ay u helaan xog iyo cilmi 
              ku saabsan teknoolajiyada casriga ah.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Buugaagteenu waxay ka hadlaan mowduucyo ay ka mid yihiin AI, Programming, Linux, 
              Computer Science, iyo teknoolajiyado kale oo muhiim ah oo ay qoreen qorayaal Soomaali ah.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <i className="fas fa-book text-4xl text-blue-400 mb-4"></i>
                <h3 className="text-xl font-semibold text-white mb-2">5+ Buugaag</h3>
                <p className="text-gray-400">Buugaag casri ah oo teknoolajiyada</p>
              </div>
              <div className="p-4">
                <i className="fas fa-language text-4xl text-blue-400 mb-4"></i>
                <h3 className="text-xl font-semibold text-white mb-2">Af-Soomaali</h3>
                <p className="text-gray-400">Dhammaan buugaagtu af-soomaali</p>
              </div>
              <div className="p-4">
                <i className="fas fa-graduation-cap text-4xl text-blue-400 mb-4"></i>
                <h3 className="text-xl font-semibold text-white mb-2">Macalin La'aan</h3>
                <p className="text-gray-400">Baro adiga oo keligaa ah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
