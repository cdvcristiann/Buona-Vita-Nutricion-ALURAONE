var campoFiltro = document.querySelector('#filtrar-tabla');


campoFiltro.addEventListener('input', function(){//el evento inputcaptura lo que se ingresa
	console.log(this.value);

	var pacientes = document.querySelectorAll('.paciente');

	if(this.value.length > 0){
		for(var i = 0; i < pacientes.length; i ++){
			var paciente = pacientes[i];
			var tdNombre = paciente.querySelector('.info-nombre');
			var nombre = tdNombre.textContent;
			var expresion = new RegExp(this.value, 'i');//objeto js captura el valor de la caja de texto 

			if(!expresion.test(nombre)){ //test-->evalua si la expresion esta dentro del nombre
				paciente.classList.add('invisible');
			}else{
				paciente.classList.remove('invisible');
			}
		}
	}else{
		for(var i = 0; i < pacientes.length; i++){
			var paciente = pacientes[i];
			paciente.classList.remove('invisible');
		}
	}

	
});