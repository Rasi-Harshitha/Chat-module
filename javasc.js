const leftSendButton = document.getElementById('left-send');
const rightSendButton = document.getElementById('right-send');
const leftInput = document.getElementById('left-input');
const rightInput = document.getElementById('right-input');
const messagePage = document.querySelector('.message-page');

// Avatar URLs
const leftAvatar = 'nobi.jpg'; // Replace with actual left user avatar
const rightAvatar = 'suzuka.jpg'; // Replace with actual right user avatar

// Function to append messages
function appendMessage(text, type) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', type);

  // Select avatar based on message type
  const avatarUrl = type === 'outgoing' ? leftAvatar : rightAvatar;

  // Create the message HTML with avatar
  messageDiv.innerHTML = `
    <img src="${avatarUrl}" alt="Avatar" class="avatar">
    <div class="message-content">
      <p>${text}</p>
      <span class="message-time">${new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}</span>
    </div>
  `;

  // Append message to the chat
  messagePage.appendChild(messageDiv);
  messagePage.scrollTop = messagePage.scrollHeight; // Auto-scroll to the latest message
}

// Left Side Message Input
leftSendButton.addEventListener('click', () => {
  const messageText = leftInput.value.trim();
  if (messageText !== '') {
    appendMessage(messageText, 'outgoing');
    leftInput.value = '';
  }
});

// Right Side Message Input
rightSendButton.addEventListener('click', () => {
  const messageText = rightInput.value.trim();
  if (messageText !== '') {
    appendMessage(messageText, 'incoming');
    rightInput.value = '';
  }
});
