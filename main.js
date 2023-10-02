function tocaSom(idAudio) {
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]
    const somDaTecla = tecla.classList[1];    
    const idAudio = `#som_${somDaTecla}`;

    tecla.onclick = function () {
        tocaSom(idAudio);                 
    }

    tecla.onkeydown = function (event) {
        console.log(event.code)
        if (event.code === "Space" || event.code === "Enter") {
            tecla.classList.add('ativa');            
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


