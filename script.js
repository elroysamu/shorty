function makeApiCall() {
    const inputBox = document.getElementById('inputBox');
    const inputValue = inputBox.value;

    const apiUrl = 'http://localhost:8080/generate';

    const requestData = {
        url: inputValue
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        displayShortLink(data); // Call function to display short link
    })
    .catch(error => {
        console.error('Error:', error);
        alert('API call failed');
    });
}

// Function to display short link
function displayShortLink(data) {
    // Assuming data is in the format { "shortLink": "5198adbc", "expirationDate": "2024-06-22T16:23:29.626484339", "originalUrl": "https://www.youtube.com/watch?v=1nrmrnKQAI8" }
    const shortLink = data.shortLink;
    const apiUrl = 'http://localhost:8080/' + shortLink;

    // Update short link container
    const shortLinkContainer = document.getElementById('shortLink');
    shortLinkContainer.innerHTML = `<a href="${apiUrl}" target="_blank">${apiUrl}</a>`;
}
