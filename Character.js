class Character {
    constructor(name, stats) {
        this.name = name;
        this.survival = stats["survival"]
    }

    rollDice(diceValue) {
        return Math.floor(Math.random() * diceValue) + 1;
    }

}