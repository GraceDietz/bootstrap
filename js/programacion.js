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


borrar.addEventListener('click',limpiar);
 
boton.addEventListener('click',Calcular) ;

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

//funcion para guardar los placeolder 
function guardarPlace(){
    const miFormulario = document.getElementById('form');
    const inputs = miFormulario.getElementsByTagName('input');
     place=[];
        for (let i = 0; i < inputs.length; i++) {
        place[i]=inputs[i].getAttribute('data-placeholder');
             
        console.log("aca v a cada input   " + place[i] +" "+inputs[i]);
               
       
      }
      
    }; 

    //Funcionn para limpiar los inputs y que tengan los placeholder
function limpiar(){
    alert("entro a funcion borrar");
    const miFormulario = document.getElementById('form');
    const inputs = miFormulario.getElementsByTagName('input');
    console.log("Dentro de funcion limpiar");
    console.log(inputs);
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      const placeholder = input.getAttribute('data-placeholder');
      console.log(placeholder);
      input.setAttribute('placeholder', placeholder);

//comprobando el nuevo atributo
        
         const nuevoPlaceholder = input.getAttribute('placeholder');
        console.log(nuevoPlaceholder);
      
    }
};
//funcion para chequear los inputs y envia mensaje por alert
function checkInputs() {
	
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






    




    


   
              




   


  
