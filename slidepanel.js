$(document).ready(function() {
    $(".message").click(function() {
        $("#content").slideToggle("slow"); 
        $(this).toggleClass("changeImage");  
    });
});