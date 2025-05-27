document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
&nbsp;
&nbsp;

    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
&nbsp;
&nbsp;

    // Construct the new URL with query parameters
    const newUrl = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
&nbsp;
&nbsp;

    // Update the h3 element with the new URL
    document.getElementById('url').textContent = newUrl;
});
