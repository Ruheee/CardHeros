$(document).ready(() => {
    $.ajax({
      method: 'GET',
      url: '/api/cards',
    })
    .done((response) => {
      const $ALLCARDS = $('#cards');
      $ALLCARDS.empty();

      for (let card of response.cards) {
        $(`<div class="card"><div class="card-img" style="background-image: url('${card.card_front_url}');"></div></div>`).appendTo($ALLCARDS);
      }
    });

})
