console.log ("Hola mundo, aprendiendo a usar GitHub");

let colores = ["Azul", "Amarillo" ,"Rojo"];
colores.push("Verde");

console.log(colores);

function recorrerArray (array){
    array.forEach(function(elemento, indice){
        console.log(indice +' - ' + elemento)
    })
};
recorrerArray(colores);

let colorSeleccionado = "Rojo";

function seleccionarColor(array){
    array.filter(function(elemento){
    if(elemento === colorSeleccionado){
        return console.log(elemento);
    };
    })
    };

seleccionarColor(colores);