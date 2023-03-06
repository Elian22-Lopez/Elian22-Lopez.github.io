document.getElementById('button').addEventListener('click', function(){
    let nombreA = document.getElementById('nombre').value;
    console.log('Su nombre de es:' +nombreA);
    let nacimientoA = document.getElementById('nacimiento').value;
    console.log('Su fecha denacimiento es:' +nacimientoA);
    let ubicacionA = document.getElementById('ubicacion').value;
    console.log('Su ubicacion es:' +ubicacionA);
    let contactoA = document.getElementById('contacto').value;
    console.log('Su contacto es:' +contactoA);
    let emailA = document.getElementById('email').value;
    console.log('Su email es:' +emailA);
})

document.getElementById('button2').addEventListener('click', function(){
    let idiomasA = document.getElementById('idiomas').value;
    console.log('Los idiomas que domina son:' +idiomasA);
    let pasatiemposA = document.getElementById('pasatiempos').value;
    console.log('Sus pasatiempos son:' +pasatiemposA);
    let aptitudesA = document.getElementById('aptitudes').value;
    console.log('Sus aptitudes son:' +aptitudesA);
})


document.getElementById('button3').addEventListener('click', function(){
    let perfilA = document.getElementById('perfil').value;
    console.log('Su perfil es:' +perfilA);
    let formacionA = document.getElementById('formacion').value;
    console.log('Su formación es:' +formacionA);
    let experienciasA = document.getElementById('experiencias').value;
    console.log('Su experiencia laboral es:' +experienciasA);
    let cursosA = document.getElementById('cursos').value;
    console.log('Sus cursos son:' +cursosA);
})




