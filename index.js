

document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.getElementById("text-input");
    const wordCountDisplay = document.getElementById("word-count");
    const phraseCountDisplay = document.getElementById("phrase-count");

    textArea.addEventListener("input", function () {
        const text = textArea.value.trim();
        
        // Count words
        const words = text.length > 0 ? text.match(/\b\w+\b/g) || [] : [];
        
        // Count phrases (phrases are assumed to be separated by commas, semicolons, or periods)
        const phrases = text.length > 0 ? text.split(/[,;.]+/).filter(p => p.trim().length > 0) : [];
        
        wordCountDisplay.textContent = `Words: ${words.length}`;
        phraseCountDisplay.textContent = `Phrases: ${phrases.length}`;
    });
});
