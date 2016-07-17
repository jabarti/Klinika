/****************************************************
 * Project:     Klinika
 * Filename:    aplikacja.js
 * Encoding:    UTF-8
 * Created:     2016-06-18
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
var apka = angular.module('Klinika',[]);
//var angularForm2 = angular.module('angularForm', []);

// Create the factory that share the Fact
apka.factory('Datas', function(){
//  return { ALLcorrectLogIn: '' };
    var data = {
        ALLcorrectLogIn: 'test',
        User: '',
        valid_up: '' 
    };

    return {
        getLogCru: function () {
            return data.ALLcorrectLogIn;
        },
        setLogCru: function (state) {
            data.ALLcorrectLogIn = state;
        },
        getUser: function(){
            return data.User;
        },
        getValidUp: function (){
            return data.valid_up;
        },
//        myIP: function(){
//            var request = {
//                method: 'POST',
//                url : 'LoginAJAX.php?action=IP'
//                };
//                $http(request).success(function(data){
//                    alert("IP2:"+data.IP2);
//                    return data.IP2
//                });
//                $http(request).error(function(data, status){
//                    alert(data);
//            });
//        }
    };
    
//    function myIP() {
//         var request = {
//             method: 'POST',
//             url : 'LoginAJAX.php?action=IP'
//         };
//         $http(request).success(function(data){
////             alert("IP:"+data.IP);
//             alert("IP2:"+data.IP2);
////             $scope.AAAA = data.IP
//            $scope.AAAA =  data.IP2
//         });
//         $http(request).error(function(data, status){
//             alert(data);
//         });  
//    };
    
    
});
