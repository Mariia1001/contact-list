var count=0;
 
	/**
	 * función para agregar valores a la tabla
	 */
	function agregarValores(){
		// cogemos los valores del formulario
		var nombre=document.getElementById("nombre").value;
		var apellidos=document.getElementById("apellidos").value;
		var correo=document.getElementById("correo").value;
		var telefono=document.getElementById("telefono").value;
		var direccion=document.getElementById("direccion").value;
 
		// La variable cont, genera un id unico para cada contacto
		// Este id es el utilizado para eliminar-lo
		count++;
 
		if(nombre.length>0 || apellidos.length>0)
		{
			var tbody = document.getElementById("miTabla").getElementsByTagName("TBODY")[0];
 
			var attrId = document.createAttribute('id');
			attrId.value=count;
 
			var td1 = document.createElement("TD");
			td1.appendChild(document.createTextNode(nombre));
			var td2 = document.createElement("TD");
			td2.appendChild(document.createTextNode(apellidos));
			var td3 = document.createElement("TD");
			td3.appendChild(document.createTextNode(correo));
			var td4 = document.createElement("TD");
			td4.appendChild(document.createTextNode(telefono));
			var td5 = document.createElement("TD");
			td5.appendChild(document.createTextNode(direccion));
			var td6 = document.createElement("TD");
			td6.appendChild(crearButton(count, "Eliminar"));
			td6.appendChild(crearButton(count, "update"));
 
			var row = document.createElement("TR");
			row.setAttributeNode(attrId);
			row.appendChild(td1);
			row.appendChild(td2);
			row.appendChild(td3);
			row.appendChild(td4);
			row.appendChild(td5);
			row.appendChild(td6);
			tbody.appendChild(row);
		}
 
		// Eliminamos los valores del formulario
		document.getElementById("nombre").value="";
		document.getElementById("apellidos").value="";
		document.getElementById("correo").value="";
		document.getElementById("telefono").value="";
		document.getElementById("direccion").value="";
	}
 
	/**
	 * Función para eliminar un valor de la tabla
	 */
	function eliminarValor(id)
	{
		var row = document.getElementById(id);
		row.parentNode.removeChild(row);
	}
	//funcion pra actulizar valor
	function actualizarValor(id){
		var row = document.getElementById(id);
	
		var nombre=document.getElementById("nombre").value;
		var apellido=document.getElementById("apellido").value;
		var correo=document.getElementById("correo").value;
		var telefono=document.getElementById("telefono").value;
		var direccion=document.getElementById("direccion").value;
	
		if ( nombre.length>0 || apellido.length>0) {
			row.childNodes[0].textContent = nombre;
			row.childNodes[1].textContent = apellido;
			row.childNodes[2].textContent = correo;
			row.childNodes[3].textContent = telefono;
			row.childNodes[4].textContent = direccion;
		}
	
		document.getElementById("nombre").value = "";
		document.getElementById("apellido").value = "";
		document.getElementById("correo").value = "";
		document.getElementById("telefono").value = "";
		document.getElementById("direccion").value = "";
	}
	
 
	/**
	 * Función que crea el boton de eliminar
	 * Tiene que recibie el id a eliminar
	 */
	function crearButton(id, type)
	{
		var button=document.createElement("input");
		var attrType=document.createAttribute('type');
		attrType.value="button";
		if (type == "Eliminar") {
			var attrValue=document.createAttribute('value');
			attrValue.value="Eliminar";
			var attrOnclick=document.createAttribute('onclick');
			attrOnclick.value="eliminarValor("+count+");";
		}else {
			var attrValue=document.createAttribute('value');
			attrValue.value="update";
			var attrOnclick=document.createAttribute('onclick');
			attrOnclick.value="actualizarValor("+count+");";
		}


 
		button.setAttributeNode(attrType);
		button.setAttributeNode(attrValue);
		button.setAttributeNode(attrOnclick);
 
		return button;
        
	}