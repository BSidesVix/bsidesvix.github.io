let owl = $(".owl-carousel");
let carousel03 = $(".carousel03"); // galeria principal
let table_correusel = $("#table-correusel");

let debounce = function (func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    let context = this;
    let args = arguments;

    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

carousel03.slick({
  dots: false,
  infinite: true,
  useTransform: true,
  centerMode: false,
  nextArrow: $(".navigation-slide-next").append(`<div class="btn-next"></div>`),
  prevArrow: $(".navigation-slide-prev").append(`<div class="btn-prev"></div>`),
  autoplay: false,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
});

const requestSlides = function (ano, index) {
  $.ajax({
    url: window.location.href + "api/index.php",
    type: "get",
    data: {
      ano: ano,
      index: index,
    },
  }).done(function (galeria) {
    if (galeria.dados) {
      $(galeria.dados).map(function (i, e) {
        $(
          `#fotos .box_inner[data-ano='${ano}'][data-index='${index}'] .container_galeria.carousel02 .img[data-id='${i}']`
        ).css("background-image", `url('${e}')`);
      });
    }
  });
};
const listGaleria = function (controller) {
  let elementNoLoaderSlide;

  if (["next", "left"].includes(controller)) {
    const indexSlikeActive = $(
      "#fotos .box_inner:not(.slick-cloned).slick-active"
    ).prev();

    const parseIndexNumber = indexSlikeActive.data("slick-index");

    const newElements = $(
      "#fotos .box_inner:not(.slick-cloned)[data-loader='0']"
    ).map(function (index, element) {
      const elementSlide = $(element);
      const dataIndex = elementSlide.data("slick-index");
      if (dataIndex > parseIndexNumber) {
        return element;
      }
    });

    elementNoLoaderSlide = newElements.first();
  } else {
    const indexSlikeActive = $(
      "#fotos .box_inner:not(.slick-cloned).slick-active"
    ).next();
    const parseIndexNumber = indexSlikeActive.is(".slick-cloned")
      ? 0
      : indexSlikeActive.data("slick-index");

    const newElements = $(
      "#fotos .box_inner:not(.slick-cloned)[data-loader='0']"
    ).map(function (index, element) {
      const elementSlide = $(element);
      const dataIndex = elementSlide.data("slick-index");
      if (dataIndex < parseIndexNumber || parseIndexNumber === 0) {
        return element;
      }
    });

    elementNoLoaderSlide = newElements.last();
  }
  //se existe o elementNoLoaderSlide
  if (elementNoLoaderSlide.length > 0) {
    const ano = elementNoLoaderSlide.attr("data-ano");
    const index = elementNoLoaderSlide.attr("data-index");
    //console.log(ano, index);
    elementNoLoaderSlide.attr("data-loader", "1");
    requestSlides(ano, index);
  }
};
const menuGaleria = function (this_) {
  $("div[data-slide]").removeClass("active");

  if (!$(this_).hasClass("active")) {
    $(this_).addClass("active");
  }

  let clearCarousel03 = null;

  if (!clearCarousel03) {
    // clearTimeout(clearCarousel03);
  }
  let slideGo = $(this_).data("slide");
  $(".carousel03").slick("slickGoTo", slideGo);
  /*   clearCarousel03 = setTimeout(() => {
    let slideGo = $(this_).data("slide");
    $(".carousel03").slick("slickGoTo", slideGo);
  }, 0); */
};
$(document).on("click", ".navigation-slide-next", function () {
  listGaleria("next");
});
$(document).on("click", ".navigation-slide-prev", function () {
  //debounce(listGaleria("prev"), 800, true);
  listGaleria("prev");
});
$(".carousel03").on("swipe", function (event, slick, direction) {
  listGaleria(direction);
});

$("div[data-slide]").on("click", function (e) {
  menuGaleria(this);
});

table_correusel.slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: $(".navigation-slide-next-table").append(`<div class="btn-next-table"></div>`),
  prevArrow: $(".navigation-slide-prev-table").append(`<div class="btn-prev-table"></div>`),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable:false,
        swipe:false,
      }
    },
  ]
});

let carousel_Gallery = function () {
  $(".owl-carousel").owlCarousel("destroy");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
};
function urlBackGround(urlBackGround_image) {
  let style = urlBackGround_image;
  let urlPattern = /url\(["']?([^"')]+)["']?\)/;
  let match = style.match(urlPattern);
  let url = match ? match[1] : null;
  return url;
}
function openModal(key) {
  $("#modal_galeria_fotos").modal("show");
  owl.trigger("to.owl.carousel", key);
}
$(document).on("click", ".box_galera", function () {
  const contentImgs = $(".modal_galeria_fotos .container-modal.owl-theme");
  contentImgs.html("");
  const imgCurrent = $(this).find("div");
  const imgAll = $(this).closest(".container_galeria").find(".img");

  for (let i = 0; i < imgAll.length; i++) {
    const img = $(imgAll[i]);
    let urlBackGround_Image = urlBackGround($(img).attr("style"));
    contentImgs.append(`<div class="item">
    <div class="box-modal">
        <div style="background-image: url('${urlBackGround_Image}')"></div>
    </div>
    </div>`);
  }

  carousel_Gallery();
  openModal($(imgCurrent).data("id"));
});

function numberActiveRender() {
  setTimeout(function () {
    const numberActive = checkNumberActive();

    if (numberActive === 1) {
      $("#modal_galeria_fotos .fa-chevron-left").css("opacity", 0);
      $("#modal_galeria_fotos .btn_anterior").css("pointer-events", "none");
    } else {
      $("#modal_galeria_fotos .fa-chevron-left").css("opacity", 1);
      $("#modal_galeria_fotos .btn_anterior").css("pointer-events", "all");
    }

    if (numberActive === 5) {
      $("#modal_galeria_fotos .fa-chevron-right").css("opacity", 0);
      $("#modal_galeria_fotos .btn_proximo").css("pointer-events", "none");
    } else {
      $("#modal_galeria_fotos .fa-chevron-right").css("opacity", 1);
      $("#modal_galeria_fotos .btn_proximo").css("pointer-events", "all");
    }
  }, 500);

  function checkNumberActive() {
    let container = $(".modal_galeria_fotos");
    let item = $(".modal_galeria_fotos .owl-item").not(".cloned");
    let return_ = 0;

    for (let i = 0; i < container.length; i++) {
      const elementContainer = $(container[i]);
      for (let i = 0; i < item.length; i++) {
        const element = $(elementContainer[i]).find(".owl-item").not(".cloned");
        if (element.hasClass("active")) {
          return_ = i + 1;
        }
      }
    }
    return return_;
  }
}

$(".btn_anterior").on("click", function () {
  owl.trigger("prev.owl.carousel");
});

$(".btn_proximo").on("click", function () {
  owl.trigger("next.owl.carousel");
});
