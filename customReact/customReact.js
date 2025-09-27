function customrender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML  = reactElement.childern
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com/',
        target : 'blank'
    },
    childern : 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customrender(reactElement, mainContainer)