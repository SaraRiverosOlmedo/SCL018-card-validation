const validator = {
  isValid(toValidations){
      let digitsForLuhn = toValidations.split ("").reverse();                    
      let evenPosition = []; 
      let oddPosition = []; 
          for (let i = 0; i < digitsForLuhn.length;i++){ 
               if ((i+1) % 2 === 0){
               evenPosition.push(digitsForLuhn[i]);
              } else {
               oddPosition.push(digitsForLuhn[i]);
              }
           }
      let duplicatedDigits = []; 
          evenPosition.forEach (item => {
          duplicatedDigits.push(item*2);
          });
      let twoDigits = duplicatedDigits.filter(item => item > 9);
      let oneDigit = duplicatedDigits.filter(item => item <= 9);
      let twoDigitsSumed = []; 
          twoDigits.forEach (item => {
          twoDigitsSumed.push(item-9);
          });
      let allToIntegers = (twoDigitsSumed.concat(oneDigit,oddPosition)).map(Number); 
      let totalSum=0; 
      for(let i of allToIntegers) totalSum+=i; 
          if (totalSum % 10 === 0) { 
          return true; 
      } else {
          return false; 
        }   
      },                 
  maskify (toValidations){
      return toValidations.slice(0,-3).replace(/.(?=.)/g, '#').concat(toValidations.slice(-3, toValidations.length));   
  }
};
export default validator;