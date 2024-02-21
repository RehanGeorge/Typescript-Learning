let movieTitle: string = "Amadeus";
let numCatLives: number = 9;
let gameOver: boolean = false;

let thing: any = "hello";
thing = 23;

const movies = ["Amadeus", "The Godfather", "The Dark Knight"];
let foundMovie: string;

for (let movie in movies) {
    if (movie === "The Godfather") {
        foundMovie = movie;
    }
}