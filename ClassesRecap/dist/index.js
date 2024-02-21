class Player {
  static description = "This is a player class";
  #score = 0;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  introduce() {
    console.log(`Hi my name is ${this.first} ${this.last} and I am a player`);
  }
  get score() {
    return this.#score;
  }
  set score(score) {
    this.#score = score;
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

const player1 = new Player("John", "Warrior");
const admin1 = new AdminPlayer("John", "Doe", "Super Strength");
console.log(admin1);
