var used = false;
$(window).scroll(function() {
    var oTop = $('.counter-up').offset().top - window.innerHeight;
    if (!used && $(window).scrollTop() > oTop) {
        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 500,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        user = true;
    }
});