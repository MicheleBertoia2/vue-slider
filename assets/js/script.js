/*
1. linko i bottoni e il contenitore delle immagini 
2. creo l'array delle immagini
3. inizializzo un ciclo for che stampa le immagini nel contenitore con la classe nascosta

4.raccolgo in un array le immagini create e mostro la prima

5.inizializzo un contatore

6.formulo gli eventi click che cambieranno contatore e immagini

*/


// elements
// 1.
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const imgBox  = document.querySelector('.img-box');
// 5.
let counterImage = 0

// 2.
const images = [
  '"assets/img/01.webp"',
  '"assets/img/02.webp"',
  '"assets/img/03.webp"',
  '"assets/img/04.webp"',
  '"assets/img/05.webp"',
]

// 3.
for (let i = 0; i < images.length; i++) {
  const imageSrc = images[i];

  imgBox.innerHTML += `
  <img class="item hide" src=${imageSrc}>
  `  
}

// 4.
const imagesCollection = document.getElementsByClassName('item');

imagesCollection[0].classList.remove('hide');

// 6.
const imageLimt = imagesCollection.length - 1;

btnNext.addEventListener('click', function() {
  imagesCollection[counterImage].classList.add('hide');
  btnPrev.classList.remove('hide')


  counterImage += 1
  if(counterImage <= imageLimt){
  imagesCollection[counterImage].classList.remove('hide');
  } else {
    counterImage = 0
    imagesCollection[0].classList.remove('hide');
  }

  //soluzione funzionante con bottone nascosto
  // if(counterImage === imagesCollection.length - 1){
    //   btnNext.classList.add('hide')
    // }
  })  


btnPrev.addEventListener('click', function() {
  imagesCollection[counterImage].classList.add('hide')
  btnNext.classList.remove('hide')
  counterImage-= 1

  if(counterImage >= 0){
  imagesCollection[counterImage].classList.remove('hide');
  } else {
    counterImage = imageLimt
    imagesCollection[imageLimt].classList.remove('hide');
  }
  
  //soluzione funzionante con bottone nascosto
  // if(counterImage === 0){
  //   btnPrev.classList.add('hide')
  // }
  
})


