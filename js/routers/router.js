/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------
	var TodoRouter = Backbone.Router.extend({
		routes: {
			'dateAsc'	: 'dateAsc',
			'dateDesc'	: 'dateDesc',
			'*filter'	: 'setFilter'
		},

		dateAsc: function(){
			app.todos.trigger('dateAsc');
		},
		dateDesc: function(){
			app.todos.trigger('dateDesc');
		},
		setFilter: function (param) {
			// Set the current filter to be used
			app.TodoFilter = param || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			app.todos.trigger('filter');
		}
	});

	app.TodoRouter = new TodoRouter();
	Backbone.history.start();
})();
