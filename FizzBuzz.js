for(let i = 1; i < 101; i++) {
    console.log(i);
    if (i%3 == 0 && i%5 == 0) {
        console.log("FizzBuzz")
    } else if(i%3 == 0) {
        console.log("Fizz")
    } else if(i%5 == 0) {
        console.log("Buzz")
    }
}