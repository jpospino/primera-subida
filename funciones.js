const fs = require('fs');

listaEstudiantes = [];

const crear = (estudiante) => {
    listar(); 

    let est = {
        nombre : estudiante.nombre,
        matematicas : estudiante.matematicas,
        ingles : estudiante.ingles,
        programacion : estudiante.programacion
    }

    var estudianteDuplicado = listaEstudiantes.find(est => est.nombre == estudiante.nombre)
    if(!estudianteDuplicado) {
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
        guardar();
    } else {
        console.log('Ya existe un estudiante identificado con ese nombre');
    }
};

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);

    fs.writeFile('listado.json', datos, (err) => {
        if(err) {
            throw err;
        }
        console.log('Archivo creado con éxito');
        
    });
};

const listar = () => {
    try {
        listaEstudiantes = require('./listado.json');
    } catch(err) {
        listaEstudiantes = [];
    }
};

const mostrar = () => {
    listar();
    listaEstudiantes.forEach(element => {
        console.log(`Estudiante ${element.nombre}`);
        console.log('Notas');
        console.log(`Ingles ${element.ingles}`);
        console.log(`Programacion ${element.programacion}`);
        console.log(`Matemáticas ${element.matematicas}`);
    });
}

const mostrarEstudiante = (estudiante) => {
    listar();
    let estudianteEncontrado = listaEstudiantes.find(element => element.nombre == estudiante.nombre);

    console.log(estudianteEncontrado);
    

    if(!estudianteEncontrado){
        console.log('Estudiante no existe');
    } else {
        console.log(`Estudiante ${estudianteEncontrado.nombre}`);
        console.log('Notas');
        console.log(`Matemáticas: ${estudianteEncontrado.matematicas}`);
        console.log(`Ingles ${estudianteEncontrado.ingles}`);
        console.log(`Programacion ${estudianteEncontrado.programacion}`);
    }
}

const mostrarMat = () => {
    listar();
    let estudiantesGanaronMatematicas = listaEstudiantes.filter(estudiante => estudiante.matematicas>= 3);

    estudiantesGanaronMatematicas.forEach(element => {
        console.log(`Estudiante ${element.nombre}`);
        console.log('Notas');
        console.log(`Matemáticas: ${element.matematicas}`);
    });
};

const promedioEstudiante = (estudiante) =>{
    listar();

    let estudianteEncontrado = listaEstudiantes.find(element => element.nombre == estudiante.nombre);

    if(!estudianteEncontrado){
        console.log('Estudiante no existe');
    } else {
        console.log(`Estudiante ${estudianteEncontrado.nombre}`);
        let promedio = calcularPromedio(estudianteEncontrado);
        console.log(`Promedio ${promedio}`);
    }    
}

const promSuperior = () => {
    listar();

    let estudiantePromedio = listaEstudiantes.filter(estudiante => calcularPromedio(estudiante) >= 3);

    estudiantePromedio.forEach(item => {
        let promedio = calcularPromedio(item);
        console.log(`Nombre estudiante promedio superior: ${item.nombre}`);
        console.log(`Promedio: ${promedio}`);
    });
}

const calcularPromedio = (estudiante) => {
    return  (estudiante.matematicas + estudiante.ingles + estudiante.programacion) / 3;
}

const actualizar = (nombre, asignatura, calificacion) => {
    listar();
    console.log(nombre);
    
    let estudianteActualizar = listaEstudiantes.find(e => e.nombre == nombre);

    if(!estudianteActualizar){
        console.log('Estudiante no existe, no es posible actualizar');
    } else {
        estudianteActualizar[asignatura] = calificacion;
        guardar();
    }
};

const eliminar = (nombre) => {
    listar();
    
    let nuevoListaEstudiantes = listaEstudiantes.filter(e => e.nombre != nombre);

    if(nuevoListaEstudiantes.length == listaEstudiantes.length){
        console.log('No hay estudiantes para eliminar');
    } else {
        listaEstudiantes = nuevoListaEstudiantes; 
        console.log(listaEstudiantes);
        guardar();
    }
    
}

module.exports = {
    crear,
    mostrar,
    mostrarEstudiante,
    mostrarMat,
    promedioEstudiante,
    promSuperior,
    actualizar,
    eliminar
}