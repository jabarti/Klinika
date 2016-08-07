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
    
    $scope.entity2 = {
      name : "Course", 
      fields :
        [
          {type: "text", name: "firstname", label: "Name" , required: true, data:"asasas"},
          {type: "radio", name: "color_id", label: "Colors" , options:[{id: 1, name: "orange"},{id: 2, name: "pink"},{id: 3, name: "gray"},{id: 4, name: "cyan"}], required: true, data:""},
          {type: "email", name: "emailUser", label: "Email" , required: true, data:""},
          {type: "text", name: "city", label: "City" , required: true, data:""},
          {type: "text", name: "firstname", label: "Name" , required: false, data:"truppen"},
          {type: "number", name: "num", label: "num" , required: false, data:3},
          {type: "password", name: "pass", label: "Password" , min: 6, max:20, required: true, data:""},
          {type: "select", name: "teacher_id", label: "Teacher" , options:[{name: "Mark"},{name: "Claire"},{name: "Daniel"},{name: "Gary"}], required: true, data:""},
          {type: "checkbox", name: "car_id", label: "Cars" , options:[{id: 1, name: "bmw"},{id: 2, name: "audi"},{id: 3, name: "porche"},{id: 4, name: "jaguar"}], required: true, data:""}
        ]
      };  
    
    var absUrl = $location.search().id_wpis;
    var aktion = $location.search().aktion;


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
//                 alert("text: "+data.ID_Wpisu)
                 $scope.text = data;
                 $scope.entity = data.fields;
             });
             $http(request).error(function(data, status){
                 alert(data);
             });    
             
    $scope.submitEdit = function() {
        alert("Submitted");
//        alert($scope.val);
        var request = {
                 method: 'POST',
                 url : "EditAJAX.php",
                 data: {
                     absUrl: absUrl,
                     aktion: "EditSubmit"
                    }
             };
             $http(request).success(function(data){
                 alert("text: "+data.ID_Wpisu)
                 $scope.text = data;
//                 var url = "Edit.html#?id_wpis="+id_wpis+"&aktion="+"EditSubmit"
////                  alert(url)
//                    window.open(url);
             });
             $http(request).error(function(data, status){
                 alert(data);
             });
      
    };
 
}).directive("dynamicName",function($compile){
    return {
        restrict:"A",
        terminal:true,
        priority:1000,
        link:function(scope,element,attrs){
            element.attr('name', scope.$eval(attrs.dynamicName));
            element.removeAttr("dynamic-name");
            $compile(element)(scope);
        }
    }
})