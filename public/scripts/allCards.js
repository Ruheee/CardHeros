$(document).ready(() => {
    $.ajax({
      method: 'GET',
      url: '/api/cards',
    })
    .done((response) => {
      const $ALLCARDS = $('#all-cards');
      $ALLCARDS.empty();

      for (let card of response.cards) {
        $(`<li><img src="${card.card_front_url}"></li>`).appendTo($ALLCARDS);
      }
    });

})
