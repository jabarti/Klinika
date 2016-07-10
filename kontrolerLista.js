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
    
    $scope.TakeDatainOrder = function(var_search, var_upordown){
//        alert(var_search +" "+ var_upordown);
        var var_search = var_search;
        var var_upordown = var_upordown;
        var url = "ProcesListaAJAX.php?var_search="+var_search+"&var_upordown="+var_upordown;
        alert(url)
        $http.get(url)
            .then(function SuccesCallback(response) {$scope.wpisy = response.data.records;});
    };
    
    $scope.SearchMom = function(mamas_name){
        alert(mamas_name)
//        var mama_lastname = mamas_name;
        var url = "ProcesListaAJAX.php?mama_lastname="+mamas_name;
        alert(url)
        $http.get(url)
            .then(
            function SuccesCallback(response) {
                $scope.wpisy = response.data.records;
            }, 
            function ErrorCallback(response){
                alert("error: "+response +"/"+ response.data);
            }
            );

    };

});

