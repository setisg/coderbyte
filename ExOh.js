function ExOh(str) { 

x = 0;
o = 0;
  
  str = str.replace(/[xo]/gi, function(l){
    if (l === 'x'){
      ++x;
    }
    else{
      ++o;
    }
  })
  return (x === o); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
          
