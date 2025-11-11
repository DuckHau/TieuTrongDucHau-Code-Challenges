/**
 * Method A: Iterative (using a for loop)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function sum_to_n_a(n: number): number {
  let sum = 0;
  if (n < 1) { return 0; }
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Method B: Recursive
 * Time Complexity: O(n)
 * Space Complexity: O(n) - Due to call stack
 */
function sum_to_n_b(n: number): number {
  if (n < 1) { return 0; } // Base case
  return n + sum_to_n_b(n - 1); // Recursive step
}

/**
 * Method C: Mathematical Formula (Optimal)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function sum_to_n_c(n: number): number {
  if (n < 1) { return 0; }
  // Uses the arithmetic series sum formula
  return (n * (n + 1)) / 2;
}


// --- TEST RUN ---
const testValue = 5;
console.log(`--- Testing with n = ${testValue} ---`);
console.log(`Method A (Loop):     `, sum_to_n_a(testValue));
console.log(`Method B (Recursive):`, sum_to_n_b(testValue));
console.log(`Method C (Math):     `, sum_to_n_c(testValue));

const testValue2 = 10;
console.log(`\n--- Testing with n = ${testValue2} ---`);
console.log(`Method A (Loop):     `, sum_to_n_a(testValue2)); 
console.log(`Method B (Recursive):`, sum_to_n_b(testValue2)); 
console.log(`Method C (Math):     `, sum_to_n_c(testValue2)); 