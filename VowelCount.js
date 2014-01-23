function VowelCount(str) { 

  str = str.replace(/[^aeiou]/gi,'');
  return str.length; 
         
}
VowelCount(readline()); 