function rand( ...params ){
    const [ max, min = 0] = params.reverse()
    return Math.floor(Math.random() * ((max + 1) - min) + min)
}

function createNodeElement( html = null ) {
    if( html == null ) return null 

    let element         = document.createElement('div')
     
    element.innerHTML   = html
    element             = element.children[0]

    element.parentElement.removeChild( element )
    return element
}

function generateObjectElement( child, attribute, remove = false ) {
    const children  = child.length === undefined ? [ child ] : child
    const out       = {}

    children.forEach(element => {
        if( element.getAttribute(attribute) ) {
            out[ element.getAttribute(attribute) ] = element
            if( remove === true ) element.removeAttribute(attribute)
        }
    });
    
    return out
}
