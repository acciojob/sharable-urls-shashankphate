<script>
        const nameInput = document.getElementById('name');
        const yearInput = document.getElementById('year');
        const urlHeading = document.getElementById('url');
        const submitButton = document.getElementById('button');

        // We can attach the listener to the button or the form submit event.
        // Using the button click as requested.
        submitButton.addEventListener('click', function(event) {
            // Prevent the form from actually submitting and reloading the page
            event.preventDefault();

            const baseUrl = "https://localhost:8080/";
            const nameValue = nameInput.value;
            const yearValue = yearInput.value;
            
            let queryString = "";

            // Logic to build the query string based on the 4 cases
            if (nameValue && yearValue) {
                // Case 2: Both present
                queryString = `?name=${nameValue}&year=${yearValue}`;
            } else if (nameValue) {
                // Case 3: Only name present
                queryString = `?name=${nameValue}`;
            } else if (yearValue) {
                // Case 4: Only year present
                queryString = `?year=${yearValue}`;
            }
            // Case 1 (Both empty) is handled implicitly as queryString remains empty

            urlHeading.textContent = baseUrl + queryString;
        });
    </script>
