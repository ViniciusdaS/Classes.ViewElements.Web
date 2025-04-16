let banners = ['./img/steve.jpg','./img/minecraft.jpg']


let cont = 0; 
function trocarBanner(){
    cont = (cont + 1) % 2; 
    document.querySelector(".destaque img").src = banners[cont]; 
}

setInterval(trocarBanner, 1000); 