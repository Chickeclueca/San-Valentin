const bigHeart = document.getElementById("bigHeart");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");
const leaves = document.getElementById("leaves");
const contador = document.getElementById("contador");

bigHeart.addEventListener("click", ()=>{

    // Ocultar inicio
    inicio.style.display = "none";

    // Mostrar contenido
    contenido.style.opacity = "1";

    // Hacer crecer el árbol
    const tree = document.querySelector(".tree");
    setTimeout(()=>{
        tree.style.transform = "scale(1)";
    },500);

    // Crear corazones
    setTimeout(()=>{
        for(let i=0; i<80; i++){
            const heart = document.createElement("div");
            heart.classList.add("heart");

            heart.style.top = Math.random()*150 + "px";
            heart.style.left = Math.random()*150 + "px";
            heart.style.animationDuration = (Math.random()*3+2)+"s";

            leaves.appendChild(heart);
        }
    },1500);

    // Mostrar contador después
    setTimeout(()=>{
        contador.classList.remove("oculto");
        iniciarContador();
    },3000);

});


// -------- CONTADOR --------

function iniciarContador(){

    const fechaInicio = new Date("2025-02-14 00:00:00");

    setInterval(()=>{
        const ahora = new Date();
        const diferencia = ahora - fechaInicio;

        const dias = Math.floor(diferencia / (1000*60*60*24));
        const horas = Math.floor((diferencia / (1000*60*60)) % 24);
        const minutos = Math.floor((diferencia / (1000*60)) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);

        contador.innerHTML =
        `Mi amor por ti comenzó hace ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos ❤️`;
    },1000);

}