document.getElementById("chat-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") {
        return;
    }

    appendMessage("You", userInput);
    document.getElementById("user-input").value = "";
    
    const response = await fetch("/get_response", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            user_input: userInput
        })
    });

    const data = await response.json();
    appendMessage("Bot", data.bot_response);
});

function appendMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `<strong>${sender}</strong>${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
