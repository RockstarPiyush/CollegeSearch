// Example data for colleges
const colleges = [
    { 
        name: 'IET SITAPUR', 
        location: 'Sitapur', 
        course: 'Engineering', 
        fee: 50000,
        link: 'https://ietsitapur.com/'
    },
    { 
        name: 'IET LUCKNOW', 
        location: 'Lucknow', 
        course: 'Engineering', 
        fee: 100000,
        link: 'https://www.ietlucknow.ac.in/'
    },

    { 
        name: 'R.R. Group of Institutions', 
        location: 'Lucknow', 
        course: 'Engineering', 
        fee: 100000,
        link: 'https://rrimt.ac.in/'
    },
    { 
        name: 'Babu Banarasi Das UniversitY', 
        location: 'Lucknow', 
        course: 'Engineering', 
        fee: 100000,
        link: 'https://bbdu.ac.in/'
    },
    { 
        name: 'Integral University', 
        location: 'Lucknow', 
        course: 'Engineering', 
        fee: 100000,
        link: 'https://www.iul.ac.in/'
    },
];


// Function to handle the search form submission
document.getElementById('college-search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const location = document.getElementById('location').value.toLowerCase();
    const course = document.getElementById('course').value.toLowerCase();
    const budget = parseInt(document.getElementById('budget').value);

    const filteredColleges = colleges.filter(college => {
        return (
            (location === '' || college.location.toLowerCase().includes(location)) &&
            (course === '' || college.course.toLowerCase().includes(course)) &&
            (isNaN(budget) || college.fee <= budget)
        );
    });

    displayResults(filteredColleges);
});

// Function to display the filtered colleges
function displayResults(colleges) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (colleges.length === 0) {
        resultsContainer.innerHTML = '<p>No colleges found matching your criteria.</p>';
        return;
    }

    const resultsList = document.createElement('ul');
    colleges.forEach(college => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${college.name}</strong><br>
            Location: ${college.location}<br>
            Course: ${college.course}<br>
            Fee: ${college.fee}
        `;
        resultsList.appendChild(listItem);
    });
    resultsContainer.appendChild(resultsList);
} 
// Mock user data for login validation
const mockUsers = [
    { username: 'ABHISHEK TIWARI', password: '12345678' },
    { username: 'PIYUSH', password: 'QWERTYUI' }
];

// Login form submission handler
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate login
    const user = mockUsers.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful! Redirecting to the College Search page.');
        window.location.href = 'index.html'; // Redirect to the home page after successful login
    } else {
        alert('Invalid username or password.');
    }
});
// Handle signup form
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Add the new user to the mockUsers array (this would be handled on a server in a real app)
    mockUsers.push({ username: newUsername, password: newPassword });

    alert('Sign-up successful! You can now log in.');
    window.location.href = 'login.html'; // Redirect to login page
});
// Function to display the filtered colleges
function displayResults(colleges) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (colleges.length === 0) {
        resultsContainer.innerHTML = '<p>No colleges found matching your criteria.</p>';
        return;
    }

    const resultsList = document.createElement('ul');
    colleges.forEach(college => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${college.name}</strong><br>
            Location: ${college.location}<br>
            Course: ${college.course}<br>
            Fee: Rs ${college.fee}<br>
            <a href="${college.link}" target="_blank">Search on Google</a>
        `;
        resultsList.appendChild(listItem);
    });
    resultsContainer.appendChild(resultsList);
}
