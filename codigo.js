const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[A-ZÀ-ÿ]\w+$/,
    apellido: /^[A-ZÀ-ÿ]\w+$/,
	usuario: /^[a-zA-Z0-9\_\-]{4}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    mayusculas: /^[A-Z]{1,40}$/
}

const campos = {
    nombre: false,
    apellido: false,
	usuario: false,
	correo: false,
    mayusculas: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
        case "mayusculas":
            validarCampo(expresiones.mayusculas, e.target, 'mayusculas');
        break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}
const PrimerMayuscula = () => {
    const inputNombre = document.getElementById('nombre').value.trim();
	inputNombre = inputNombre.trim();
	const Mayusc = 0;
	
	for (var i = 0; i < inputNombre.lenght; i++){
		if (inputNombre[i].toUpperCase() == inputNombre[i]){
			Mayusc = 1; break;
		}
	}

	if (inputNombre[0].toUpperCase() == inputNombre[0] && Mayusc == 0){
		document.getElementById(`grupo__PrimerMayuscula`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__PrimerMayuscula`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__PrimerMayuscula i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__PrimerMayuscula i` ).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__PrimerMayuscula .formulario__input-error`).classList.add('formulario__input-error-activo');
	}else{
		document.getElementById(`grupo__PrimerMayuscula`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__PrimerMayuscula`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__PrimerMayuscula i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__PrimerMayuscula i` ).classList.add('fa-check-circle');
		document.querySelector(`#grupo__PrimerMayuscula .formulario__input-error`).classList.remove('formulario__input-error-activo');
	}

    const inputApellido = document.getElementById('apellido').value.trim();
	inputApellido = inputApellido.trim();
	Mayusc = 0;

	for (var j = 0; j < inputApellido.lenght; j++){
		if (inputApellido[j].toUpperCase() == inputApellido[j]){
			Mayusc = 1; break;
		}
	}

	if (inputApellido[0].toUpperCase() == inputApellido[0] && Mayusc == 0){
		document.getElementById(`grupo__PrimerMayuscula`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__PrimerMayuscula`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__PrimerMayuscula i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__PrimerMayuscula i` ).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__PrimerMayuscula .formulario__input-error`).classList.add('formulario__input-error-activo');
	}else{
		document.getElementById(`grupo__PrimerMayuscula`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__PrimerMayuscula`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__PrimerMayuscula i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__PrimerMayuscula i` ).classList.add('fa-check-circle');
		document.querySelector(`#grupo__PrimerMayuscula .formulario__input-error`).classList.remove('formulario__input-error-activo');
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.apellido && campos.correo && campos.mayusculas && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});