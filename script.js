var url = "https://api.chucknorris.io/jokes/random";
var cat_add_on = "?category=";
var current_category = "all";
var is_cat_active = false;

$(document).ready(function() {
    getFact();
    
    $(document).keypress(function(e) {
            if ( e.keyCode === 82 || e.keyCode === 114 ) // R,r
                $("#randomFact").empty();
                getFact();
        });
        
    $('#categorySelect').on('change',() => {
        updateCategory()
    })
})

function getFact() {
    var cat_url
    if(is_cat_active) {
        cat_url = url + cat_add_on + current_category;
    } 
    else {
        cat_url = url
    }

    
    $('.loader').fadeIn(500, function() {
            $.ajax({
        url: cat_url,
        dataType: "json",
        success: function(parsed_json) {
            console.log(parsed_json);
            
            if(parsed_json.category == "explicit") {
                getFact();
                return;
            }
            printFact(parsed_json.value);
        }
    });
    })

}

function printFact(factHTML) {
    $('.loader').fadeOut(500, function() {
             $("#randomFact").html(factHTML);
    })
}

function updateCategory() {
    var select = $('#categorySelect');
    if(select.val() == "all") {
        is_cat_active = false;
    } else {
        is_cat_active = true;
    }
    current_category = select.val();
    $('#category').html(current_category);
}