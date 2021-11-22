import validator from "./validator.js";
   document.getElementById("btnValidation").addEventListener("click", checkIn); 
   function checkIn() {
     const boxContent = document.getElementById("creditnumber").value; 
     let contentToValidate = boxContent.toString(); 
     if (contentToValidate.match("^[0-9]{16}$")) { 
         alert("Estamos procesando tu solicitud"); 
           if (validator.isValid(contentToValidate)) {
           alert("Genial, está validada y tu tarjeta N°" + validator.maskify(toValidations) + " se ha registrado exitosamente"
           );
          } else {
           alert("El número ingresado no es válido. Verifica que ingresaste los dígitos correctamente o intenta nuevamente con otro documento");
           }
      } else {
        alert("Debes ingresar un número de 16 dígitos");
        throw TypeError("Only numbers allowed");
     }
  }
