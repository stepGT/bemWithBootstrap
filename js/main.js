$(document).ready(function () {
  $('.button[data-filter="wd"]').click(function () {
    if ($(this).attr('val') === 'off') {
      $('.button[data-filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.filter > div').hide(300);
      $('.filter > div[data-filter="wd"]').show(300);
    }
  });
  $('.button[data-filter="ud"]').click(function () {
    if ($(this).attr('val') === 'off') {
      $('.button[data-filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.filter > div').hide(300);
      $('.filter > div[data-filter="ud"]').show(300);
    }
  });
  $('.button[data-filter="moc"]').click(function () {
    if ($(this).attr('val') === 'off') {
      $('.button[data-filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.filter > div').hide(300);
      $('.filter > div[data-filter="moc"]').show(300);
    }
  });
  $('.button[data-filter="all"]').click(function () {
    if ($(this).attr('val') === 'off') {
      $('.button[data-filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.filter > div').show(300);
    }
  });
});