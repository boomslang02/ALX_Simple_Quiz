function checkAnswer() {
    // 1. Correct answer
    const correctAnswer = "4";

    // 2. Get selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if user selected an option at all
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedOption.value;

    // 3. Compare answers and show feedback
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// 4. Add event listener to button
document
    .getElementById("submit-answer")
    .addEventListener("click", checkAnswer);
