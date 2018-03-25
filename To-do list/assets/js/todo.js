//check off specific to-dos

$("ul").on("click", "li",  function(){
	$(this).toggleClass("completed");
	
});

//click on trash icon to delete the to-dos.
$("ul").on("click" ,"span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


//Adding todos
$("input[type='text']").on("keypress", function(event){
	if (event.which === 13) {
	//Grabbing new todo from the input.
	var todoText = $(this).val();

	$(this).val("");
	//creating a new li 
	$("ul").append("<li><span><i class='fas fa-trash'></i></span> " +  todoText + "</li>");
	}
});


//Adding the click function to the plus sign
$(".fa-plus-circle").on("click", function(){
	$("input[type='text']").fadeToggle();
});
