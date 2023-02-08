$(() => {
  const messages = document.querySelectorAll('.message');

  messages[0].classList.add("active");

  messages.forEach(message => {
    message.addEventListener('click', () => {
      messages.forEach(message => message.classList.remove('active'));
      message.classList.add('active');
      window.parent.updateMessageFrame(message.id);
    });
  });
});
