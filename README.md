# Open Note

![0pen Note](https://img.shields.io/badge/0pen-Note-limegreen?style=for-the-badge&logo=notepad%2B%2B)

A minimalist, browser-based note-taking application with integrated AI capabilities. Take notes in a sleek, hacker-inspired interface and get AI assistance with a simple keyboard shortcut.

## 📋 Features

- **Distraction-Free Interface**: Clean, hacker-aesthetic design with a focus on content
- **AI Integration**: Select text and press Tab+Enter to get AI responses
- **Export Functionality**: Save your notes as .txt files with a single click
- **Portable**: No installation required, works in any modern browser
- **Privacy-Focused**: All notes are stored locally in your browser

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for AI functionality)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShuvroWritesCode/open-note.git
   ```

2. Open `open-note.html` in your browser.

Alternatively, you can download the HTML file and open it directly in your browser.

## 💻 Usage

1. **Taking Notes**: Simply click in the editor area and start typing.

2. **AI Assistance**:
   - Select text you want to ask about or analyze
   - Press Tab + Enter
   - The AI will process your selection and provide a response

3. **Exporting Notes**:
   - Click the "Get .txt" button
   - Your notes will be downloaded as "Open-Note.txt"

## ⚙️ Configuration

The application uses the OpenRouter API for AI functionality. If you want to use your own API key:

1. Open `open-note.html` in a text editor
2. Locate the API key in the fetch request
3. Replace it with your own OpenRouter API key and model

## 🛠️ Customization

You can customize the appearance by modifying the CSS in the `<style>` section:
- Change colors by updating the `color` and `background` properties
- Adjust font size with the `font-size` property
- Modify button styling in the button selector

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## 🙏 Acknowledgments

- [OpenRouter](https://openrouter.ai/) for providing AI API access
