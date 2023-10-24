import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// can i wrinte any methode here just try its true or not 
function Myapp(){
    return(
        <><h3>Custom app !</h3></>
    )
}

// What if if i give my element: Is Not working because of the key value parametrs are set in vite react mhethode
// const ReactElement = {
//     type: "a",
//     props: {
//         href: "https://www.google.com",
//         target: "_main"
//     },
//     children: "click here to visit google With loop method"
// }

// if i give an element like this using html : its working 
const anotherElement = (
    <a href="https://www.google.com"> Another google visit</a>
)

// Creating React Methode || By Default auto injecting By Bable
const anotherUser = "|| React Methode !"
const reactElement = React.createElement(
    "a",
    {href: "https://www.google.com", target: "_main"},
    "Visit google ",
    anotherUser // Evaluted expression
)


ReactDOM.createRoot(document.getElementById('root')).render(
   
   reactElement
   
 
)
