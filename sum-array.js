// DEFINE YOUR FUNCTION BELOW:
function sumArray(array){
    
  let total = 0;


  let i; //use in strict mode
  
  for (i = 0; i < array.length; i++){
      
      total += array[i];
  }
  
  console.log(total)
  return total;

}

  sumArray([1,2,3]) // 6
  sumArray([2,2,2,2]) // 8
  sumArray([50,50,1]) // 101