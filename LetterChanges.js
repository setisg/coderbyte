function LetterChanges(str) { 
 str = str.toLowerCase().replace(/[a-z]/gi, function(l){
 next = String.fromCharCode(l.charCodeAt(0)+1);
 if (/[eiou]/.test(next)){next = next.toUpperCase();};
 return l == 'z' ? 'A' : next;
 });
    
  return str; 
         
}
LetterChanges(readline()); 