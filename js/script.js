// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var searchTerm = $('#search-term').val();
    var giphyAPI = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: giphyAPI,
        method: "GET",
        success: function(response) {
            var gifURL = response.data[0].images.fixed_width.url;
            $('.text-center').html('<img src =' + gifURL + '/>');
        }
    });

});

