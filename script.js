document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;

    // Display the profile
    const profileDisplay = document.getElementById('profileDisplay');
    profileDisplay.innerHTML = `
        <h2>Profile Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Bio:</strong> ${bio}</p>
    `;
});