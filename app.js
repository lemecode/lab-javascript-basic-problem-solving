// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

let ProGrad_1 = "Vin";
let ProGrad_2 = "Diesel";
console.log("The driver's name is" + " " + ProGrad_1);
console.log("The navigator's name is" + " " + ProGrad_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

var len1 = ProGrad_1.length;
var len2 = ProGrad_2.length;
if (len1 > len2) {
    console.log("The driver has the longest name, it has" + " " + len1 + " " + "characters.");
}
else if (len2 > len1) {
    console.log("It seems that the navigator has the longest name, it has" + " " + len2 + " " + "characters.");
}
else {
    console.log("Wow, you both have equally long names," + " " + len1 + " " + "characters!");
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
var str1 = ProGrad_1.slice(0);
var str2 = ProGrad_2.slice(0);

function vowel_name(str) {

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u" || str.charAt(i) == "A" || str.charAt(i) == "E" || str.charAt(i) == "I" || str.charAt(i) == "O" || str.charAt(i) == "U"); {
            console.log(str.charAt(i));
        }

    }
}
vowel_name(ProGrad_1);
vowel_name(ProGrad_2);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function Case(str) {
    let uppercase = 0;
    let lowercase = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == str.charAt(i).toUpperCase()) {
            uppercase++;
            console.log("Uppercase:" + uppercase);
        }
    }
    for (let j = 0, lowercase = 0; j < str.length; j++) {
        if (str.charAt(j) == str.charAt(j).toLowerCase()) {
            lowercase++;
        }
        console.log("Lowercase:" + lowercase);

    }


}

Case(ProGrad_2);
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

for (let i = 0; i < ProGrad_1.length; i++) {
    document.write(ProGrad_1.charAt(i) + " ");
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

for (i = (ProGrad_2.length - 1); i >= 0; i--) {
    document.write(ProGrad_2.charAt(i) + " ");
}

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

console.log(ProGrad_1 + " " + ProGrad_2);
console.log(ProGrad_2 + " " + ProGrad_1);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
