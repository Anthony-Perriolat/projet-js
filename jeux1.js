$(document).ready(function () {
    
    if()
    // Stock de réponse
    let result = ['rock', 'paper', 'scissors']
    // ft recupere le choix du jeu 1  
    let nbpfc = 1;
    $('.toto').on('click', function () {
        let playerChoice = $(this).val();
        $('#result').append('<h4>Partie '+ nbpfc +'</h4>');
        nbpfc++;
        $('#result').append('<p> Vous avez choisi '+playerChoice+'</p>');
        let computerChoice = getComputerChoice();
        findWinner(playerChoice, computerChoice);
    });
    //ft choix de l'ordi
    function getComputerChoice() {
        let computerInput = Math.floor((Math.random() * 2));
        $('#result').append('<p>L\'ordi a choisi ' + result[computerInput] + '</p>');
        return result[computerInput];
    }
    function findWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            $('#result').append('Recommencez, égalité.');
        }
        else {
            switch (playerChoice) {
                case result[0]:
                    if (computerChoice === 'scissors') {
                        $('#result').append('Bravo, vous avez gagné.');
                    }
                    else if (computerChoice === 'paper') {
                        $('#result').append('Recommencez, vous avez perdu.');
                    }
                    break;
                case result[1]:
                    if (computerChoice === 'rock') {
                        $('#result').append('Bravo, vous avez gagné.');
                    }
                    else if (computerChoice === 'scissors') {
                        $('#result').append('Recommencez, vous avez perdu.');
                    }
                    break;
                case result[2]:
                    if (computerChoice === 'paper') {
                        $('#result').append('Bravo, vous avez gagné.');
                    }
                    else if (computerChoice === 'rock') {
                        $('#result').append('Recommencez, vous avez perdu.');
                    }
                    break;

                default:
                    $('#result').append('Un truc bizarre ce passe.')
            }
        }
    }
})
