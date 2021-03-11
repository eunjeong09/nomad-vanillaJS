const body = document.querySelector("body");

const IMAGE_NUM = 3;

function paintingImage(imageNumber){
    const image = new Image();
    image.src = `./images/${imageNumber + 1}.jpeg`;
    image.classList.add('bgImage');
    body.prepend(image);

}

function getRandom(){
    const number =  Math.floor(Math.random() * IMAGE_NUM);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintingImage(randomNumber);

}

init();