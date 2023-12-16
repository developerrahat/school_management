// My Custom Header JS start =======================

!(function (n, i, e, a) {
  (n.navigation = function (t, s) {
    var o = {
      responsive: !0,
      mobileBreakpoint: 991,
      showDuration: 200,
      hideDuration: 200,
      showDelayDuration: 0,
      hideDelayDuration: 0,
      submenuTrigger: "hover",
      effect: "fadeIn",
      submenuIndicator: !0,
      submenuIndicatorTrigger: !1,
      hideSubWhenGoOut: !0,
      visibleSubmenusOnMobile: !1,
      fixed: !1,
      overlay: !0,
      overlayColor: "rgba(0, 0, 0, 0.5)",
      hidden: !1,
      hiddenOnMobile: !1,
      offCanvasSide: "left",
      offCanvasCloseButton: !0,
      animationOnShow: "",
      animationOnHide: "",
      onInit: function () { },
      onLandscape: function () { },
      onPortrait: function () { },
      onShowOffCanvas: function () { },
      onHideOffCanvas: function () { }
    },
      r = this,
      u = Number.MAX_VALUE,
      d = 1,
      l = "click.nav touchstart.nav",
      f = "mouseenter focusin",
      c = "mouseleave focusout";
    r.settings = {};
    var t = (n(t), t);
    n(t).find(".nav-search").length > 0 &&
      n(t)
        .find(".nav-search")
        .find("form")
        .prepend(
          "<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"
        ),
      (r.init = function () {
        (r.settings = n.extend({}, o, s)),
          r.settings.offCanvasCloseButton &&
          n(t)
            .find(".nav-menus-wrapper")
            .prepend(
              "<span class='nav-menus-wrapper-close-button'>&#10005;</span>"
            ),
          "right" == r.settings.offCanvasSide &&
          n(t).find(".nav-menus-wrapper").addClass("nav-menus-wrapper-right"),
          r.settings.hidden &&
          (n(t).addClass("navigation-hidden"),
            (r.settings.mobileBreakpoint = 99999)),
          v(),
          r.settings.fixed && n(t).addClass("navigation-fixed"),
          n(t)
            .find(".nav-toggle")
            .on("click touchstart", function (n) {
              n.stopPropagation(),
                n.preventDefault(),
                r.showOffcanvas(),
                s !== a && r.callback("onShowOffCanvas");
            }),
          n(t)
            .find(".nav-menus-wrapper-close-button")
            .on("click touchstart", function () {
              r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas");
            }),
          n(t)
            .find(".nav-search-button, .nav-search-close-button")
            .on("click touchstart keydown", function (i) {
              i.stopPropagation(), i.preventDefault();
              var e = i.keyCode || i.which;
              "click" === i.type ||
                "touchstart" === i.type ||
                ("keydown" === i.type && 13 == e)
                ? r.toggleSearch()
                : 9 == e && n(i.target).blur();
            }),
          n(t).find(".megamenu-tabs").length > 0 && y(),
          n(i).resize(function () {
            r.initNavigationMode(C()), O(), r.settings.hiddenOnMobile && m();
          }),
          r.initNavigationMode(C()),
          r.settings.hiddenOnMobile && m(),
          s !== a && r.callback("onInit");
      });
    var h = function () {
      n(t).find(".nav-submenu").hide(0), n(t).find("li").removeClass("focus");
    },
      v = function () {
        n(t)
          .find("li")
          .each(function () {
            n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
              (n(this)
                .children(".nav-dropdown,.megamenu-panel")
                .addClass("nav-submenu"),
                r.settings.submenuIndicator &&
                n(this)
                  .children("a")
                  .append(
                    "<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
                  ));
          });
      },
      m = function () {
        n(t).hasClass("navigation-portrait")
          ? n(t).addClass("navigation-hidden")
          : n(t).removeClass("navigation-hidden");
      };
    (r.showSubmenu = function (i, e) {
      C() > r.settings.mobileBreakpoint &&
        n(t).find(".nav-search").find("form").fadeOut(),
        "fade" == e
          ? n(i)
            .children(".nav-submenu")
            .stop(!0, !0)
            .delay(r.settings.showDelayDuration)
            .fadeIn(r.settings.showDuration)
            .removeClass(r.settings.animationOnHide)
            .addClass(r.settings.animationOnShow)
          : n(i)
            .children(".nav-submenu")
            .stop(!0, !0)
            .delay(r.settings.showDelayDuration)
            .slideDown(r.settings.showDuration)
            .removeClass(r.settings.animationOnHide)
            .addClass(r.settings.animationOnShow),
        n(i).addClass("focus");
    }),
      (r.hideSubmenu = function (i, e) {
        "fade" == e
          ? n(i)
            .find(".nav-submenu")
            .stop(!0, !0)
            .delay(r.settings.hideDelayDuration)
            .fadeOut(r.settings.hideDuration)
            .removeClass(r.settings.animationOnShow)
            .addClass(r.settings.animationOnHide)
          : n(i)
            .find(".nav-submenu")
            .stop(!0, !0)
            .delay(r.settings.hideDelayDuration)
            .slideUp(r.settings.hideDuration)
            .removeClass(r.settings.animationOnShow)
            .addClass(r.settings.animationOnHide),
          n(i).removeClass("focus").find(".focus").removeClass("focus");
      });
    var p = function () {
      n("body").addClass("no-scroll"),
        r.settings.overlay &&
        (n(t).append("<div class='nav-overlay-panel'></div>"),
          n(t)
            .find(".nav-overlay-panel")
            .css("background-color", r.settings.overlayColor)
            .fadeIn(300)
            .on("click touchstart", function (n) {
              r.hideOffcanvas();
            }));
    },
      g = function () {
        n("body").removeClass("no-scroll"),
          r.settings.overlay &&
          n(t)
            .find(".nav-overlay-panel")
            .fadeOut(400, function () {
              n(this).remove();
            });
      };
    (r.showOffcanvas = function () {
      p(),
        "left" == r.settings.offCanvasSide
          ? n(t)
            .find(".nav-menus-wrapper")
            .css("transition-property", "left")
            .addClass("nav-menus-wrapper-open")
          : n(t)
            .find(".nav-menus-wrapper")
            .css("transition-property", "right")
            .addClass("nav-menus-wrapper-open");
    }),
      (r.hideOffcanvas = function () {
        n(t)
          .find(".nav-menus-wrapper")
          .removeClass("nav-menus-wrapper-open")
          .on(
            "webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
            function () {
              n(t)
                .find(".nav-menus-wrapper")
                .css("transition-property", "none")
                .off();
            }
          ),
          g();
      }),
      (r.toggleOffcanvas = function () {
        C() <= r.settings.mobileBreakpoint &&
          (n(t).find(".nav-menus-wrapper").hasClass("nav-menus-wrapper-open")
            ? (r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas"))
            : (r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")));
      }),
      (r.toggleSearch = function () {
        "none" == n(t).find(".nav-search").find("form").css("display")
          ? (n(t).find(".nav-search").find("form").fadeIn(200),
            n(t).find(".nav-search").find("input").focus())
          : (n(t).find(".nav-search").find("form").fadeOut(200),
            n(t).find(".nav-search").find("input").blur());
      }),
      (r.initNavigationMode = function (i) {
        r.settings.responsive
          ? (i <= r.settings.mobileBreakpoint &&
            u > r.settings.mobileBreakpoint &&
            (n(t)
              .addClass("navigation-portrait")
              .removeClass("navigation-landscape"),
              S(),
              s !== a && r.callback("onPortrait")),
            i > r.settings.mobileBreakpoint &&
            d <= r.settings.mobileBreakpoint &&
            (n(t)
              .addClass("navigation-landscape")
              .removeClass("navigation-portrait"),
              k(),
              g(),
              r.hideOffcanvas(),
              s !== a && r.callback("onLandscape")),
            (u = i),
            (d = i))
          : (n(t).addClass("navigation-landscape"),
            k(),
            s !== a && r.callback("onLandscape"));
      });
    var b = function () {
      n("html").on("click.body touchstart.body", function (i) {
        0 === n(i.target).closest(".navigation").length &&
          (n(t).find(".nav-submenu").fadeOut(),
            n(t).find(".focus").removeClass("focus"),
            n(t).find(".nav-search").find("form").fadeOut());
      });
    },
      C = function () {
        return (
          i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
        );
      },
      w = function () {
        n(t).find(".nav-menu").find("li, a").off(l).off(f).off(c);
      },
      O = function () {
        if (C() > r.settings.mobileBreakpoint) {
          var i = n(t).outerWidth(!0);
          n(t)
            .find(".nav-menu")
            .children("li")
            .children(".nav-submenu")
            .each(function () {
              n(this).parent().position().left + n(this).outerWidth() > i
                ? n(this).css("right", 0)
                : n(this).css("right", "auto");
            });
        }
      },
      y = function () {
        function i(i) {
          var e = n(i).children(".megamenu-tabs-nav").children("li"),
            a = n(i).children(".megamenu-tabs-pane");
          n(e).on("click.tabs touchstart.tabs", function (i) {
            i.stopPropagation(),
              i.preventDefault(),
              n(e).removeClass("active"),
              n(this).addClass("active"),
              n(a).hide(0).removeClass("active"),
              n(a[n(this).index()]).show(0).addClass("active");
          });
        }
        if (n(t).find(".megamenu-tabs").length > 0)
          for (var e = n(t).find(".megamenu-tabs"), a = 0; a < e.length; a++)
            i(e[a]);
      },
      k = function () {
        w(),
          h(),
          navigator.userAgent.match(/Mobi/i) ||
            navigator.maxTouchPoints > 0 ||
            "click" == r.settings.submenuTrigger
            ? n(t)
              .find(".nav-menu, .nav-dropdown")
              .children("li")
              .children("a")
              .on(l, function (e) {
                if (
                  (r.hideSubmenu(
                    n(this).parent("li").siblings("li"),
                    r.settings.effect
                  ),
                    n(this)
                      .closest(".nav-menu")
                      .siblings(".nav-menu")
                      .find(".nav-submenu")
                      .fadeOut(r.settings.hideDuration),
                    n(this).siblings(".nav-submenu").length > 0)
                ) {
                  if (
                    (e.stopPropagation(),
                      e.preventDefault(),
                      "none" == n(this).siblings(".nav-submenu").css("display"))
                  )
                    return (
                      r.showSubmenu(n(this).parent("li"), r.settings.effect),
                      O(),
                      !1
                    );
                  if (
                    (r.hideSubmenu(n(this).parent("li"), r.settings.effect),
                      "_blank" === n(this).attr("target") ||
                      "blank" === n(this).attr("target"))
                  )
                    i.open(n(this).attr("href"));
                  else {
                    if (
                      "#" === n(this).attr("href") ||
                      "" === n(this).attr("href") ||
                      "javascript:void(0)" === n(this).attr("href")
                    )
                      return !1;
                    i.location.href = n(this).attr("href");
                  }
                }
              })
            : n(t)
              .find(".nav-menu")
              .find("li")
              .on(f, function () {
                r.showSubmenu(this, r.settings.effect), O();
              })
              .on(c, function () {
                r.hideSubmenu(this, r.settings.effect);
              }),
          r.settings.hideSubWhenGoOut && b();
      },
      S = function () {
        w(),
          h(),
          r.settings.visibleSubmenusOnMobile
            ? n(t).find(".nav-submenu").show(0)
            : (n(t)
              .find(".submenu-indicator")
              .removeClass("submenu-indicator-up"),
              r.settings.submenuIndicator && r.settings.submenuIndicatorTrigger
                ? n(t)
                  .find(".submenu-indicator")
                  .on(l, function (i) {
                    return (
                      i.stopPropagation(),
                      i.preventDefault(),
                      r.hideSubmenu(
                        n(this).parent("a").parent("li").siblings("li"),
                        "slide"
                      ),
                      r.hideSubmenu(
                        n(this)
                          .closest(".nav-menu")
                          .siblings(".nav-menu")
                          .children("li"),
                        "slide"
                      ),
                      "none" ==
                        n(this)
                          .parent("a")
                          .siblings(".nav-submenu")
                          .css("display")
                        ? (n(this).addClass("submenu-indicator-up"),
                          n(this)
                            .parent("a")
                            .parent("li")
                            .siblings("li")
                            .find(".submenu-indicator")
                            .removeClass("submenu-indicator-up"),
                          n(this)
                            .closest(".nav-menu")
                            .siblings(".nav-menu")
                            .find(".submenu-indicator")
                            .removeClass("submenu-indicator-up"),
                          r.showSubmenu(
                            n(this).parent("a").parent("li"),
                            "slide"
                          ),
                          !1)
                        : (n(this)
                          .parent("a")
                          .parent("li")
                          .find(".submenu-indicator")
                          .removeClass("submenu-indicator-up"),
                          void r.hideSubmenu(
                            n(this).parent("a").parent("li"),
                            "slide"
                          ))
                    );
                  })
                : n(t)
                  .find(".nav-menu, .nav-dropdown")
                  .children("li")
                  .children("a")
                  .on(l, function (e) {
                    if (
                      (e.stopPropagation(),
                        e.preventDefault(),
                        r.hideSubmenu(
                          n(this).parent("li").siblings("li"),
                          r.settings.effect
                        ),
                        r.hideSubmenu(
                          n(this)
                            .closest(".nav-menu")
                            .siblings(".nav-menu")
                            .children("li"),
                          "slide"
                        ),
                        "none" ==
                        n(this).siblings(".nav-submenu").css("display"))
                    )
                      return (
                        n(this)
                          .children(".submenu-indicator")
                          .addClass("submenu-indicator-up"),
                        n(this)
                          .parent("li")
                          .siblings("li")
                          .find(".submenu-indicator")
                          .removeClass("submenu-indicator-up"),
                        n(this)
                          .closest(".nav-menu")
                          .siblings(".nav-menu")
                          .find(".submenu-indicator")
                          .removeClass("submenu-indicator-up"),
                        r.showSubmenu(n(this).parent("li"), "slide"),
                        !1
                      );
                    if (
                      (n(this)
                        .parent("li")
                        .find(".submenu-indicator")
                        .removeClass("submenu-indicator-up"),
                        r.hideSubmenu(n(this).parent("li"), "slide"),
                        "_blank" === n(this).attr("target") ||
                        "blank" === n(this).attr("target"))
                    )
                      i.open(n(this).attr("href"));
                    else {
                      if (
                        "#" === n(this).attr("href") ||
                        "" === n(this).attr("href") ||
                        "javascript:void(0)" === n(this).attr("href")
                      )
                        return !1;
                      i.location.href = n(this).attr("href");
                    }
                  }));
      };
    (r.callback = function (n) {
      s[n] !== a && s[n].call(t);
    }),
      r.init();
  }),
    (n.fn.navigation = function (i) {
      return this.each(function () {
        if (a === n(this).data("navigation")) {
          var e = new n.navigation(this, i);
          n(this).data("navigation", e);
        }
      });
    });
})(jQuery, window, document);

(function ($) {
  "use strict";

  var $window = $(window);

  if ($.fn.navigation) {
    $("#navigation1").navigation();
    $("#always-hidden-nav").navigation({
      hidden: true
    });
  }

  $window.on("load", function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });
})(jQuery);

// My Custom Header JS End =======================

// Header Search Btn ==============
// ---- ---- Const ---- ---- //
let inputBox = document.querySelector('.input-box'),
  searchIcon = document.querySelector('.search'),
  closeIcon = document.querySelector('.close-icon');

// ---- ---- Open Input ---- ---- //
searchIcon.addEventListener('click', () => {
  inputBox.classList.add('open');
});
// ---- ---- Close Input ---- ---- //
closeIcon.addEventListener('click', () => {
  inputBox.classList.remove('open');
});



 // Video Gallery carousel start======================
 $('.success_student_carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay: true,
  autoplayHoverPause:false,
  autoplaySpeed:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          
      },
      600:{
          items:2,
          
      },
      1000:{
          items:3,
         
      }
  }
});
 // Event carousel start======================
 $('.event_carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay: true,
  autoplayHoverPause:false,
  autoplaySpeed:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          
      },
      600:{
          items:2,
          
      },
      1000:{
          items:3,
         
      }
  }
});
 // Video Gallery carousel start======================
 $('.video_gallery_carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay: true,
  autoplaySpeed:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          
      },
      600:{
          items:1,
          
      },
      1000:{
          items:2,
         
      }
  }
});

// logo owl carousel
 // owl carousel start======================
 $('.brand_logos').owlCarousel({
  loop:true,
  margin:10,
  autoplay: true,
  autoplaySpeed:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:3,
          
      },
      600:{
          items:4,
          
      },
      1000:{
          items:5,
         
      }
  }
});



// Bangla Calender-----------------------
const localeList = [
  { key: "bn-IN", value: "Bengali" },
  { key: "ar-AR", value: "Arabic" },
  { key: "en-US", value: "English (US)" },
];

const select = document.querySelector("#locales");
const hud = document.querySelector("#hud");
const hud_2 = document.querySelector("#hud_2");

const populateSelectBox = () =>
  (select.innerHTML = localeList
    .map(
      ({ key, value }) => `
      <option value="${key}">
        ${value}
      </option>
    `
    )
    .join(""));

const updateHud = () => {
  const locale = select.value || "en-US";
  const now = new Date();
  hud.innerHTML = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }).format(now);
};

const init = () => {
  populateSelectBox();
  window.setInterval(updateHud, 1000);
};

init();



//English  Calendar ----------------------------

let calendar = document.querySelector('.calendar')
const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}
getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}
generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (month > 11 || month < 0) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}



// Students Info Table Search Filter==================


const fileUpload = (event) => {
  const files = event.target.files;
  const filesLength = files.length;
  if (filesLength > 0) {
    const imageSrc = URL.createObjectURL(files[0]);
    const imagePreviewElement = document.querySelector("#tb-image");
    imagePreviewElement.src = imageSrc;
    imagePreviewElement.style.display = "block";
  }
};





// scroll top======================
     $('.totop').tottTop({
      scrollTop:1000,
      scrtollTopBtnDuration:500,
      duration:100,
  });

// scroll top======================
     $('.sbuttons').tottTop({
      scrollTop:1000,
      scrtollTopBtnDuration:500,
      duration:100,
  });

/*========== Loading  ==========*/
$('.preloader').delay(200).fadeOut(700, function () {
  $(this).remove();
});



$(document).ready(function () {
  $(".tabs .tab-links a").on("click", function (e) {
    var currentAttrValue = $(this).attr("href");

    // Show/Hide Tabs
    $(".tabs " + currentAttrValue)
      .fadeIn(400)
      .siblings()
      .hide();
    // Change/remove current tab to active
    $(this).parent("li").addClass("active").siblings().removeClass("active");

    e.preventDefault();
  });
});



//TODO : Its a Completed Code
function formvalid() {
  var vaildpass = document.getElementById("pass").value;

  if (vaildpass.length <= 8 || vaildpass.length >= 20) {
    document.getElementById("vaild-pass").innerHTML = "Minimum 8 characters";
    return false;
  } else {
    document.getElementById("vaild-pass").innerHTML = "";
  }
}

function show() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("showimg").src =
      "https://static.thenounproject.com/png/777494-200.png";
  } else {
    x.type = "password";
    document.getElementById("showimg").src =
      "./vendors/images/login_eye.png";
  }
}








// Lightbox Photo Gallery ===================



