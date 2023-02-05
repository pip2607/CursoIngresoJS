/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado
	var apellidoingresado
	var edadingresada
	var mensaje;

	nombreIngresado = document.getElementById("txtIdNombre").value
	edadingresada = txtIdEdad.value
	apellidoingresado = prompt ("ingrese el apellido");

	mensaje = "usted se llama " + nombreIngresado + " " + apellidoingresado + " y tiene " + edadingresada + "años";
	 txtIdmensaje.value = mensaje;
	
}

