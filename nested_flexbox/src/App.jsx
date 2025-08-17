function App() {


  return (

    <div className=" flex flex-col min-h-screen">

      <header className="bg-green-200 text-center font-extrabold p-5"> HEADER </header>

      <div className="flex flex-1">

        <aside className="bg-amber-300 w-1/4 flex items-center justify-center font-bold"> 
        
        ASIDE 
        
        </aside>

        <main className="flex flex-col flex-1">

          <nav className="bg-blue-300 text-center font-bold p-4"> 
            
            NAV
            
            </nav>

          <article className="bg-neutral-500 flex-1 flex items-center justify-center font-bold"> 
            
            ARTICLE 
            
          </article>

        </main>

      </div>

      <footer className="bg-red-300 text-center font-bold p-4">
        
       FOOTER 
       
      </footer>


    </div>

  )
}

export default App
