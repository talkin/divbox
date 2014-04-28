var app = angular.module('app', []);

app.controller('Controller',
    function($scope) {
        $scope.typing = 'welcome';
        $scope.toclick = function() {
            alert($scope.typing);
        };
    }
);
app.directive('divBox', function() {
    return {
        restrict: 'EA',
        transclude: true,
        template: '<div>' + '<div style="background: blue; width: 200px; height: 150px;TEXT-ALIGN:center;vertical-align:middle;line-height:150px;box-shadow: 10px 10px 5px #888888;" ng-click="kkk()")>{{typing}}</div>' + '</div>',
        link: function(scope, iElement, iAttrs) {
            scope.kkk = function() {
                alert(scope.typing);
            };
        }
    };
});
