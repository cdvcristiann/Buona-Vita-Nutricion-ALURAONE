var pacientes = document.querySelectorAll('.paciente');

var tabla = document.querySelector('#tabla-pacientes');

tabla.addEventListener('dblclick', function(event){
	event.target.parentNode.classList.add('fadeOut');
	setTimeout(function(){ //funcion propia de js,
		event.target.parentNode.remove();
	},500);//cantidad en milesegundos, 1000 corresponde a un segundo
	//event.target.parentNode.remove(); //target, donde ocurrio el evento, osea donde se hizo click--parentNode, remueve el padre de ese target
})


/*pacientes.forEach(function(paciente){ //dblclick es un evento propio de js, es como el evento click
	paciente.addEventListener('dblclick', function(){
		this.remove(); //this es asi mismo al objeto mismo
	})
})*/