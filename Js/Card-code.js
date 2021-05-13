const slider = document.querySelector(".slider");
const pageViews = document.querySelector("#pageviews");
const price = document.querySelector("#price");
let mySwitch = document.querySelector("#mySwitch");

//Modificar vistas y precios por mes

function printpageViews(){
    if(slider.value == "0"){
        pageViews.textContent = "10k";
        price.textContent = "8";

    }else if(slider.value == "25"){
        pageViews.textContent = "50k";
        price.textContent = "12";
    
    }else if(slider.value == "50"){
        pageViews.textContent = "100k";
        price.textContent = "16";
    
    }else if(slider.value == "75"){
        pageViews.textContent = "500k";
        price.textContent = "24";
    
    }else if(slider.value == "100"){
        pageViews.textContent = "1M";
        price.textContent = "36";
    }
}

//Animación fondo slider
slider.addEventListener("input",function (){
    let x = slider.value;
    let color = "linear-gradient(90deg, hsl(174, 86%, 45%) " + x + "%, hsl(0, 0%, 90%) " + x + "%)";
    slider.style.background = color;

    printpageViews();
    
    if(mySwitch.checked == true){
        let x = price.textContent*0.25;
        price.textContent = price.textContent - x;
        
    }else{
        printpageViews();
    }

});

//Descuento al activar el checkbox
mySwitch.addEventListener("input",function(){
    
    if(mySwitch.checked == true){
    let x = price.textContent*0.25;
    price.textContent = price.textContent - x;
    
    }else{
        printpageViews();
    }

});
