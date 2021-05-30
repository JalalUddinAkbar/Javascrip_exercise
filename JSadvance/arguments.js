function addNumber(num1, num2){
    var sum = 0
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

var jog = addNumber(5,3,4,6,3,5,6,7)
console.log(jog)