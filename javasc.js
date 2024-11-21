// JavaScript for handling message sending
const sendButton = document.querySelector('.send-button');
const messageInput = document.querySelector('.message-input');
const messagePage = document.querySelector('.message-page');

sendButton.addEventListener('click', () => {
  const messageText = messageInput.value.trim();
  if (messageText !== '') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'outgoing');

    messageDiv.innerHTML = `
      <div class="message-content">
        <p>${messageText}</p>
        <span class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    `;

    messagePage.appendChild(messageDiv);
    messageInput.value = '';
    messagePage.scrollTop = messagePage.scrollHeight; // Scroll to the bottom
  }
});
