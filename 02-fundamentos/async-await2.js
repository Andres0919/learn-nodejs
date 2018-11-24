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

let getEmpleado = async (id) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id);
    if(!empleadoDB){
        throw new Error(`No existe un empleado con el ID ${ id }`);
    }else{
        return empleadoDB;
    }
}

let getSalario = async (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if(!salarioDB){
        throw new Error(`No hay un salario para ${ empleado.nombre }`)
    }else{
        return { nombre: empleado.nombre, salario: salarioDB.salario };
    }
}

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let res = await getSalario(empleado);

    return `${ res.nombre } tiene un salario de $${ res.salario }`
}

getInformacion(2)
    .then(msj => console.log(msj))
    .catch(err => console.log(err));