$(document).ready(() => {
  const searchBar = $('.search');
  const searchBarInput = $('#search');
  let searchMenu = $('.search-menu');

  const sports = ['baseball', 'hockey', 'soccer', 'basketball', 'football'];
  const brands = ['o-pee-chee', 'donruss', 'upper deck', 'topps', 'panini', 'futera', 'bowman', 'fleer'];

  let all = sports.concat(brands);
  all = all.sort();

    searchBarInput.on('input', function(){
    const searchValue = searchBarInput.val().toLowerCase();

    let filtered = all.filter(item => item.includes(searchValue))

    searchMenu.show().empty();

    if(searchValue) {
      for (let item of filtered) {
        let menuItem = $('<li class="item">').text(item.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
        searchMenu.append(menuItem);
      }
    }
  })

  $(document).on('click', function(e) {
    if (!searchBar.is(e.target) && searchBar.has(e.target).length === 0) {
      searchMenu.hide();
    }
  });

  searchMenu.on('click', '.item', function() {
    searchBarInput.val($(this).text());
    searchMenu.hide();
    searchBar.trigger('submit');
  });

  searchBar.focusin(function() {
    const searchValue = searchBarInput.val().toLowerCase();
    if(searchValue) searchMenu.show();
  });

  searchBar.submit(function(e){
    e.preventDefault();

    const searchValue = searchBarInput.val().toLowerCase();

    if (sports.includes(searchValue)){
      window.location.href = `/cards/?sport=${searchValue}`
    }

    if (brands.includes(searchValue)){
      window.location.href = `/cards/?brand=${searchValue}`
    }

    if (!sports.includes(searchValue) && !brands.includes(searchValue)) {
      window.location.href = '/cards'
    }
  })
});
