// Sample JSON data for player characters
const playerDatabase = [
    {
        "Peluso": [
            {
                "Character": "Fravt",
                "Stats": {
                    "survival": 5
                }
            },
            {
                "Character": "Sort",
                "Stats": {
                    "survival": 0
                }
            }
        ]
    },
    {
        "Padano": [
            {
                "Character": "Hoid",
                "Stats": {
                    "survival": -2
                }
            }
        ]
    }
];

// Function to open the character selection modal
function openCharacterSelectionModal() {
    const modal = document.getElementById('characterSelectionModal');
    modal.style.display = 'block';
}

// Function to close the character selection modal
function closeCharacterSelectionModal() {
    const modal = document.getElementById('characterSelectionModal');
    modal.style.display = 'none';
}

// Function to select players and characters
function selectPlayers() {
    const numPlayers = parseInt(document.getElementById('modalNumPlayers').value, 10);

    if (!isNaN(numPlayers) && numPlayers >= 1 && numPlayers <= 2) {
        const playerSelectorsContainer = document.getElementById('playerSelectors');
        
        // Clear existing player selectors
        playerSelectorsContainer.innerHTML = '';

        // Create player selector dropdowns dynamically
        for (let i = 1; i <= numPlayers; i++) {
            const playerSelector = document.createElement('select');
            playerSelector.id = `playerSelector${i}`;
            playerSelector.onchange = displayPlayerInfo;
            playerSelectorsContainer.appendChild(playerSelector);

            // Create an initial placeholder option
            const placeholderOption = document.createElement('option');
            placeholderOption.value = '';
            placeholderOption.text = `Select Player ${i}`;
            playerSelector.add(placeholderOption);
        }

        // Call the displayPlayerInfo function to display initial information
        displayPlayerInfo();

        // Close the modal after selecting characters
        closeCharacterSelectionModal();
    } else {
        alert("Please enter a valid number of players (1 or 2).");
    }
}

// Function to display player information
function displayPlayerInfo() {
    const numPlayers = document.getElementById('playerSelectors').childElementCount;
    const additionalInfo = document.getElementById('additionalInfo');

    // Clear existing additional information
    additionalInfo.innerHTML = '';

    // Loop through each player selector to display information
    for (let i = 1; i <= numPlayers; i++) {
        const playerSelector = document.getElementById(`playerSelector${i}`);
        const selectedPlayerName = playerSelector.value;

        if (selectedPlayerName) {
            const selectedPlayerData = playerDatabase.find(playerData => Object.keys(playerData)[0] === selectedPlayerName);

            if (selectedPlayerData) {
                const characterOptions = selectedPlayerData[selectedPlayerName].map(characterData => characterData.Character);

                // Clear existing options and add new ones
                playerSelector.options.length = 0;

                // Add placeholder option
                const placeholderOption = document.createElement('option');
                placeholderOption.value = '';
                placeholderOption.text = `Select ${selectedPlayerName}'s Character`;
                playerSelector.add(placeholderOption);

                // Add character options
                characterOptions.forEach(character => {
                    const option = document.createElement('option');
                    option.value = character;
                    option.text = character;
                    playerSelector.add(option);
                });

                const selectedCharacter = playerSelector.options[playerSelector.selectedIndex].text;
                const selectedCharacterData = selectedPlayerData[selectedPlayerName].find(characterData => characterData.Character === selectedCharacter);

                if (selectedCharacterData) {
                    const selectedPlayerSurvival = selectedCharacterData.Stats.survival;
                    additionalInfo.innerHTML += `<p>${selectedPlayerName}'s Character: ${selectedCharacter}, Survival: ${selectedPlayerSurvival}</p>`;
                }
            }
        }
    }
}
