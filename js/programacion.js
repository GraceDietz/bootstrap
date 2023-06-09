//hago la carga desde el dom
const formulario=document.querySelector("#form");
console.log(formulario);
const nombre=document.getElementById("input_nombre");
const apellido=document.getElementById("input_apellido");
const email=document.getElementById("input_email");
const cantidad=document.getElementById("input-cantidad");
const option=document.getElementById("categoria");
const totalAPagar=document.getElementById("totalpagar");
const boton = document.getElementById("resumen");

boton.addEventListener('click',Calcular) ;
function Calcular(){
	//e.preventDefault();
    alert("¡Hiciste clic en el botón!");
	checkInputs();
    const cantidadcomprar=parseInt(cantidad.value);
    const categoriaPago=option.value;
    let sonpesos=calcularMontoTotal(categoriaPago, cantidadcomprar);
    alert("son pesos    "+sonpesos);
    const pagar=document.getElementById("totalPagar");
    pagar.setAttribute("placeholder",(`Total a pagar : \$ ${sonpesos}`));
    
   
};

/*
// Seleccionar el botón y agregar un evento de clic
const botonCalcular = document.getElementById('calcular-total');
botonCalcular.addEventListener('click', function() {
  // Obtener los valores ingresados por el usuario
  const cantidad = parseInt(document.getElementById('cantidad').value);
  const opcion = parseInt(document.getElementById('opcion').value);

  // Realizar el cálculo en función de la opción seleccionada
  let total = 0;
  switch (opcion) {
    case 0:
      total = cantidad * 100;
      break;
    case 1:
      total = cantidad * 150;
      break;
    case 2:
      total = cantidad * 200;
      break;
    case 4:
      total = cantidad * 250;
      break;
  }

  // Mostrar el total en la página
  document.getElementById('total').textContent = total;
});




*/
function checkInputs() {
	// trim saca los espacios en blanco
	const nombreValue = nombre.value;
    const apellidoValue = apellido.value;
	const emailValue = email.value;
	const cantidadcompra=cantidad;

	
	if(nombreValue === '') {
		alert( 'Debe Ingresar un nombre valido');
	} else if (!validarString(nombreValue)){
        alert( 'No ingreso un nombre válido');}
       	
	if(apellidoValue === '') {
		alert('Debe Ingresar un apellido valido');
	} else if (!validarString(apellidoValue)){
        alert( 'No ingreso un apellido válido');}
        
	if(emailValue === '') {
		alert('No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		alert('No ingreso un email válido');
	} 
	
	if(cantidadcompra === '') {
		alert( 'Ingrese una cantidad ');
	} ;
	
};
// funcion para calcular el monto a pagar segun categorias
function calcularMontoTotal(option, cantidadcompra) {
    let suPagoEs = 0;
    
        switch (option) {
        //otro sin descuentos
        case "0":
            suPagoEs = cantidadcompra * 200;
            break;
        //EStudiante dto del 80%
        case "1":
            suPagoEs = (cantidadcompra * 200) - (cantidadcompra * 200 * 0.8);
            break;
        //Trainne dto del 50%        
        case "2":
            suPagoEs = (cantidadcompra * 200) - (cantidadcompra * 200 * 0.5);
            break;
        // Junior dto del 15%        
        case "3":
            suPagoEs = (cantidadcompra * 200) - (cantidadcompra * 200 * 0.15);
           
            break;
        default:
            suPagoEs = 0;
            break;

    }
       alert("saliendo del case retornando valor..."+suPagoEs);
      return suPagoEs;
};



function validarString(inputString) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(inputString);
};

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};





/*
boton.addEventListener("click", function (event) {

    event.preventDefault();

    alert("¡Hiciste clic en el botón!")

    const inputname = document.getElementById("input_nombre");
    inputname.addEventListener("input" ,(event)=>{
        alert("Entro en la callback");
        const placeholdername = inputname.getAttribute("placeholder");
    
        const name=inputname.value;
            
          
          let valido = validarString(name);
          if (!valido) {
            alert("Ingrese un nombre válido");
            inputname.setAttribute("placeholder", placeholdername);
            inputname.focus();
            inputname.value = "";
            event.preventDefault();
          };
        });
        

    
    
    
    




    


   
    const inputapellido = document.getElementById("input_apellido");
    const lastname = inputapellido.value;
    const inputcantidad = document.getElementById("cantidad");
    const cantidadcompra = inputcantidad.value;
    const inputopcion = document.getElementById("opciones");
    const option = inputopcion.value;
    const totalAPagar = document.getElementById("totalPagar");
    //obtenemos los valores de cantidad y opciones para hacer los calculos

    totalAPagar.value = "Total a pagar : $" + calcularMontoTotal(option, cantidadcompra);
    alert("el total calculado a pagar es :  " + totalAPagar.value);
});




*/




 
                                       




   


  
