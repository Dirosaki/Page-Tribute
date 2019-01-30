let imagem = document.getElementById('image');
let texto = document.getElementById('img-caption');
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

let slide1 = "http://wallpapers.ae/wp-content/uploads/2015/10/Black-porsche-997-turbo-wallpaper.jpg";
let slide2 = "https://www.wsupercars.com/wallpapers/Porsche/2018-Porsche-911-GT3-V5-1080.jpg";
let slide3 = "https://hdqwalls.com/download/porsche-918-spyder-2018-ii-1920x1080.jpg";
let slide4 = "https://www.wsupercars.com/wallpapers/Porsche/2018-Porsche-Panamera-Turbo-S-E-Hybrid-V5-1080.jpg";
let slide5 = "https://www.carpixel.net/w/d7519621c8fa6ff883e89ce58a431be0/porsche-718-boxster-t-wallpaper-hd-85378.jpg";

let text1 = "Porsche 997 Turbo";
let text2 = "Porsche 911 GT3";
let text3 = "Porsche 918 Spyder";
let text4 = "Porsche Panamera Turbo";
let text5 = "Porsche 718 Boxster";

let contador = 0;

function slide() {
    contador++;
    
    if(contador === 1){
        imagem.src = slide1;
        texto.innerHTML = text1;

    }
    else if(contador === 2){
        imagem.src = slide2;
        texto.innerHTML = text2;
    }
    else if(contador === 3){
        imagem.src = slide3;
        texto.innerHTML = text3;
    }
    else if(contador === 4){
        imagem.src = slide4;
        texto.innerHTML = text4;
    }
    else if(contador === 5){
        imagem.src = slide5;
        texto.innerHTML = text5;
    }
    if(contador === 6){
        contador = 1;
        imagem.src = slide1;
        texto.innerHTML = text1;
    }    
}

slide();

let girar = setInterval(slide, 2500);

arrowLeft.onclick = () => {
    stop();
    contador--;
    
    if(contador === 5){
        imagem.src = slide5;
        texto.innerHTML = text5;
    }
    else if(contador === 4){
        imagem.src = slide4;
        texto.innerHTML = text4;
    }
    else if(contador === 3){
        imagem.src = slide3;
        texto.innerHTML = text3;
    }
    else if(contador === 2){
        imagem.src = slide2;
        texto.innerHTML = text2;
    }
    else if(contador === 1){
        imagem.src = slide1;
        texto.innerHTML = text1;
    }
    else if(contador < 1){
        contador = 5;
        imagem.src = slide5;
        texto.innerHTML = text5;
    }
}

arrowRight.onclick = () => {
    stop();
    contador++;
    
    if(contador === 1){
        imagem.src = slide1;
        texto.innerHTML = text1;
    }
    else if(contador === 2){
        imagem.src = slide2;
        texto.innerHTML = text2;
    }
    else if(contador === 3){
        imagem.src = slide3;
        texto.innerHTML = text3;
    }
    else if(contador === 4){
        imagem.src = slide4;
        texto.innerHTML = text4;
    }
    else if(contador === 5){
        imagem.src = slide5;
        texto.innerHTML = text5;
    }
    else if(contador > 5){
        contador = 1;
        imagem.src = slide1;
        texto.innerHTML = text1;
    }
}

function stop (){
    clearInterval(girar);
}