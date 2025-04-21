// Function to highlight all <strong> elements on mouse over
function highlight() {
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(function(word) {
        word.style.color = 'rgb(0, 128, 0)';  // Change color to green
    });
}

// Function to revert <strong> elements back to normal on mouse out
function return_normal() {
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(function(word) {
        word.style.color = 'rgb(0, 0, 0)';  // Change color back to black
    });
}
