
// Get user's IP address using ipify API
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip_address = data.ip;

    // Get user's domain
    const domain = window.location.hostname;

    // Prepare data for POST request
    const tracking_data = {
      ip: ip_address,
      domain: domain
    };

    // Make POST request to API endpoint
    fetch('https://pipeiq3.bubbleapps.io/api/1.1/obj/tracking_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 6c29ce59e5910f5b1dc2862615f54a0f'
      },
      body: JSON.stringify(tracking_data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to POST tracking data');
        }
      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));
