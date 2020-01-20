$(document).ready(function () {
  $('.button[data-filter]').click(function () {
    if ($(this).attr('val') === 'off') {
      $('.button[data-filter]').attr('val', 'off').removeClass('focused');
      $(this).attr('val', 'on').addClass('focused');
      $('.filter > div').hide(300);
      $('.filter > div[data-filter=' + $(this).attr('data-filter') + ']').show(300);
      //
      if ($(this).attr('data-filter') === 'all') {
        $('.button[data-filter]').attr('val', 'off').removeClass('focused');
        $(this).attr('val', 'on').addClass('focused');
        $('.filter > div').show(300);
      }
    }
  });
});