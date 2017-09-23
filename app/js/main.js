$(document).ready(function () {

let playerList = [];

//on submit add player to PlayerList array 
$("#submit").on("click", (event) => {
//if statement to say IF odd number, send alert, OTHERWISE do this function 

    event.preventDefault(); 
    //add a new player
    let newPlayer = $("#add").val();
    // clear the form field 
    $("#add").val('').removeAttr('checked').removeAttr('selected');
    // only submit completed field 
    if (newPlayer.length > 0) {
    //pushes the player to playerList array
    playerList.push(newPlayer);
    //output list of players to li 
    $("<ul>"+newPlayer+"</ul>").appendTo("#list");
    
    }
});

//shuffle function 
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;

    }   

    return array;

}
        // function to shuffle the playerList array and push players into new pairs array and couple   
    
        let button = $("#randomise");
        button.on("click", () => {
            // $(this).addClass("animated shake");
            

            $('#game').empty(); 

    
            //new array called pairs
            let pairs = [];
            //shuffle function 
            let fixtures = shuffle( playerList );
            //loop to split pairs array into pairs 
            for (let i = 0; i < fixtures.length; i += 2) {
            pairs.push(fixtures.slice(i, i+2)); 
            
            };

            pairs.forEach(function(item, array) {

            

            $('#game').append('<ul>' + item[0] + ' vs ' + item[1] + '</ul>'); 
            $('#game').addClass('animated shake');
            })


       
       
                });


}); 