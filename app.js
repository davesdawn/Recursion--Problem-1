// Write a JavaScript function to calculate the factorial of a number.

// Write a recursion function using if statement 
function factorialNum(n) {
    if (n < 0) {
        return -1;  // reject any no#s less than 0
    } else if (n === 0) {
        return 1;  // no#s equal has a factorial of 1
    }  else {
        return (n * factorialNum(n - 1));  // calling the recursion function
    }
}

console.log(factorialNum(6));  // prints 720