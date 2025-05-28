import { useEffect, useRef } from "react";
import BookCard from "./book-card";
import bookAiImage from "@assets/isbar Ai macalin la'aan book image.png";
import bookChatgptImage from "@assets/isbar Chatgpt macalin la'aan book image.jpg";
import bookComputerImage from "@assets/isbar Computer macalin la'aan book image.png";
// Note: Using direct path for PNG file to avoid import issues
const bookLinuxImage = "/attached_assets/isbar linux macalin la'aan book image.PNG";
import bookProgrammingImage from "@assets/isbar programing macalin la'aan book image.png";

const books = [
  {
    id: 1,
    title: "ISBAR AI MA CALIN LA' AAN 2",
    author: "Yahye Abdirahman",
    description: "Qoraga Buuga: Yahye Abdirahman. Buug casri ah oo ku saabsan AI-ga iyo sida loo isticmaalo",
    image: bookAiImage,
    whatsappLink: "https://wa.me/252634048063"
  },
  {
    id: 2,
    title: "Isbar ChatGPT Macalin La'aan",
    author: "M Yasin Faratoon",
    description: "Baro sida loo isticmaalo ChatGPT-ga macalin la'aan",
    image: bookChatgptImage,
    whatsappLink: "https://wa.me/252634048063"
  },
  {
    id: 3,
    title: "ISBAR Computer Macalin La'aan",
    author: "Yahye Abdirahman",
    description: "Asaasiyaasha computer-ka iyo sida loo isticmaalo",
    image: bookComputerImage,
    whatsappLink: "https://wa.me/252634048063"
  },
  {
    id: 4,
    title: "ISBAR Linux Macalin La'aan",
    author: "Yahye Abdirahman",
    description: "Baro Linux operating system-ka si fudud",
    image: bookLinuxImage,
    whatsappLink: "https://wa.me/252634048063"
  },
  {
    id: 5,
    title: "ISBAR Programming Macalin La'aan",
    author: "Yahye Abdirahman",
    description: "Baro programming iyo code-ka qorista",
    image: bookProgrammingImage,
    whatsappLink: "https://wa.me/252634048063"
  },
  {
    id: 6,
    title: "Buug Cusub",
    author: "Somali Books",
    description: "Buug cusub oo dhowaan soo bixi doona - sii socda!",
    image: "",
    whatsappLink: "https://wa.me/252634048063",
    isUpcoming: true
  }
];

export default function BooksCatalog() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      
      // Add subtle background gradient shift
      const backgroundElement = sectionRef.current.querySelector('.interactive-bg') as HTMLElement;
      if (backgroundElement) {
        backgroundElement.style.background = `
          radial-gradient(circle at ${percentX}% ${percentY}%, 
            rgba(30, 58, 138, 0.1) 0%, 
            transparent 50%),
          linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 100%)
        `;
      }

      // Add subtle movement to book cards
      const bookCards = sectionRef.current.querySelectorAll('.book-card');
      bookCards.forEach((card, index) => {
        const element = card as HTMLElement;
        const moveX = (percentX - 50) * 0.005 * (index % 2 === 0 ? 1 : -1);
        const moveY = (percentY - 50) * 0.005 * (index % 2 === 0 ? 1 : -1);
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
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
    <section ref={sectionRef} id="books" className="py-20 relative overflow-hidden">
      <div className="interactive-bg absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 transition-all duration-300 ease-out"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-200 fade-in-up">
            Buugaagteena
          </h2>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto fade-in-up">
            Buugaag casri ah oo ku qoran af-soomaali, kuwaas oo ku saabsan teknoolajiyada iyo barnaamijka
          </p>
        </div>
        
        {/* Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto">
          {books.map((book, index) => (
            <div key={book.id} className={`fade-in-up transition-transform duration-300 ease-out`} style={{ animationDelay: `${index * 0.1}s` }}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
