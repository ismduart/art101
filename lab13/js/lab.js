/*
 * Author: Bella Duarte
 * Created: 18 November 2024
 */

function fizzBuzz() {
    console.log("Yes, my function is running.");

    for (let i=1; i<=200; i++) {
      let str = '';
      if (i % 3 == 0) {
        str += "Fizz";
      }
      if (i % 5 == 0) {
        str += "Buzz";
      }
      if (i % 7 == 0) {
        str += "Boom";
      }
      if (str == '') {
        str += i;
      } 
      else {
        str += "!";
      }
      $("#output").append("<p>" + str + "</p>")
    }
  }

fizzBuzz();
