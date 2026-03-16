function abrirSorpresa(){

document.getElementById("pantallaInicio").style.display="none";
document.getElementById("contenido").style.display="block";

animarBarra();
contadorCiclos();

}

let texto="Quería decirte algo más... ";
let i=0;

function iniciarMensaje(){

let velocidad=setInterval(function(){

if(i<texto.length){

document.getElementById("mensajeSecreto").innerHTML+=texto.charAt(i);
i++;

}else{

clearInterval(velocidad);

setTimeout(function(){
document.getElementById("carta").style.display="block";
},1000);

}

},60);

}

// barra progreso

function animarBarra(){

let progreso=document.getElementById("progreso");
let ancho=0;

let intervalo=setInterval(function(){

if(ancho>=100){

clearInterval(intervalo);

document.querySelector(".textoBarra").innerHTML="Ciclo completado 🎓";

fuegosArtificiales();

}else{

ancho++;

progreso.style.width=ancho+"%";

document.querySelector(".textoBarra").innerHTML=ancho+"%";

}

},25);

}

// birretes cayendo

function crearBirrete(){

let birrete=document.createElement("div");

birrete.innerHTML="🎓";

birrete.classList.add("birrete");

birrete.style.left=Math.random()*100+"vw";
birrete.style.fontSize=Math.random()*40+40+"px";

document.body.appendChild(birrete);

setTimeout(()=>{
birrete.remove();
},5000);

}

setInterval(crearBirrete,500);

// fuegos artificiales

function fuegosArtificiales(){

for(let i=0;i<120;i++){

let particula=document.createElement("div");

particula.classList.add("particula");

let x=(Math.random()*400-200)+"px";
let y=(Math.random()*400-200)+"px";

particula.style.setProperty('--x',x);
particula.style.setProperty('--y',y);

particula.style.left=Math.random()*100+"vw";
particula.style.top=Math.random()*60+"vh";

let colores=["#ff4d4d","#ffd700","#00eaff","#ff66ff","#00ff88"];

particula.style.background=colores[Math.floor(Math.random()*colores.length)];

document.body.appendChild(particula);

setTimeout(()=>{
particula.remove();
},1000);

}

}