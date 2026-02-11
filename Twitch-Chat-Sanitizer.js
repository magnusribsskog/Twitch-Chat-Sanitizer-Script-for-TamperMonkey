// ==UserScript==
// @name         Twitch Chat Sanitizer
// @description  cleaning twitch chat
// @version      0.1.0
// @match        https://www.twitch.tv/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/magnusribsskog/Twitch-Chat-Sanitizer-Script-for-TamperMonkey/main/Twitch-Chat-Sanitizer.js
// @updateURL    https://raw.githubusercontent.com/magnusribsskog/Twitch-Chat-Sanitizer-Script-for-TamperMonkey/main/Twitch-Chat-Sanitizer.js
// ==/UserScript==

(function() {
    const map = {
    "i": "I",
    "im": "I'm",
    "ive": "I've",
    "id": "I'd",
    "dont": "don't",
    "cant": "can't",
    "wont": "won't",
    "doesnt": "doesn't",
    "didnt": "didn't",
    "youre": "you're",
    "hes": "he's",
    "shes": "she's",
    "theyre": "they're",
    "u": "you",
    "ur": "your",
    "wanna": "want to",
    "gonna": "going to"
    };

    const cleanNode = (node) => {
        // Only process text nodes
        if (node.nodeType === 3) {
            let text = node.textContent;

            // 1. Map replacements
            Object.keys(map).forEach(word => {
                const regex = new RegExp(`\\b${word}\\b`, 'gi');
                text = text.replace(regex, map[word]);
            });

            // 2. Strip repeated punctuation (??? -> ?, !!! -> !)
            text = text.replace(/([?!.,]){2,}/g, '$1');

            node.textContent = text;
        }
    };

    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    // Twitch usually puts the message text inside a span with the class "text-fragment"
                    const fragments = node.querySelectorAll('.text-fragment');

                    fragments.forEach((frag, index) => {
                        // Fix the text content first
                        cleanNode(frag.childNodes[0]);

                        // 3. Capitalize ONLY the first fragment of the whole message
                        if (index === 0 && frag.textContent.length > 0) {
                            let text = frag.textContent;
                            frag.textContent = text.charAt(0).toUpperCase() + text.slice(1);
                        }
                    });
                }
            });
        });
    });
