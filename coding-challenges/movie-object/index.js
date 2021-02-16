// Prototype Chain
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
  getOverview() {
    return `${this.title}, a ${this.genere} film directed by ${this.director} was release in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}

const Spiderman = new Movie('Spiderman', 'Sam Remi', 'Action', 2002, 87);
const Batman = new Movie('Batman', 'Christopher Nolan', 'Action', 2008, 83);

console.log(Spiderman);
console.log(Batman);
