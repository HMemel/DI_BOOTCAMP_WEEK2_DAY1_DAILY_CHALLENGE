// Exercice 1

let array = ["Banana", "Apples", "Oranges", "Blueberries"];

let bad_banana = array.indexOf("Banana");
// Remove Banana from the array.
array.splice(bad_banana, 1)
console.log(array);
// Sort the array in alphabetical order.
array.sort();

// Add “Kiwi” to the end of the array.
array.push("Kiwi")

let bad_apples = array.indexOf("Apples");

// Remove “Apples” from the array. Don’t use the same method as in part 1.
array.splice(bad_apples, 1)

// Sort the array in reverse order. 
array.sort();
array.reverse()

console.log(array)

let array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

let nested_array = array2[1];
console.log(nested_array[1])

let orange = array2[1][1]
console.log(orange)