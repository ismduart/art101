/**
 * Author:    Bella Duarte
 * Created:   25 November 2024
 **/


$('#activate').click(function(){
    $.ajax({
        // The URL for the request 
        url: "https://yesno.wtf/api",
        // The data to send (will be converted to a query string)
        data: { id: 123},
        // Whether this is a POST or GET request 
        type: "GET",
        // The type of data we expect back 
        dataType : "json",
    })
    // If the request succeeds
    .done(function( data ) { 
        console.log("Success!");
        $("#output").append("<h2>" + data.answer);
        $("#output").append("<img src='" + data.image + "'>")
    })
    // If the request fails
    .fail(function( xhr, status, errorThrown ) {
        console.log(errorThrown + " Status:" + status );
    }
    )
});