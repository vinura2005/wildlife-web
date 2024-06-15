document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.loginBtn');
    const editBtn = document.querySelector('.editBtn');
    const popuplogin = document.querySelector('.popuplogin');
    const btnclose = document.querySelector('.btnclose');
    const loginForm = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const emailListBtn = document.querySelector('.emailListBtn'); // Button to view email list
    let contentEditable = false; // Track content editable state

    loginBtn.addEventListener('click', function() {
        if (loginBtn.textContent === 'Logout') {
            // Handle logout functionality
            handleLogout();
        } else {
            popuplogin.style.display = 'flex';
        }
    });

    btnclose.addEventListener('click', function() {
        popuplogin.style.display = 'none';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        // Check if username and password are correct (for simplicity, hardcoded here)
        if (enteredUsername === 'admin' && enteredPassword === 'admin') {
            // Change login button text to "Logout"
            loginBtn.textContent = 'Logout';
            // Hide the login form
            popuplogin.style.display = 'none';
            // Show the edit button
            editBtn.style.display = 'block';
            // Show the email list button
            emailListBtn.style.display = 'block';
        } else {
            // Clear input fields and show error message (you can implement your own error handling logic here)
            usernameInput.value = '';
            passwordInput.value = '';
            alert('Incorrect username or password. Please try again.');
        }
    });

    editBtn.addEventListener('click', function() {
        contentEditable = !contentEditable; // Toggle content editable state
        makeContentEditable(contentEditable, 'p, h1, h2, h3, h4, h5, h6, img');
    });

    emailListBtn.addEventListener('click', function() {
        // Retrieve emails from local storage and display them
        const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [];
        alert('Newsletter Subscriptions:\n' + subscriptions.join('\n'));
    });

    function makeContentEditable(editable, selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.contentEditable = editable;
            if (editable && element.tagName === 'IMG') {
                element.draggable = true;
            }
        });
    }

    function handleLogout() {
        // Clear content editable
        makeContentEditable(false, 'p, h1, h2, h3, h4, h5, h6, img');
        // Change login button text back to "Login"
        loginBtn.textContent = 'Login';
        // Hide the edit button
        editBtn.style.display = 'none';
        // Hide the email list button
        emailListBtn.style.display = 'none';
    }
});