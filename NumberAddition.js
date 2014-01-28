function NumberAddition(str) { 
  str =  str.match(/\d{1,}/gi).map(function(t){return parseInt(t)});
  finalNumber = 0;
  
  for (var i = 0; i < str.length; i++){
      finalNumber += str[i];
  }
  
  return finalNumber;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline());           
