/* Creating custom react element */


/* Creating Custom rendor methode */

// function customRender(reactElement, container){
//     const domEl = document.createElement(reactElement.type)
//     domEl.innerHTML = reactElement.children
//     domEl.setAttribute("href", reactElement.props.href)
//     domEl.setAttribute("target", reactElement.props.target)
//     container.appendChild(domEl)
// }

/* Creating Custom rendor methode through ForIn Loop */
function customRender(reactElement, mainContainer){
    const domEl = document.createElement(reactElement.type)
    domEl.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === "children") continue;
        domEl.setAttribute(prop, reactElement.props[prop])
      
    }
    mainContainer.appendChild(domEl)
}

// How react make element ....
const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_main"
    },
    children: "click here to visit google With loop method"
}

const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer)