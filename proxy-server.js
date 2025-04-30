// Use import instead of require
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/nws-alerts', async (req, res) => {
  try {
    const nwsUrl = 'https://api.weather.gov/alerts/active?area=WI'; // Filtered for Wisconsin

    const response = await fetch(nwsUrl, {
      headers: {
        'User-Agent': '(https://pmy968.github.io/ChromeOS-Weather-App, contact@example.com)',
        'Accept': 'application/ld+json'
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch NWS alerts' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});