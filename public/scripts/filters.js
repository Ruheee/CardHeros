$(document).ready(() => {
  const url = window.location.href;
  const queryString = url.split("/?")[1];
  const filterType = queryString.split("=")[0];
  const filterValue = decodeURIComponent(queryString.split("=")[1]);

  $(`.filter-select[name=${filterType}]`).val(filterValue).trigger('change');
});
