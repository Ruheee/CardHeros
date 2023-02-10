$("#message-form").submit(function(event) {
  event.preventDefault();
  const form = this;
  const cardID = form.action.split('/')[4];

  $.ajax({
    url: form.action,
    type: "POST",
    data: { message: $("textarea[name='message']").val() },
  })
  .then(res => {
    if(window.parent.location.href.split('/').length > 4) {
      window.parent.location.href = '/messages'
    } else {
      $("textarea[name='message']").val('');
      updateMessageFrame(cardID);
      updateSidebarFrame();
    }
  })
});

function updateMessageFrame(cardID) {
  let messageFrame = document.getElementById('message-frame');
  messageFrame.src = '/message/' + cardID;

  let form = document.querySelector('#message-form');
  form.action = '/message/' + cardID;
}

function updateSidebarFrame() {
  let sidebarFrame = document.getElementById('sidebar-messages-frame');
  sidebarFrame.src = '/sidebar-messages'
}

$(document).on('keyup', function(e) {
  if($('.cancel-message').length){
    if (e.key == "Escape") $('.cancel-message').click();
  } else {
    if (e.key == "Escape") window.location.href='/admin';
  }
});

$(document).ready(function() {
  $('.cancel-message').click(() => {
    window.parent.location.href = '/messages'
  })
})
