import letters from "../components/letters.js";

export default ()=>{

    const Template  = `
        <div class="div_J4MD532">

            <div class="div_E95EU0t">

                <h2 class="text_q9YBVk8">Te ha llegado una carta</h2>

                <div class="div_ZJ2dp0Q">
                    <img src="/public/img/gif/card.gif">
                </div>

                <button id="buttonOpen" class="button_XnkMNE1"> me abresssss... ¿?</button>

            </div>
 
        </div>
    `;

    const Element   = createNodeElement( Template ) 
    const { buttonOpen } = generateObjectElement( Element.querySelectorAll( '[id]' ), 'id', true )
    
    const elementLetters = letters() 

    buttonOpen.addEventListener('click', ()=> {
        Element.append( elementLetters )
        elementLetters.requestFullscreen()
    })

    document.addEventListener('fullscreenchange', ()=> {
        if(document.fullscreenElement){
            if(/Mobi|Android/i.test(navigator.userAgent)){
                if(window.screen.orientation && window.screen.orientation.lock){
                    window.screen.orientation.lock("landscape");
                }
            } 
        } else {                                                       
            if(/Mobi|Android/i.test(navigator.userAgent)){
                if(window.screen.orientation && window.screen.orientation.unlock){
                    window.screen.orientation.unlock();
                } 
            } 

            elementLetters.remove()
        }
    })


    return Element

}