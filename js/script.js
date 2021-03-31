let idArt = 1;

$(document).ready(function () {
  let data = $.ajax({
    url: 'http://api.icndb.com/jokes/random/10',
    method: 'GET',
    dataType: 'json'
  }).done(function (reponsechuck) {
    reponsechuck.value.forEach(element => $("#mesarticles").append('<div class="aricleUnitaire"> <h1>Auteur : CHUCK NORRIS</h1>' + '<p>'
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
  // rafraîchir article 
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
    menuDropdown();
  });
  // poste d'aricle 
  $('#send').click(function () {
    sendForm();
 });
printImg();


 // ---- fin $ ----
});
 // envoie du formulaire 

 function sendForm() {
  let title = $("#title").val();
  let content = $("#articleContent").val(); 
  $('#mesarticles').append(
  '<article class="aricleUnitaire"id="art'+idArt+'">\
  <button onclick="deleteArticle('+idArt+')">-</button>\
  <h4>' + title + '</h4>\
  <p>' + content + '</p>\
  </article>')
  idArt++
  };

  function deleteArticle(idArt) {
    $('#art'+idArt).remove()
  }

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

// Galerie
let i =1;
function printImg() {
  while(i<=8) {
    $("#mesphotos").append(
      '<article class="photoUnitaire">\
      <img src="img/galery/img'+ i +'.jpg">\
      </article>')
      i++;
  }
}
let etat = true;
function changeview() {
  if(etat){
    $('#mesphotos').css('flex-direction','column')
  }
  else {
    $('#mesphotos').css('flex-direction','row')
  }
  etat = !etat;
}


function sendImg() {
  let content = $("#urlImg").val(); 
  $('#mesphotos').append(
  '<article class="photoUnitaire"id="img'+i+'">\
  <button onclick="deleteImg('+i+')">-</button>\
  <img src="' + content + '"/>\
  </article>')
  i++
  };
