$(function(){
    $('.rangeSlider-range').rangeslider({
        polyfill : false,
        onInit : function() {
            $('.range-output').html(this.$element.val());
        },
        onSlide : function( position, value ) {
            $('.range-output').html(this.$element.val());
        }
    });
    $('.rangeSlider-rate').rangeslider({
        polyfill : false,
        onInit : function() {
            $('.rate-output').html(this.$element.val());
        },
        onSlide : function( position, value ) {
            $('.rate-output').html(this.$element.val());
        }
    });
    $('.rangeSlider-incReviews').rangeslider({
        polyfill : false,
        onInit : function() {
            $('.incReviews-output').html(this.$element.val());
        },
        onSlide : function( position, value ) {
            $('.incReviews-output').html(this.$element.val());
        }
    });
    $('.rangeslider-exp').rangeslider({
        polyfill : false,
        onInit : function() {
            $('.exp-output').html(this.$element.val());
        },
        onSlide : function( position, value ) {
            $('.exp-output').html(this.$element.val());
        }
    });







    // CLICKS

    $('.menu-button').on('click', function (){
        $(this).find('.menu-toggle').toggleClass('active')
        $('.menu-block').slideToggle(250)
    })

    $('.categories-section__toggle-link').on('click', function (){
        $(this).toggleClass('active no_active');
        $('.categories-section__content').slideToggle(250)
    })

    $('.services-cart__item-more').on('click', function (){
        if($(this).hasClass('active')){
            $('.services-cart__item-more').removeClass('active')
            $('.services-cart__item-more').closest('.services-cart__item').eq(0).find('.services-cart__item-description').slideUp(250)
        }else{
            $(this).toggleClass('active')
            $(this).closest('.services-cart__item').eq(0).find('.services-cart__item-description').slideToggle(250)
        }
    })
})