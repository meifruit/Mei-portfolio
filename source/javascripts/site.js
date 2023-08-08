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

// add navigation
// const navigationButtonsElement = document.querySelector(".navigation-buttons");
// console.log(navigationButtonsElement);
// navigationButtonsElement.addEventListener("click", function (e) {
//   e.preventDefault();

//   // Matching strategy
//   if (e.target.classList.contains("navigation-button")) {
//     const id = e.target.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }
// });

// about me
// const tabs = document.querySelectorAll(".operations__tab");
// const tabsContainer = document.querySelector(".operations__tab-container");
// const tabsContent = document.querySelectorAll(".operations__content");
// tabsContainer.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".operations__tab");
//   console.log(clicked);

//   // guard clause
//   if (!clicked) return;

//   // remove active classes
//   tabs.forEach((t) => t.classList.remove("operations__tab--active"));
//   tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
//   // active tab
//   clicked.classList.add("operations__tab--active");

//   // active content area
//   console.log(clicked.dataset.tab);
//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add("operations__content--active");
// });
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".operations__tab");
  const tabsContainer = document.querySelector(".operations__tab-container");
  const tabsContent = document.querySelectorAll(".operations__content");

  tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");
    console.log(clicked);

    // guard clause
    if (!clicked) return;

    // remove active classes
    tabs.forEach((t) => t.classList.remove("operations__tab--active"));
    tabsContent.forEach((c) =>
      c.classList.remove("operations__content--active")
    );
    // active tab
    clicked.classList.add("operations__tab--active");

    // active content area
    console.log(clicked.dataset.tab);
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add("operations__content--active");
  });
});
