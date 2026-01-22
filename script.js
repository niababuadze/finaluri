let burgerMenuImg = document.querySelector(".burger-menu-img");
let burgerMenu = document.querySelector(".burger-menu");

burgerMenuImg.addEventListener("click",()=>{
    if(!burgerMenu.classList.contains("menu-left")){
        burgerMenu.classList.add("menu-left");
    }
    else{
        burgerMenu.classList.remove("menu-left");
    }
   
})


