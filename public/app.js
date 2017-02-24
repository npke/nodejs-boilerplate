var app = angular.module('homely', []);

app.controller('HomeController', function HomeController($scope) {
    $scope.gretting = 'Hello, I am Homely!';
});
