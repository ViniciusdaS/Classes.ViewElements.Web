let mostrarTexto = document.querySelector('button');

let textoOculto1 = document.querySelectorAll('.textoOculto1');
let textoOculto2 = document.querySelectorAll('.textoOculto2');
let textoOculto3 = document.querySelectorAll('.textoOculto3');

mostrarTexto.addEventListener('click', () => {


    for (let elem of textoOculto1) {

        if (elem.style.display === 'none') {
            elem.style.display = 'block';
            elem.textContent = 'Querida pessoa'
            
        }
        else {
            elem.style.display = 'none';
            elem.textContent = 'mostrar texto';
        }
    }


    for (let elem of textoOculto2) {

        if (elem.style.display === 'none') {
            elem.style.display = 'block';
            elem.textContent = 'Desejo que sua pascoa seja recheada de felicidade e realizações Que você receba presentes incríveis, e muitos ovinhos'
        }
        else {
            elem.style.display = 'none';
            elem.textContent = 'mostrar texto';
        }
    }


    for (let elem of textoOculto3) {

        if (elem.style.display === 'none') {
            elem.style.display = 'block';
            elem.textContent = 'Feliz pascoa !!!';
            elem.textContent = 'Fechar texto';
        }
        else {
            elem.style.display = 'none';
            elem.textContent = 'mostrar texto';
        }
    }

    for(let butt of mostrarTexto){
        butt.style.display = 'none';
    }
})

