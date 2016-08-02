/****************************************************
 * Project:     Klinika
 * Filename:    kontroler.js
 * Encoding:    UTF-8
 * Created:     2016-06-18
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
apka.controller("ControllerFormularz", function($scope,$http,Datas){

    logOut = function(){
         var request = {
             method: 'POST',
             url : 'LoginAJAX.php?action=logOut'
         };
         $http(request).success(function(data){
//             alert(data.SQL)
//             alert("OK, \n outp:("+data.outp+")\n action:("+data.actions+")\n sql:("+data.SQL+")")
//             
//             // test data
             $scope.user.email = 'jabarti@wp.pl';
             $scope.user.pass = 'bml75bml75';

            $scope.correctLogIn = false;
            window.location.href = 'index.html';
         });
         $http(request).error(function(data, status){
             alert(data.SQL);
         });   
    };
    
//    $scope.AAAA = Datas.getLogCru();

    // nazwy
    $scope.menu_btn_01 = "Home";
    $scope.menu_btn_02 = "Nowy Formularz";
    $scope.menu_btn_02_try = "FormularzTRY";
    $scope.menu_btn_03 = "Do Svenska";
    $scope.menu_btn_04 = "Lista";
    $scope.menu_btn_05 = "Edycja";
    
    $scope.Title_Page_01 = "Klinika";
    $scope.Title_Page_02 = "Lista";

    //   Dane wstępne
    $scope.miasto = "Częstochowa";
    $scope.kod_poczt = "42-200";
    $scope.urodz_miasto = "Częstochowa";
    $scope.urodz_kod_poczt = "42-200";
    $scope.urodz_kraj = "Polska";
    
    // Default checkbox
    $scope.kapturek = 0;
    $scope.problem_dziecko = 0;
    $scope.problem_mama = 0;
    $scope.karimienie_piersia = 0;
    $scope.kapturek = 0;
    $scope.dopajanie = 0;
    $scope.nawal = 0;
    $scope.pobyt = 0;
    $scope.karmienie_piers = 0;
    $scope.kapturek2 = 0;
    $scope.dopajanie2 = 0;
    $scope.karmienie_noc = 0;
    $scope.sciaganie_pokarm = 0;
    $scope.aktywnosc = 0;
    $scope.kolka = 0;
    $scope.uspokajacz = 0;
    $scope.piers_wielkosc = 1;
    $scope.cycki = false;
    
    // for test
    $scope.data_utworzenia = '2016-05-01';
//    $scope.data_urodzenia_matka = '1987-05-01';
//    $scope.data_utworzenia = '2016-03-22';
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
    $scope.problem_dziecko = 1;
    $scope.problem_dziecko_opis = "dziecko zachowuje się dziwnie";
    $scope.problem_mama = 1;
    $scope.problem_mama_opis = "mama zachowuje się jeszcze dziwniej";
    $scope.karimienie_piersia = 1;
    $scope.karimienie_piersia_opis = "karmienie piersią wygląda wspaniale";
    $scope.kapturek = 1;
    $scope.kapturek_opis = "kpturek opisany";
    $scope.dopajanie =1;
    $scope.dopajanie_czym ="wódką";
    $scope.dopajanie_jak_dlugo = "3lata";
    $scope.dopajanie_opis ="co tam było w butelce";
    $scope.nawal =1;
    $scope.nawal_opis = "nawalony opis";
    $scope.problem_dziecko = 1;
    $scope.problem_dziecko_opis = "dziecko zachowuje się dziwnie";
    $scope.problem_mama = 1;
    $scope.problem_mama_opis = "mama zachowuje się jeszcze dziwniej";
    $scope.karimienie_piersia = 1;
    $scope.karimienie_piersia_opis = "karmienie piersią wygląda wspaniale";
    $scope.kapturek = 1;
    $scope.kapturek_opis = "kpturek opisany";
    $scope.dopajanie = 1;
    $scope.dopajanie_czym ="wódką";
    $scope.dopajanie_jak_dlugo = "3lata";
    $scope.dopajanie_opis ="co tam było w butelce";
    $scope.nawal =1;
    $scope.nawal_opis = "nawalony opis"

    $scope.karmienie_piers=1;
    $scope.karmienie_piers_czest = "zawsze";
    $scope.karmienie_piers_dlugo = "3lata";
    $scope.kapturek2 = 1;
    $scope.kapturek2_opis = "kapturek2 opis";
    $scope.dopajanie2 = 1;
    $scope.dopajanie2_czym = "wino musujące";
    $scope.dopajanie2_jak_dlugo = "codziennie";
    $scope.dopajanie2_opis ="picie, picie, picei";
    $scope.karmienie_noc = 1;
    $scope.karmienie_noc_opis = "opis karmienia noca";
    $scope.sciaganie_pokarm = 1;
    $scope.sciaganie_pokarm_cel = "nieznany";
    $scope.sciaganie_pokarm_ile = "ile trzeba";
    $scope.pieluchy = "tak";
    $scope.stolec = "smaczny";
    $scope.aktywnosc   = "znaczna";                                     
    $scope.zachowanie_karmienia = "Zachowuje się wspaniale";
    $scope.kolka = 1;
    $scope.uspokajacz = 1;
    $scope.uspokajacz_opis = "bardzo uspokajacz";
    $scope.leki_matka = "Perniloftaleina waginalna 200mg";
    $scope.leki_dziecko = "laktopiszczatol nawzjebny 20mg/kg";
    
    $scope.cycki_jakie = "wielkie";

    $scope.brodawka_jaka = "żarliwa";
    $scope.zmiany = 1;
    $scope.zmiany_opis = "zmainy są wielkie";
    $scope.stan_emocjonalny = "stan emocjonalny mnie powalił";
    $scope.obserwacja_dziecka = "dziecko jest czarne i nie nadaje się do prania";
    $scope.masa_ur = 123.34;
    $scope.data_01 = "2015-02-01";
    $scope.masa_min = 11.25;
    $scope.data_02
    $scope.masa_inne_a = 35.25;
    $scope.masa_inne_b = 4563.25;
    $scope.masa_inne_c = 5463.21;
    $scope.masa_inne_d = 585.32;
    $scope.masa_inne_e = 2451.32;
    $scope.masa_inne_f = 6654.21;
    $scope.masa_obecna = 4585.32;
    $scope.przyrost_sredni = 14585.32;
    
    $scope.zachowanie_dziecka_wizyta = "dziecko zachowuje sie wyniośle";
    $scope.otwieranie_ust = 1;
    $scope.ulozenie_ust=1;
    $scope.ulozenie_jezyka=1;
    $scope.ruchy_kasajace=1;
    $scope.ruchy_ssace=1
    $scope.ocena_karmienie_piers = "Karmienie przy piersi satysfakcjonuje obie strony";
    $scope.rozpoznanie = "Rozpoznano pierś prawdziwą (cycus factus)";
        
    $scope.cycki_parts = [
      {
        "shape": "poly",
        "type": "del_01",
        "coords": "179,250,182,81,256,134"
      }, 
      {
        "shape": "poly",
        "type": "del_02",
        "coords": "180,253,256,136,268,219"
      }, 
      {
        "shape": "poly",
        "type": "del_03",
        "coords": "180,255,267,221,257,314"
      },
      {
        "shape": "poly",
        "type": "del_04",
        "coords": "181,258,253,316,231,337,212,350,183,354"
      },
  
    
    ];
  
   $scope.partClicked = function(arg) {
//    alert(arg + ' clicked');
    $scope.odpowiedz_alla = arg;

//    alert($scope.odpowiedz_alla)
  };
  

    
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
    
    // DO select: brodawka
    $scope.operatorsBrodawka = [
        {value: 'prawidlowa', displayName: 'prawidłowa'},
        {value: 'rzekomo_wklesla', displayName: 'rzekomo wklęsła'},
        {value: 'wklesla', displayName: 'wklęsła'}
//        ,
     ],
    
    $scope.filterConditionBrodawka={
        operator: $scope.operatorsBrodawka[0]
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
              dopajanie_opis:               $scope.dopajanie_opis,
              nawal:                        $scope.nawal,
              nawal_opis:                   $scope.nawal_opis,
              pobyt:                        $scope.pobyt,
              karmienie_piers:              $scope.karmienie_piers,
              karmienie_piers_czest:        $scope.karmienie_piers_czest,
              karmienie_piers_dlugo:        $scope.karmienie_piers_dlugo,
              kapturek2:                    $scope.kapturek2,
              kapturek2_opis:               $scope.kapturek2_opis,
              dopajanie2:                   $scope.dopajanie2,
              dopajanie2_czym:              $scope.dopajanie2_czym,
              dopajanie2_jak_dlugo:         $scope.dopajanie2_jak_dlugo,
              dopajanie2_opis:              $scope.dopajanie2_opis,
              karmienie_noc:                $scope.karmienie_noc
              ,karmienie_noc_opis:          $scope.karmienie_noc_opis
              ,sciaganie_pokarm:            $scope.sciaganie_pokarm
              ,sciaganie_pokarm_cel:        $scope.sciaganie_pokarm_cel
              ,sciaganie_pokarm_ile:        $scope.sciaganie_pokarm_ile
              ,pieluchy:                    $scope.pieluchy
              ,stolec:                      $scope.stolec
              ,aktywnosc:                   $scope.aktywnosc
              ,zachowanie_karmienia:        $scope.zachowanie_karmienia
              ,kolka:                       $scope.kolka
              ,uspokajacz:                  $scope.uspokajacz
              ,uspokajacz_opis:             $scope.uspokajacz_opis
              ,leki_matka:                  $scope.leki_matka
              ,leki_dziecko:                $scope.leki_dziecko
              
              // Formularz_3 (w BD i plik html)
              ,piers_wielkosc:              $scope.piers_wielkosc.valueOf()
              ,cycki:                       $scope.cycki
              ,cycki_jakie:                 $scope.cycki_jakie
              
              //cyce
              ,obszar:                      $scope.obszar
//              ,kicha:                       $scope.kicha
              
              ,brodawka:                    $scope.filterConditionBrodawka.operator.value
              ,brodawka_jaka:               $scope.brodawka_jaka
              ,zmiany:                      $scope.zmiany
              ,zmiany_opis:                 $scope.zmiany_opis
              ,stan_emocjonalny:            $scope.stan_emocjonalny
              ,obserwacja_dziecka:          $scope.obserwacja_dziecka
              ,masa_ur:                     $scope.masa_ur
              ,data_01:                     $scope.data_01
              ,masa_min:                    $scope.masa_min
              ,data_02:                     $scope.data_02
              
              ,masa_inne_a:                 $scope.masa_inne_a
              ,data_03a:                    $scope.data_03a
              ,masa_inne_b:                 $scope.masa_inne_b
              ,data_03b:                    $scope.data_03b
              ,masa_inne_c:                 $scope.masa_inne_c
              ,data_03c:                    $scope.data_03c
              ,masa_inne_d:                 $scope.masa_inne_d
              ,data_03d:                    $scope.data_03d
              ,masa_inne_e:                 $scope.masa_inne_e
              ,data_03e:                    $scope.data_03e
              ,masa_inne_f:                 $scope.masa_inne_f
              ,data_03f:                    $scope.data_03f
              
              ,masa_obecna:                 $scope.masa_obecna
              ,data_04:                     $scope.data_04
              ,przyrost_sredni:             $scope.przyrost_sredni
              
              ,zachowanie_dziecka_wizyta:   $scope.zachowanie_dziecka_wizyta
              ,otwieranie_ust:              $scope.otwieranie_ust
              ,ulozenie_ust:                $scope.ulozenie_ust
              ,ulozenie_jezyka:             $scope.ulozenie_jezyka
              ,ruchy_kasajace:              $scope.ruchy_kasajace
              ,ruchy_ssace:                 $scope.ruchy_ssace
              ,ocena_karmienie_piers:                 $scope.ocena_karmienie_piers
              ,rozpoznanie:                 $scope.rozpoznanie
              ,korekta_poz:                 $scope.korekta_poz
              ,trening_ssania:                 $scope.trening_ssania
              ,dokarmianie:                 $scope.dokarmianie
              
              ,zalecenia_inne:                 $scope.zalecenia_inne
              
          },
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
      });
    request.success(function (data) {
//            alert(data);
            document.getElementById("message").textContent = "OK: "+data;
        });
    request.error(function (data) {
            alert("ERROR: "+data);
            document.getElementById("message").textContent = "ERROR: "+data;
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
    
//    $scope.przyrost_sredni = function przyrost_sredni(){
//        var waga_01 = 0;
//        var waga_02 = 0;
//        var waga_03 = 0;
//        var waga_04 = 0;
//        
//        if($scope.masa_ur != 0 && $scope.masa_min!= 0 && $scope.masa_inne != 0 && $scope.masa_obecna != 0){
//            waga_01 = $scope.masa_ur;
//            waga_02 = $scope.masa_min;
//            waga_03 = $scope.masa_inne;
//            waga_04 = $scope.masa_obecna;
//        }
//        
//        var przyrost = waga_01 + waga_02 + waga_03 + waga_04;
//        
//        return przyrost;
//    };
    
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
