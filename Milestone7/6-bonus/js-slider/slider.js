const images = [
    '../images/pic-1.png',
    '../images/pic-2.png',
    '../images/pic-3.png',
    '../images/pic-4.png',
    '../images/pic-5.png',
    '../images/pic-6.png',
    '../images/pic-7.png',
];

let imgIndex = 0;
const imagePath = document.getElementById('image');
setInterval( () => {
    imagePath.setAttribute("src",`${images[imgIndex]}`);
    imgIndex++;
    if(imgIndex >= images.length){
        imgIndex = 0;
    }

},1000)