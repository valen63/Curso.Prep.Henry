// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz=[]
  for(let i in objeto){
    a=[i, objeto[i+""]]
    matriz.push(a)
  }
  return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var numerodeveces={}
  var contador=0
  for(let i in string){
    for(let j in string){
      if(string[i] == string[j]){contador++}
    }
    indice = string[i]+""
    numerodeveces[indice]=contador
    contador=0
  }
  return numerodeveces
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  function esMayuscula(letra){return letra === letra.toUpperCase()}
  function esMinuscula(letra){return letra === letra.toLowerCase()}
  var palabra=""
  for(let i in s){
    if (esMayuscula(s[i])==true){palabra = palabra + s[i]}
  }
  for(let i in s){
    if (esMinuscula(s[i])==true){palabra = palabra + s[i]}
  }
  return palabra
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var nuevafrase=""
  var posiciones = [0]
  var Ultimo= str.length -1
  for(let i in str){
    if(str[i]== " "){
      posiciones.push(parseInt(i)-1)}
  }
  posiciones.push(Ultimo)
  if(posiciones[0]==0 && posiciones[1]==0){
    nuevafrase= nuevafrase +str[0]+" "
    posiciones.shift()
    posiciones[0]=1}
// No editar lo de arriba
if(posiciones[0]==0){
  for(var i=0; i<posiciones.length- 1; i++){
    if(posiciones[i]==0){
      for(var j=posiciones[i+1]; j>=posiciones[i];j--){nuevafrase= nuevafrase +str[j]}
      nuevafrase= nuevafrase+" "}
    if(posiciones[i+1]==Ultimo){
      for(var j=posiciones[i+1]; j>posiciones[i]+1;j--){nuevafrase= nuevafrase+str[j]}}
    if(posiciones[i+1]!=Ultimo && posiciones[i]!=0){for(var j=posiciones[i+1]; j>posiciones[i];j--){nuevafrase= nuevafrase + str[j]}}
  }}
else{
    for(var i=0; i<posiciones.length- 1; i++){
     if(i==0){for(var j=posiciones[i+1]; j>=posiciones[i];j--){nuevafrase= nuevafrase + str[j]}}
     if(posiciones[i+1]==Ultimo){
      for(var j=posiciones[i+1]; j>posiciones[i]+1;j--){nuevafrase= nuevafrase+str[j]}}
     if(posiciones[i+1]!=Ultimo && i!=0){
      for(var j=posiciones[i+1]; j>posiciones[i];j--){nuevafrase= nuevafrase + str[j]}}}}
  return nuevafrase
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var n= numero +"";
  var l= "";
  for( var i= n.length -1; i>=0;i--){
    l= l+ n[i]
  }
  if(n===l){return("Es capicua")}
  else{return("No es capicua")}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var NuevaCadena="";
  for (var i=0; i<cadena.length;i++){    
    if(cadena[i]== "a" || cadena[i]== "b" || cadena[i]=="c"){NuevaCadena+=""}
    else{NuevaCadena+= cadena[i]}
  }
  return NuevaCadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var obj= {};
  var lista=[];
  for(let i in arr){obj[arr[i]]= arr[i].length};
  for(let i in obj){lista.push(obj[i])};
  lista.sort();
  lista = [...new Set(lista)];
  var Narr=[]
  for (let i in lista){
    for (let j in obj){
      if(obj[j]== lista[i]){Narr.push(j)}
    }
  }
  return Narr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var Union =[];
  for (let i in arreglo1){
    for (let j in arreglo2){
      if (arreglo1[i]== arreglo2[j]){Union.push(arreglo1[i])}
    }
  }
  return(Union)
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

