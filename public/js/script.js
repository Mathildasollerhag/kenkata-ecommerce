$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
                margin:30,
            },
            1000:{
                items:3,
            }
        }
    })

    $('div').tooltip();
    $.data('tooltip-custom-class', 'tooltip-danger').tooltip();
    $(document).on('inserted.bs.tooltip', function(e) {
        var tooltip = $(e.target).data('bs.tooltip');
        $(tooltip.tip).addClass($(e.target).data('tooltip-custom-class'));
    });
})