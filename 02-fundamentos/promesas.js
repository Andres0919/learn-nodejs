let empleados = [{
    id: 1,
    nombre: 'Andrés'
},{
    id: 2,
    nombre: 'Paola'
},{
    id: 3,
    nombre: 'Angela'
}];

let salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 3000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find( empleado => empleado.id === id);
        if(!empleadoDB){
            reject(`No existe un empleado con el ID ${ id }`);
        }else{
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if(!salarioDB){
            reject(`No hay un salario para ${ empleado.nombre }`)
        }else{
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario })
        }
    });
}


getEmpleado(1)
    .then(empleado => getSalario(empleado))
    .then(res => console.log(res))
    .catch(err => console.log(err));