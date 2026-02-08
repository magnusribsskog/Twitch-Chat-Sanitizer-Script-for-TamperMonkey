# Twitch Chat Sanitizer

A lightweight userscript that automatically "cleans" Twitch chat in real-time. It targets the "worst of the worst" grammar and punctuation issues to make the chat experience less offensive.

## Features

* **Auto-Capitalization**: Automatically capitalizes the first letter of every chat message.
* **Contraction Fixes**: Automatically fixes common shorthand (e.g., `im` -> `I'm`, `dont` -> `don't`, `shes` -> `she's`).
* **Punctuation Cleanup**: Strips away repeated punctuation (e.g., `?????` becomes `?`).
* **Minimalist & Lightweight**: No AI, no external API calls, and zero tracking. 


## Installation

1. Install a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Paste the entire content of the javascript file into the editor in your userscript manager, and save it.
3. Refresh your Twitch page for the script to load
## Customization

You can add your own "worst offenders" by editing the `map` object at the top of the script:

```javascript
const map = {
    "u": "you",
    "r": "are",
    "your_word_here": "replacement_here"
};
