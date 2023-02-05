// Client facing scripts here
$(() => {
  const messages = document.querySelectorAll('.message');
  const iframe = document.getElementById('message-frame');

  messages.forEach(message => {
    message.addEventListener('click', () => {
      iframe.src = `/message/${message.id}`;
    });
  });
});
