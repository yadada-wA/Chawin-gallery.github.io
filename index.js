const imgEl = document.getElementById('Paint');
const btn = document.getElementById('bth');


let srcArray = [    'assets/pic/IMG_0691.PNG',
                    'assets/pic/IMG_0692.PNG',
                    'assets/pic/IMG_0693.PNG',
                    'assets/pic/IMG_0694.PNG',
                    'assets/pic/IMG_0695.PNG',
                    'assets/pic/IMG_0696.PNG',
                    'assets/pic/IMG_0697.PNG'];

let images = [];
srcArray.forEach((src) => {
    const img = new Image();
    img.src = src; 
    images.push(img);
});


function randomImg() {
  const randomIndex = Math.floor(Math.random() * srcArray.length);
  imgEl.src = srcArray[randomIndex];
}

btn.addEventListener('click', () => {
  randomImg();
});

