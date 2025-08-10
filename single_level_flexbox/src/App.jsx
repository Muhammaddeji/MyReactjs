function App() {


  return (
    
      <div className="bg-black min-h-screen flex flex-col items-center py-10">

        <h1 className="text-orange-400 text-5xl font-extrabold mb-2 tracking-wide">
          Products
        </h1>

        <p className="text-gray-300 mbb-12">
          Affordable quality, every time.
        </p>

        <div className="flex gap-8">

          <div className="border border-white p-6 flex flex-col items-center w-64">
            <div className="bg-pink-600 w-24 h-24 rounded-full mb-4"></div>

            <h2 className="text-white text-xl font-extrabold mb-1"> MATTE</h2>
            <div className="w-6 border-b-2 border-white mb-3"></div>
            <p className="text-gray-300 text-center mb-4">
              a subtle but elegant finish for low-touch and delicate surfaces
            </p>
            <a href="#" className="text-sky-400 font-semibold uppercase tracking-wild">
              Explore
            </a>
            
            </div>

          <div className="border border-white p-6 flex flex-col items-center w-64">
            <div className="bg-pink-600 w-24 h-24 rounded-full mb-4"></div>
            <h2 className="text-white text-xl font-extrabold mb-1"> SEMI-GLOSS</h2>
            <div className="w-6 border-b-2 border-white mb-3"></div>
            <p className="text-gray-300 text-center mb-4">
              Our signature finish for high-wear parts, details and surfaces
            </p>
            <a href="#" className="text-sky-400 font-semibold uppercase tracking-wide">
              Explore
            </a>
            </div>

          <div className="border border-white p-6 flex flex-col items-center w-64">
            <div className="bg-pink-600 w-24 h-24 rounded-full mb-4"></div>
            <h2 className="text-white text-xl font-extrabold mb-1">HIGH-GLOSS</h2>
            <div className="w-6 border-b-2 border-white mb-3"></div>
            <p className="text-gray-300 text-center mb-4">
              an eye-stopping shine best for metal and other smooth surfaces 
            </p>
            <a href="#" className="text-sky-400 font-semibold uppercase tracking-wide">
              Explore
            </a>

          </div>

        </div>

      </div>

      
  );
}

export default App
