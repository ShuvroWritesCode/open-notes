# Open Note

A simple, secure note-taking application with AI assistance using Vercel API routes.

## Project Structure

```
open-note/
├── api/
│   └── chat.js          ← Secure API route
├── public/
│   ├── index.html       ← Main HTML
│   └── styles.css       ← Styling
├── .env                 ← Secret keys (not committed)
├── vercel.json          ← Vercel configuration
├── README.md
```

## Features

- Simple, distraction-free note-taking interface
- AI assistance (select text and press Tab+Enter to ask AI)
- Export notes as text files
- Secure API key handling through Vercel API routes

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

## Local Development

To run the project locally:

1. Install Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Run the development server:
   ```
   vercel dev
   ```

## License

MIT

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## Acknowledgments

- [OpenRouter](https://openrouter.ai/) for providing AI API access
