/****************************************************
 * Project:     Klinika_Local
 * Filename:    kontrolerLista.js
 * Encoding:    UTF-8
 * Created:     2016-06-28
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/

apka.controller("ControllerLista", function($scope,$http,Datas){
    
     $http.get("QuerryAJAX.php")
    .then(function (response) {$scope.wpisy = response.data.records;});
    
//    $scope.BBBB = Datas.getLogCru();
    
    $scope.TakeDatainOrder = function(var_search, var_upordown){
//        alert(var_search +" "+ var_upordown);
        var var_search = var_search;
        var var_upordown = var_upordown;
        var url = "ProcesListaAJAX.php?switch=TakeDatainOrder&var_search="+var_search+"&var_upordown="+var_upordown;
//        alert(url)
        $http.get(url)
            .then(
            function SuccesCallback(response) {
                $scope.wpisy = response.data.records;
            },
            function ErrorCallback(response){
                alert("ErrorCallback"+response)
            }
            ); 
    };
    
    $scope.EditRecord = function(id_wpisu, aktion){
        var url = "Edit.html#?id_wpis="+id_wpisu+"&aktion="+aktion
//        alert(url)
        window.open(url);
    };
    
    $scope.SearchData = function(mamas_name){
//        alert(mamas_name)
//        var mama_lastname = mamas_name;
        var url = "ProcesListaAJAX.php?switch=SearchData&mama_lastname="+mamas_name;
//        alert(url)
        $http.get(url)
            .then(
            function SuccesCallback(response) {
                $scope.wpisy = response.data.records;
            }, 
            function ErrorCallback(response){
                alert("error: "+response +"/"+ response.data.records.sql);
            }
            );

    };
    
    $scope.DeleteRecord = function(id_record){
//        alert(id_record);
        var url = "ProcesListaAJAX.php?switch=DeleteRecord&id_record="+id_record;
//        alert(url)

        var del = confirm("Czy faktycznie skasować ten rekord?")
        if(del == true){
            $http.get(url)
                .then(
                function SuccesCallback(response) {
                    $scope.wpisy = response.data.records;
                },
                function ErrorCallback(response){
                    alert("ErrorCallback"+response)
                });
        }
    }

});

