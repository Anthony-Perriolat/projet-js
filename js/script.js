$(document).ready(function () {
  let data = $.ajax({
    url: 'http://api.icndb.com/jokes/random/10',
    method: 'GET',
    dataType: 'json'
  }).done(function (reponsechuck) {
    reponsechuck.value.forEach(element => $("section article").append('<div class="aricleUnitaire"> <h1>Auteur : CHUCK NORRIS</h1>' + '<p>'
      + element.joke + '</p></div>'
    ));
    // OU 
    /* for (prop in  reponsechuck.value) {
        $("section").append('<p>' + reponsechuck.value[prop].joke + '</p>');
    }*/
  })
    .fail(function (erreur) {
      alert("La requete a échoué, Chuk Norris l'as cassé" + JSON.stringify(erreur));
    });

    data;
    // rafrechir article 
    $('#refresh').click(function () {
      document.location.reload();
    })
    
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
  // menu deroulant 
  $('#buttonDropdown').click(function () {
    menuDropdown()
  });



});

let isOpen = false;
function menuDropdown() {
  if (isOpen) {
    document.getElementById('myDropdown').style.display = "none";
  }
  else {
    document.getElementById('myDropdown').style.display = "flex";
  }
  isOpen = !isOpen;
}