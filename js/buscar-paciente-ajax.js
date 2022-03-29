var butonBuscar = document.querySelector('#buscar-paciente');

butonBuscar.addEventListener('click', function(){
	console.log('buscando paciente');
	var xhr = new XMLHttpRequest; //objeto para intercambiar datos
	xhr.open('GET','https://alura-es-cursos.github.io/api-pacientes/pacientes.json')//open-->abrir el navegador, metodo get para obtener, y el link que se quiere capturar
	xhr.addEventListener('load', function(){
		var errorAjax = document.querySelector('#error-ajax');
		if (xhr.status == 200) {
			errorAjax.classList.add('invisible');
			var respuesta = xhr.responseText;//responseText trae los datos de la adquisicion(link)
			var pacientes = JSON.parse(respuesta); //JSON objeto json porque es un archivo json.. el archivo esta en string porque viene en string y se lo transforma en json
			
			pacientes.forEach(function(paciente){
				adicionarPacienteEnLaTabla(paciente);
				console.log(paciente);
			});
		}else{
			errorAjax.classList.remove('invisible')
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
		
	});//para el objeto de la adquisicion
	xhr.send()//es como el enter

});