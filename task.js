'use strict'

window.addEventListener('DOMContentLoaded', ()=>{

    let next = document.querySelector('.slider__arrow_next')
    let prev = document.querySelector('.slider__arrow_prev')
    let sliderItems = Array.from(document.querySelectorAll('.slider__item'))
    let sliderIndex = 1


    function showSlides(n){

        if(n > sliderItems.length){       
            sliderIndex = 1;
        };
    
        if(n < 1){
            sliderIndex = sliderItems.length;
        };

        sliderItems.forEach((item)=> item.classList.remove('slider__item_active'))
        sliderItems[sliderIndex - 1].classList.add('slider__item_active')
        
    };

    function plusSlide(n){ 
        showSlides(sliderIndex += n)
    };

    next.addEventListener('click', ()=> {
        plusSlide(1)
    });

    prev.addEventListener('click', ()=> {
        plusSlide(-1)
    });

});