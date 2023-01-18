window.onscroll = function() {
    var navbar = document.querySelector(".navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
  };