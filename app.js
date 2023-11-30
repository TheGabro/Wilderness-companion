// Sample JSON data for player characters
const characterDatabase = [
    {
        "Fravt":
            {
                "Stats": {
                    "survival": 9,
                    "wisdom" : 3,
                    "diceSize" : 8

                },
                "Inventary":
                {
                    "Water":10,
                    "Food":10
                }
            }
    },
    {
        "Hoid":
            {
                "Stats": {
                    "survival": -1,
                    "wisdom" : -1,
                    "diceSize" : 4
                },
                "Inventary":
                {
                    "Water":5,
                    "Food":15
                }
            }
    },
    {
        "Scaramango":
            {
                "Stats": {
                    "survival": 8,
                    "wisdom" : 3,
                    "diceSize" : 6
                },
                "Inventary":
                {
                    "Water":5,
                    "Food":15
                }
            }
    },
    {
        "Thorgal":
            {
                "Stats": {
                    "survival": -1,
                    "wisdom" : -1,
                    "diceSize" : 4
                },
                "Inventary":
                {
                    "Water":5,
                    "Food":15
                }
            }
    },
    {
        "Mr. Robotto":
            {
                "Stats": {
                    "survival": 4,
                    "wisdom" : 2,
                    "diceSize" : 6
                },
                "Inventary":
                {
                    "Water":5,
                    "Food":15
                }
            }
    }
];

const selectedCharacters = [];


// Function to open the character selection modal
function openCharacterSelectionModal() {
    const modal = document.getElementById('characterSelectionModal');
    const playerCheckboxesContainer = document.getElementById('characterCheckboxes');

    // Clear existing content
    playerCheckboxesContainer.innerHTML = '';

    // Display player name with checkbox
    characterDatabase.forEach(characterData => {
        var characterName = Object.keys(characterData)[0];

        var playerCheckbox = document.createElement('input');
        playerCheckbox.type = 'checkbox';
        playerCheckbox.id = `characterCheckboxes${characterName}`;
        playerCheckbox.name = characterName
        playerCheckbox.value = characterName;

        var playerLabel = document.createElement('label');
        playerLabel.htmlFor = `characterCheckboxes${characterName}`;
        playerLabel.textContent = characterName;

        playerCheckboxesContainer.appendChild(playerCheckbox);
        playerCheckboxesContainer.appendChild(playerLabel);
    });

    // Display the modal
    modal.style.display = 'block';
}

// Function to close the character selection modal
function closeCharacterSelectionModal() {
    const modal = document.getElementById('characterSelectionModal');
    modal.style.display = 'none';
}

// Function to submit the character selection
function submitCharacterSelection() {
    
    // Get selected characters
    const characterCheckboxes = document.querySelectorAll('[id^=characterCheckboxes]');
    characterCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const characterName = checkbox.value;
            const characterData = characterDatabase.find(data => data[characterName]);
            if (characterData) {
                const stats = characterData[characterName]["Stats"];
                const character = new Character(characterName, stats);
                selectedCharacters.push(character);
            }

        }
    });

    const selectedCharacterDisplay = document.getElementById('characterTableContainer');
    selectedCharacterDisplay.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('character-table');

    const headerRow = table.insertRow(0);
    const headerCell1 = headerRow.insertCell(0);
    const headerCell2 = headerRow.insertCell(1);
    const headerCell3 = headerRow.insertCell(2);
    headerCell1.textContent = 'Character Info';
    headerCell2.textContent = 'Water';
    headerCell3.textContent = 'Food';

    selectedCharacters.forEach(character => {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        cell1.colSpan = 3;

        const nestedTable = document.createElement('table');
        nestedTable.classList.add('nested-table');

        // First row in the nested table for Character Name
        const nameRow = nestedTable.insertRow(0);
        const nameCell = nameRow.insertCell(0);
        nameCell.textContent = `${character.name}`;

        // Second row in the nested table for Survival and Wisdom
        const statsRow = nestedTable.insertRow(1);
        const survivalCell = statsRow.insertCell(0);
        const wisdomCell = statsRow.insertCell(1);
        survivalCell.textContent = `Survival: ${character.survival}`;
        wisdomCell.textContent = `Wisdom: ${character.wisdom}`;

        cell1.appendChild(nestedTable);
    });

    selectedCharacterDisplay.appendChild(table)

    // const mainPageOutput = document.getElementById('app');
    // mainPageOutput.appendChild(table);
    // // Print the chosen characters on the main page
    // const mainPageOutput = document.getElementById('mainPageOutput');
    // selectedCharacters.forEach(name => {
    //     });
    // mainPageOutput.textContent = `Chosen Characters: ${selectedCharacters.join(', ')}`;

    // Close the modal
    closeCharacterSelectionModal();      
}
