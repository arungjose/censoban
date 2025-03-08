async function checkLocationAndBlock() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code;

        if (countryCode === 'IN') {
            window.location.href = 'access_denied.html';
        } else {
            window.location.href = 'access_granted.html'
        }
    } catch (error) {
        console.error('Error fetching location:', error);
        // Handle errors gracefully
        document.body.innerHTML = '<h1>Location Service Unavailable</h1><p>We are unable to verify your location. Please try again later.</p>';
    }
}

checkLocationAndBlock();