$(document).ready(function () {
  const filterList = $('button[filter').get();
  filterList.forEach(item => {
    switchItemDisplay(item.attributes.filter.value);
  });

  function switchItemDisplay(filter) {
    $(`button[filter=${filter}]`).click(function () {
      if ($(this).attr('val') === 'off') {
        if ($(this).attr('filter') !== 'all') {
          $('.button[filter]').attr('val', 'off');
          $(this).attr('val', 'on');
          $('.filter > div').hide();
          $(`.filter > div[filter=${filter}]`).show();
        } else {
          $('.button[filter]').attr('val', 'off');
          $(this).attr('val', 'on');
          $(`.filter > div`).show('slow');
        }
      }
    });
  }
});
