/**
 * Async Away
 */

// let getNombre = async () => 'Andrés';

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Andrés');
        },3000);
    });
}

let saludo = async () => { 
    let nombre = await getNombre();
    return  `Hola ${ nombre }`;
}


saludo()
.then(msj => console.log(msj))
.catch(err => console.log(err));


 