import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		this.store.find('elasticsearch', {'user':'kimchy'}).then(function(post) {
			console.log(post);
		}, function(error) {
			console.trace('error',error);
		});
	} 
});


