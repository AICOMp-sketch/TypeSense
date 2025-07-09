document.addEventListener('DOMContentLoaded', () => {
    const typingTextElement = document.getElementById('typing-text');
    const fullText = "Typing message"; // The message to be typed
    let charIndex = 0;
    const typingSpeed = 100; // milliseconds per character

    function typeMessage() {
        if (charIndex < fullText.length) {
            typingTextElement.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, typingSpeed);
        } else {
            // Optional: You can make the dots disappear or restart the animation here
            // For now, it will just stop typing the message but dots continue.
        }
    }

    // Start typing after a short delay
    setTimeout(typeMessage, 500);
});