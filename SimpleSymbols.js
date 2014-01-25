function SimpleSymbols(str) { 

  //Test regex. Starts at the beginning of the string. Non-capturing group checks for '+' followed by a-z character and then does a lookahead for another '+'. OR, '+', '=', 0-9. Finds one or more to the end of string. 
	return /^(?:\+[a-z](?=\+)|[+=\d])+$/i.test(str); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline()); 