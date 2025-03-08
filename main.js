async function checkLocationAndBlock() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const countryCode = data.country_code;
  
      if (countryCode === 'IN') { // 'IN' is the ISO 3166-1 alpha-2 code for India
        document.body.innerHTML = '<h1>Access Denied.</h1><p>This content is not available in your region.</p>';
      } else {
          document.body.innerHTML = '<h1>Welcome to my site!</h1>';
      }
    } catch (error) {
      console.error('Error fetching location:', error);
      // Handle errors gracefully (e.g., display a message)
      document.body.innerHTML = '<h1>Location Service Unavailable</h1><p>We are unable to verify your location. Please try again later.</p>';
    }
  }
  
  checkLocationAndBlock();