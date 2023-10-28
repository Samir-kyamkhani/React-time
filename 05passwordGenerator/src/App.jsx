import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "@#!$%^&*()_++="

    for (let i = 0; i <=length; i++) {
      
      let char = Math.floor((Math.random() * str.length) + 1)
      pass += str.charAt(char)
     
      
    }
    setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword])

  const passwordCopyClicpBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)

  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed, passwordGenerator])

  return (
    <>
      <h1 className="text-4xl text-center text-white">Pasword Generator</h1>
      <br />
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-9 my-8 text-black-900 bg-gray-700">
        <div className=" flex shadow rounded-lg overflow-hidden mb-4">
          {/* <input
           type="text"
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder='Password'
           readOnly
           /> */}

          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={passwordCopyClicpBoard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            {/* <input 
            
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            /> */}

            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />

            <label>Length: {length}</label>
          </div>
          {/* <input 
          
          type="checkbox"
          defaultChecked = {numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}

          /> */}
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />

          <label htmlFor="numbersValue">Number</label>
          {/* <input 
          
          type="checkbox"
          defaultChecked = {charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}

          /> */}
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => 
            setCharAllowed((prev) => !prev)
            }
          />

          <label htmlFor="">Charactor</label>
        </div>
      </div>
    </>
  );
}

export default App;
