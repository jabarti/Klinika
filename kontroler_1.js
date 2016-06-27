/****************************************************
 * Project:     Klinika
 * Filename:    kontroler.js
 * Encoding:    UTF-8
 * Created:     2016-06-18
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/

apka.controller("ControllerNumOne", function($scope,$http){
    $scope.menu_btn_01 = "Home";
    $scope.menu_btn_02 = "Formularz";
    $scope.menu_btn_02_try = "FormularzTRY";
    $scope.menu_btn_03 = "Do Svenska";
    $scope.Title_Page_01 = "Klinika";
    
    $scope.processForm = function() {
        
      document.getElementById("message").textContent = "";
      var request = $http({
          method  : 'POST',
          url     : "ProcesAJAX.php",
          data    : {
              ID_Wpisu:         $scope.ID_Wpisu,
              data_utworzenia:  $scope.data_utworzenia+1,
              mama_firstname:   $scope.mama_firstname,
              mama_lastname:    $scope.mama_lastname          
          },
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
      });
    request.success(function (data) {
            alert(data)
            document.getElementById("message").textContent = "OK: "+data;
        });
        };

    
    $scope.calculateAge = function calculateAge(var_data) { // birthday is a date
        
        var year = "";
        var month = "";
        
        if(var_data !== undefined && var_data !== null){
            var ageDifMs = Date.now() - var_data.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            year = Math.abs(ageDate.getUTCFullYear() - 1970);
            month = Math.abs(ageDate.getUTCMonth());
        }
        return year + " lat i " + month + " mieś.";
    };
        
    $scope.calculateAge2 = function calculateAge2(var_data1, var_data2) { // birthday is a date1, make form is date2
        
        var years = "";
        var months = "";
//        alert("i'm in");
        
        if(var_data1 !== undefined && var_data1 !== null && var_data2 !== undefined && var_data2 !== null){
           
//            console.log("var_data1: "+var_data1+", var_data2"+var_data2)
            var ageDifMs2 = var_data2.getTime() - var_data1.getTime();
            var ageDate2 = new Date(ageDifMs2); // miliseconds from epoch
            years = Math.abs(ageDate2.getUTCFullYear() - 1970);
            months = Math.abs(ageDate2.getUTCMonth());
//            console.log("calculateAgeZFormularza: " + years + " lat i " + months + " mieś.")
        }
        return years + " lat i " + months + " mieś.";
    };
    
});



