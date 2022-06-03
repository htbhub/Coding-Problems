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