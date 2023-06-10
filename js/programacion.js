// archivo javascript de la pagina comprartickets


const formulario=document.querySelector("#form");
const nombre=document.getElementById("input_nombre");
const apellido=document.getElementById("input_apellido");
const email=document.getElementById("input_email");
const cantidad=document.getElementById("input-cantidad");
const option=document.getElementById("categoria");
const totalAPagar=document.getElementById("totalpagar");
const boton = document.getElementById("resumen");
const borrar=document.getElementById("borrar");

//ingreso de nombre y validacion
nombre.addEventListener('blur',function(){
    const nombreValue = nombre.value;
    if((!validarString(nombreValue))) {
        
        alert( 'Debe ingresar un nombre valido');
        setTimeout(function() {nombre.focus();},100);
        
    };
});


//ingreso de apellido y validacion
 apellido.addEventListener('blur',function(){
        const apellidoValue = apellido.value;
        if((!validarString(apellidoValue))) {
            
            alert( 'Debe ingresar un apellido válido');
            setTimeout(function() {apellido.focus();},100);
            
        };
 
});


// ingreso de email y validacion
email.addEventListener('blur',function(){
    const emailValue = email.value;
    if((!isEmail(emailValue))) {
        
        alert( 'Debe ingresar un email válido');
        setTimeout(function() {email.focus();},100);
        
    };

});

//ingreso de cantidad y validacion
cantidad.addEventListener('blur',function(){
    const cantidadcompra=parseInt(cantidad.value);
   
   
    if (cantidadcompra<1) {
		alert( 'Ingrese una cantidad válida ');
       
        setTimeout(function() {cantidad.focus();},100);
        
    };

});
	

boton.addEventListener('click',Calcular) ;
borrar.addEventListener('click', borrarCampos);
//funcion calcula pagar

function Calcular(){
    const cantidadcomprar=parseInt(cantidad.value);
    const categoriaPago=option.value;
    let sonpesos=calcularMontoTotal(categoriaPago, cantidadcomprar);
    const pagar=document.getElementById("totalPagar");
    pagar.setAttribute("placeholder",(`Total a pagar : \$ ${sonpesos}`));
      
};



    //Funcion limpiar formulario
function borrarCampos() {
        document.getElementById('form').reset();
        document.getElementById('totalPagar').value="Total a pagar : $  ";
  
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



/*

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  for(let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const inputValue = input.value.trim();

    switch(input.name) {
      case 'nombre':
      case 'apellido':
        if(!validarString(inputValue)) {
          alert(`Ingrese un ${input.name} válido`);
          input.focus();
          return;
        }
        break;
      case 'email':
        if(!isEmail(inputValue)) {
          alert('Ingrese un email válido');
          input.focus();
          return;
        }
        break;
      case 'cantidad':
        if(parseInt(inputValue) < 1) {
          alert('Ingrese una cantidad válida');
          input.focus();
          return;
        }
        break;
    }
  }

  // Si llegamos aquí, todos los campos son válidos
  alert('Formulario enviado correctamente');
});


*/



    




    


   
              




   


  
