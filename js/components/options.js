'use strict';

function createOption (array){
	var selected = $('<select> </select>');
	selected.attr('id', 'select');
	var option = $('<option></option>');
	option.text('selecciona una especie');
	option.attr('hidden', '');
	selected.append(option);
	array.forEach((e) =>{
		var optionFamily = $('<option></option>');
		var people = e.people[0];
		optionFamily.val(people.slice(people.length-3));
		//console.log(optionFamily);
		optionFamily.text(e.name);
		selected.append(optionFamily);
		console.log(optionFamily);
		console.log(people);

		} );

	

	return selected;
}
