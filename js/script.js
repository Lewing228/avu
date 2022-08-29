var formatPrice = new Intl.NumberFormat("ru-RU");

function goal(e, a) {
  window.gtag &&
    window.ym &&
    (a || (a = {}), ym(45110709, "reachGoal", e, a), gtag("event", e, a));
}

function getFormData(e) {
  var a = {
    loadview: "ajax",
  };
  return (
    $(e)
      .find("input,textarea, select")
      .each(function () {
        a[this.name] = this.value;
      }),
    a
  );
}

function loaderRun() {
  $(".loader").fadeIn(100);
}

function loaderStop() {
  $(".loader").fadeOut();
}

function showNotification(e) {
  $(".notification .content").html(e),
    $(".notification").fadeIn(),
    setTimeout(function () {
      $(".notification").fadeOut();
    }, 4e3);
}
$(document).ready(function () {
  $(".our-shops .slider").owlCarousel({
    loop: !0,
    items: 1,
    autoplay: !0,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !0,
    dots: !0,
    nav: !0,
    navText: !1,
  }),
    $(".products-sliders .slider").owlCarousel({
      loop: !1,
      items: 5,
      autoplay: !1,
      autoplayTimeout: 4e3,
      autoplayHoverPause: !0,
      nav: !0,
      dots: !1,
      navText: !1,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1024: {
          items: 4,
        },
        1440: {
          items: 5,
        },
      },
    }),
    $(".simillar-products .slider").owlCarousel({
      loop: !1,
      items: 5,
      autoplay: !1,
      autoplayTimeout: 4e3,
      autoplayHoverPause: !0,
      nav: !0,
      dots: !1,
      navText: !1,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1024: {
          items: 4,
        },
        1440: {
          items: 5,
        },
      },
    }),
    $(".products-sliders .tabs .item").click(function () {
      const e = $(this).data("tab");
      $(".products-sliders .tabs .item").removeClass("active"),
        $(this).addClass("active"),
        $(".products-sliders .sliders .slider").removeClass("active"),
        $(`.products-sliders .sliders .slider[data-slider=${e}]`).addClass(
          "active"
        );
    }),
    $(".catalog-datatype .previews .item").click(function () {
      const e = $(this).data("item");
      $(".catalog-datatype .previews .item").removeClass("active"),
        $(this).addClass("active"),
        $(".catalog-datatype .current-image .item").removeClass("active"),
        $(`.catalog-datatype .current-image .item[data-item=${e}]`).addClass(
          "active"
        );
    }),
    $(".js-submit-filter").click(function () {
      let e = `?type=${$(".filter").data("type")}`,
        a = $(this).data("realm"),
        s = $(this).data("params");
      $(".filter .block.brand").each(function (a, s) {
        let t = $(s).data("name");
        if ($(this).data("values")) {
          $(s)
            .data("values")
            .split(",")
            .forEach((a) => {
              e += `&${t}[]=${a}`;
            });
        }
      }),
        $(".filter .block.price .input").each(function (a, t) {
          let o = $(t).attr("name"),
            i = $(t).val();
          e += `&${o}=${i}${s}`;
        }),
        $(".filter .block.availability .checkbox").hasClass("checked") &&
          (e += "&available=1"),
        (window.location.href = `/${a}${e}`);
    }),
    $(".filter .block .checkbox").click(function (e) {
      $(this).toggleClass("checked");
      let a = [],
        s = $(this).parents(".block");
      $(s)
        .find(".checkbox.checked")
        .each(function (e, s) {
          a.push($(s).data("value"));
        }),
        $(s).data("values", a.join(","));
    }),
    $(".js-showFilter").click(function () {
      $(".filter").slideToggle(), $(this).toggleClass("active");
    }),
    $(".js-mobileSearch").click(function () {
      $(this).parents(".search").toggleClass("active");
    });

  let activ = document.querySelector(".results");

  document.addEventListener("click", (e) => {
    if (e.target.className !== "results") {
      activ.classList.remove("active");
    }
  });

  const searchInput = document.querySelector(".search-input .input");
  searchInput.addEventListener("keyup", (e) => {
    let value = e.target.value;
    fetch(`/search.php?searchstring=${value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const results = document.querySelector(".search-input .results");
        results.innerHTML = "";
        results.classList.add("active");
        for (let i = 0; i < data.length; i++) {
          if (data[i]["title"]) {
            results.innerHTML =
              results.innerHTML +
              `
          <a href='/tabs/catalog/${data[i]["link"]}'>
            <div class='item'>
                <p class='img' style='background-image:url(/tabs/catalog/${data[i]["img"]})'></p>           
                <div class='r'>
                  <p class='titleSearch'>${data[i]["title"]}</p>
                  <div class='priceblock'>
                    <span class='t'>Цена:</span>
                    <span class='price'>${data[i]["price"]}KZT</span>                
                  </div>         
                </div>     
            </div>
          </a>
        `;
          }
        }
        if (data == false) {
          results.innerHTML =
            results.innerHTML +
            `
          <span class='t'>Результаты не найдены</span>\n
         
          `;
        }
      });
  });

  $(".js-openSignupPopup").click(function () {
    $(".popup-layout").fadeIn(), $(".popup.signup").fadeIn();
  }),
    $(".js-openLoginPopup").click(function () {
      $(".popup-layout").fadeIn(), $(".popup.login").fadeIn();
    }),
    $(".js-openCallbackPopup").click(function () {
      $(".popup-layout").fadeIn(), $(".popup.callback").fadeIn();
    }),
    $(".js-openOneclickPopup").click(function () {
      $(".popup-layout").fadeIn(), $(".popup.oneclick").fadeIn();
    }),
    $(".js-openOneclickPopup").click(function () {
      $(".popup-layout").fadeIn(), $(".popup.oneclick").fadeIn();
    }),
    $(".js-openResetPasswordPopup").click(function () {
      $(".popup.login").fadeOut(100),
        $(".popup.reset-password").delay(200).fadeIn(100);
    }),
    $(".popup .close").click(function () {
      $(this).parents(".popup").fadeOut(), $(".popup-layout").fadeOut();
    }),
    $(".notification .close").click(function () {
      $(".notification").fadeOut();
    }),
    $(window).click(function (e) {
      $(e.target).hasClass("popup-layout") &&
        ($(".popup").fadeOut(), $(".popup-layout").fadeOut()),
        $(e.target).hasClass("notification") &&
          $(".notification").is(":visible") &&
          $(".notification").fadeOut();
    }),
    $(".popup.signup .button").click(function () {
      let e = !0;
      const a = $(".popup.signup .form"),
        s = getFormData(a);
      s.name < 2 && ($(a).find(".name").addClass("invalid"), (e = !1)),
        s.login < 4 && ($(a).find(".email").addClass("invalid"), (e = !1)),
        s.phone < 4 && ($(a).find(".phone").addClass("invalid"), (e = !1)),
        s.password < 4 &&
          ($(a).find(".password").addClass("invalid"), (e = !1)),
        s.password2 < 4 &&
          ($(a).find(".password2").addClass("invalid"), (e = !1)),
        s.password != s.password2 &&
          ($(a).find(".password2").addClass("invalid"), (e = !1)),
        e &&
          (loaderRun(),
          $.ajax({
            type: "POST",
            url: "/action/signup",
            data: s,
            success: function (e) {
              loaderStop(),
                $(a).find(".input").val(""),
                e.success
                  ? ($(".popup.signup .message").text(
                      "Вы успешно зарегестрировались. Станица будет перезагружена"
                    ),
                    $(".popup.signup .message").addClass("success"),
                    setTimeout(function () {
                      window.location.href = "/profile";
                    }, 5e3))
                  : ($(".popup.signup .message").text(
                      "Такой адрес уже зарегестрирован."
                    ),
                    $(".popup.signup .message").addClass("fail"),
                    setTimeout(function () {
                      $(".popup.signup .message").slideUp();
                    }, 5e3)),
                $(".popup.signup .message").fadeIn();
            },
          }));
    }),
    $(".popup.login .button").click(function () {
      let e = !0;
      const a = $(".popup.login .form"),
        s = getFormData(a);
      s.login < 4 && ($(a).find(".email").addClass("invalid"), (e = !1)),
        s.password < 5 &&
          ($(a).find(".password").addClass("invalid"), (e = !1)),
        e &&
          (loaderRun(),
          $.ajax({
            type: "POST",
            url: "/action/login",
            data: s,
            success: function (e) {
              loaderStop(),
                e.success
                  ? (window.location.href = "/profile/orders")
                  : ($(".popup.login .message").text(
                      "Ошибка авторизации. Проверьте правильность ввода адреса и пароля."
                    ),
                    $(".popup.login .message").addClass("fail"),
                    $(".popup.login .message").slideDown(),
                    setTimeout(function () {
                      $(".popup.login .message").slideUp();
                    }, 5e3));
            },
          }));
    }),
    $(".popup.callback .button").click(function () {
      let e = !0;
      const a = $(".popup.callback .form"),
        s = getFormData(a);
      s.phone < 5 && ($(a).find(".phonel").addClass("invalid"), (e = !1)),
        e &&
          (loaderRun(),
          $.ajax({
            type: "POST",
            url: "/action/callback",
            data: s,
            success: function (e) {
              loaderStop(),
                $(".popup.callback .message").text(e),
                $(".popup.callback .message").addClass("success"),
                $(".popup.callback .message").slideDown(),
                setTimeout(function () {
                  $(".popup.callback .message").fadeOut(),
                    $(".popup-layout").fadeOut(),
                    $(".popup.callback input").val("");
                }, 5e3),
                goal("recall");
            },
          }));
    });
  $(".popup.reset-password .button").click(function () {
    let e = !0;
    const a = $(".popup.reset-password .form"),
      s = getFormData(a);
    s.email < 4 && ($(a).find(".email").addClass("invalid"), (e = !1)),
      e &&
        (loaderRun(),
        $.ajax({
          type: "POST",
          url: "/action/resetpassword",
          data: s,
          success: function (e) {
            loaderStop(),
              $(".popup.reset-password .message").text(e),
              $(".popup.reset-password .message").addClass("success"),
              $(".popup.reset-password .message").slideDown(),
              $(".popup.reset-password .email").val(""),
              setTimeout(function () {
                $(".popup.reset-password .message").slideUp(),
                  $(".popup-layout").fadeOut(100),
                  $(".popup.reset-password").fadeOut(100);
              }, 5e3);
          },
        }));
  }),
    $(".js-expandCatalogMenu").click(function () {
      $(".catalog .bottom").slideToggle();
    }),
    $(".js-menuMobile").click(function () {
      $(".menu-mobile").addClass("active"), $("body").addClass("no-scroll");
    }),
    $(".js-closeMobileMenu").click(function () {
      $(".menu-mobile").removeClass("active"),
        $("body").removeClass("no-scroll");
    }),
    $(".js-sendWholesalerRequest").click(function () {
      let e = !0;
      const a = $(this).siblings(".form"),
        s = getFormData(a);
      s.org_name < 2 && ($(a).find(".org-name").addClass("invalid"), (e = !1)),
        s.bin < 4 && ($(a).find(".bin").addClass("invalid"), (e = !1)),
        s.name < 2 && ($(a).find(".name").addClass("invalid"), (e = !1)),
        s.email < 4 && ($(a).find(".email").addClass("invalid"), (e = !1)),
        s.phone < 4 && ($(a).find(".phone").addClass("invalid"), (e = !1)),
        e &&
          (loaderRun(),
          $.ajax({
            type: "POST",
            url: "/action/wholesaler_request",
            data: s,
            success: function (e) {
              showNotification(e), $(a).find("input").val(""), loaderStop();
            },
          }));
    })
    // ymaps.ready(function () {
    //   $(".js-suggestView").keyup(function () {
    //     let e = $(this).val();
    //     ymaps.suggest(e).then(function (e) {
    //       e.length
    //         ? ($(".js-suggestView")
    //             .parent()
    //             .find(".suggest-items .suggest-item")
    //             .remove(),
    //           e.forEach((e) => {
    //             let a = `<div class="suggest-item">${e.value}</div>`;
    //             $(".js-suggestView").parent().find(".suggest-items").append(a);
    //           }),
    //           $(".js-suggestView")
    //             .parent()
    //             .find(".suggest-items")
    //             .addClass("active"))
    //         : $(".js-suggestView")
    //             .parent()
    //             .find(".suggest-items")
    //             .removeClass("active");
    //     });
    //   }),
    //     $(".suggest-items").on("click", ".suggest-item", function () {
    //       $(".address").val($(this).text()),
    //         $(this).parent().removeClass("active");
    //     });
    // }),
    // $("a[href^=tel]").click(function () {
    //   goal("clickphone", {
    //     phone: $(this).attr("href"),
    //   });
    // }),
    // $("a[href^=mailto]").click(function () {
    //   goal("clickmail", {
    //     mail: $(this).attr("href"),
    //   });
    // }),
    // $(".js-whatsapp").click(function () {
    //   goal("clickwhatsapp");
    // });
});

const btnMail = document.querySelector(".js-subscribeBtn");
const inputMail = document.querySelector(".input-mail");
const formMail = document.querySelector(".formMail");
const popupMail = document.querySelector(".mail")
const layout = document.querySelector('.popup-layout');
const reg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

btnMail.addEventListener("click", (e) => {
  if (!inputMail.value.match(reg)) {
    alert('Введите корректный электронный адрес')
  }else{
  let formData = new FormData(formMail);
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              layout.classList.add('show')
              popupMail.classList.add('show')
            }
          }
        };

        xhr.open("POST", "/sendMail.php", true);
        xhr.send(formData);
  }
});

// inputmask

const validation = new JustValidate(".productForm");

let tel = document.getElementById("tel");
let input = document.getElementById("name");
let err = document.getElementById("err");

const forms = document.getElementById("form");

window.onload = function () {
  forms.addEventListener("click", (e) => {
    if (tel.value.length < 16) {
      err.innerHTML = "Некорректно введен Телефон";
      tel.classList.add("error");
      e.preventDefault();
    } else if (tel) {
      tel.classList.remove("error");
    }

    if (
      input.value == "" ||
      input.value.length < 2 ||
      !/^([а-яА-ЯёЁ]*)$/.test(input.value)
    ) {
      err.innerHTML = "Некорректно введено Имя";
      input.classList.add("error");
      e.preventDefault();
    } else if (input) {
      input.classList.remove("error");
    }

    if (tel.value.length > 15 && input.value.length > 1) {
      validation.onSuccess((event) => {
        let formData = new FormData(event.target);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          err.innerHTML = `<img src='/fonts/load.svg'>`;
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              window.location.href = "/thanks/thanks.html";
            }
          }
        };

        xhr.open("POST", "/send.php", true);
        xhr.send(formData);
      });
    }
  });
};

var phoneMask = IMask(document.getElementById("tel"), {
  mask: "+{7}(000)000-00-00",
});

let arr = [];
let blocks = document.querySelectorAll(".first");
const wrapper = document.querySelector('div[data-slider="1"]');

for (let i = 0; i < blocks.length; i++) {
  arr.push(blocks[i]);
}

const shuffle = (arr) => {
  return arr.sort(() => Math.round(Math.random() * 100) - 50);
};
wrapper.innerHTML = "";

function render() {
  shuffle(arr).forEach((el) => {
    wrapper.innerHTML =
      wrapper.innerHTML +
      `
                <a class="catalog-node" href="${el.href}">
                      ${el.innerHTML}
                  </a>
  `;
  });
}

render();
