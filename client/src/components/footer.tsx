export default function Footer() {
  return (
    <footer className="bg-blue-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img 
              src="/attached_assets/Somalibook-logo.jpeg" 
              alt="Somali Books Logo"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-white">Somali Books</h3>
              <p className="text-blue-200 text-sm">Buugaagta Waxbarashada Teknoolajiyada</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-blue-200 mb-2">© 2024 Somali Books. Dhammaan xuquuqdu way xifdilan yihiin.</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="mailto:somalibok@gmail.com" 
                className="text-blue-200 hover:text-white transition-colors"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a 
                href="https://wa.me/252634048063" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a 
                href="tel:+252634048063" 
                className="text-blue-200 hover:text-white transition-colors"
              >
                <i className="fas fa-phone text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
