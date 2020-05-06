document.addEventListener('DOMContentLoaded', function() {
  // Initate the paralex elements.
  var paralexElements = document.querySelectorAll('.parallax');
  var paralexInstances = M.Parallax.init(paralexElements, {});

  // Initiate the sidenav container
  var sidebarElement = document.querySelectorAll('.sidenav');
  var sidebarInstances = M.Sidenav.init(sidebarElement, {});
});