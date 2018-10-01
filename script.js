$("#randomFactButton").click(function(e) {
    var url = "https://api.chucknorris.io/jokes/random";

    $.ajax({
        url: url,
        dataType: "json",
        success: function(parsed_json) {
            console.log(parsed_json);
            $("#randomFact").html(parsed_json.value);
        }
    });
});