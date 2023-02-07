$('.delete-card').click(function(e){
  e.preventDefault();
  const cardID = $(this).data('id');
  const form = $(this).closest('form');

  let blockDiv = $('<div class="block-div"></div>');
  let popUp = $(`
  <div class="pop-up delete">\
    <div>\
      <h2>You are about to delete this card. Are you sure?</h2>\
    </div>\
    <div>\
      <button class="cancel-url">Cancel</button>\
      <button class="submit-url">Delete</button>\
    </div>\
  </div>`)

  blockDiv.appendTo('body');
  popUp.appendTo('body');

  // If the user clicks on cancel button, remove pop-up and black div
  popUp.find('.cancel-url').click(() => {
    blockDiv.remove();
    popUp.remove();
  });

  // If the user submits the form, delete the card
  popUp.find('.submit-url').click(() => {
    blockDiv.remove();
    popUp.remove();
    form.attr('action', `/cards/${cardID}/delete`).submit();
  });
})
