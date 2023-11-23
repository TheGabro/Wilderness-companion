// Sample JSON data for player characters
const playerDatabase = [
    {
        "Fravt":
            {
                "Stats": {
                    "survival": 9
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
                    "survival": -2
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
                    "survival": 8
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
                    "survival": -2
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
                    "survival": 4
                },
                "Inventary":
                {
                    "Water":5,
                    "Food":15
                }
            }
    }
];

// Function to open the character selection modal
function openCharacterSelectionModal() {
    const modal = document.getElementById('characterSelectionModal');
    const playerCheckboxesContainer = document.getElementById('characterCheckboxes');

    // Clear existing content
    playerCheckboxesContainer.innerHTML = '';

    // Display player name with checkbox
    playerDatabase.forEach(characterData => {
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
    const selectedCharacters = [];

    // Get selected character
    const characterCheckboxes = document.querySelectorAll('[id^=characterCheckboxes]');
    characterCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedCharacters.push(checkbox.value);
        }
    });

    // Display the selected options (you can modify this part based on your requirements)
    alert(`Selected Character: ${selectedCharacters.join(', ')}`);

    // Close the modal
    closeCharacterSelectionModal();
}