
function quiz()
{
    const quizForm = document.getElementById("quizForm");
    quizForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Calculate score

        let score = 0;

        var q1Answer = document.querySelector('input[name="q1"]:checked');
        var q2Answer = document.querySelector('input[name="q2"]:checked');
        var q3Answer = document.querySelector('input[name="q3"]:checked');
        var q4Answer = document.querySelector('input[name="q4"]:checked');
        var q5Answer = document.querySelector('input[name="q5"]:checked');
        var q6Answer = document.querySelector('input[name="q6"]:checked');
        var q7Answer = document.querySelector('input[name="q7"]:checked');
        var q8Answer = document.querySelector('input[name="q8"]:checked');
        var q9Answer = document.querySelector('input[name="q9"]:checked');
        var q10Answer = document.querySelector('input[name="q10"]:checked');

        // Check answers
        if (q1Answer && q1Answer.value === "a") {
            score++;
        }
        if (q2Answer && q2Answer.value === "a") {
            score++;
        }
        if (q3Answer && q3Answer.value === "a") {
            score++;
        }
        if (q4Answer && q4Answer.value === "a") {
            score++;
        }
        if (q5Answer && q5Answer.value === "a") {
            score++;
        }
        if (q6Answer && q6Answer.value === "b") {
            score++;
        }
        if (q7Answer && q7Answer.value === "a") {
            score++;
        }
        if (q8Answer && q8Answer.value === "a") {
            score++;
        }
        if (q9Answer && q9Answer.value === "a") {
            score++;
        }
        if (q10Answer && q10Answer.value === "c") {
            score++;
        }

        // Display score
        verify_email(score);

    });
}

function verify_email(score){

    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");


        var email = emailInput.value.trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

        if (emailRegex.test(email)) {
            // Email is valid
            emailError.textContent = "";
            alert("Your score is: " + score + " out of 10");
        } else {
            // Email is invalid
            emailError.textContent = "Please enter a valid email address.";
        }
}


window.onload = function (){
    quiz();
}

