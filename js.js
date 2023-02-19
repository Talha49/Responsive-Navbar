const hamburger = document.querySelector(".hamburger");
const navcont= document.querySelector(".navcont"); 

hamburger.addEventListener('click', ()=>{
hamburger.classList.toggle("active");
navcont.classList.toggle("active");
})
document.querySelectorAll("navlinks").forEach(n => n.addEventListener('click', ()=>{
    hamburger.classList.remove("active");
    navcont.classList.remove("active");
}))