<?php

/****************************************************
 * Project:     Klinika_Local
 * Filename:    Lista.php
 * Encoding:    UTF-8
 * Created:     2016-08-06
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
?>
<html>
 <head>
       
  </head>
     
  <body ng-app='Klinika'>
      <div  class="container" data-ng-controller="formCtrl" data-ng-init="init();"> 
          
         <div data-ng-hide="correctLogIn"><button class="btn btn-primary" onclick="window.location.href='index.html'">Logowanie</button></div>
         <!--header><h1 data-ng-hide="correctLogIn" class="head">{{Title_Page_02}}[hide]</h1></header>
         <header><h1 data-ng-show="correctLogIn" class="head">{{Title_Page_02}}[show]</h1></header-->
 
          <div data-ng-show="correctLogIn"  ng-controller='ControllerLista'>
              <div class="container" ng-controller='ControllerFormularz'>
                  <div ng-include="'View/Static/Menu.html'"></div>
                  <div class="pull-right" data-ng-show="correctLogIn">{{LOGCru}}</div> 
              </div>
               <form class="form-horizontal" role="form">
                   <div class="form-group form-buffer-pa">
                    <p class="col-sm-12"></p>
                    <label class="col-sm-2 control-label">Szukaj nazwisko mamy</label>
                        <div class="col-sm-3">
                            <input class="form-control" type="text" value="podaj nazwisko mamy" ng-model="mama_lastname">
                        </div>
                        <div class="col-sm-3">

                            <button type="button" ng-click="SearchData(mama_lastname)" class="btn btn-success">Szukaj</button>
                        </div>
                    <p class="col-sm-12"></p>
                   </div>
               </form>

                  <table class="table table-striped">
                  <thead>
                      <tr>
                        <th>ID_Wpisu</th>
                        <th>data_utworzenia
                              <button type="button" ng-click="TakeDatainOrder('data_utworzenia','down')" class="btn btn-success btn-xs"><span class="glyphicon glyphicon-arrow-down"></span> </button>
                              <button type="button" ng-click="TakeDatainOrder('data_utworzenia','up')" class="btn btn-success btn-xs"><span class="glyphicon glyphicon-arrow-up"></span> </button>                
                        </th>
                        <th>Imie Mamy</th>
                        <th>Nazwisko mamy
                              <button type="button" ng-click="TakeDatainOrder('mama_lastname','down')" class="btn btn-success btn-xs"><span class="glyphicon glyphicon-arrow-down"></span> </button>
                              <button type="button" ng-click="TakeDatainOrder('mama_lastname','up')" class="btn btn-success btn-xs"><span class="glyphicon glyphicon-arrow-up"></span> </button>
                        </th>
                        <th>imie dziecka
                              <button type="button" ng-click="TakeDatainOrder('imie_dziecka','down')" class="btn btn-success btn-xs"><span class="glyphicon glyphicon-arrow-down"></span> </button>
                              <button type="button" ng-click="TakeDatainOrder('imie_dziecka','up')" class="btn btn-success btn-xs"><span class="glyphicon glyphicon-arrow-up"></span> </button>
                        </th>
                        <th>które dziecko</th>
                        <th>Usuń</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr ng-repeat="x in wpisy">
                        <td><button class="btn btn-primary" ng-click="EditRecord(x.ID_Wpisu, 'editStart')" formtarget="_blank">{{ x.ID_Wpisu }}</button></td>
                        <td>{{ x.data_utworzenia }}</td>
                        <td>{{ x.mama_firstname }}</td>
                        <td>{{ x.mama_lastname }}</td>
                        <td>{{ x.imie_dziecka }}</td>
                        <td>{{ x.ktore_dziecko }}</td>
                        <td><button type="button" ng-click="DeleteRecord(x.ID_Wpisu)" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> </button></td>
                      </tr>
                    </tbody>
                </table>
      </div>
    </div>
  </body>
</html>

