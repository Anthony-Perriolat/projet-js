$(function(){
    $.ajax({
        url: 'http://api.icndb.com/jokes/random/5', 
        method: 'GET', 
        dataType : 'json' 
    }).done(function(reponsechuck){    
        reponsechuck.value.forEach(element =>  $("section").append('<h1>Auteur : CHUCK NORRIS</h1>' + '<p>' 
        + element.joke + '</p>'
        + '<form action="" method="get"><input type="text"><button>Commenter</button></form>'
        ));
       // OU 
        /* for (prop in  reponsechuck.value) {
            $("section").append('<p>' + reponsechuck.value[prop].joke + '</p>');
        }*/
    })
    .fail(function(erreur){
        alert("La requete a échoué, Chuk Norris l'as cassé" + JSON.stringify(erreur));
    })
    .always(function(){
        alert("Requête effectuée : Chuck Norris n'attend pas c'est le temps qu'il l'attend");
    });

    // setting carrousel https://www.jqueryscript.net/slider/Responsive-Flexible-Mobile-Touch-Slider-Swiper.html

    var swiper = new Swiper('.swiper-container', {
                pagination: {
                  el: '.swiper-pagination',
                  type: 'progressbar',
                },
                navigation: {

                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                scrollbar: {
                  el: '.swiper-scrollbar',
                  hide: true,
                },

            });
});