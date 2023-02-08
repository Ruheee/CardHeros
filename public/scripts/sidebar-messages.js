$(() => {
  const messages = document.querySelectorAll('.message');

  messages[0].classList.add("active");

  messages.forEach(message => {
    message.addEventListener('click', () => {
      messages.forEach(message => message.classList.remove('active'));

      if ($("li.new-message").length) {
        window.parent.location.href = '/messages'
      } else {
        message.classList.add('active');
        window.parent.updateMessageFrame(message.id);
      }
    });
  });
});
