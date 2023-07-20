// This is where it all goes :)
window.addEventListener("DOMContentLoaded", (event) => {
  const sidebarWrapper = document.getElementById("sidebar-wrapper");
  let scrollToTopVisible = false;
  // Closes the sidebar menu
  const menuToggle = document.body.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", (event) => {
    event.preventDefault();
    sidebarWrapper.classList.toggle("active");
    _toggleMenuIcon();
    menuToggle.classList.toggle("active");
  });

  // Closes responsive menu when a scroll trigger link is clicked
  var scrollTriggerList = [].slice.call(
    document.querySelectorAll("#sidebar-wrapper .js-scroll-trigger")
  );
  scrollTriggerList.map((scrollTrigger) => {
    scrollTrigger.addEventListener("click", () => {
      sidebarWrapper.classList.remove("active");
      menuToggle.classList.remove("active");
      _toggleMenuIcon();
    });
  });

  function _toggleMenuIcon() {
    const menuToggleBars = document.body.querySelector(
      ".menu-toggle > .fa-bars"
    );
    const menuToggleTimes = document.body.querySelector(
      ".menu-toggle > .fa-xmark"
    );
    if (menuToggleBars) {
      menuToggleBars.classList.remove("fa-bars");
      menuToggleBars.classList.add("fa-xmark");
    }
    if (menuToggleTimes) {
      menuToggleTimes.classList.remove("fa-xmark");
      menuToggleTimes.classList.add("fa-bars");
    }
  }

  // Scroll to top button appear
  // document.addEventListener("scroll", () => {
  //   const scrollToTop = document.body.querySelector(".scroll-to-top");
  //   if (document.documentElement.scrollTop > 100) {
  //     if (!scrollToTopVisible) {
  //       fadeIn(scrollToTop);
  //       scrollToTopVisible = true;
  //     }
  //   } else {
  //     if (scrollToTopVisible) {
  //       fadeOut(scrollToTop);
  //       scrollToTopVisible = false;
  //     }
  //   }
  // });
});
