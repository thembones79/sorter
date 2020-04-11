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

console.log(charactersCollection.data);
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
]);
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

console.log(collectionOfNumbers.data);

console.log(numbersCollection.data);
numbersCollection.sort();
collectionOfNumbers.sort();

console.log(collectionOfNumbers.data);

console.log(numbersCollection.data);
