function LongestWord(sen) { 


  sen = sen.replace(/[^a-z0-9\s]/gi,'').split(' ').sort(function(a,b){return b.length-a.length});
  
  
  return sen; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());