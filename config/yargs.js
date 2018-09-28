const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en Consola la Tabla de Multiplicar', opts)
    .command('Crear', 'Crea en un archivo con la Tabla de Multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}