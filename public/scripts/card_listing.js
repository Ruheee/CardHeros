//script to call cards depending of query

$(() => {
  window.propertyListing = {};

  function createListing(property, isReservation) {
    return `
      <article class="card">
        <section class="card-front">
          <img src="${cards.card_front_url}" alt="house">
        </section>
      </article>
    `
  }

  window.propertyListing.createListing = createListing;

});
