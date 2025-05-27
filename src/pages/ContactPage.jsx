export default function Contact() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 py-32 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Image */}
        <img
          src="https://americanglobal.com/wp-content/uploads/2024/03/AboutSquare_0002_Culture-and-Career-Button-1-1.jpg"
          alt="Culture and Career"
          className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg"
        />

        {/* Text and Button */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Questions? Suggestions?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            We’d love to hear from you.
          </p>
          <button className="bg-black text-white font-medium px-4 py-2 rounded-md transition-transform duration-300 hover:scale-105">
            Email Us
          </button>
        </div>
      </div>
    </div>
  );
}
