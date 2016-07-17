/****************************************************
 * Project:     Klinika_Local
 * Filename:    kontrolerLogin.js
 * Encoding:    UTF-8
 * Created:     2016-07-13
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
apka.controller("formCtrl", function ($scope, $http, Datas) {
	$scope.emailPattern = new RegExp("(?=.*[@])(?=.*[.])");
//	$scope.passPattern = new RegExp("(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])");
	$scope.passPattern = new RegExp("(?=.*[A-Za-z])(?=.*[0-9])");
       
//        $scope.CCCC = Datas.getLogCru(); 
//
    $scope.user = {};

//    function myIP() {
//         var request = {
//             method: 'POST',
//             url : 'LoginAJAX.php?action=IP'
//         };
//         $http(request).success(function(data){
////             alert("IP:"+data.IP);
//            $scope.AAAA = data.IP;
//         });
//         $http(request).error(function(data, status){
//             alert(data);
//         });  
//    };
        
        // sprawdzam czy przy wejściu do formularza jest zalogowany ktoś... 
        $scope.init = function () {
//             alert(Datas.getLogCru());
//            myIP();
             var request = {
                 method: 'POST',
                 url : 'LoginAJAX.php?action=init'
             };
             $http(request).success(function(data){
//                 alert("OK, name:"+data.name);
//                 alert("Zalogowany: " +data.name + " ("+data.IP+")");
                 $scope.LOGCru = "Zalogowany: " +data.name + " ( "+data.IP+")";
//                 alert(data.actions + "/n"+data.outp+ "/n"+data.SQL)
//                 alert("OK, \n outp:("+data.outp+")\n info:("+data.info+")\n sql:("+data.SQL+")\n valid:"+data.valid)
                 
//                 
                 // test data
//                 if(data.ip === '85.202.149.116'){
//                    $scope.user.email = 'jabarti@wp.pl';
//                    $scope.user.pass = 'bml75bml75';
//                 }else{
//                    $scope.user.email = 'ibi@wp.pl';
//                    $scope.user.pass = '12345ib';
//                 }

                 // test koniec
                 
                 // jeśli jest valid, to nie ma logowania!!!
                 if(data.valid === true){
                    $scope.correctLogIn = true; 
                 }else{
                     $scope.correctLogIn = false;
                 }
             });
             $http(request).error(function(data, status){
                 alert(data);
             });    
        };

//	$scope.correctLogIn = false;
//	$scope.incorrectLogIn = false;
//	$scope.serverProblem = false;

	$scope.submitData = function($event){
		var dataObj = {
				email : $scope.user.email,
				pass : $scope.user.pass,
		};

		var request = {
			method : 'POST',
			url : 'LoginAJAX.php?action=login',
//                        action: 'logSubmitData',
			data : dataObj
		};

		$http(request).success(function(data){

//                        alert("OK"+data.SQL); 
//                        alert("OK"+data.outp); 
			$scope.serverProblem = false;
			if(data.valid === true ) {
//                                alert("OK, valid:"+data.valid);
                                
//                                alert("OK, info:"+data.info);
				$scope.correctLogIn = true;
//                                $window.location.href = "/Formularz.html";
                                    try{
//                                        Datas.setLogCru($scope.correctLogIn);
//                                        alert("$scope.correctLogIn: "+$scope.correctLogIn)
//                                        alert("Wynik:"+Datas.getLogCru())
                                        history.go(0)
                                    }catch(e){
                                        alert(e)
                                    }
			} else {
                                alert("NOT OK, valid:"+data.valid);
			}
//			$scope.clearForm();
		});

		$http(request).error(function(data, status){
                        alert("NOT OK"+data.error); 
			$scope.incorrectLogIn = false;
			$scope.serverProblem = true;
//			$scope.clearForm();
		});
                
                

		$event.preventDefault();
	};

	$scope.clearForm = function(){
		$scope.user.email = "";
		$scope.user.pass = "";
		$scope.angularForm.$setPristine();
		$scope.angularForm.$setUntouched();
	}
});