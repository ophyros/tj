$(document).ready(function () {
	$(".button--showmore").click(function () {
		$(".article-preview--hidden").removeClass("article-preview--hidden");
		$(".best__footer").addClass("best__footer--hidden");
	});
	$(".mainmenu__hamburger").click(function () {
		$(".mainmenu__hamburger").toggleClass("mainmenu__hamburger--opened");
	});
	$(".article__shares").click(function () {
		$(".article__shares").toggleClass("article__shares--opened");
	});
	if (matchMedia) {
		var mq = window.matchMedia("(max-width: 880px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

	function WidthChange(mq) {
		var myswiper = null;
		if (mq.matches) {
			mySwiper = new Swiper(".best__article-previews", {
				loop: true,
				centeredSlides: true,
				slideClass: "article-preview",
				wrapperClass: "best__article-previews-wrapper",
				slideNextClass: "best__slider__slide-next",
				slidePrevClass: "best__slider__slide-prev",
				pagination: ".best__slider-controls",
				bulletClass: "best__slider-control",
				bulletActiveClass: "best__slider-control--active",
				paginationClickable: true,
				paginationBulletRender: function (index, className) {
					return "<span class=\"" + className + "\"></span>";
				}
			});
		} else {
			mySwiper.destroy(true, true);
		}
	}
});