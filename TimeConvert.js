function TimeConvert(num) { 

  //gets the minute by using modulus to find the remainder of num divided by 60
  minute = num % 60;
  //gets the hour by dividing num by 60 and then using bitwise operator to shift result by 0 bits
  hour = (num / 60) >> 0; 
  time = hour + ':' + minute;
  return time; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());   