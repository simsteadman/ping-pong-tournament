$(document).ready(function () {

let playerList = [];

//on submit add player to PlayerList array 
$("#submit").click(function(e) {


    e.preventDefault(); 
    //add a new player
    let newPlayer = $("#add").val();
    // clear the form field 
    $("#add").val('').removeAttr('checked').removeAttr('selected');
    // only submit completed field 
    if (newPlayer.length > 0) {
    //pushes the player to playerList array
    playerList.push(newPlayer);
    //output list of players to li 
    $( "<li>"+newPlayer+"</li>").appendTo("#list");
    
    }
});

        // function to shuffle the playerList array and push players into new pairs array and couple   
    
        let button = $("#randomise");
        button.on("click", () => {
   
        //shuffle function 
        function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

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
    
            //new array called pairs
            let pairs = [];
            //shuffle function 
            let fixtures = shuffle( playerList );
            let i = 0;

            //loop to split pairs array into pairs 
            for (let i = 0; i < fixtures.length; i += 2) {
            pairs.push(fixtures.slice(i, i+2)); 
            
            };

                //split pairs array with "vs" inbetween
                function split(arr) { return fixtures[i] + " vs " + fixtures[i+2]; }; 
         
                    //output to target #output
                    $('#output').html(split(fixtures)); 
       
       
                });


}); 