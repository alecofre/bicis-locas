/*
Realizado por:
     Rebeca Robles Castro
     Alejandro Cofré Pérez
*/

function validateForm(){
	/* primero obtengo el valor de los campos
	del formulario */
	const name = $('#name').val().trim();
	const lastname = $('#lastname').val().trim();
	const email = $('#input-email').val().trim();
	const password = $('#input-password').val().trim();
		
	/* Ahora pruebo 1 a 1 los valores */
	if (name == '') {
		$('#name').parent().append('<span>Debe ingresar su nombre</span>');
	}
	else if (name.length < 2){
		$('#name').parent().append('<span>Debe ingresar al menos dos caracteres</span>');
	}	
	else if( (/[!-@]/.test(name)) ){
		$('#name').parent().append('<span>Debe ingresar sólo letras</span>');
	}
	else if(name.substr(0,1) != name.substr(0,1).toUpperCase()){
		$('#name').parent().append('<span>Debe ser mayúscula la primera letra</span>');
	}
	else if(name.substr(1,name.length) != name.substr(1,name.length).toLowerCase()){
		$('#name').parent().append('<span>Sólo la primera letra debe ser mayúscula</span>');
	}
	
	if (lastname == '') {
		$('#lastname').parent().append('<span>Debe ingresar su apellido</span>');
	}
	else if (lastname.length < 2){
		$('#lastname').parent().append('<span>Debe ingresar al menos dos caracteres</span>');
	}	
	else if( (/[!-@]/.test(lastname)) ){
		$('#lastname').parent().append('<span>Debe ingresar sólo letras</span>');
	}
	else if(lastname.substr(0,1) != lastname.substr(0,1).toUpperCase()){
		$('#lastname').parent().append('<span>Debe ser mayúscula la primera letra</span>');
	}
	else if(lastname.substr(1,lastname.length) != lastname.substr(1,lastname.length).toLowerCase()){
		$('#lastname').parent().append('<span>Sólo la primera letra debe ser mayúscula</span>');
	}

	var regOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	if (email == '') {
		$('#input-email').parent().append('<span>Verifique su mail</span>');
	} 
	else if ( !regOficial.test(email) ){
		$('#input-email').parent().append('<span>Indique un mail válido</span>');
	}
	
	if (password == '') {
		$('#input-password').parent().append('<span>Debe ingresar contraseña</span>');
	}
	else if (password == 'password'){
		$('#input-password').parent().append('<span>Nombre no válido, intente nuevamente</span>');
	}
	else if (password == '123456'){
		$('#input-password').parent().append('<span>Combinación no válida, intente nuevamente</span>');
	}
	else if (password == '098754'){
		$('#input-password').parent().append('<span>Combinación no permitida, intente nuevamente</span>');
	}
	else if(password.length <6){
		$('#input-password').parent().append('<span>Contraseña debe tener al menos 6 caracteres</span>');
	}
	var select = document.getElementsByTagName('select');
	if (select[0].selectedIndex == 0){
		$('select').parent().append('<span>Debe seleccionar un tipo de bici</span>')
	}
}

