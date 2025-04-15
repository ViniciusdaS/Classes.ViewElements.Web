

function validaBusca() {
    if(document.querySelector('#inputlupa').value ==''){
        alert('Não permitido deixar a busca em branco');
        return false; 
    }
}

document.querySelector('#formbusca').onsubmit = validaBusca;
