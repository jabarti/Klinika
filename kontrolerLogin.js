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
       
    $scope.user = {};
       
        // sprawdzam czy przy wejściu do formularza jest zalogowany ktoś... 
        $scope.init = function () {
             var request = {
                 method: 'POST',
                 url : 'LoginAJAX.php?action=init'
             };
             $http(request).success(function(data){
                 $scope.LOGCru = "Zalogowany: " +data.name + " ( "+data.IP+")";
//                 alert("OK, \n outp:("+data.outp+")\n info:("+data.info+")\n sql:("+data.SQL+")\n valid:"+data.valid)
                                                
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

	$scope.submitData = function($event){
		var dataObj = {
				email : $scope.user.email,
				pass : $scope.user.pass,
		};
                
//                alert($scope.user.email)
//                alert($scope.user.pass)

		var request = {
			method : 'POST',
			url : 'LoginAJAX.php?action=login',
//                        action: 'logSubmitData',
			data : dataObj
		};

		$http(request).success(function(data){
			$scope.serverProblem = false;
			if(data.valid === true ) {
                            $scope.correctLogIn = true;
//                                $window.location.href = "/Formularz.html";
                                try{
                                    history.go(0)
                                }catch(e){
                                    alert(e)
                                }
			} else {
//                                alert("valid  !== true");
                                alert("NOT OK, valid:"+data.valid);
//                                alert("NOT OK, valid:"+data.SQL_set_crud);
			}
//			$scope.clearForm();
		});

		$http(request).error(function(data, status){
//                        alert("error");
                        alert("NOT OK"+data.error); 
			$scope.incorrectLogIn = false;
			$scope.serverProblem = true;
//			$scope.clearForm();
		});

		$event.preventDefault();
	};
        
	$scope.EditData = function($event){
		var dataObj = {
				email : $scope.user.email,
				pass : $scope.user.pass,
		};

		var request = {
			method : 'POST',
			url : 'LoginAJAX.php?action=editCrud',
//                        action: 'logSubmitData',
			data : dataObj
		};

		$http(request).success(function(data){
			$scope.serverProblem = false;
			if(data.valid === true ) {
                            $scope.correctLogIn = true;
                                try{
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