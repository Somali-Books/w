export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white fade-in-up">
              Nala Soo Xidhiidh
            </h2>
            <p className="text-xl text-gray-300 fade-in-up">
              Ma qabta su'aal ama waxaad rabta inad nala soo xidhiidho?
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 fade-in-up">
              <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Macluumaadka Xidhiidhka</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Cinwaanka</h4>
                      <p className="text-gray-300">Masala area, Hargeisa, Somalia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <i className="fas fa-phone text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Telefoon</h4>
                      <p className="text-gray-300">+252634048063</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <i className="fas fa-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-gray-300">somalibok@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-center shadow-2xl">
                <i className="fab fa-whatsapp text-6xl text-white mb-4"></i>
                <h3 className="text-2xl font-bold text-white mb-4">Degdeg ugu Soo Iibso</h3>
                <p className="text-green-100 mb-6">Si degdeg ah buugaag ugu iibso WhatsApp-ka</p>
                <a 
                  href="https://wa.me/252634048063" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Ku Guji WhatsApp-ka
                </a>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-6">Saacadaha Shaqada</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-300">Axad - Khamiis</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Jimce</span>
                  <span className="text-white">8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sabti</span>
                  <span className="text-white">9:00 AM - 5:00 PM</span>
                </div>
              </div>
              
              <div className="border-t border-gray-600 pt-6">
                <h4 className="text-xl font-semibold text-white mb-4">Faahfaahin Dheeraad ah</h4>
                <p className="text-gray-300 leading-relaxed">
                  Somali Books waxay u taagan tahay kobaca aqoonta teknoolajiyada 
                  ee bulshada Soomaaliyeed. Ujeedkayagu waa in aan abuurno buugaag 
                  fudud oo macalin la'aan loo baran karo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
