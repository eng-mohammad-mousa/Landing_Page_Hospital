$(document).ready(function () {

	// Auto Close Nav Scroll
	var WinWidth = $(window).width()
	var a;


	if (WinWidth < 768) {
		$('.nav-link').on('click', function () {
			$('#link-of-nav').collapse("hide");
		});
		$(window).on("scroll", function () {
			$("#link-of-nav").collapse("hide");
		});
		a = 98;
	} else {
		a = 90;
	}


	// For Navigation Link On Scroll 
	$(window).on('load scroll resize', function () {

		var winScrollTop = $(window).scrollTop();

		var aboutScrollTop = $("#about").offset().top;
		var facilityScrollTop = $("#facility").offset().top;
		var reviewScrollTop = $("#review").offset().top;
		var contactScrollTop = $("#contact").offset().top;
		var postScrollTop = $("#post").offset().top;

		var home80 = aboutScrollTop * a / 100;
		var about80 = ((facilityScrollTop - aboutScrollTop) * a / 100) + aboutScrollTop;
		var facility80 = ((reviewScrollTop - facilityScrollTop) * a / 100) + facilityScrollTop;
		var review80 = ((contactScrollTop - reviewScrollTop) * a / 100) + reviewScrollTop;
		var contact80 = ((postScrollTop - contactScrollTop) * a / 100) + contactScrollTop;


		if (winScrollTop < home80) {
			$(".navbar-nav li:first-of-type a").addClass("active");
			$(".navbar-nav li:first-of-type").siblings().children().removeClass("active");
		} else if (winScrollTop >= home80 && winScrollTop < about80) {
			$(".navbar-nav li:nth-of-type(2) a").addClass("active");
			$(".navbar-nav li:nth-of-type(2)").siblings().children().removeClass("active");
		} else if (winScrollTop >= about80 && winScrollTop < facility80) {
			$(".navbar-nav li:nth-of-type(3) a").addClass("active");
			$(".navbar-nav li:nth-of-type(3)").siblings().children().removeClass("active");
		} else if (winScrollTop >= facility80 && winScrollTop < review80) {
			$(".navbar-nav li:nth-of-type(4) a").addClass("active");
			$(".navbar-nav li:nth-of-type(4)").siblings().children().removeClass("active");
		} else if (winScrollTop >= review80 && winScrollTop < contact80) {
			$(".navbar-nav li:nth-of-type(5) a").addClass("active");
			$(".navbar-nav li:nth-of-type(5)").siblings().children().removeClass("active");
		} else {
			$(".navbar-nav li:nth-of-type(6) a").addClass("active");
			$(".navbar-nav li:nth-of-type(6)").siblings().children().removeClass("active");
		}

	})


	$(window).on("load scroll", function () {
		$(window).scrollTop() > 10 ? $("#up-arrow").fadeIn() : $("#up-arrow").fadeOut()
	});


	// Enable Gallery Photo (Magnific Popup Library)
	$(".facility").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: true
		},
		callbacks: {
			afterClose: function () {
				$('html').css('overflow-x', 'hidden');
			}
		}
	})


	$("#up-arrow").click(function () {
		$("body , html").animate({ scrollTop: 0 }, 100)
	})


	var i = document.querySelectorAll(".needs-validation");
	Array.prototype.slice.call(i).forEach(function (a) {
		a.addEventListener("submit", function (e) {
			a.checkValidity() || (e.preventDefault(), e.stopPropagation()), a.classList.add("was-validated")
		}, !1)
	});

	AOS.init({
		duration: 1000,
		delay: 250
	});



	$('body').css('overflow-y', 'visible');
	$("#body").css("opacity", "1")
	$("#cover").fadeOut();
});