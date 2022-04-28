

function prueba() {
let numero = Number(prompt("Elegí un Número"))
if (!Number.isNaN(Numero) && Numero != "") {
    alert("Bien")
} else {
    alert("Dale pelotudo")
    alert("Bueno, vamos de nuevo")
    let letra =  prompt("Is this the real life?")
    if (letra.toLowerCase() == "is this just fantasy?") {
        alert("Ta, te perdono")
    } else {
        alert("Cancelado")
        document.write("CANCELAAAAAAAADO")
    }
}
}

    var coso = 0
    function set(){
    document.getElementById("variable").innerHTML = coso
    }
    function contador() {
    coso = coso + 1
    document.getElementById("variable").innerHTML = coso
    document.getElementById("comentario").innerHTML = "qué irresponsable"
    document.getElementById("variable").contentWindow.location.reload(true);
    document.getElementById("comentario").contentWindow.location.reload(true);
}
