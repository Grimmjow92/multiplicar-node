// const fs = require('express');
// const fs = require('./path');
const argv = require('./config/yargs').argv;
const colors = require('colors');



const { createFile, listarTabla } = require('./multiplicar/multiplicar');
//console.log(argv);
let comando = argv._[0];


switch (comando) {
    case ('listar'):
        listarTabla(argv.base, argv.limite);
        break;
    case ('crear'):
        createFile(argv.base, argv.limite).then(archivo => {
                console.log(`Archivo creado: ${archivo}`);
            })
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//let base = 'a';

//console.log(argv);
//let argv2 = process.argv;
//console.log(argv.base);
//console.log(argv2);
//console.log('Limite: ', argv.limite);

// let parametro = argv[2];
// let base = parametro.split['='][1];



//console.log(multiplicar);