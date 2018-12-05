const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const {
    argv
} = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
    }).help();

module.exports = {
    argv
}