function FirstFactorial(num) { 
 
  
    let result = 1;
    for(let i = 1; i <= num; i++){
      result *= i;
    }  
    return result; 
  }
     
  console.log(FirstFactorial(4))//24
  console.log(FirstFactorial(8))//40320
  
  // keep this function call here 
  //console.log(FirstFactorial(readline()));
  