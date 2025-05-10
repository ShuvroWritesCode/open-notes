const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables
dotenv.config();

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API route for chat
app.post('/api/chat', async (req, res) => {
  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
  const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL;

  if (!OPENROUTER_API_KEY || !OPENROUTER_MODEL) {
    return res.status(500).json({ message: "Missing API config" });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ message: "Missing prompt in request body" });
  }

  try {
    console.log("Sending request to OpenRouter API with prompt:", prompt);
    console.log("Using API key:", OPENROUTER_API_KEY.substring(0, 10) + "...");
    console.log("Using model:", OPENROUTER_MODEL);
    
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": req.headers.referer || "http://localhost:3000",
        "X-Title": "Open Note"
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: response.statusText }));
      console.error("API request failed:", errorData);
      return res.status(response.status).json({ message: errorData.message || response.statusText });
    }

    const data = await response.json();
    console.log("API response received successfully");
    return res.status(200).json(data);
  } catch (err) {
    console.error("Error in API request:", err);
    return res.status(500).json({ message: err.message || "Internal error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser to use Open Note`);
});
