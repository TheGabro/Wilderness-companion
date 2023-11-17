let numPlayers = 1;
let inventory = {};

function initializePlayers() {
    numPlayers = parseInt(document.getElementById('numPlayers').value);
    inventory = {};

    for (let i = 1; i <= numPlayers; i++) {
        inventory[`Player ${i}`] = {
            gold: 0,
            items: []
        };
    }

    updateInventory();
}

function rollDice() {
    const diceValue = document.getElementById('diceInput').value;
    const result = Math.floor(Math.random() * diceValue) + 1;
    document.getElementById('diceResult').innerText = `Result: ${result}`;
}

function updateInventory() {
    const inventoryDiv = document.getElementById('inventory');
    inventoryDiv.innerHTML = '';

    for (const player in inventory) {
        const playerDiv = document.createElement('div');
        playerDiv.innerHTML = `<strong>${player}</strong>: Gold - ${inventory[player].gold}, Items - ${inventory[player].items.join(', ')}`;
        inventoryDiv.appendChild(playerDiv);
    }
}
