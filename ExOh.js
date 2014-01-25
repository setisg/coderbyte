function ExOh(str) { 

  str = str.split(''); 
  x = 0;
  o = 0;
  
  for (var i = 0; i < str.length; i++){
      if (str[i] === 'x'){
          ++x;
      }
      else if (str[i] === 'o'){
          ++o;
      }
      else{
          return "You can only enter x or o";
      }
  }
  
  return (x == o);
  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
