$(document).ready(() => {
  $('#get-brands').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/brands',
    })
    .done((response) => {
      const $BRANDLIST = $('#brands');
      $BRANDLIST.empty();

      for (let cardBrand of response.brands) {
        $(`<li>${cardBrand.brand}</li>`).appendTo($BRANDLIST);
      }
    });
  });


})
