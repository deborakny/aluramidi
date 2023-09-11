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
}


