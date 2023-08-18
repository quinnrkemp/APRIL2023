// CHALLENGE NAME-  Parse Float

// DESCRIPTION:

// Write function parseF which takes an input and 
// returns a number or null if conversion is not possible. 
// The input can be one of many different types so be aware.

// // ***STARTER CODE***

// function parseF(s) {
//   return null;
// }

// //   ******TEST CASES*****

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(parseF("1"), 1.0);
//   });
// }); 

// ******MY ANSWER********

function parseF(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s);
  }