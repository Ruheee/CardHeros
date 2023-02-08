$("#message-form").submit(function(event) {
  event.preventDefault();
  const form = this;
  const messageID = form.action.split('/')[4];

  $.ajax({
    url: form.action,
    type: "POST",
    data: { message: $("textarea[name='message").val() },
  })
  .then(res => {
    if(window.parent.location.href.split('/').length > 4) {
      window.parent.location.href = '/messages'
    } else {
      $("textarea[name='message").val('');
      updateMessageFrame(messageID);
      updateSidebarFrame();
    }
  })
});

function updateMessageFrame(messageID) {
  let messageFrame = document.getElementById('message-frame');
  messageFrame.src = '/message/' + messageID;

  let form = document.querySelector('form');
  form.action = '/message/' + messageID;
}

function updateSidebarFrame() {
  let sidebarFrame = document.getElementById('sidebar-messages-frame');
  sidebarFrame.src = '/sidebar-messages'
}

$(document).on('keyup', function(e) {
  if($('.cancel-message').length){
    if (e.key == "Escape") $('.cancel-message').click();
  }
});

$(document).ready(function() {
  $('.cancel-message').click(() => {
    window.parent.location.href = '/messages'
  })
})
