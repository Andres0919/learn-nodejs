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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id);
    if(!empleadoDB){
        callback(`No existe un empleado con el ID ${ id }`);
    }else{
        callback(null, empleadoDB);
    }
}


let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if(!salarioDB){
        callback(`No hay un salario para ${ empleado.nombre }`)
    }else{
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario })
    }
}


getEmpleado(3,(err ,empleado) => {
    if(err){
        return console.log(err)
    }

    getSalario(empleado,(err, res) => {
        if(err){
            return console.log(err);
        }

        console.log(res);
    });
});