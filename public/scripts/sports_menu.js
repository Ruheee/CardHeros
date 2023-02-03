$(document).ready(() => {
  $('#get-sports').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/sports',
    })
    .done((response) => {
      const $SPORTLIST = $('#sports');
      $SPORTLIST.empty();

      for (let cardSport of response.sports) {
        $(`<li>${cardSport.sport}</li>`).appendTo($SPORTLIST);
      }
    });
  });
})
