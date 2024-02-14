import inicio from "./page/inicio.js";

export default ()=>{

    document.getElementById('root').append(
        inicio()
    )

    addEventListener('contextmenu', e => e.preventDefault())
    document.addEventListener('contextmenu', e => e.preventDefault())

}