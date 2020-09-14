const descripcion = {
    demand: true,
    alias: 'd'
}
const completado = {
    default: 'true',
    alias: 'c'
}

const argv = require('yargs')
    .command('listar', 'Imprime lista todos los registros en el pakage.json')
    .command('crear', 'registra una operacion en el pakage.json', { descripcion, completado })
    .command('actualizar', 'actualiza un registro en el pakage.json', { descripcion, completado })
    .command('borrar', 'borrar un registro en el pakage.json', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}