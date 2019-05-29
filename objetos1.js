//Joel tiene que informar a sus alumnos quienes tienen que repetir curso, 
//el tiene una lista de alumnos, cada alumno tiene un nombre y una lista de calificaciones 
//que se tienen que promediar para saber si el alumno está aprobado, 
//el promedio mínimo para aprobar es 6. Haz un algoritmo que escriba el nombre de los alumnos que no aprobaron.
const alumnos = [
    {
    nombre: 'Joel'
    calificaciones: [10, 9, 8]
} , {
    nombre: "Humberto"
    calificaciones: [6, 5, 5] 
}
]

for (let index = 0; index < alumnos.length; index++) {
    let suma = 0
    const calificaciones = alumnos[index].calificaciones
    for (let index2 = 0; index2 < calificaciones.length; index2++)
        suma += calificaciones[index2]
    }
    const promedio = suma / alumnos[index].calificaciones.length
    if (promedio < 6) {
        console.log("Estas reprobado ", alumnos[index].nombre)
    }    
    
   
    
