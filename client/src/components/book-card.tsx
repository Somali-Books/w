interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
  whatsappLink: string;
  isUpcoming?: boolean;
}

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  if (book.isUpcoming) {
    return (
      <div className="book-card bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-dashed border-blue-500">
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
          <div className="text-center">
            <i className="fas fa-plus-circle text-6xl text-blue-300 mb-4 animate-pulse"></i>
            <p className="text-blue-200 font-semibold text-lg">Upcoming</p>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-blue-200 mb-2 line-clamp-2">{book.title}</h3>
          <p className="text-blue-300 mb-3 text-sm">Qoraga: {book.author}</p>
          <p className="text-gray-400 mb-4 text-xs line-clamp-2">{book.description}</p>
          <div className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold flex items-center justify-center gap-2 text-sm">
            <i className="fas fa-clock text-lg"></i>
            Dhowaan
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="book-card bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={book.image} 
          alt={book.title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-200 mb-2 line-clamp-2">{book.title}</h3>
        <p className="text-blue-300 mb-3 text-sm">Qoraga: {book.author}</p>
        <p className="text-gray-400 mb-4 text-xs line-clamp-2">{book.description}</p>
        <a 
          href={book.whatsappLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-btn w-full py-2 px-4 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg text-sm"
        >
          <i className="fab fa-whatsapp text-lg"></i>
          Soo Iibso
        </a>
      </div>
    </div>
  );
}
