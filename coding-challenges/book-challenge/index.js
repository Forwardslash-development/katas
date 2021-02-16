// Function component
// function Book(title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }
// Book.prototype.getAvailability = function () {
//   if (this.numCopies === 0) {
//     return 'Out of stock';
//   } else if (this.numCopies < 10) {
//     return 'Low stock';
//   }
//   return 'In stock';
// };
// Book.prototype.sell = function (numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// };
// Book.prototype.restock = function (numCopiesStocked = 5) {
//   this.numCopies += numCopiesStocked;
// };

// Class component
class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }
  getAvailability() {
    if (this.numCopies === 0) {
      return 'No Stock';
    } else if (this.numCopies < 5) {
      return 'Low Stock';
    }
    return 'In Stock';
  }
  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  restock(numCopiesRestocked = 1) {
    this.numCopies += numCopiesRestocked;
  }
}

const hungerGames = new Book('Hunger Games', 'Suzanne Colins', 123919, 5);
console.log(hungerGames.getAvailability());
hungerGames.restock(1);
console.log(hungerGames.getAvailability());
hungerGames.sell(17);
console.log(hungerGames.getAvailability());
