$('.image-placeholder').click(function () {
  let imagePlaceholder = $(this);
  let imagePlaceholderClass = imagePlaceholder.attr('class');
  let cardSide = imagePlaceholderClass.split(" ")[1];
  let messageSide;

  // Verify what placeholder the user clicked and pass info accordingly
  if (cardSide === 'front-image') {
    cardSide = 'card_front_url';
    messageSide = 'front';
  } else {
    cardSide = 'card_back_url';
    messageSide = 'back';
  }

  // Remove error-input class when click on the placeholder
  imagePlaceholder.removeClass('error-input');

  // Add a black div and pop-up div for use to input URL
  let blockDiv = $('<div class="block-div hidden"></div>');
  let popUp = $(`
  <div class="pop-up">\
    <input type="text" class="${cardSide}" name="${cardSide}" placeholder="Paste the ${messageSide} image URL here" required />\
    <button class="cancel-url">Cancel</button>\
    <button class="submit-url">Submit</button>\
  </div>`)

  blockDiv.appendTo('body');
  popUp.appendTo('body');

  // If the user focus on the input, remove error class
  $(`.${cardSide}`).on('focus', () => {
    $(`.${cardSide}`).removeClass('error-input');
    $(`.${cardSide}`).attr('placeholder', `Paste the ${messageSide} image URL here`);
  })

  // If the user clicks on cancel button, remove pop-up and black div
  popUp.find('.cancel-url').click(() => {
    blockDiv.remove();
    popUp.remove();
  });

  // if the user submits the form, check if it has an URL
  // if not, add error class
  // Otherwise, get the URL and add as a background image to placeholder and add to hidden field in the form
  popUp.find('.submit-url').click(() => {
    if ($(`.${cardSide}`).val().length === 0){
      $(`.${cardSide}`).addClass('error-input');
      $(`.${cardSide}`).attr('placeholder', 'Please enter an image URL');
    } else {
      let imageURL = popUp.find(`.${cardSide}`).val();
      $(`#${cardSide}`).val(imageURL);

      imagePlaceholder.css({
        'background-image': `url('${imageURL}')`,
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': '120%'
      })

      imagePlaceholder.html('');
      blockDiv.remove();
      popUp.remove();
    };
  });
});

// User can either hit esc to cancel form or hit enter to submit form
$(document).on('keyup', function(e) {
  if($('.pop-up').length){
    if (e.key == "Enter") $('.submit-url').click();
    if (e.key == "Escape") $('.cancel-url').click();
  }
});

// Check if the user has added images to the card
$('form').submit((e) => {

  if (!$('#card_front_url').val() || !$('#card_back_url').val()){
    e.preventDefault();

    if (!$('#card_front_url').val()) {
      $('.front-image').addClass('error-input');
    }

    if (!$('#card_back_url').val()) {
      $('.back-image').addClass('error-input');
    }
  }
})
