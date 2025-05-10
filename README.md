# Open Note

A browser-based, minimalist, hacker-inspired notepad with built-in AI assistance. Take notes in style with a sleek cyber interface and get AI-powered help with simple keyboard shortcuts all within your browser.

## Project Structure

```
open-note/
├── api/
│   └── chat/index.js    ← Secure API route
├── public/
│   ├── index.html       ← Main HTML
│   └── styles.css       ← Styling
├── .env                 ← Secret keys
├── vercel.json          ← Deployment
├── README.md
```

## Features

- Not many features. Just a blank canvas to write notes in limegreen font
- Select text and press `Tab + Enter` to send it as a prompt to AI
- Download note as text file on your device. Nothing fancy, just classic `.txt`
- Meetings, study notes, doodling, or whatever, it works to take notes quickly

## Setup Instructions

1. Clone this repository
2. Create a `.env` file in the root directory with the following variables:
   ```
   OPENROUTER_API_KEY=your_api_key_here
   OPENROUTER_MODEL=your_preferred_model
   ```
3. Deploy:
   - Push to GitHub repo
   - Connect your GitHub repository to Vercel
   - Add the environment variables in the Vercel dashboard under **Settings** → **Environment Variables**.

## Contributing
   - Found a bug? Open an **issue**.
   - Have a feature idea? Submit a **pull request**.
   - Keep it simple.

## License

This project is under *MIT license*. Use it, fork it, break it.

## Acknowledgments

- [OpenRouter](https://openrouter.ai/) for providing AI API access

---
This is nothing revolutionary. This is a simple, browser-based, quick note-taking tool that does what I needed it to do. With AI everywhere, I added a basic AI assist so I don’t have to copy and paste my notes into ChatGPT for quick explanations. If that sounds like something you’d find useful too, it’s here for you.