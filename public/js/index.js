/**
 * Created by jamesgotsell on 10/05/2016.
 */




// script for the shop drop down menu
$(document).ready(function() {
    $('li.dropdown').hover(
        function () {
            $(this).find('.dropdown-menu').slideDown();
        },
        function () {
            $(this).find('.dropdown-menu').slideUp();
        }
    );
});

//response nav

$(function(){
    $('header nav .hamburger').on('click', function(){
        event.preventDefault();
        console.log("boom")
        $(this).siblings('li').not('.hamburger').toggleClass('open');
    });
})