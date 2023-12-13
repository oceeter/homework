// write a script to find the number of times to replace
// a given number with the sum of its digits until it converts to
// a single digit number

const sumOfDigits = (num) => {

    var sumOfDigits = 0;
    
    while (num) {
        sumOfDigits += num % 10;
        num = Math.floor(num / 10);
    }
    return sumOfDigits;

};

const sum_of_digits_to_one = (num) => {

    var result = 0;
    
    while (num >= 10) {
        result += 1;
        num = sumOfDigits(num);
    }
    return result;
};

console.log(sumOfDigits(324))
console.log(sumOfDigits(128))