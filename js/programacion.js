//hago la carga 


const formulario=document.querySelector("#form");
console.log(formulario);
const nombre=document.getElementById("input_nombre");
const apellido=document.getElementById("input_apellido");
const email=document.getElementById("input_email");
const cantidad=document.getElementById("input-cantidad");
const option=document.getElementById("categoria");
const totalAPagar=document.getElementById("totalpagar");
const boton = document.getElementById("resumen");
const borrar=document.getElementById("borrar");



 
boton.addEventListener('click',Calcular) ;
borrar.addEventListener('click', borrarCampos);
//funcion calcula pagar
function Calcular(){
	
    alert("¡Hiciste clic en el botón!");
	checkInputs();
    const cantidadcomprar=parseInt(cantidad.value);
    const categoriaPago=option.value;
    let sonpesos=calcularMontoTotal(categoriaPago, cantidadcomprar);
   
   
    const pagar=document.getElementById("totalPagar");
    pagar.setAttribute("placeholder",(`Total a pagar : \$ ${sonpesos}`));
    
   
};



    //Funcion limpiar formulario
function borrarCampos() {
       
        document.getElementById('form').reset();

        console.log("entra en borrar campos");

      document.getElementById('totalPagar').value="Total a pagar : $ ";

        
      
    };
   

//funcion para chequear los inputs y enviar mensaje de alert
function checkInputs() {
	
	const nombreValue = nombre.value;
    const apellidoValue = apellido.value;
	const emailValue = email.value;
	const cantidadcompra=parseInt(cantidad);
   
	
	if(nombreValue === ''||(!validarString(nombreValue))) {
		alert( 'Debe ingresar un nombre valido');
	} ;       	
	if(apellidoValue === ''||(!validarString(apellidoValue))) {
		alert('Debe ingresar un apellido valido');
    };
        
	if(emailValue === ''|| (!isEmail(emailValue))) {
        alert('Debe ingresar un email válido');
    };
		
	if(cantidadcompra === ''|| (cantidadcompra<0)) {
		alert( 'Ingrese una cantidad válida ')
        cantidadcompra=0;
	} ;
	
};
// funcion para calcular el monto a pagar segun categorias retorna monto calculado
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
       
      return suPagoEs;
};

//Funcio para validar nombre y apellido

function validarString(inputString) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(inputString);
};
//Funcion de validacion del mail 
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};






    




    


   
              




   


  
