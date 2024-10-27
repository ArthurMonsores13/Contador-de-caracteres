function updateCharacterCount() {
    const inputText = document.getElementById("inputText");
    const characterCount = document.getElementById("characterCount");
    characterCount.textContent = inputText.value.length;
}
function resetCounter() {
    document.getElementById("inputText").value = '';
    document.getElementById("characterCount").textContent = '0';
}