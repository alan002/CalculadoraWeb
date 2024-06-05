
function agregarNum(numero){
    pantalla = document.getElementById("resultado")
    pantalla.innerHTML += numero;
}
function agregarSigno(Signo){
    pantalla=document.getElementById('resultado')

    cuenta = pantalla.innerHTML.toString()
    var simbolos = ["+","-" ,"/","*","."]
    if (cuenta.charAt(cuenta.length - 1) != simbolos[0] && cuenta.charAt(cuenta.length - 1) != simbolos[1]  && cuenta.charAt(cuenta.length - 1) != simbolos[2]  && cuenta.charAt(cuenta.length - 1) != simbolos[3] && cuenta.charAt(cuenta.length - 1) != simbolos[4] && cuenta.length != 0){
        pantalla.innerHTML += Signo;
    }
    else if (cuenta.charAt(cuenta.length - 1) == simbolos[0] || cuenta.charAt(cuenta.length - 1) == simbolos[1] || cuenta.charAt(cuenta.length - 1) == simbolos[2] || cuenta.charAt(cuenta.length - 1) == simbolos[3] || cuenta.charAt(cuenta.length - 1) == simbolos[4]){
        pantalla.innerHTML = cuenta.slice(0, -1);
        pantalla.innerHTML += Signo;
    }
}
function Calcular(){
    pantalla = document.getElementById('resultado');
    cuenta = pantalla.innerHTML
    resultado = eval(cuenta)
    pantalla.innerHTML = resultado
    if (resultado.toFixed(2) > resultado){
    pantalla.innerHTML = resultado.toFixed(2)
    }
}
function Borrar(){
    pantalla = document.getElementById('resultado');
    cuenta = pantalla.innerHTML.toString()
    pantalla.innerHTML = cuenta.slice(0, -1);
}
function BorrarTodo(){
    pantalla = document.getElementById('resultado');
    pantalla.innerHTML = "";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "0" || event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" || event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9"){
        agregarNum(parseInt(event.key))
    }
    if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === ","){
        agregarSigno(event.key)
    }
    if (event.key === "Enter"){
        Calcular();
    }
    if (event.key === "Backspace"){
        Borrar();
    }
});