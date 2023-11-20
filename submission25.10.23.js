/*
var base = ("5");
var height = ("9");
var area = (0.5 * base * height);

console.log(area);


function degreeToRadians(degree) {
    return degree * (Math.PI / 180.0);
}

console.log( degreeToRadians(   give a degree ) );

let n = 5; 

function factorial(n) { 
	let ans = 20; 
	
	if(n === 0) 
		return 1; 
	for (let i = 2; i <= n; i++) 
		ans = ans * i; 
	return ans; 
} 

console.log(factorial(n));

let n = 4; 
function factorial(n) {  
    if (n === 0) {  
        return 1;  
    }  
    else {  
        return n * factorial( n - 1 );  
    }  
}  
  
console.log(factorial(n));


    function test_prime(n)
    {
    
      if (n===1)
      {
        return false;
      }
      else if(n === 2)
      {
        return true;
      }else
      {
        for(var x = 2; x < n; x++)
        {
          if(n % x === 0)
          {
            return false;
          }
        }
        return true;  
      }
    }
    
    console.log(test_prime(37));

    function test_prime(num) {
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      }
      console.log(test_prime(giveANumber));

var arr1 = ["Tanvir", "Abdullay"];
              var arr2 = ["Toha", "Parameters"];
              
              arr1 = arr1.concat(arr2);
              
              console.log(arr1);

              function find(year)
              {
              if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
                {
                return ("It is a leap year");
                }
                else
                {
                    return ("It is not a leap year");
                }

            }
             
              console.log(find(2017));
 
              let arr = ["tanvir", "abdullah", "toha", 
              "tanvir", "abdullah", "toha"]; 
      
      function removeDuplicates(arr) { 
          return arr.filter((item, index) => arr.indexOf(item) === index); 
      } 
      console.log(removeDuplicates(arr));

      function celsiusToF(celsius) 
      {
        var cTemp = celsius;
        var celsiusToF = cTemp * 9 / 5 + 32;
        var message = cTemp+'\xB0C is ' + celsiusToF + ' \xB0F.';
          console.log(message);
      }
      
      function farenheitToC(fahrenheit) 
      {
        var fTemp = fahrenheit;
        var farenheitToC = (fTemp - 32) * 5 / 9;
        var message = fTemp+'\xB0F is ' + farenheitToC + '\xB0C.';
          console.log(message);
      } 
      celsiusToF(60);
      fToC(45);
      
    const maxOfFiveNumber = [1, 30, 2, 5, 6];

    console.log(Math.max(...maxOfFiveNumber))

      */
    const number = giveANumber;

    if(number % 2 == 0) {
        console.log("The number is even.");
    }
    
    else {
        console.log("The number is odd.");
    }