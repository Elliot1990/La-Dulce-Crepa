const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");



menuBtn.addEventListener("click", () =>{
    navLinks.classList.toggle("active");
    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = "X";
        menuBtn.setAttribute("aria-expanded", "true")
    }else{
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded", "false")

    }


  


});

//Variabes botones de tabs
const btnDulces = document.getElementById("btn-active-dulces");
const btnSaladas = document.getElementById("btn-active-saladas");
const btnExtras = document.getElementById("btn-active-extras");

//variables contenido de tabs
const tabDulces = document.getElementById("tabDulces");
const tabSaladas = document.getElementById("tabSaladas");
const tabExtras = document.getElementById("tabExtras");


//eventos botones de tabs

tabDulces.style.display = "block";
tabSaladas.style.display = "none";
tabExtras.style.display = "none";

btnDulces.addEventListener("click", () =>{

    btnDulces.classList.toggle("active");
    btnSaladas.classList.remove("active");
    btnExtras.classList.remove("active");

    tabDulces.style.display = "block";
    tabSaladas.style.display = "none";
    tabExtras.style.display = "none";

});
    


btnSaladas.addEventListener("click", () => {
    
    btnSaladas.classList.toggle("active");
    btnDulces.classList.remove("active");
    btnExtras.classList.remove("active");

    tabDulces.style.display = "none";
    tabSaladas.style.display = "block";
    tabExtras.style.display = "none";
    
});

   
btnExtras.addEventListener("click", () => {
    btnExtras.classList.toggle("active");
    btnDulces.classList.remove("active");
    btnSaladas.classList.remove("active");

    tabDulces.style.display = "none";
    tabSaladas.style.display = "none";
    tabExtras.style.display = "block";
});