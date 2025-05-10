// /api/chat/index.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
  const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL;

  if (!OPENROUTER_API_KEY || !OPENROUTER_MODEL) {
    return res.status(500).json({ message: "Missing API config" });
  }

  try {
    // Handle both req.body and req.json() for different Vercel environments
    let prompt;
    if (req.body && req.body.prompt) {
      prompt = req.body.prompt;
    } else {
      try {
        const body = await req.json();
        prompt = body.prompt;
      } catch (e) {
        console.error("Error parsing request body:", e);
      }
    }
    
    if (!prompt) {
      return res.status(400).json({ message: "Missing prompt in request body" });
    }

    console.log("Sending request to OpenRouter API with prompt:", prompt);
    
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": req.headers.referer || "https://open-note.vercel.app",
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
}