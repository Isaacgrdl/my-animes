var app = angular.module('myAnimes', []);
app.controller('mainPage', function($scope, $http){
    $scope.dados = [];
    $scope.hasSearch = false;
    $scope.username = angular.username;

    $scope.searchProfile = function(username) {
        urlProfile = `https://api.jikan.moe/v3/user/${username}/profile`;
        $http.get(urlProfile).then(function(response){
            $scope.dados = response;
            $scope.favoritesAnimes = response.data.favorites.anime;
            $scope.favoritesMangas = response.data.favorites.manga;
            $scope.favoritesCharacters = response.data.favorites.characters;
            $scope.favoritesPeoples = response.data.favorites.people;
            $scope.hasSearch = true;
        });
    }

    $scope.refreshPage = function() {
        location.reload();
    }
});
