//Joel tiene que informar a sus alumnos las materias que reprobaron, 
//el tiene una lista de alumnos, cada alumno tiene un nombre y una lista de materias, 
//cada materia tiene su nombre y su calificación, el promedio mínimo para aprobar es 6. 
//Haz un algoritmo que escriba el nombre del alumno y la materia que reprobó
const alumnos = [{
    nombre: 'Enrique'
    calificaciones: [10, 9, 7, 8]
} , {
    nombre: 'Juan'
    calificaciones: [6, 5, 3, 6] 
}]

for (let index = 0; index < alumnos.length; index++) {
    if (!alumnos[index].calificaciones) {
        console.log(alumnos[index].promedio)
    }
    const alumnos = alumnos[index]
    const calificaciones = alumno.calificaciones
    let suma = 0
    const promedio = alumnos[0].calificaciones / calificaciones.length
    const promedio = alumnos[1].calificaciones / calificaciones.lenght
console.log(alumnos[index.promedio <6])