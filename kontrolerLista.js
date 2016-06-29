/****************************************************
 * Project:     Klinika_Local
 * Filename:    kontrolerLista.js
 * Encoding:    UTF-8
 * Created:     2016-06-28
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/

apka.controller("ControllerLista", function($scope,$http){
    
     $http.get("QuerryAJAX.php")
    .then(function (response) {$scope.wpisy = response.data.records;});

});

