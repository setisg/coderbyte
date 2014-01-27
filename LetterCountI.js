function LetterCountI(str) { 

finalWord = '';
regex = /([a-z])\1{1,1}/gi; 
words = str.split(' ');
goodWords = [];
largest = 0;


//gets rid words without repeating letters
for(var s = 0; s < words.length; s++){
    badWords = words[s].split('').sort().join('').search(regex);
        if(badWords !== -1){
            goodWords.push(words[s]);
        }
        
}

//returns -1 if no words have repeating letters
if(goodWords.length === 0){
    return -1;
}
//returns longest word with most repeating letters
else {
    for(var i = 0; i < goodWords.length; i++){
        letters = goodWords[i].split('').sort().join('').match(regex);
        finalLetters = [];
        countWord = 0;
            for(var j = 0; j <= letters.length; j++){
                if(letters[j] !== letters[j +1]){
                    finalLetters.push(letters[j]);
                    count = finalLetters.length;
                        if(j === (letters.length -1)){
                            countWord = count;
                            if(countWord > largest){
                               finalWord = goodWords[i];
                               largest = countWord;
                            }
                            
                        }

                }
            }

    }
    return finalWord;
    
}
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());           
