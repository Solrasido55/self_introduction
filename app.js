const clicks = document.querySelectorAll("li");
const container = document.querySelectorAll("container");
const introduction = container[0].offsetTop
const goal = container[1].offsetTop
const hobby = container[2].offsetTop
const cat = container[3].offsetTop


function scrollPage(page) {
    window.scroll({top: page, behavior: 'smooth'})
}

clicks[0].addEventListener("click", function(){
    scrollPage(introduction)});

clicks[1].addEventListener("click", function(){
    scrollPage(goal)});

clicks[2].addEventListener("click", function(){
    scrollPage(hobby)});

clicks[3].addEventListener("click", function(){
    scrollPage(cat)});