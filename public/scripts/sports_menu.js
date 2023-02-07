$(document).ready(() => {
  $('#get-sports').on('click', () => {
  $('.sport-dropdown').slideToggle();0
  })

  $('#soccer').on('click', () => {
    $.ajax({
      method: 'GET',
      url: `/api/sports/soccer`,
      success: (response) => {
        const $ALLCARDS = $('#all-cards');
        $ALLCARDS.empty();

      for (let card of response.cards) {
        $(`<div class="card"><div class="card-img" style="background-image: url('${card.card_front_url}');"></div></div>`).appendTo($ALLCARDS);
      }
      }
    })
  })

  $('#basketball').on('click', () => {
    $.ajax({
      method: 'GET',
      url: `/api/sports/basketball`,
      success: (response) => {
        const $ALLCARDS = $('#all-cards');
        $ALLCARDS.empty();

      for (let card of response.cards) {
        $(`<div class="card"><div class="card-img" style="background-image: url('${card.card_front_url}');"></div></div>`).appendTo($ALLCARDS);
      }
      }
    })
  })

  $('#hockey').on('click', () => {
    $.ajax({
      method: 'GET',
      url: `/api/sports/hockey`,
      success: (response) => {
        const $ALLCARDS = $('#all-cards');
        $ALLCARDS.empty();

      for (let card of response.cards) {
        $(`<div class="card"><div class="card-img" style="background-image: url('${card.card_front_url}');"></div></div>`).appendTo($ALLCARDS);
      }
      }
    })
  })

  $('#baseball').on('click', () => {
    $.ajax({
      method: 'GET',
      url: `/api/sports/baseball`,
      success: (response) => {
        const $ALLCARDS = $('#all-cards');
        $ALLCARDS.empty();

      for (let card of response.cards) {
        $(`<div class="card"><div class="card-img" style="background-image: url('${card.card_front_url}');"></div></div>`).appendTo($ALLCARDS);
      }
      }
    })
  })

  $('#football').on('click', () => {
    $.ajax({
      method: 'GET',
      url: `/api/sports/football`,
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
