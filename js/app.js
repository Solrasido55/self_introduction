const clicks = document.querySelectorAll("li");
const container = document.querySelectorAll("container");

const slideBtn = document.getElementsByClassName('slide-btn');
const slideContainer = document.getElementsByClassName('slide-container')[0];

const nextBtn = document.getElementById('slide-next-btn');
const prevBtn = document.getElementById('slide-prev-btn');
const slideBox = document.getElementsByClassName('slide-box');



function scrollPage(page) {
    window.scroll({top: page, behavior: 'smooth'})
}

// clicks[0].addEventListener("click", function(){
//     scrollPage(introduction)});

// clicks[1].addEventListener("click", function(){
//     scrollPage(goal)});

// clicks[2].addEventListener("click", function(){
//     scrollPage(hobby)});

// clicks[3].addEventListener("click", function(){
//     scrollPage(cat)});


for (let i = 0; i < clicks.length; i++) {
    clicks[i].addEventListener("click", function(){
        scrollPage(container[i].offsetTop)});
}

// slideBtn[0].addEventListener('click', function(){
//     slideContainer.style.transform = 'translateX(0)';
// });

// slideBtn[1].addEventListener('click', function(){
//    slideContainer.style.transform = 'translateX(-100vw)';
// });

// slideBtn[2].addEventListener('click', function(){
//     slideContainer.style.transform = 'translateX(-200vw)';
// });

let currentBox = 1;

for (let i = 0; i < slideBtn.length; i++) {
    slideBtn[i].addEventListener('click', function(){
        slideContainer.style.transform = `translateX(-${i}00vw)`;
        slideContainer.style.transition = 'all 0.5s';
        currentBox = i+1;
        console.log(currentBox);
    });
}

function slideNextBtn() {
    if(currentBox < 3){
        slideContainer.style.transform = 'translate(-' + currentBox +'00vw)';
        slideContainer.style.transition = 'all 0.5s';
        currentBox ++;
    }
}

function slidePrevBtn() {
    if(currentBox == 3) {
        slideContainer.style.transform = 'translate(-100vw)';
        slideContainer.style.transition = 'all 0.5s'
        currentBox --;
    } else if (currentBox == 2) {
        slideContainer.style.transform = 'translate(0vw)';
        slideContainer.style.transition = 'all 0.5s'
        currentBox --;
    }
}

nextBtn.addEventListener('click', function(){
    slideNextBtn();
})

prevBtn.addEventListener('click', function(){
    slidePrevBtn();    
})



let startPoint = 0;
let clicked;

slideBox[0].addEventListener('mousedown',function(e){
    startPoint = e.clientX;
    clicked = true;
    slideContainer.style.transition = 'none'
});
slideBox[0].addEventListener('mousemove',function(e){
    console.log(e.clientX - startPoint);
    if(clicked == true && 0 > (e.clientX - startPoint)){
        slideContainer.style.transform = `translateX(${e.clientX - startPoint}px)`
    }
});
slideBox[0].addEventListener('mouseup',function(e){
    clicked = false;
    if(-100 > (e.clientX - startPoint)) {
        slideNextBtn();
    } else {
        slideContainer.style.transform = 'translateX(0)';
        slideContainer.style.transition = 'all 1s'
        return currentBox = 1;
    }
});
slideBox[1].addEventListener('mousedown',function(e){
    startPoint = e.clientX;
    clicked = true;
    slideContainer.style.transition = 'none'
});
slideBox[1].addEventListener('mousemove',function(e){
    console.log(e.clientX - startPoint);
    if(clicked == true){
        slideContainer.style.transform = `translateX(calc(${e.clientX - startPoint}px + -100vw))`
    }
});
slideBox[1].addEventListener('mouseup',function(e){
    clicked = false;
    if(-100 > (e.clientX - startPoint)) {
        slideNextBtn();
    }   else if ( 100 < (e.clientX - startPoint)){
        slidePrevBtn();
    } else {
        slideContainer.style.transform = 'translateX(-100vw)';
        slideContainer.style.transition = 'all 1s'
        return currentBox = 2;
    }
});

slideBox[2].addEventListener('mousedown',function(e){
    startPoint = e.clientX;
    clicked = true;
    slideContainer.style.transition = 'none'
});
slideBox[2].addEventListener('mousemove',function(e){
    console.log(e.clientX - startPoint);
    if(clicked == true && 0 < (e.clientX - startPoint)){
        slideContainer.style.transform = `translateX(calc(${e.clientX - startPoint}px + -200vw))`
    }
});
slideBox[2].addEventListener('mouseup',function(e){
    clicked = false;
    if(-100 > (e.clientX - startPoint)) {
        slideNextBtn();
    } else if( 100 < (e.clientX - startPoint)) {
        slidePrevBtn();
    } else {
        slideContainer.style.transform = 'translateX(-200vw)';
        slideContainer.style.transition = 'all 1s'
        return currentBox = 3;
    }
});