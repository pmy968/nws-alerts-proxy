# NWS Alerts Proxy

This Node.js proxy server fetches active severe weather alerts for Wisconsin from the National Weather Service (NWS) and serves them to a frontend application (such as a weather dashboard) while handling CORS restrictions.

## 🌐 Why Use a Proxy?

The NWS API requires a valid `User-Agent` header, and it may block requests made directly from browsers due to CORS restrictions. This proxy acts as a middleware to safely retrieve and serve the data to frontend clients.

## 🚀 Features

- Fetches **active weather alerts** filtered by state (`WI` by default)
- Sends necessary headers required by the NWS API
- Handles CORS and simplifies API access for frontend apps
- Deployable for free on platforms like [Render](https://render.com)

---

## 📁 File Structure

```bash
.
├── proxy-server.js        # Main server file (use proxy-server.cjs if using CommonJS)
├── package.json           # Dependencies and start script
└── README.md              # You're reading it!
