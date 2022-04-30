

function prueba() {
    let numero = Number(prompt("Elegí un Número"))
    if (!Number.isNaN(numero) && numero != "") {
    alert("Bien")
    } else {
    alert("Dale pelotudo")
    alert("Bueno, vamos de nuevo")
    let letra =  prompt("Is this the real life?")
    if (letra.toLowerCase() == "is this just fantasy?") {
        alert("Ta, te perdono")
    } else {
        /*alert("Cancelado")
    document.write("CANCELAAAAAAAADO")*/
    alert("Ah si? Tomá")
    window.location.href = "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1"}
    }
};

let coso = 0;
function set(){
    document.getElementById("variable").innerHTML = coso
    }
function contador() {
    coso = coso + 1
    document.getElementById("variable").innerHTML = coso
    document.getElementById("comentario").innerHTML = "qué irresponsable"
};


function color(){
    concatenado = 
    (Math.floor(Math.random() * ((99- 10) + 1)) + 10).toString() + 
    (Math.floor(Math.random() * ((99- 10) + 1)) + 10).toString() +
    (Math.floor(Math.random() * ((99- 10) + 1)) + 10).toString()
    document.body.style.background = "#" + concatenado ;
    document.getElementById('canta').innerHTML = concatenado + ' Cantas se balanceaban sobre la tela de una araña' ;
    coloreoBoton()
}

function coloreoBoton() {
    document.getElementById('botonazo').style.background = "#" + (Math.floor(Math.random() * ((99- 10) + 1)) + 10).toString() + (Math.floor(Math.random() * ((99- 10) + 1)) + 10).toString() + (Math.floor(Math.random() * ((99- 10) + 1)) + 10).toString() ;
    document.getElementById('botonazo').style.borderColor = "#" + (Math.floor(Math.random() * ((99- 10) + 1)) + 10).toString() + (Math.floor(Math.random() * ((99- 10) + 1)) + 10).toString() + (Math.floor(Math.random() * ((99- 10) + 1)) + 10).toString() ;
      
}


function posicion(){
    const botonazo = document.getElementById('botonazo');
    botonazo.style.position = 'absolute';
    
    /*
    botonazo.style.setProperty('top','calc('+(Math.floor(Math.random() * ((100- 1) + 1)) + 1)+'% - 100px)' );
    botonazo.style.setProperty('bottom','calc('+(Math.floor(Math.random() * ((100- 1) + 1)) + 1)+'% - 100px)' );
    botonazo.style.setProperty('left','calc('+(Math.floor(Math.random() * ((100- 1) + 1)) + 1)+'% - 100px)' );
    botonazo.style.setProperty('right','calc('+(Math.floor(Math.random() * ((100- 1) + 1)) + 1)+'% - 100px)' );
*/
    botonazo.style.top = (Math.floor(Math.random() * ((88- 1) + 1)) + 1)+'%';
    botonazo.style.bottom = (Math.floor(Math.random() * ((88- 1) + 1)) + 1)+'%';
    botonazo.style.left = (Math.floor(Math.random() * ((88- 1) + 1)) + 1)+'%';
    botonazo.style.right = (Math.floor(Math.random() * ((88- 1) + 1)) + 1)+'%';
}

function gorra(){
    alert("hijodeputa nometoques LA CONCHA DE TU MADRE POLICIAAAAA!!1!1")
    window.location.href = "https://www.argentina.gob.ar/policia-federal-argentina"
}
