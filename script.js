function searchWarrior() {
    const name = document.getElementById("search").value.trim();
    const resultDiv = document.getElementById("result");

    if (!name) {
        resultDiv.innerHTML = "<p style='color: #ff4444;'>Please enter a warrior name!</p>";
        return;
    }

    // Divine warrior responses
    const powers = [
        "possesses the strength of a thousand panthers",
        "commands the elements with golden light",
        "moves with leopard-like grace and precision",
        "wields ancient golden weapons of power",
        "has the wisdom of divine ancestors",
        "can see through darkness with panther vision",
        "commands the loyalty of spirit animals",
        "wears armor blessed by celestial forces"
    ];

    const randomPower = powers[Math.floor(Math.random() * powers.length)];
    
    resultDiv.innerHTML = `
        <h2>${name.toUpperCase()}</h2>
        <p>This divine warrior ${randomPower}!</p>
        <p style="color: #FFFFFF; font-style: italic;">
            "The power of the panther flows through their veins"
        </p>
    `;
}

// Add event listener for Enter key
document.getElementById("search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchWarrior();
    }
});