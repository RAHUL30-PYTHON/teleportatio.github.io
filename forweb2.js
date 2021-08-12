window.addEventListener('scroll', function () {
        let navbar = document.querySelector('.nav-list');
        let windowPosition = window.scrollY > 0;
        navbar.classList.toggle('nav-list-toggled', windowPosition);
    })

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-class');

})

const myslide = document.querySelectorAll(".myslider"),
      dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide(){
    counter += 1;
    slidefun(counter);
}
function plusSlides(n){
    counter += n;
    slidefun(counter);
    resetTimer();
}
function currentSlide(n){
    counter = n;
    slidefun(counter);
    resetTimer();
}
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}
function slidefun(n){
    let i;
    for(i=0;i<myslide.length;i++) {
        myslide[i].style.display = "none";
    }
    for(i=0;i<dot.length;i++){
        dot[i].classList.remove('active');
    }
    if(n > myslide.length){
        counter=1;
    }
    if(n<1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}

