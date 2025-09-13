class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this._ratings.length;
    return ratingsSum/lengthOfArray;
  }
  addRating (rating) {
    if(rating >=1 && rating <=5)
      this._ratings.push(rating);
  }
  set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = isCheckedOut;
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime, year) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._year = year;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get year() {
    return this._year;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  shuffle() {
  return this._songs.slice().sort(() => Math.random() - 0.5);
}

}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116, 2005);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed.year);

const player = new CD('Vishal', 'Menariya', ['lovely', 'rama', 'krishna', 'a', 'b', 'e','b', 'c', 'd']);

player.toggleCheckOutStatus();
console.log(player.isCheckedOut);
player.addRating(1);
player.addRating(1);
player.addRating(5);
console.log(player.getAverageRating());
console.log(player.shuffle());