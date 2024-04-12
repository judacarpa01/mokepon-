//variables universales, las puedes llamar donde quieras 
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    //para ocultar botones 
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-poder')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('boton-reiniciar')
    sectionReiniciar.style.display = 'none'
    //para escuchar la selccion del jugador
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJudador)
    //para selccionar los botones de ataque
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    //para escuchar el boton de reiniciar 
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJudador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    //aqui vuelve a salir los borones de pelea
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-poder')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputHipodogue = document.getElementById("hipodgue")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    let spanimagen = document.getElementById('imagenJ')
    

    if (inputHipodogue.checked){
        spanimagen.innerHTML = '<img src="./imgen/mokepons_mokepon_hipodoge_attack.png" width=100px/>'
        spanMascotaJugador.innerHTML = 'hipodogue'
    }else if (inputCapipepo.checked){
        spanimagen.innerHTML = '<img src="./imgen/mokepons_mokepon_capipepo_attack.png" width=100px/>'
        spanMascotaJugador.innerHTML = 'Capipepo' 
    }else if (inputRatigueya.checked){
        spanimagen.innerHTML = '<img src="./imgen/mokepons_mokepon_ratigueya_attack.png" width=100px/>'
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else {
        alert('selecciona una mascota para empezar')
        location.reload()
    }

    seleccionarMascotaPc()
}


function seleccionarMascotaPc() {
    let mascotasAleatorio = random(1,3)
    let spanimagenE = document.getElementById('imagenE')
    let spanMascotaPc = document.getElementById('mascota-enemigo')

    if (mascotasAleatorio == 1) {
        spanimagenE.innerHTML = '<img src="./imgen/mokepons_mokepon_hipodoge_attack.png" width=100px/>'
        spanMascotaPc.innerHTML = 'hipodogue'
    }else if (mascotasAleatorio == 2) { 
        spanimagenE.innerHTML = '<img src="./imgen/mokepons_mokepon_capipepo_attack.png" width=100px/>'
        spanMascotaPc.innerHTML = 'capipepo'
    }else if (mascotasAleatorio == 3) {
        spanimagenE.innerHTML = '<img src="./imgen/mokepons_mokepon_ratigueya_attack.png" width=100px/>'
        spanMascotaPc.innerHTML = 'ratigueya'
    }
}


function ataqueFuego(){
    ataqueJugador = 'FUEGO 🔥'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA 💧'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA 🌱'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorioEnemigo = random(1,3)

    if (ataqueAleatorioEnemigo == 1) {
        ataqueEnemigo = 'FUEGO 🔥'
    }else if (ataqueAleatorioEnemigo == 2) { 
        ataqueEnemigo = 'AGUA 💧'
    }else if (ataqueAleatorioEnemigo == 3) {
        ataqueEnemigo = 'TIERRA 🌱'
    }

    combate()
}

function combate(){

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador){
        crearMensajes("EMPATE")
    } else if(ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱'){
        crearMensajes("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador =='AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥'){
        crearMensajes("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador =='TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧'){
        crearMensajes("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else{ 
        crearMensajes("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    
    revisarVidas()
}

function revisarVidas(){
    if (vidasJugador == 0){
        mensajeFinal('Lo sentimos, perdiste😕')
    }else if (vidasEnemigo == 0){
        mensajeFinal('FELICITACIONES GANASTE😀🙌')

    }
}


function crearMensajes(resultado){
    let sectionMensajes = document.getElementById('resultados')
    let ataqueDelJugador = document.getElementById('ataque-del-jugador')
    let ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function mensajeFinal(final) {
    let sectionMensajes = document.getElementById('resultados')

    let parrafo = document.createElement('p')
    sectionMensajes.innerHTML = final

    sectionMensajes.appendChild(parrafo)

    //es para quitar la funcionalidad de los botones
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar=document.getElementById('boton-reiniciar')
    sectionReiniciar.style.display='block'      

}

function reiniciarJuego() {
    location.reload()
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + (min))
}



window.addEventListener("load", iniciarJuego)
