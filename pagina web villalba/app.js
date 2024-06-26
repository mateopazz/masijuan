let contador = 0;

const valor = document.getElementById("valor");
const mas = document.getElementById ("mas");
const menos = document.getElementById ("menos");

mas.onclick = function(){
    contador++;
    valor.innerHTML = contador;
}
menos.onclick = function(){
    contador--;
    valor.innerHTML = contador;
    
    
}