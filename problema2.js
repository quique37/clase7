//Joel quiere ver el porcentaje de veces que falto a clases, 
//el programa recibirá un arreglo de asistencias para poder calcular el resultado, 
//cada elemento esta representado por un valor booleano

const asistencias = [true, false, true, false]
let nAsistencias = 0
for (let index = 0; index < asistencias.length; index = index + 1)
// EN LA ULTIMA VARIABLE SE PUEDE PONER index++ index += 1
    if (asistencias[index]) {
nAsistencias++
}
const porcentaje = nAsistencias / asistencias.length * 100
console.log(porcentaje)
