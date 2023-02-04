$(document).ready(() => {
  $('#get-price').on('click', () => {

      const $PRICEMENU = $('#price-menu');
      $PRICEMENU.empty();
      $(`<li>Highest to lowest</li>`).appendTo($PRICEMENU);
      $(`<li>Lowest to highest</li>`).appendTo($PRICEMENU);

    });
  });



