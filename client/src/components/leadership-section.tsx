export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-200 fade-in-up">
              Hoggaamiyayaasha Shirkadda
            </h2>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto fade-in-up">
              Shakhsiyaadka ku takhasusay kobaca aqoonta teknoolajiyada ee bulshada Soomaaliyeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Founder */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl fade-in-up border border-blue-800/30">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <i className="fas fa-rocket text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-blue-200 mb-2">Mohamed Faratoon</h3>
                <p className="text-blue-400 font-semibold text-lg">Aasaasaha (Founder)</p>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                Mohamed Faratoon waa aasaasaha Somali Books, oo leh khibrad dheer oo ku saabsan 
                daabacaadda iyo faafinta buugaagta waxbarasho. Wuxuu hirgalinayaa riyada ah in 
                loo helo buugaag casri ah oo af-soomaali ah.
              </p>
            </div>
            
            {/* CEO */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl fade-in-up border border-blue-800/30">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <i className="fas fa-crown text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-blue-200 mb-2">Yahye Abdirahman</h3>
                <p className="text-blue-400 font-semibold text-lg">Madaxa Fulinta (CEO)</p>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                Yahye Abdirahman waa qoraa caaan ah oo qoray buugaag badan oo ku saabsan 
                teknoolajiyada. Wuxuu u hogaaminayaa shirkadda si loo gaaro yoolalka 
                waxbarasho ee bulshada Soomaaliyeed.
              </p>
            </div>
          </div>
          
          {/* Shared Vision */}
          <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 rounded-2xl p-8 md:p-12 shadow-2xl fade-in-up border border-blue-700/30">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-200 mb-6">
                Riyadeenna Wadajirka ah
              </h3>
              <p className="text-lg text-blue-300 leading-relaxed max-w-4xl mx-auto mb-6">
                Mohamed Faratoon iyo Yahye Abdirahman waxay wadaagaan riyo qoto dheer oo ah 
                kobaca waxbarashada iyo aqoonta teknoolajiyada ee bulshada ku hadasha af-soomaaliga. 
                Ujeedkoodu waa in ay abuuraan buugaag fudud oo macalin la'aan loo baran karo, 
                kuwaas oo ka caawinaya dhallinyarada Soomaaliyeed inay helaan xirfado casri ah.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <i className="fas fa-lightbulb text-4xl text-blue-400 mb-3"></i>
                  <h4 className="text-xl font-semibold text-blue-200 mb-2">Hal-abuur</h4>
                  <p className="text-blue-300 text-sm">Abuurista buugaag cusub oo casri ah</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-users text-4xl text-blue-400 mb-3"></i>
                  <h4 className="text-xl font-semibold text-blue-200 mb-2">Bulshada</h4>
                  <p className="text-blue-300 text-sm">Kobaca aqoonta bulshada Soomaaliyeed</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-star text-4xl text-blue-400 mb-3"></i>
                  <h4 className="text-xl font-semibold text-blue-200 mb-2">Tayada</h4>
                  <p className="text-blue-300 text-sm">Buugaag tayo sare leh oo fudud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}