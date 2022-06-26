//After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).


function rentalCarCost(d) {
    if(d < 3){
      return d*40
    }  if(d >= 3 && d < 7){
      return 40*d - 20
    }if(d >= 7){
      return 40*d - 50
    }
  }


  // Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

  // Examples:
  // 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
  // 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
  // 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
  // 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
  
  function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0 ? true : false
  }  

//   Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}


// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
// number 	price (cents)
// n < 5 	100
// n >= 5 and n < 10 	95
// n >= 10 	90

function saleHotdogs(n){
  return n*(n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90)
}


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
  return x.reduce( (a,b) => a + Number(b),0)
}


// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function find_average(array) {
  return array.length == 0 ? 0 : array.reduce((a,b) => a + b, 0)/array.length 
}

// Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
  return this.toUpperCase() == this
}