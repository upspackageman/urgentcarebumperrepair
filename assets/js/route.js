$(document).ready(function(){
	
		
	 $('.route').on('click', function(e){  
		e.preventDefault( );
		var pageRef = $(this).attr('href');
	 
		callPage(pageRef);
		
	 });
	 
function callPage(pageRefInput){
		$.ajax({

		url: pageRefInput,

		type: "GET",

		dataType : 'text',

		success: function(response) {
		console.log('the page was loaded', response);
		$('.content').html(response);
		},

		error: function(){
		console.log('the page was NOT loaded', error);
		},

		complete: function(xhr, status){
		console.log('The request is complete!');
		}

		});	 

	 
};

$('html, body').animate({scrollTop:0}, 0);



});
