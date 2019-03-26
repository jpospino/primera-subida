const nombre = {
    demand : true,
    alias : 'n'
}

const matematicas = {
    demand : true,
    alias : 'm'
}

const ingles = {
    demand : true,
    alias : 'i'
}

const programacion = {
    demand : true,
    alias : 'p'
}

const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const muestraEstudiante = {
    nombre
}

const actualizar = {
    nombre,
    asignatura : {demand : true, alias : 'a'},
    calificacion : {demand : true, alias : 'c'}
}

const eliminar = {
    nombre
};

const argv = require('yargs').command('crear','Crear un estudiante en el DB ', creacion)
                            .command('mostrar', 'Muestra todos los registros guardados')
                            .command('mostrarEstudiante','Busca estudiante dentro de la lista',muestraEstudiante) 
                            .command('mostrarMat','Muestra los estudiantes que ganaron matemáticas')
                            .command('promedioEstudiante','Muestra el promedio por estudiante')
                            .command('promSuperior','Esrtudiantes con promedios superiores a 3')
                            .command('actualizar','Actualia la calificación de un estudiante', actualizar)
                            .command('eliminar','Elimina un estudiante de la lista', eliminar)
                            .argv;

module.exports = { 
    argv
};


