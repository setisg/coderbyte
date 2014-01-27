function LetterCountI(str) { 

finalWord = '';
words = str.split(' ');
count = 0;

    for(var i = 0; i < words.length; i++){
        letters = words[i].split('').sort().join('').match(/(.)\1{1,1}/gi).filter(function (v, i, a){ return a.indexOf (v) == i }).length;
        while(count < letters){
            finalWord = words[i];
            count = letters;
        }
    }

return finalWord;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI("lloololloliilqqqqwwwwttttxxxo pppiijjjkkkrrri");  