//A Daniel le acaban de mandar una lista con sus calificaciones, 
//quiere saber si su promedio es suficiente para tener una beca este año,
// el promedio mínimo que necesita es 8, el programa recibirá un arreglo de calificaciones 
//para poder calcular el resultado

const calificaciones = [9, 10, 6, 5, 8, 9, 7, 7]
let sumaCalificaciones = 0
for (let index = 0; index < calificaciones.length; index++) {
    sumaCalificaciones += calificaciones[index]
}

const promedio = sumaCalificaciones / calificaciones.length
if (promedio >= 8) {
    console.log('Felicidades tienes una beca')
} else {
    console.log('Morro tonto no sacaste beca')
}
