/****************************************************
 * Project:     Klinika
 * Filename:    kontroler.js
 * Encoding:    UTF-8
 * Created:     2016-06-18
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/

apka.controller("ControllerEdit", function($scope,$http,Datas){
    // nazwy
    $scope.menu_btn_01 = "Home";
    $scope.menu_btn_02 = "Nowy Formularz";
    $scope.menu_btn_02_try = "FormularzTRY";
    $scope.menu_btn_03 = "Do Svenska";
    $scope.menu_btn_04 = "Lista"; 
    
    $scope.Title_Page_01 = "Klinika";
    $scope.Title_Page_02 = "Lista";

    //   Dane wstępne
    $scope.miasto = "Częstochowa";
    $scope.kod_poczt = "42-200";
    $scope.urodz_miasto = "Częstochowa";
    $scope.urodz_kod_poczt = "42-200";
    $scope.urodz_kraj = "Polska";
    
    // for test
    $scope.mama_firstname = "Jadzia";
    $scope.mama_lastname = "Lubińska";
    $scope.ulica = "Kraszewskiego";
    $scope.ulica_nr = "4a";
    $scope.ulica_nr_mieszkanie = "12";
    $scope.telefon = "+46765759997";
    $scope.email = "kazia@gmail.com";
    $scope.imie_dziecka = "Ancymonek";
    $scope.ktore_dziecko = "1";
    $scope.miejsce_urodzenia = "Szpital Bujakowo";
    $scope.urodz_ulica = "Porypanych pensjonariuszy";
    $scope.urodz_ulica_nr = "12";
    $scope.ile_wczesniej = "5 tyg";
    $scope.jaki_porod = "cesarskie cięcie";
    $scope.leki_porod = "Pyralgina dowcipnie 100mg/cm3";
    $scope.leki_polog = "Pentadrenax śliwkowy 100g/cycek";
    $scope.powod_zgloszenia = "Dziecko gryzie mamę a nie jabłka i kość";
    $scope.pierwsze_karmienie = "od razu, ledwie podniósł sznycel z ziemi";
    
//    var data_temp = $filter('date')(data_utworzenia, 'yyyy/mm/dd');
//    console.log(data_temp)
    
//    $scope.ID_Wpisu_rok = $filter('date')(Date.now(), "yyyy/MM/dd");
//    $scope.ID_Wpisu_rok = $filter('date')($scope.data_utworzenia, 'mediumDate');
//    $scope.data_utworzenia = $filter("date")(Date.now(), 'yyyy-MM-dd');
    
    // DO select: urodzone
    $scope.operatorsUrodz = [
        {value: 'o czasie', displayName: 'o czasie'},
        {value: 'wcześniej', displayName: 'wcześniej'},
        {value: 'później', displayName: 'później'}
     ],
    
    $scope.filterConditionUrodz={
        operator: $scope.operatorsUrodz[0]
//        operator: ""
    };
    // DO select: poród
    $scope.operatorsPorod = [
        {value: 'normalny', displayName: 'normalny'},
        {value: 'zabiegowy', displayName: 'zabiegowy'}
//        ,
//        {value: 'test', displayName: 'test_val'}
     ],
    
    $scope.filterConditionPorod={
        operator: $scope.operatorsPorod[0]
//        operator: 'normalny'
    };
    
    
    $scope.processForm = function() {
        
      document.getElementById("message").textContent = "";
      var request = $http({
          method  : 'POST',
          url     : "ProcesAJAX.php",
          data    : {
              ID_Wpisu:                     $scope.ID_Wpisu_nr,
              data_utworzenia:              $scope.data_utworzenia,
              
              mama_firstname:               $scope.mama_firstname,
              mama_lastname:                $scope.mama_lastname,     
              data_urodzenia_matka:         $scope.data_urodzenia_matka,     
              ulica:                        $scope.ulica,     
              ulica_nr:                     $scope.ulica_nr,     
              ulica_nr_mieszkanie:          $scope.ulica_nr_mieszkanie,     
              kod_poczt:                    $scope.kod_poczt,     
              miasto:                       $scope.miasto,  
              telefon:                      $scope.telefon,
              email:                        $scope.email,
              
              imie_dziecka:                 $scope.imie_dziecka,     
              data_urodzenia_dziecko:       $scope.data_urodzenia_dziecko,
              ktore_dziecko:                $scope.ktore_dziecko,
              
              miejsce_urodzenia_quest:      $scope.miejsce_urodzenia_quest,
              miejsce_urodzenia:            $scope.miejsce_urodzenia,
              urodz_ulica:                  $scope.urodz_ulica,
              urodz_ulica_nr:               $scope.urodz_ulica_nr,
              urodz_ulica_nr_mieszkanie:    $scope.urodz_ulica_nr_mieszkanie,
              urodz_kod_poczt:              $scope.urodz_kod_poczt,
              urodz_miasto:                 $scope.urodz_miasto,
              urodz_kraj:                   $scope.urodz_kraj,
              urodzone_czas:                $scope.filterConditionUrodz.operator.value,
              ile_wczesniej:                $scope.ile_wczesniej,              
              porod:                        $scope.filterConditionPorod.operator.value,
              jaki_porod:                   $scope.jaki_porod,
              leki_porod:                   $scope.leki_porod,
              leki_polog:                   $scope.leki_polog,
              powod_zgloszenia:             $scope.powod_zgloszenia,
              
              // Formularz_2 (w BD i plik html)
              
              pierwsze_karmienie:           $scope.pierwsze_karmienie,
              problem_dziecko:              $scope.problem_dziecko,
              problem_dziecko_opis:         $scope.problem_dziecko_opis,
              problem_mama:                 $scope.problem_mama,
              problem_mama_opis:            $scope.problem_mama_opis,
              karimienie_piersia:           $scope.karimienie_piersia,
              karimienie_piersia_opis:      $scope.karimienie_piersia_opis,
              kapturek:                     $scope.kapturek,
              kapturek_opis:                $scope.kapturek_opis,
              dopajanie:                    $scope.dopajanie,
              dopajanie_czym:               $scope.dopajanie_czym,
              dopajanie_jak_dlugo:          $scope.dopajanie_jak_dlugo,
              dopajanie_opis:               $scope.dopajanie_opis
          },
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
      });
    request.success(function (data) {
//            alert(data);
            document.getElementById("message").textContent = "OK: "+data;
        });
    request.error(function (data) {
//            alert(data);
            document.getElementById("message").textContent = "error: "+data;
        }); 
    };

    $scope.getYearOfDate = function getYearOfDate(var_data1){
        
        var year01 = "";

        if(var_data1 !== undefined && var_data1 !== null){
            year01 = Math.abs(var_data1.getFullYear());
        }

        return year01;
    };
    
    $scope.calculateAge = function calculateAge(var_data) { // birthday is a date
        
        var year = "";
        var month = "";
        var dagar = "";
        
        if(var_data !== undefined && var_data !== null){
            var ageDifMs = Date.now() - var_data.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            year = Math.abs(ageDate.getFullYear() - 1970);
            month = Math.abs(ageDate.getMonth()+1);
            dagar = Math.abs(ageDate.getDate());
        }
        return year + " lat i " + month + " mieś. i "+ dagar + "dni";
    };
        
    $scope.calculateAge2 = function calculateAge2(var_data1, var_data2) { // birthday is a date1, make form is date2
        
        var years = "";
        var months = "";
        var dagar = "";
//        alert("i'm in");
        
        if(var_data1 !== undefined && var_data1 !== null && var_data2 !== undefined && var_data2 !== null){
           
            console.log("var_data1: "+var_data1+", var_data2"+var_data2)
            var ageDifMs2 = var_data2.getTime() - var_data1.getTime();
            var ageDate2 = new Date(ageDifMs2); // miliseconds from epoch
            years = Math.abs(ageDate2.getFullYear() - 1970);
            months = Math.abs(ageDate2.getMonth());
            dagar = Math.abs(ageDate2.getDate());
//            console.log("calculateAgeZFormularza: " + years + " lat i " + months + " mieś." + dagar + "dni")
        }
        return years + " lat i " + months + " mieś. i "+ dagar + "dni";
    };    
});




