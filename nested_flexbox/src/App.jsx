function App() {


  return (
     
    

    <div className='flex flex-col min-h-screen'>
      
      <div className='flex justify-between p-4 font-bold bg-pink-200'>
        <p> LOGO </p>
        <p> SIGN UP </p>
        <p> LOGIN</p>

      </div>



      <div className='flex flex-1'>

        <div className='w-1/5 p-4 text-start gap-4 flex flex-col font-bold bg-purple-100 justify-start'>

        <p> DASHBOARD </p>
        <p> MY COURSES </p>
        <p> ASSIGNMENTS </p>
        <p> CALENDAR </p>
        <p> DISCUSION </p>
        <p> LIBRARY</p>
        
        </div>



        <div className='flex flex-col flex-1'>

          <div className='p-4 justify-evenly flex flex-row font-bold bg-blue-200'>
            <p> HOME </p>
            <p> INSTRUCTORS </p>
            <p> CERTIFICATES </p>
            <p> SUPPORT </p>

          </div>


          <div className='p-5 flex-1 font-bold pl-14 bg-green-100 text-start gap-4'>
            <h2 className='font-extrabold'> Course Contents </h2>
            <ul className='list-disc pl-7'>
              <li> Introduction to Machine learning: key concepts and applications </li>
              <li> The French Revolution explained for beginners </li>
              <li> Mastering basic algebra: step-by-step guide </li>
              <li> Fundermentals of web development: HTML, CSS and Javascript </li>
              <li> Essential study skills: how to learn more effectively </li>
            </ul>

            
            <h2 className='font-extrabold mt-5'> Discussion Thread </h2>
            <ul className='list-disc pl-7'>
              <li> How to ask good question in online Forum </li>
              <li> The power of peer learning: why students discussion matter </li>
              <li> Etiquette for online academic discussion </li>
              <li> From question to insight: Turning curiosity into learning </li>
              <li> How to contribute meaningfully to class Q and A sessions </li>

            </ul>
            
            </div>


            <div className='p-4 text-center font-bold bg-orange-100 justify-evenly flex flex-row'>
              <p> About</p>
              <p> Contacts </p>
              <p> Terms of service </p>
              <p> Copyright </p>

            </div>


        </div>


      </div>


    </div>

  )
}

export default App
