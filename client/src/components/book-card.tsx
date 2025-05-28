interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
  whatsappLink: string;
}

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="book-card bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      <div className="relative overflow-hidden">
        <img 
          src={book.image} 
          alt={book.title}
          className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{book.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">Qoraga: {book.author}</p>
        <p className="text-gray-400 mb-6 text-sm">{book.description}</p>
        <a 
          href={book.whatsappLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-btn w-full py-3 px-6 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg"
        >
          <i className="fab fa-whatsapp text-xl"></i>
          Soo Iibso WhatsApp-ka
        </a>
      </div>
    </div>
  );
}
