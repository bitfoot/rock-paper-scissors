function getComputerChoice() {
    const choices = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}