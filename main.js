const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;




console.log(slides);

const activeSlide = n => {

    console.log(n);
    for(slide of slides) {
        console.log(slide);
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
// activeSlide();


const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}


const prepareCurrentsSlide = ind => {
    activeSlide(index);
    activeDot (index);

}
const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentsSlide(index);
    } else {
        index++;
        prepareCurrentsSlide(index);
    }
    
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1; 
        prepareCurrentsSlide(index);
    } else {
        index--;
        prepareCurrentsSlide(index);
    }   
}
 dots.forEach((item, indexDot)=>{
   item.addEventListener('click', ()=> {
    index = indexDot;
    prepareCurrentsSlide(index);
   })
 });

 let timer = setInterval(function(){
    index++;
    prepareCurrentsSlide(index);
  },3000); 

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


