let listaTecla = document.querySelectorAll('.teclas')

function tocaSom(idAudio){
    const element = document.querySelector(idAudio)
    if(element && element.localName === 'audio'){
        element.play()
    }else{
        console.log('Voce nao inseriu um Audio')
    }
    
}

listaTecla.forEach((element)=>{
    let tecla = element
    
    let nomeTecla = tecla.classList[1]
    
    let idAudio = `#som__${nomeTecla}` 
   tecla.onclick = function(){
        tocaSom(idAudio)
   }

   tecla.onkeydown = function(event) {
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
   }
   tecla.onkeyup = function(event) {
        tecla.classList.remove('ativa')
   }
})

