<script>

// javascript implementation of the approach

 // Function to return the Nth number of
 // the modified Fibonacci series where
 // A and B are the first two terms
 function findNthNumber(A , B , N) {

  // To store the current element which
  // is the sum of previous two
  // elements of the series
  var sum = 0;

  // This loop will terminate when
  // the Nth element is found
  for (i = 2; i < N; i++) {
   sum = A + B;

   A = B;

   B = sum;
  }

  // Return the Nth element
  return sum;
 }

 // Driver code
 
  var A = 5, B = 7, N = 10;

  document.write(findNthNumber(A, B, N));

// This code is contributed by todaysgaurav

</script>