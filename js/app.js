$(document).ready(function(){

    $('body').scrollspy({target: ".navbar", offset: 50});


    $("#navbarCollapse a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            let hash = this.hash;
            // Animate script
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});