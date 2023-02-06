$(document).ready(() => {
  $('#get-price').on('click', () => {
    $('.price-dropdown').slideToggle()
    });


  $('#highest').on('click', () => {
    $.ajax({
      method: 'GET',
      url: `/api/cards/highestPrice`,
      success: (response) => {
        const $ALLCARDS = $('#all-cards');
        $ALLCARDS.empty();

      for (let card of response.cards) {
        $(`<div class="card"><div class="card-img" style="background-image: url('${card.card_front_url}');"></div></div>`).appendTo($ALLCARDS);
      }
      }
    })
  })

  $('#lowest').on('click', () => {
    $.ajax({
      method: 'GET',
      url: `/api/cards/lowestPrice`,
      success: (response) => {
        const $ALLCARDS = $('#all-cards');
        $ALLCARDS.empty();

      for (let card of response.cards) {
        $(`<div class="card"><div class="card-img" style="background-image: url('${card.card_front_url}');"></div></div>`).appendTo($ALLCARDS);
      }
      }
    })
  })
});


