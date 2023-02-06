// $(() => {
//   const messages = document.querySelectorAll('.message');
//   const iframe = document.getElementById('message-frame');

//   messages.forEach(message => {
//     message.addEventListener('click', () => {
//       iframe.src = `/message/${message.id}`;
//     });
//   });
// });

$(() => {
  const messages = document.querySelectorAll('.message');

  messages.forEach(message => {
    message.addEventListener('click', () => {
      window.parent.updateMessageFrame(message.id);
    });
  });
});
