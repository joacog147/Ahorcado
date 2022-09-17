'use strict'
const palabras = ["PLATO","HELADERA","MESA","SILLON","MAPA","RAMA","MAR","OLEO","RAMPA","ALURA"]; // Palabras a adivinar
const letrasIncluidas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'] //listado de caracteres que se pueden usar
var letrasUsadas = []; //letras que va usando el usuario
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
const display = document.querySelector("#display");
let palabraSecreta = "";
var ongame = false;
var cont = 0;
var vidas = 6;
var win = 0;

//Funciones de la interfaz
function alerta(){ 
    play(); 
    document.getElementById("iniciar").style.display = "none";
    document.getElementById("agregar").style.display = "none";
    document.getElementById("inicio").style.display = "flex";
}

function inicio(){
    document.getElementById("iniciar").style.display = "flex";
    document.getElementById("agregar").style.display = "flex";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("ingreso").style.display = "none";
    document.getElementById("advice").style.display = "none";
    document.getElementById("cancel").style.display = "none";
    document.getElementById("save").style.display = "none";
    pincel.clearRect(0,0,1300,600);
    ongame = false;
}

function add(){
    document.getElementById("ingreso").style.display = "flex";
    document.getElementById("advice").style.display = "flex";
    document.getElementById("cancel").style.display = "flex";
    document.getElementById("save").style.display = "flex";
    document.getElementById("iniciar").style.display = "none";
    document.getElementById("agregar").style.display = "none";
    valor = document.querySelector(".ingreso");
    valor.focus();
}

function anhadir(){
    const agregado = document.getElementById("ingreso").value;

    if(agregado.length >= 3){
        palabras.push(agregado.toUpperCase());
        if(display.innerText == ''){
        display.innerText += 'Palabra Guardada!';
        setTimeout(() => (display.innerText = ''), 2000);
        }
    }
}

//Funciones del juego
function play(){
    var cont = 0;
    var vidas = 6;
    var win = 0;
    letrasUsadas = [];
    randomword();
    ongame = true;
    let x = 500;
    let y = 400;
    
    pincel.fillStyle = "darkblue"	//palanca
    pincel.fillRect(190,100,200,7);
    pincel.fillStyle = "darkblue"	//base
    pincel.fillRect(120,405,150,7);
    pincel.fillStyle = "darkblue" // poste
    pincel.fillRect(190,100,7,305);
    pincel.fillStyle = "darkblue" // cuerda
    pincel.fillRect(390,100,7,37);

    if(palabraSecreta.length == 3){
        pincel.fillStyle = "darkblue"
        pincel.fillRect(x,y,70,5);
        pincel.fillRect(x+80,y,70,5);
        pincel.fillRect(x+160,y,70,5);
    }

    if(palabraSecreta.length == 4){
        pincel.fillStyle = "darkblue"
        pincel.fillRect(x,y,70,5);
        pincel.fillRect(x+80,y,70,5);
        pincel.fillRect(x+160,y,70,5);
        pincel.fillRect(x+240,y,70,5);
    }

    if(palabraSecreta.length == 5){
        pincel.fillStyle = "darkblue"
        pincel.fillRect(x,y,70,5);
        pincel.fillRect(x+80,y,70,5);
        pincel.fillRect(x+160,y,70,5);
        pincel.fillRect(x+240,y,70,5);
        pincel.fillRect(x+320,y,70,5);
    }

    if(palabraSecreta.length == 6){
        pincel.fillStyle = "darkblue"
        pincel.fillRect(x,y,70,5);
        pincel.fillRect(x+80,y,70,5);
        pincel.fillRect(x+160,y,70,5);
        pincel.fillRect(x+240,y,70,5);
        pincel.fillRect(x+320,y,70,5);
        pincel.fillRect(x+400,y,70,5);
    }

    if(palabraSecreta.length == 7){
        pincel.fillStyle = "darkblue"
        pincel.fillRect(x,y,60,5);
        pincel.fillRect(x+70,y,60,5);
        pincel.fillRect(x+140,y,60,5);
        pincel.fillRect(x+210,y,60,5);
        pincel.fillRect(x+280,y,60,5);
        pincel.fillRect(x+350,y,60,5);
        pincel.fillRect(x+420,y,60,5);
    }

    if(palabraSecreta.length == 8){
        pincel.fillStyle = "darkblue"
        pincel.fillRect(x,y,60,5);
        pincel.fillRect(x+70,y,60,5);
        pincel.fillRect(x+140,y,60,5);
        pincel.fillRect(x+210,y,60,5);
        pincel.fillRect(x+280,y,60,5);
        pincel.fillRect(x+350,y,60,5);
        pincel.fillRect(x+420,y,60,5);
        pincel.fillRect(x+490,y,60,5);
    }
}
//Dibujar ahorcado
function ahorcado(){
    let cabeza = new Image();
    let cuerpo = new Image();
    let piernai = new Image();
    let piernad = new Image();
    let brazoi = new Image();
    let brazod = new Image();

    if(vidas==6){   
        cabeza.src = "imagenes/cabeza.png";
        cabeza.onload = function (){
            pincel.drawImage(cabeza,355,135,80,80);
        }
    }

    if(vidas==5){
        cuerpo.src = "imagenes/cuerpo.png"
        cuerpo.onload = function(){
            pincel.drawImage(cuerpo,390,214,7,100)
        }
    }
     
    if(vidas==4){
        piernai.src = "imagenes/piernai.png"
        piernai.onload = function(){
            pincel.drawImage(piernai,345,312,50,50)
        }
    }

    if(vidas==3){
        piernad.src = "imagenes/piernad.png"
        piernad.onload = function(){
            pincel.drawImage(piernad,392,312,50,50)
        }
    }

    if(vidas==2){
        brazoi.src = "imagenes/brazoi.png"
        brazoi.onload = function(){
            pincel.drawImage(brazoi,345,230,50,50)
        }
    }

    if(vidas==1){
        brazod.src = "imagenes/brazod.png"
        brazod.onload = function(){
            pincel.drawImage(brazod,392,230,50,50)
        }
        pincel.fillStyle="red";
        pincel.font="bold 72px Poppins";
        pincel.fillText('GAME OVER',450,250,800)
        setTimeout(() => (pincel.clearRect(450,150,800,200)), 2000);
        pincel.fillStyle="darkblue";
        pincel.font="bold 48px Poppins";
        pincel.fillText('La palabra secreta era ' + palabraSecreta,380,450,600);
        
        ongame=false;
    }
}

//función keydown (eventos de la pagina)

document.addEventListener("keydown", (event) => {
    var tecla = event.key;

    if (ongame == true){
        
        check(palabraSecreta, tecla);

         if (win == palabraSecreta.length){
            pincel.fillStyle="green";
             pincel.font="bold 72px Poppins";
             pincel.fillText('GANASTE',530,250,800)
             ongame=false;
         }
}
})

function check(texto, tecla){
    let textodiv = texto.split('');
    let teclah = tecla.toUpperCase();
    var flag = false; // Flag para revisar si la palabra esta incluida

    if(revisarletras(teclah) == true){
        for(var x = 0; x<textodiv.length ; x++){
            if(teclah == textodiv[x]){
                let longitud = x;
                addPalabra(teclah,longitud);
                win++;
                flag = true;
            }
        }

        if(flag == false){  
            pincel.fillStyle = "red";
            pincel.font="bold 48px Poppins"
            pincel.fillText(teclah,550+(50*cont),100);
            cont++;
            ahorcado();
            vidas--;
        }
    }
}

function randomword(){
    var palabra = palabras[Math.round(Math.random()*(palabras.length-1))];
    palabraSecreta = palabra;

    return palabraSecreta;
}

function addPalabra(x,y){
    
    pincel.fillStyle = "darkblue"
    pincel.font="bold 48px Poppins"
    if(palabraSecreta.length < 6){
        pincel.fillText(x,520+(80*y),390)
    }
    if(palabraSecreta.length > 6){
        pincel.fillText(x,520+(70*y),390)
    }
}

function revisarletras(x){
    let include = false;

    if(letrasUsadas.includes(x)){
        return include
    }

    letrasUsadas.push(x);

    for(var y=0; y<letrasIncluidas.length;y++){
        if(x == letrasIncluidas[y]){
            include = true;
        }
    }

    return include;
}