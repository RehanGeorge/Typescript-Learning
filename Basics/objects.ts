function printName(person: { first: string; last: string }): void {
    console.log(`${person.first} ${person.last}`);
}

printName({ first: "Test", last: "Name" });

let coordinate: { x: number; y: number } = { x: 34, y: 2 };


// Passing extra properties will get flagged as it is assumed to be an error
// printName({ first: "Mick", last: "Jagger", age: 473})
// const singer = { first: "Mick", last: "Jagger", age: 473};
// printName(singer);

type Point = { x: number, y: number };

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

type MyNum = number;
let age: MyNum = 24324;

type Song = {
  title: string,
  artist: string,
  numStreams: number,
  credits: {
    producer: string,
    writer: string
  }
}

function calculatePayout(song: Song): number {
  return song.numStreams * 0.033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Bohemian Rhapsody",
  artist: "Queen",
  numStreams: 1000000000,
  credits: {
    producer: "Roy Thomas Baker",
    writer: "Freddie Mercury"
  }
}

printSong(mySong);
const earnings = calculatePayout(mySong);
console.log(earnings);

type Point2 = {
  x: number;
  y: number;
  z?: number;
}

const myPoint = { x: 23, y: 12 };

type User = {
  readonly id: number,
  username: string;
};

const user: User = {
  id: 123,
  username: "admin"
};

// user.id = 234; // Error: Cannot assign to 'id' because it is a read-only property

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow"
};

type Cat = {
  numLives: number;
}

type Dog = {
  breed: string;
}

type CatDog = Cat & Dog & { age: number };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 11
};