class Player {
    constructor(name) {
        this.name = name;
    }

    rollDice(diceValue) {
        return Math.floor(Math.random() * diceValue) + 1;
    }

}