import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.print();
linkedList.sort();
linkedList.print();

const charactersCollection = new CharactersCollection("Michal Szumnarski");
console.log("----- INIT -----");
console.log(charactersCollection.data);
console.log("---------------");
charactersCollection.sort();
console.log(charactersCollection.data);

const collectionOfNumbers = new NumbersCollection([
  1,
  2,
  3,
  5,
  9,
  3,
  0,
  9,
  8,
  7,
  1,
]);
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

console.log("----- START -----");
console.log(collectionOfNumbers.data);
console.log("---------------");
console.log(numbersCollection.data);
console.log("---------------");
numbersCollection.sort();
collectionOfNumbers.sort();
console.log("---------------");
console.log(collectionOfNumbers.data);
console.log("---------------");
console.log(numbersCollection.data);
console.log("----- END -----");
