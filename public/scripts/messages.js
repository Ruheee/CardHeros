
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
      $("textarea[name='message").val('');
      updateMessageFrame(messageID);
      updateSidebarFrame();
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
