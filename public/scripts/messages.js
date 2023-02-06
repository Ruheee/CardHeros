function updateMessageFrame(messageId) {
  let messageFrame = document.getElementById('message-frame');
  messageFrame.src = '/message/' + messageId;
}
