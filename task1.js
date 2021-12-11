// ======= Przeglądarka / Browser / Task 1  /  =======

// Arry collector
let arrCollector = [];
// Getting 20 random number
while (arrCollector.length < 20) {
  //Genereating Random number between 1 - 100;
  let getRandomNumber = Math.floor(Math.random() * 100) + 1;
  if (arrCollector.indexOf(getRandomNumber) === -1)
    arrCollector.push(getRandomNumber);
}

let evenNumber = [];
let oddNumber = [];
// Checking each items are even or odd numbers
arrCollector.forEach((item) => {
  if (item % 2 == 0) {
    return evenNumber.push(item);
    // console.log("Even numbers", evenNumber);
  } else {
    return oddNumber.push(item);
    // console.log("Odd number", oddNumber);
  }
});

// Sorting ascending order even numbers
evenNumber.sort(function (a, b) {
  return a - b;
});
console.log(evenNumber);

// Sorting ascending order odd numbers
oddNumber.sort(function (a, b) {
  return a - b;
});
console.log(oddNumber);

// ======= Task 1 =======
