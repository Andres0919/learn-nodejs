let nombre = 'Deadpool';
let real = 'Wade Winston';


let nombreComillas = nombre + ' ' + real;
let nombreTemplate = `${ nombre } ${ real }`;

console.log(nombreComillas === nombreTemplate); //true

function getNombre(){
    return `${ nombre } ${ real }`;
}

console.log(`EL nombre de: ${ getNombre() } `);