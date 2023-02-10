$(() => {
  const url = window.location.pathname;
  const cardID = url.substring(url.lastIndexOf('/') + 1);
  const messages = document.querySelectorAll('.message');
  let userName;

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

      console.log(message)
      if (message.id === cardID) {
        message.classList.add('new-message');
        userName = $(`.template-vars ${message.id}`).data('user-name');
        $('.message-list').prepend(message);
      }

      message.addEventListener('click', () => {
        window.parent.location.href = '/messages'
      })
    })

    if(!$('li.new-message').length) {
      userName = $('#new-user').data('user-name');

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
