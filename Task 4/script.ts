/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */
type BinaryNumber = 1 | 0;

const textToOnesAndZeroes = (text: string): number => {

  // Check if the string is empty, in case it is empty, return 0
  if(text.length === 0){
    return 0;
  }

  // Variable 'output' - what the function will return, starts with 1
  let output: number = 1;
  let binaryNum: BinaryNumber;

  // A loop that begins with 1 (as the first digit is already = 1) and loops as long as 'i' is smaller than the length of the string
  for (let i: number = 1; i < text.length; i++){

    // If iteration number is odd, 'binaryNum' is set to 1, if even - to 0
    if(i % 2 === 0){
      binaryNum = 1;
    } else {
      binaryNum = 0;
    }

    // Output multiplied by 10 on each iteration of the loop, and added a 'binaryNum'depending on the iteration number
    output = output * 10 + binaryNum;
  }
  return output;
}

// console.log(textToOnesAndZeroes('labas'));
// console.log(textToOnesAndZeroes('kebabas'));
// console.log(textToOnesAndZeroes('a'));
// console.log(textToOnesAndZeroes(''));