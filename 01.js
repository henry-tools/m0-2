/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function menorMayor(numeros) {
  // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
  // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
  // 'numeros' en la posición 1.
  // Ej:
  // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
  // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
  // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]

  // Tu código aca:
  var arrayOrdened = numeros.sort((a,b)=>a-b)
 
var newArray=[]


var a = newArray.push(arrayOrdened[0])
 
var b = newArray.push(arrayOrdened[arrayOrdened.length-1])
console.log(arrayOrdened)
return newArray
 
}

menorMayor([4, 6, 1, 7, 15])

// No modifiques nada debajo de esta linea //

module.exports = menorMayor