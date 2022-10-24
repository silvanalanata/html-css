// cambia imagen al pasar el mousse
let imagenes = document.querySelector(".img-izq-discover");

function cambiarImgen(){
    imagenes.setAttribute('src', 'assets/succulents-2.jpg');
}


function cambiarImgen2(){
    imagenes.setAttribute('src', 'assets/succulents-1.jpg');
}

imagenes.addEventListener("mouseover",cambiarImgen);
imagenes.addEventListener("mouseout",cambiarImgen2);

//mensaje de alerta al hacer click en carrito

let btnLogin = document.querySelector(".carrito");
function alerta(){
    alert("Your Cart is empy!");   
}
btnLogin.addEventListener("click",alerta);

//remueve cookies

let cookies =  document.querySelector("#accept");
function remover(){
    cookies.remove();
    
  }
cookies.addEventListener("click",remover);