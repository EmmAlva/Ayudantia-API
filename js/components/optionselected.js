'use strict';

function selected(){

	showMember ($('#select').val());
	$('.especie').empty();
}

function showMember (people){

	$.getJSON('http://swapi.co/api/people/'+people, (response) => {
		var div =$('<div class = "especie"></div>');
		var name = response.name;
		div.text(name);
		$('#root').append(div);
		

	});
	
}

