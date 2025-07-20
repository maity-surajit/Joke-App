# 😂 Bilingual Jokes Chrome Extension

A delightful Chrome extension that brings humor to your browsing experience with jokes in both English and Hindi. Get instant access to clean, family-friendly jokes with just one click!

## ✨ Features

- 🌐 **Bilingual Support**: Switch seamlessly between English and Hindi jokes
- 🎨 **Modern UI**: Beautiful glassmorphism design with smooth animations
- ⚡ **Fast Loading**: Instant joke delivery with loading states
- 🔄 **Random Jokes**: Get fresh jokes every time you click
- 📱 **Responsive Design**: Optimized popup size that works perfectly
- 🚫 **No Storage Required**: Works entirely in-memory, no data collection

## 🎯 Screenshots

*Add screenshots of your extension here*

## 🚀 Installation

### Option 1: Install from Chrome Web Store
*Coming Soon - Link will be added once published*

### Option 2: Manual Installation (Developer Mode)

1. **Download the Extension**
   ```bash
   git clone https://github.com/maity-surajit/Joke-App.git
   ```

2. **Enable Developer Mode**
   - Open Chrome browser
   - Go to `chrome://extensions/`
   - Toggle "Developer mode" in the top-right corner

3. **Load the Extension**
   - Click "Load unpacked"
   - Select the extension folder
   - The extension will appear in your toolbar

## 📁 Project Structure

```
bilingual-jokes-extension/
│
├── manifest.json          # Extension configuration
├── popup.html             # Main popup interface
├── script.js              # Core functionality & API handling
├── style.css              # Modern styling with animations
├── icon.png               # Extension icon (128x128px)
└── README.md              # This file
```

## 🛠️ Technical Details

### APIs Used
- **English Jokes**: [icanhazdadjoke.com](https://icanhazdadjoke.com/) - Clean dad jokes
- **Hindi Jokes**: Custom [Hindi jokes](https://hindi-jokes-api-rm0c.onrender.com/jokes) API for local humor

### Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with glassmorphism effects
- **Vanilla JavaScript** - No dependencies, lightweight
- **Chrome Extension API v3** - Latest manifest version

### Browser Support
- Chrome 88+
- Chromium-based browsers (Edge, Brave, etc.)

## 🎨 Design Features

- **Glassmorphism UI**: Modern translucent design
- **Gradient Backgrounds**: Eye-catching purple-blue gradients
- **Smooth Animations**: Hover effects and button interactions
- **Language Toggle**: Intuitive English/Hindi switcher
- **Responsive Layout**: Fixed 320x320px optimized popup
- **Custom Scrollbars**: Styled for better UX

## 🔧 Development

### Prerequisites
- Basic knowledge of HTML, CSS, JavaScript
- Chrome browser for testing

### Local Development
1. Clone the repository
2. Make your changes
3. Reload the extension in `chrome://extensions/`
4. Test your changes

### File Modifications
- **manifest.json**: Extension metadata and permissions
- **popup.html**: UI structure and layout
- **style.css**: Styling and animations
- **script.js**: Logic, API calls, and event handling

## 🎭 Joke Categories

### English Jokes
- Clean dad jokes
- Puns and wordplay
- Family-friendly humor
- Daily fresh content

### Hindi Jokes
- Local cultural humor
- Clean and appropriate
- Traditional and modern jokes
- Regular updates

## 🚦 Usage

1. **Click the extension icon** in your Chrome toolbar
2. **Choose your language** - Click "English" or "हिंदी"
3. **Enjoy the joke** - A random joke will load automatically
4. **Get more laughs** - Click "Get New Joke" for fresh content
5. **Switch languages** anytime for variety

## 🔒 Privacy & Permissions

### Permissions Used
- **activeTab**: Required for extension popup functionality
- No data collection or storage
- No tracking or analytics
- All processing happens locally

### Data Policy
- ✅ No personal data collected
- ✅ No browsing history accessed
- ✅ No user tracking
- ✅ Jokes fetched from public APIs only

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute
1. **Report Bugs** - Open an issue with bug details
2. **Suggest Features** - Share your ideas for improvements
3. **Submit Code** - Create pull requests for fixes/features
4. **Improve Documentation** - Help make instructions clearer
5. **Add Translations** - Help add more language support

## 🐛 Known Issues

- Hindi API may occasionally be slow due to server response time
- Some very long jokes might require scrolling in the popup



## 🙏 Acknowledgments

- **icanhazdadjoke.com** - For providing excellent English jokes API
- **Hindi Jokes API** - For Hindi humor content
- **Chrome Extension Community** - For development resources and guidance
- **Contributors** - Thanks to everyone who helps improve this extension


**Made with ❤️ for spreading joy and laughter across languages!**

*Don't forget to ⭐ star this repo if it made you smile!*
