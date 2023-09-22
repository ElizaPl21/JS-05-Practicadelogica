let num = 10;
let num1= num;

function factorial (num){
    if (num === 1 || num===0){
       return 1;
    }else if (num<0){
      return("El factorial solo es para numeros enteros");
 
    } else if (num1 > 1) {
        return num * factorial(num-1);
      }
      if (num1>1){
    console.log("El factorial es " + num + factorial )
      }
 
        }


