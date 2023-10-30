import { useState } from 'react'
import {inputBox} from './components'
import useCurrencyInfo from './Hooks'


function App() {

  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("Usd")
  const [to, setTo] = useState("Inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  


  return(
   <></>
 ) 

}

export default App
