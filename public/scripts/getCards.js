$(document).ready(() => {
  let pageNumber = 0;
  $.ajax({
      method: 'GET',
      url: `/api/cards?pageNumber=${pageNumber}`,
    })
    .done((response) => {
      pageNumber++
      const $ALLCARDS = $('#all-cards');
      $ALLCARDS.empty();

      for (let card of response.cards) {
        $(`<div class="card"><div class="card-img" style="background-image: url('${card.card_front_url}');"></div></div>`).appendTo($ALLCARDS);
      }
    });

    $('#load-more').on('click', () => {
      $.ajax({
        method: 'GET',
        url: `/api/cards?pageNumber=${pageNumber}`,
        data: 'JSON',
        success: (response) => {
        pageNumber++
        const $ALLCARDS = $('#all-cards');

        for (let card of response.cards) {
          $(`<div class="card"><div class="card-img" style="background-image: url('${card.card_front_url}');"></div></div>`).appendTo($ALLCARDS);
      }
     }
    })
  })
})
