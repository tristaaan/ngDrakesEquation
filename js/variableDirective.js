'use strict'

app.directive('variable', function () {
    return {
        restrict: 'A',
        template: '<td><em ng-bind-html="name | nameFilter"></em></td>' +
            '<td><input type="range" ng-model="val" ' +
            'min="{{min}}" max="{{max}}" step="{{step}}" value="{{val}}">' +
            '{{description}}</td><td>{{val}}</td>',
        scope: {
            name: '@',
            val: '=name',
            description: '@',
            min: '=',
            max: '=',
            step:'='
        }
    };
});