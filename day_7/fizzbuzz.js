function fizzBuzz ( start = 1, end = 100){
  var output = "";
  for (var i = Math.min( start, end ); i <= Math.max( start, end ); i++ ) {
    if( i % 3 == 0 ) {
      output += "Fizz";
    }
    if( i % 5 == 0 ) {
      output += "Buzz";
    }
    if( !(i % 3 == 0 || i % 5 == 0 ) ) {
      output += i;
    }
    output += ", ";
  }
  output = output.slice( 0, ( output.length - 2 ) );
  console.log(output);
}

fizzBuzz();

//=> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ..., 98, Fizz, Buzz
