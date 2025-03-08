fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    fetch(`https://ipapi.co/${data.ip}/json/`)
      .then(response => response.json())
      .then(loc => {
        console.log("User IP: " + data.ip)
        console.log("Country: " + loc.country_name)
        if (loc.country == "IN") {
          document.body.innerHTML = "<h1>403 Access Denied 🇮🇳❌</h1><p>This website is only accessible for FREE PEOPLE.</p>";
        }
      });
  });