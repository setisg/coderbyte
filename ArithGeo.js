function ArithGeo(arr) { 
    
  for (var i = 1; i < arr.length; i++){ 
    if (arr[i] - arr[i - 1] == arr[1] - arr[0]){
      answer = "Arithmetic";
    }
    else if (arr[i] * arr[0] == arr[1] * arr[i-1]){
      answer = "Geometric";
    }
    else {
      answer = -1;
    }
  }
  
  return answer; 
         
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline()); 