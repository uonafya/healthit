(function($) { "use strict";

	// --------------------------------------------------
    // owlCarousel
    // --------------------------------------------------

    /* latest-projects-items */
    $("#latest-projects-items").owlCarousel({
        items: 3,
        itemsCustom : false,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [979, 2],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        navigation: true,
        pagination: false,
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
        ],
    });

    /* latest-news-items */
    $(".latest-news-items").owlCarousel({
			items: 2,
			itemsCustom : false,
			itemsDesktop : [1199, 2],
			itemsDesktopSmall : [979, 2],
			itemsTablet : [768, 2],
			itemsTabletSmall : false,
			itemsMobile : [479, 1],
			navigation: false,
			pagination: false,
    });

    // Custom Navigation owlCarousel - ".latest-news-items"
    $(".latest-next").on("click", function() {
        $(this).parent().parent().find('.latest-news-items').trigger('owl.next');
    });
    $(".latest-prev").on("click", function() {
        $(this).parent().parent().find('.latest-news-items').trigger('owl.prev');
    });

    /*testimonials-slider */
    $(".testimonials-slider").owlCarousel({
			items: 2,
			itemsCustom : false,
			itemsDesktop : [1199, 2],
			itemsDesktopSmall : [979, 2],
			itemsTablet : [768, 2],
			itemsTabletSmall : false,
			itemsMobile : [479, 1],
			navigation: false,
			pagination: false,
    });

    // Custom Navigation owlCarousel - ".testimonials-slider"
    $(".testi-next").on("click", function() {
        $(this).parent().parent().find('.testimonials-slider').trigger('owl.next');
    });
    $(".testi-prev").on("click", function() {
        $(this).parent().parent().find('.testimonials-slider').trigger('owl.prev');
    });
		/*client-logo-slider */
	 $("#client-logo").owlCarousel({
			 items : 6,
			 itemsCustom : false,
			 itemsDesktop : [1199, 5],
			 itemsDesktopSmall : [979, 4],
			 itemsTablet : [768, 2],
			 itemsTabletSmall : [768, 3],
			 itemsMobile : [479, 1],
	 pagination : false,
	 autoPlay : false,
	 slideSpeed : 300
	 });

	 // Custom Navigation owlCarousel - ".testimonials-slider"
	 $(".partner-next").on("click", function() {
			 $(this).parent().parent().find('#client-logo').trigger('owl.next');
	 });
	 $(".partner-prev").on("click", function() {
			 $(this).parent().parent().find('#client-logo').trigger('owl.prev');
	 });


})(jQuery);
