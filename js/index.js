'use strict';

const render = (root) =>{
	root.empty();
	root.append(createOption(state.families));

	$('#root').on('change','#select',selected);

}
const state = {
	families: null
};

$( _ =>{ 
	
	getJSON('http://swapi.co/api/species', (error,json) => {
		if(error){
			return alert(error.message);
		}
		state.families = json.results;
		console.log(state.families);

		const root = $('#root');
		render(root);
		});
	})

