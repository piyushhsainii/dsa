//function to find out if a number is palindrome or not



var isPalindrome = function (x) {
    if( x < Math.pow(-2,31) || x > (Math.pow(2,31)-1)) return false
    const splitedArray = x.toString()
    for (i = 0; i < splitedArray.length / 2; i++) {
        if (splitedArray[i] !== splitedArray[splitedArray.length - 1 - i]) {
            return false
        }
    }
        return true
};
isPalindrome(1000021)


// link to  leetcode problem - https://leetcode.com/problems/palindrome-number/