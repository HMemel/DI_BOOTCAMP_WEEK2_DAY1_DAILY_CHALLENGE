// Exercice 1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove Banana from the array.
fruits.shift()
// Sort the array in alphabetical order.
fruits.sort()

// Add “Kiwi” to the end of the array.
fruits.push("Kiwi");

// Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.splice(1,1)

// Sort the array in reverse order. 
fruits.reverse()

// Exercice 2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access and then console.log “Oranges”.

console.log(moreFruits[1][1][0])