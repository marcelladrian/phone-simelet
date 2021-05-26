//sideNav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  //popupmessageForTopUp
  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }