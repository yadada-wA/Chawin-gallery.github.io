const imgEl = document.getElementById('Paint');
const loader = document.getElementById('loader');
const btn = document.getElementById('bth');

const srcArray = [
                    'IMG_0691.PNG',
                    'IMG_0692.PNG',
                    'IMG_0693.PNG',
                    'IMG_0694.PNG',
                    'IMG_0695.PNG',
                    'IMG_0696.PNG',
                    'IMG_0697.PNG'
                ];

//const srcArray = [
//                    '/assets/pic/IMG_0691.PNG',
//                    '/assets/pic/IMG_0692.PNG',
//                    '/assets/pic/IMG_0693.PNG',
//                    '/assets/pic/IMG_0694.PNG',
//                    '/assets/pic/IMG_0695.PNG',
//                   '/assets/pic/IMG_0696.PNG',
//                    '/assets/pic/IMG_0697.PNG'
//                ];


btn.addEventListener
('click', () => {

        { randomImg(); function randomImg() 
        {   const randomIndex = Math.floor(Math.random()*srcArray.length);
            imgEl.src = srcArray[randomIndex];}}
   
});

