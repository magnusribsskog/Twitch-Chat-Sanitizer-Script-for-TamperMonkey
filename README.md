# Twitch Chat Sanitizer

A lightweight userscript that automatically "cleans" Twitch chat in real-time. It targets the "worst of the worst" grammar and punctuation issues to make the chat experience more readable and less of a headache.

## Features

* **Auto-Capitalization**: Automatically capitalizes the first letter of every chat message.
* **Contraction Fixes**: Automatically fixes common shorthand (e.g., `im` -> `I'm`, `dont` -> `don't`, `shes` -> `she's`).
* **Punctuation Cleanup**: Strips away repeated punctuation (e.g., `?????` becomes `?`).
* **Minimalist & Lightweight**: No AI, no external API calls, and zero tracking. It uses a surgical `MutationObserver` to ensure it doesn't lag your browser.
* **Zero-UI**: It works entirely in the background. Just install it and enjoy a civilized chat.

## Installation

1. Install a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Click on the **[Raw]** link of the `twitch-sanitizer.user.js` file in this repository.
3. Your browser should prompt you to install the script.
4. Refresh any open Twitch tabs.

## Customization

You can easily add your own "worst offenders" by editing the `map` object at the top of the script:

```javascript
const map = {
    "u": "you",
    "r": "are",
    "your_word_here": "replacement_here"
};
