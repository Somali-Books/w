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
  }
];

export default function BooksCatalog() {
  return (
    <section id="books" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white fade-in-up">
            Buugaagteena
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in-up">
            Buugaag casri ah oo ku qoran af-soomaali, kuwaas oo ku saabsan teknoolajiyada iyo barnaamijka
          </p>
        </div>
        
        {/* Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <div key={book.id} className={`fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
