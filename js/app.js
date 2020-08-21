$(document).ready(function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    onCloseEnd: () => {
      $('.menu-icon').toggleClass('active');
    }
  });

  $('.menu-icon').click(function() {
    $('.menu-icon').toggleClass('active');
    $('.sidenav').sidenav('open');
  });
});
