'use strict'

app.directive('variable', function () {
    return {
		restrict: 'E',
		template: '<section>' +
	        '<em>{{name}}</em>' +
	        '<input type="range" ng-model="val" ' +
	        'min="{{min}}" max="{{max}}" step="{{step}}" value="{{val}}">' +
	        '<span>{{description}} : {{val}}</span>' +
	        '</section>',
	    scope: {
	    	name: '@',
	    	val: '=name',
	    	description: '@',
	    	min: '=',
	    	max: '=',
	    	step:'='
	    },
		link: function (scope, elem, attrs, ctrl) {
			console.log('directiveRegistered', scope.val);
		}
    }
});