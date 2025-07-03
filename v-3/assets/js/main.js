jQuery(document).ready(function ($) {
  // menu bg add
  function checkScroll() {
    if ($(window).scrollTop() > 80) {
      $(".header-area").addClass("menu-bg");
    } else {
      $(".header-area").removeClass("menu-bg");
    }
  }
$(document).on("click", ".search-icon", function () {
  $('body').addClass('no-padding');
});
  $(document).on("click", function (event) {
    const $div = $("#outside-click");
    const $navbarText = $("#navbarText");
    if (!$div.is(event.target) && $div.has(event.target).length === 0) {
      $navbarText.removeClass("show");
    }
  });
  // Run on page load
  $(document).ready(function () {
    checkScroll();
  });
  // Run on scroll
  $(window).on("scroll", function () {
    checkScroll();
  });
});
function handleResize() {
  // Select all tables with the class "mobile-view-table"
  const elements = document.querySelectorAll(".mobile-view-table");
  elements.forEach((element) => {
    // Add or remove the "nowrap" class based on the window size
    if (window.innerWidth <= 991) {
      element.classList.add("nowrap");
    } else {
      element.classList.remove("nowrap");
    }
  });
}
// Run handleResize on page load and attach it to the resize event
handleResize();
window.addEventListener("resize", handleResize);

// Hide the preloader dynamically after the page is fully loaded
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("loader-hide");
});



      // tabs carousel 
      function initTabsOwl() {
  const $tabs = $(".tabs-slide");

  if ($(window).width() < 768) {
    if (!$tabs.hasClass("owl-loaded")) {
      $tabs.owlCarousel({
        items: 3.2,
        nav: true,
        dots: false,
        margin: 30,
        loop: false,
        autoWidth: true,
        responsive: {
          0: { items: 3.5 },
          480: { items: 3.5 },
          600: { items: 3.5 }
        },
        onInitialized: function (event) {
          $(".tabs-slide .owl-prev").hide();
          $(".tabs-slide .owl-next").html('<i class="fas fa-chevron-right"></i>');
          overrideNext(event.relatedTarget);
        },
        onResized: function (event) {
          overrideNext(event.relatedTarget);
        }
      });
    }
  } else {
    if ($tabs.hasClass("owl-loaded")) {
      $tabs.trigger("destroy.owl.carousel").removeClass("owl-loaded owl-carousel");
      $tabs.find(".owl-stage-outer").children().unwrap();
    }
  }
}

function overrideNext(carousel) {
  const $next = carousel.$element.find(".owl-next");

  $next.off("click").on("click", function (e) {
    e.preventDefault();

    const totalItems = carousel.items().length;
    const visible = carousel.settings.items;
    const current = carousel.current();

    const atEnd = current + visible >= totalItems;

    if (atEnd) {
      // Go to first instantly
      carousel.to(0);
    } else {
      carousel.next();
    }

    // Remove disabled forcibly (just in case)
    setTimeout(() => {
      $next.removeClass("disabled");
    }, 10);
  });
}

$(document).ready(function () {
  initTabsOwl();
  $(window).on("resize", function () {
    initTabsOwl();
  });
});