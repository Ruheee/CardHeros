$(() => {
  const url = window.location.pathname;
  const cardID = url.substring(url.lastIndexOf('/') + 1);
  const messages = document.querySelectorAll('.message');
  const userName = $('#template-vars').data('user-name');

  if (cardID === 'sidebar-messages') {
    messages[0].classList.add('active');

    messages.forEach(message => {
      message.addEventListener('click', () => {
        messages.forEach(message => message.classList.remove('active'));

        message.classList.add('active');
        window.parent.updateMessageFrame(message.id);
      })
    })

  } else {
    messages.forEach(message => {
      if (message.id === cardID) message.classList.add('new-message');

      message.addEventListener('click', () => {
        window.parent.location.href = '/messages'
      })
    })

    if(!$('li.new-message').length) {
      $('.message-list').prepend(`
        <li class='message new-message'>
          <h3>${userName}</h3>
          <p>New message</p>
        </li>
      `)
    } else {
      $('li.new-message').find('p').text('New message');
    }
  }
})
