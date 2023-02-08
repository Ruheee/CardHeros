$('.filter-select').change(function (){
  $(this).val() !== '' ? $(this).addClass('selected') : $(this).removeClass('selected');

  let sport = $('.sport').val();
  let brand = $('.brand').val();
  let price = $('.price').val();

  let favouritesRaw = $('.main-data').data('favourites');
  let favourites = favouritesRaw.split(',').map(favourite => +favourite);
  let favourite;

  $.ajax({
    type: "GET",
    url: "/api/cards",
    data: { sport, brand, price },
    success: function(cards) {
      $('.cards').empty();

      for (const card of cards.cards) {
        favourites.includes(card.id) ? favourite = 'fa-solid' : favourite = 'fa-regular';
        const cardElement = `
          <div class="card-container">
            <div class="card">
              <a href="/cards/${card.id}">
                <div class="card-img" style="background-image: url('${card.card_front_url}');"></div>
              </a>
            </div>
            <div class="info">
              <i class="${favourite} fa-star favourite-icon" title="Favourite"></i>
              <span class="price">${card.price}</span>
            </div>
          </div>
        `;

        $('.cards').append(cardElement);
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
});
