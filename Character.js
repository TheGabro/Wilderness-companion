class Character {
    constructor(name, stats) {
        this.name = name;
        this.survival = stats["survival"];
        this.wisdom = stats["wisdom"];
        this.diceSize = stats["diceSize"] 
    }

    rollDice(diceValue) {
        return Math.floor(Math.random() * diceValue) + 1;
    }

}