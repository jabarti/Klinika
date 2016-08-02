/****************************************************
 * Project:     Klinika
 * Filename:    kontroler.js
 * Encoding:    UTF-8
 * Created:     2016-06-18
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/

apka.controller("ControllerEdit", function($scope,$location, $http,Datas){
    
    // nazwy
    $scope.menu_btn_01 = "Home";
    $scope.menu_btn_02 = "Nowy Formularz";
    $scope.menu_btn_03 = "Do Svenska";
    $scope.menu_btn_04 = "Lista"; 
    $scope.menu_btn_05 = "Edycja"; 
    
    
        var absUrl = $location.search().id_wpis;
        var aktion = $location.search().aktion;
//        var absUrl = $location.search();

//        alert("AbsUrl: "+absUrl)
//        alert("aktion: "+aktion)
        
        var request = {
                 method: 'POST',
                 url : "EditAJAX.php",
                 data: {
                     absUrl: absUrl,
                     aktion: aktion
                    }
             };
             $http(request).success(function(data){
//                 alert("text: "+data)
                 $scope.text = data;
             });
             $http(request).error(function(data, status){
                 alert(data);
             });    


 

});




