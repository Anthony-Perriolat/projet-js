$(function(){
    $.ajax({
        url: 'http://api.icndb.com/jokes/random/5', 
        method: 'GET', 
        dataType : 'json' 
    })

    .done(function(reponsechuck){
        

        console.log(reponsechuck.value[0].id); 
        // let data = JSON.stringify(reponsechuck); // enlever le sting 
        // $("section article").append(data['value']);
        $( "section" ).each(function( index ) {
            console.log( index + ": " + $( this ).text() );
          });

    })
    .fail(function(erreur){
        alert("La requete a échoué" + JSON.stringify(erreur));
    })
    .always(function(){
        alert("Requête effectuée");
    });
    reponsechuk.value.forEach(function(reponsechuck)); // for each n'exite pas jQ
});