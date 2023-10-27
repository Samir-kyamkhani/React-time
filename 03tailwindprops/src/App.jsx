import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  // const newObj = {
  //   userName: "solani"
  // }

  return (
    <>
      
    <Card  userName = "feha" btnText = "click"/>
    <Card userName = "ruhi" />
    </>
  )
}

export default App
