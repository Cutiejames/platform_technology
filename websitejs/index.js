document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        let valid = true;

        // Validate name
        const nameInput = document.getElementById('name');
        const nameError = document.querySelector('#name + .error');
        if (nameInput.value.trim() === '') {
            valid = false;
            setError(nameError, 'Name is required');
        } else {
            clearError(nameError, nameInput);
        }

        // Validate email
        const emailInput = document.getElementById('mail');
        const emailError = document.querySelector('#mail + .error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            valid = false;
            setError(emailError, 'Enter a valid email address');
        } else {
            clearError(emailError, emailInput);
        }

        // Validate phone
        const phoneInput = document.getElementById('phone');
        const phoneError = document.querySelector('#phone + .error');
        const phonePattern = /^\d+$/; // Only digits allowed
        if (!phonePattern.test(phoneInput.value.trim())) {
            valid = false;
            setError(phoneError, 'Invalid phone number');
        } else {
            clearError(phoneError, phoneInput);
        }

        // Validate message
        const commentInput = document.getElementById('comment');
        const commentError = document.querySelector('#comment + .error');
        if (commentInput.value.trim() === '') {
            valid = false;
            setError(commentError, 'Message is required');
        } else {
            clearError(commentError, commentInput);
        }

        // Stop form submission if validation fails
        if (!valid) {
            return;
        }

        // If all validation passes, you can proceed with form submission or other actions
        // For now, you can just log a success message
        console.log('Form submitted successfully!');
    });

    function setError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block'; // Show the error message
    }

    function clearError(errorElement, inputElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none'; // Hide the error message
        inputElement.classList.remove('is-invalid');
    }
});
