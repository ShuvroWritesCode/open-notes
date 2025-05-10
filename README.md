# Open Note

A simple, sleek, and secure browser-based note-taking app with AI to make digital note-taking more efficient.

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

- This is "just" what you need when you take notes online
- Simple, distraction-free note-taking interface
- AI assistance (select text and press Tab+Enter to ask AI)
- Export notes as text files on your device
- Use in Meetings, Study, Discussions, even for doodling

## Setup Instructions

1. Clone this repository
2. Create a `.env` file in the root directory with the following variables:
   ```
   OPENROUTER_API_KEY=your_api_key_here
   OPENROUTER_MODEL=your_preferred_model
   ```
3. Deploy to Vercel:
   - Push to GitHub
   - Connect your GitHub repository to Vercel
   - Add the environment variables in Vercel dashboard (Project → Settings → Environment Variables)

## License

This project is under MIT license. 

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## Acknowledgments

- [OpenRouter](https://openrouter.ai/) for providing AI API access
