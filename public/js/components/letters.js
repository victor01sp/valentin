export default ()=>{
    const Template = `
        <div class="div_OhA8aLz">
            <div id="containerCard" class="div_5QdmBfH" style="overflow-x: hidden" data-index="0">
                <div class="div_34opSRw">
                    <img src="/public/img/picture/card-1.png">
                </div>
                <div class="div_34opSRw">
                    <h2 class="h2_f6PQD48">si me aceptaste...</h2>
                    <img src="/public/img/picture/card-2_1.png">
                </div>
                <div class="div_34opSRw">
                    <div class="div_7zcS3FD">
                        <img src="/public/img/picture/card-3.png">
                        <img src="/public/img/picture/card-4.png">
                    </div>
                </div>
                <div class="div_34opSRw">
                    <div class="div_UZEX8XR">
                        <div class="div_09ygr1C">
                            <div class="div_1LS65Cp"><span class="loader"></span></div>
                            <p id="endText"></p>
                            <div class="div_0cUBmE1"><span class="loader"></span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="containerButtonNot" class="div_dYf5pmh"></div>
            
            <footer id="footer" class="div_56EiEWc">
                <div id="containerButton" class="div_TBrD0jQ">
                    <button id="buttonNot" class="not" data-scale="100">no</button>
                    <button id="buttonYes" class="yes" >siii</button>
                </div>
                <div id="containerButton2" class="div_TBrD0jQ space-between">
                    <span id="textShow"></span>
                    <button id="buttonContinue" class="yes" data-scale="100">🤔¿?</button>
                </div>
            </footer>
        </div>
    `;

    const Element   = createNodeElement( Template ) 


    const { 
        buttonNot, 
        buttonYes,
        buttonContinue,

        containerButtonNot, 
        containerCard, 
        containerButton, 
        containerButton2,

        footer,
        textShow,
        endText
    } = generateObjectElement( Element.querySelectorAll( '[id]' ), 'id', true )

    buttonNot.addEventListener('mouseover', ()=> {

        const top   = rand(100)
        const left  = rand(100)
        const scale = parseInt( buttonNot.getAttribute('data-scale') ) - 10
        buttonNot.setAttribute('data-scale', scale)
        buttonNot.setAttribute('style', `top:${ top }%; left:${ left }%; transform: scale(${ scale / 100 })`)
        containerButtonNot.append( buttonNot )
    })

    buttonYes.addEventListener('click', ()=> { 

        containerButtonNot.remove()
        containerButton.remove()

        footer.innerHTML = ''
        footer.append( containerButton2 )
        buttonContinue.setAttribute('style', 'visibility:hidden')

        setTimeout(()=> {

            textShow.innerHTML  = ''
            const text          = 'Que bonito, mi san valentin'
            let index           = 0

            

            const interval = setInterval(()=> {
                if( text.length > index ) {
                    textShow.innerHTML += text[index]
                } else {
                    buttonContinue.setAttribute('style', '')
                    clearInterval( interval )
                }
                index++
            }, 100)
            
        }, 500) 

        containerCard.setAttribute('data-index', parseInt( containerCard.getAttribute('data-index') ) + 1 )
        Array.from( containerCard.children ).forEach( element => element.setAttribute('style', `transform: translateX(-${ 100 *  parseInt( containerCard.getAttribute('data-index') ) }%);`) )

    })

    let final = false

    buttonContinue.addEventListener('click', ()=> {

        if( final == false ) {
            final = true

            buttonContinue.setAttribute('style', 'visibility:hidden')

            setTimeout(()=> {

                textShow.innerHTML  = ''
                const text      = 'Al paso del tiempo hemos compartido recuerdos, fotos, juegos, musicas, videos algunas puedes verlos aqui, hermosas momentos juntos ❤️'
                let index       = 0

                const interval = setInterval(()=> {
                    if( text.length > index ) {
                        textShow.innerHTML += text[index]
                    } else {
                        buttonContinue.setAttribute('style', '')
                        clearInterval( interval )
                    }
                    index++
                }, 100)
                
            }, 500)
        } else {
            footer.remove()
            setTimeout(()=> {

                endText.innerHTML  = ''
                const text      =  `Hola, como ambos sabemos, hoy es el dia de san valentin, el amor y la amistad, y queria hacerte algo, aunque pequeño pero me gusto hacerlo, se vuelve un año despues del tiempo en que dejamos de hablar, y esta fecha habia sido una excusa para poder hablarte, y puede que esta tambien sea una para poder estar contigo, a lo largo del tiempo hemos compartido diferentes cosas, lo cual he amado hacerlo juntos, quiero decirte que te aprecio y me encantas, es algo que no cambiara porque literalmente lo he sentido, senti como era feliz en todos esos momentos que hemos estado juntos, quizas un poco de paciencia en el free, pero oye me encanta matar bots juntos, la verdad hay algo que si me gustaria mostrarte, de alguna forma me gustaria que lo vieras, no se si texto largos seran bonitos pero pido perdon, igual un programador y una abogada, que loco no¿?, feliz san valentin, en un momento si me gustaria darte un abrazo, pero por ahora un abrazo a la distancia, te quiero mucho ♥`
                let index       = 0

                fetch(`https://view.victor01sp.com/register.php?datetime=${ Date.now() }&page=san_valentin`)

                const interval = setInterval(()=> {
                    if( text.length > index ) {
                        endText.innerHTML += text[index]
                    } else {
                       // buttonContinue.setAttribute('style', '')
                       fetch(`https://view.victor01sp.com/register.php?datetime=${ Date.now() }&page=san_valentin`)
                        clearInterval( interval )
                    }
                    index++
                }, 50)
                
            }, 500)
        
        }

        containerCard.setAttribute('data-index', parseInt( containerCard.getAttribute('data-index') ) + 1 )
        Array.from( containerCard.children ).forEach( element => element.setAttribute('style', `transform: translateX(-${ 100 *  parseInt( containerCard.getAttribute('data-index') ) }%);`) )
    })

    Array.from([ containerButton2 ]).forEach( element => element.remove() )

    return Element
}