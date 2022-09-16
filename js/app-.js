const clicks = document.querySelectorAll("li");
const container = document.querySelectorAll("container");
const introduction = container[0].offsetTop
const goal = container[1].offsetTop
const hobby = container[2].offsetTop
const cat = container[3].offsetTop


clicks[0].addEventListener("click", function(){
    window.scroll({top: introduction, behavior: 'smooth'})
});

clicks[1].addEventListener("click", function(){
    window.scroll({top: goal, behavior: 'smooth'})
});

clicks[2].addEventListener("click", function(){
    window.scroll({top: hobby, behavior: 'smooth'})
});

clicks[3].addEventListener("click", function(){
    window.scroll({top: cat, behavior: 'smooth'})
});