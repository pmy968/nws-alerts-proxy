import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/nws-alerts', async (req, res) => {
  try {
    const response = await fetch('https://api.weather.gov/alerts/active?area=WI', {
      headers: {
        'User-Agent': 'ChromeOSWeatherApp/1.0 (your-email@example.com)',
        'Accept': 'application/geo+json'
      }
    });

    if (!response.ok) {
      throw new Error(`NWS API returned ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching alerts:', err.message);
    res.status(500).json({ error: 'Failed to fetch NWS alerts' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ NWS proxy server is running at http://localhost:${PORT}`);
});
