// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
var giphyAPI = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";
$("#search-button").click(function(){
    $.ajax({
        url: giphyAPI,
        method: "GET",
        success: function(response) {
            var gifURL = response.data[0].images.fixed_width.url;
            $('body').append('<img src =' + gifURL + '/>');
        }
    });

});

