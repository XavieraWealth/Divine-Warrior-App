function searchWarrior() {
    const name = document.getElementById("search").value.trim();
    const resultDiv = document.getElementById("result");

    if (!name) {
        resultDiv.innerHTML = "<p style='color: #ff4444; font-size: 18px;'>Please enter a warrior name!</p>";
        return;
    }

    const powers = [
        "possesses the strength of a thousand panthers",
        "commands the elements with golden light",
        "moves with leopard-like grace and precision",
        "wields ancient golden weapons of power",
        "has the wisdom of divine ancestors",
        "can see through darkness with panther vision",
        "commands the loyalty of spirit animals",
        "wears armor blessed by celestial forces",
        "has the speed of a hunting leopard",
        "can communicate with all big cats"
    ];

    const randomPower = powers[Math.floor(Math.random() * powers.length)];
    
    resultDiv.innerHTML = `
        <h3>${name.toUpperCase()}</h3>
        <p>This divine warrior ${randomPower}!</p>
        <p style="color: #FFFFFF; font-style: italic; margin-top: 15px;">
            "The spirit of the panther guides their path"
        </p>
    `;
}

// Enter key support
document.getElementById("search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchWarrior();
    }
});