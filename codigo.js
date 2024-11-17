let i = 0; // contador en cero

let colorNormal1 = true;
let colorNormal2 = true;
let colorNormal3 = true;

let resultadoSuma1 = 0;
let resultadoSuma2 = 0;
let resultadoSuma3 = 0;


let introdo = true;
let compsdo = true;
let statsdo = true;
let eventsdo = true;
let routesdo = true;

const slider1 = document.querySelector("#sld1");
const slider2 = document.querySelector("#sld2");
const slider3 = document.querySelector("#sld3");

const resultadoParrafo1 = document.getElementById('resultado1');
const resultadoParrafo2 = document.getElementById('resultado2');
const resultadoParrafo3 = document.getElementById('resultado3');

const reactContainer1 = document.getElementById('section-fondo1');
const reactContainer2 = document.getElementById('section-fondo2');
const reactContainer3 = document.getElementById('section-fondo3');

const boton1 = document.getElementById('botonColor1');
const boton2 = document.getElementById('botonColor2');
const boton3 = document.getElementById('botonColor3');


const introra = document.getElementById('intro');
const compsra = document.getElementById('comps');
const statsra = document.getElementById('stats');
const eventsra = document.getElementById('events');
const routesra = document.getElementById('routes');



const reactTemas = document.getElementsByClassName('ract-tema');


function mostrarValor1(){
    resultadoSuma1 = parseInt(slider1.value) ;
    console.log(resultadoSuma1);
}
function mostrarValor2(){
    resultadoSuma2 = parseInt(slider2.value) ;
    console.log(resultadoSuma2);
}
function mostrarValor3(){
    resultadoSuma3 = parseInt(slider3.value) ;
    console.log(resultadoSuma3);
}

for (const tema of reactTemas){
    tema.addEventListener('click', mostrarContent)
}


// funcion para contar los click 
function mostrarClic(){
    i+=1;
    console.log(`clic ${i}`);
}

// mostrar contenido de las viñetas seleccionadas 
function mostrarContent(objeto){
    console.log(objeto.target.innerText);
    
}

//TRASADO DE LAS LISTAS

function introsubrayado(){
    if(introdo){
        introra.style.textDecoration = 'none';
    }else{
        introra.style.textDecoration = 'line-through';
    }
    introdo = !introdo;
}

function compssubrayado(){
    if(compsdo){
        compsra.style.textDecoration = 'none';
    }else{
        compsra.style.textDecoration = 'line-through';
    }
    compsdo = !compsdo;
}

function statssubrayado(){
    if(statsdo){
        statsra.style.textDecoration = 'none';
    }else{
        statsra.style.textDecoration = 'line-through';
    }
    statsdo = !statsdo;
}

function eventssubrayado(){
    if(eventsdo){
        eventsra.style.textDecoration = 'none';
    }else{
        eventsra.style.textDecoration = 'line-through';
    }
    eventsdo = !eventsdo;
}

function routessubrayado(){
    if(routesdo){
        routesra.style.textDecoration = 'none';
    }else{
        routesra.style.textDecoration = 'line-through';
    }
    routesdo = !routesdo;
}

//COLOR DE FONDO DE LAS TARJETAS

function cambiarColor1(){
    if(colorNormal1){
        reactContainer1.style.backgroundColor = '#f4f4f4';
        resultadoParrafo1.style.color = '#f4f4f4';
    }else{
        reactContainer1.style.backgroundColor = '#4f7bda';
        resultadoParrafo1.textContent = resultadoSuma1;
    }
    colorNormal1 = !colorNormal1;
   
}
function cambiarColor2(){
    if(colorNormal2){
        reactContainer2.style.backgroundColor = '#f4f4f4';
        resultadoParrafo2.style.color = '#f4f4f4';
    }else{
        reactContainer2.style.backgroundColor = '#ebc588';
        resultadoParrafo2.textContent = resultadoSuma2;
    }
    colorNormal2 = !colorNormal2;
}
function cambiarColor3(){
    if(colorNormal3){
        reactContainer3.style.backgroundColor = '#f4f4f4';
        resultadoParrafo3.style.color = '#f4f4f4';
    }else{
        reactContainer3.style.backgroundColor = '#cc4b4b';
        resultadoParrafo3.textContent = resultadoSuma3;
    }
    colorNormal3 = !colorNormal3;
}

boton1.addEventListener('click', cambiarColor1)
boton2.addEventListener('click', cambiarColor2)
boton3.addEventListener('click', cambiarColor3)

introra.addEventListener('click', introsubrayado)
compsra.addEventListener('click', compssubrayado)
statsra.addEventListener('click', statssubrayado)
eventsra.addEventListener('click', eventssubrayado)
routesra.addEventListener('click',routessubrayado)

