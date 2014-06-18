$(document).ready( function() {
	$('.results-container .header').hide();
	$('.numberIn').submit( function(event){
		// zero out results if previous search has run
		$('.results').html('');
		$('.header h1 span').html('');
		// get the value of the number the user submitted
		var numIn = $(this).find("input[name='numIn']").val();
		getTrivia(numIn);
	});
});

//make enter submit button - does this need to go in the section above?
    $("#entry").keyup(function(event) {
        if(event.keyCode == 13){
            $("#button").click();
        }
	});



// takes error string and turns it into displayable DOM element
var showError = function(error){
	var errorText = '<p>' + error + '</p>';
	$('.results').append(errorText);
};

// submits number to be searched for on Numbers API
var getTrivia = function(numIn) {
	
	var request = numIn;
	var result = $.ajax({
		url: "http://numbersapi.com/" +request+"/",
		dataType: "jsonp",
		type: "GET",
		})
	.done(function(result){
		$('.results-container .header').show();
		$('.header h1 span').append(numIn);
		$('.results').append(result);
		$('#entry').html('');

		})
	.fail(function(jqXHR, error, errorThrown){
		var errorText = '<p>' + error + '</p>';
		$('.results').append(errorText);
		$('#entry').html('');
	});
};



