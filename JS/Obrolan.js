const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "chat-coming" ? `<p>${message}</p>` : ` <p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}


const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "chat-coming"));

    // Display "Mengetik..." message
    const typingMessage = createChatLi("Mengetik...", "chat-incoming");
    chatbox.appendChild(typingMessage);

    setTimeout(() => {
        // Remove "Mengetik..." message
        chatbox.removeChild(typingMessage);

        // Check if userMessage contains a specific keyword
        if (userMessage.toLowerCase().includes("bayar")) {
            chatbox.appendChild(createChatLi("Baik, pembayaran dapat melalui menu bayarkos mas", "chat-incoming"));
        }
        else if (userMessage.toLowerCase().includes("?")) {
            chatbox.appendChild(createChatLi("Nanti akan diinforkan lebih lanjut ya", "chat-incoming"));
        }
        else if (userMessage.toLowerCase().includes("halo") || (userMessage.toLowerCase().includes("hai"))) {
            chatbox.appendChild(createChatLi("Halo mas", "chat-incoming"));
        }
        else if (userMessage.toLowerCase().includes("pagi")) {
            chatbox.appendChild(createChatLi("Pagi mas", "chat-incoming"));
        } else if (userMessage.toLowerCase().includes("siang")) {
            chatbox.appendChild(createChatLi("Siang mas", "chat-incoming"));
        }
        else if (userMessage.toLowerCase().includes("malam")) {
            chatbox.appendChild(createChatLi("Malam mas", "chat-incoming"));
        }
        else if (userMessage.toLowerCase().includes("kasih")) {
            chatbox.appendChild(createChatLi("Sama-sama", "chat-incoming"));
        }
        else {
            chatbox.appendChild(createChatLi("Maksudnya gimana?", "chat-incoming"));
        }
    }, 600);
};

chatInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
