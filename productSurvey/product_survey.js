// Define the submitFeedback function
function submitFeedback() {
    // Retrieve input values when the function is called
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const userExperience = document.getElementById('userExperienceText').value;

    // Update HTML elements with user input values
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElememtById('userExperience').innerHTML = userExperience;
    document.getElementById('userInfo').style.display = 'block';
    alert('Thank you for your valuable feedback');
}

// Get a reference to the submit button
const submitButton = document.getElementById('submitBtn');

// Assign the submitFeedback function to the onclick event of the submit button
submitButton.onclick = submitFeedback;

// Listen for the 'Enter' key press event and call submitFeedback function
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
