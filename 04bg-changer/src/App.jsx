import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")

  return (
   
  <div className='w-screen h-screen'
  style={{ backgroundColor: color}} 
  >
    <div className='fixed flex flex-wrap justify-center gap-3 bottom-12 inset-x-0 px-2 text-white'>

    <div className='flex flex-wrap justify-center gap-4 bg-white px-6 py-2  rounded-xl' >

    <button onClick={()=> setColor("red")} className='bg-red-600 border-none rounded-2xl px-6 py-2'>Red</button>

    <button onClick={()=> setColor("green"
          )} className='outline-none px-6 rounded-full py-2 shadow-xl'
          style={{backgroundColor: "green"}}
          >Green</button>
          <button onClick={()=> setColor("blue"
          )} className='outline-none px-6 rounded-full py-2 shadow-xl'
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button onClick={()=> setColor("black"
          )} className='outline-none px-6 rounded-full py-2 shadow-xl'
          style={{backgroundColor: "black"}}
          >Dark</button>
          <button onClick={()=> setColor("#fff"
          )} className='outline-none px-6 rounded-full py-2 shadow-xl text-black '
          style={{backgroundColor: "white"}}
          >Light</button>
    </div>

    </div>


  </div>
   
  )
}

export default App
