function DashInsert(num) { 
  num = num.toString(10).split("").map(function(t){return parseInt(t)});
  console.log(num);
  numbers = [];
  
  for(var i=0; i < num.length; i++){
      if(num[i] % 2 !== 0 && num[i + 1] % 2 !== 0){
          numbers.push(num[i] + '-');
      }
      else{
          numbers.push(num[i]);
      }
  }


  //return the numbers array and drops any '-' at the end of the string
	return numbers.join('').replace(/\-$/,''); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());           
