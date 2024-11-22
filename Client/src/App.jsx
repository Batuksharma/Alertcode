
import './App.css'
import Marquee from './components/marquee'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
     <div className='bg-black w-full h-screen p-8 flex justify-center'><Navbar/></div>
     <div className="h-24 bg-gray-700 shadow-md flex items-center justify-center ">
        <Marquee />
      </div>
    </>
  )
}

export default App
