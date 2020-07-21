var app = angular.module('fmbApp', ['ngRoute']);
            app.controller('ProductCtrl', function($scope, $http) { 
            $scope.welcomeScreen=true;     
            $scope.showContent=false;
             $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/1/public/values?alt=json")
                    .success(function(response) {
                    $scope.tools = response.feed.entry;
                    $scope.fishes=[];$scope.chickens=[];$scope.seafoods=[];
                  for (i=0; i<$scope.tools.length; i++){
                      if($scope.tools[i].gsx$available.$t == "y"){
                          if($scope.tools[i].gsx$category.$t == "fish"){
                             $scope.fishes.push($scope.tools[i]);
                           }
                          if($scope.tools[i].gsx$category.$t == "chicken"){
                             $scope.chickens.push($scope.tools[i]);
                           }
                          if($scope.tools[i].gsx$category.$t == "seafood"){
                             $scope.seafoods.push($scope.tools[i]);
                           }
                      }
                  }
              });
                
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 1600);
                
             setTimeout(function () {
              $scope.$apply(function(){
                  $scope.showContent=true;
              });
            }, 1600);                     
                                
            });

       app.controller('salesCtrl', function($scope, $http) { 

            $scope.customerName="";
            $scope.customerAddress="";
            $scope.mobileNumber="";
           $scope.qty=0;
           $scope.price=0;
           $scope.discount=0;
           $scope.total=0;
           $scope.uom="%";
           
  
           
         //  $scope.productList = [{item:'',price:'', total:'',discount:0,qty:''}];
           $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/1/public/values?alt=json")
                    .success(function(response) {
                    $scope.tools = response.feed.entry;
                    $scope.allProducts=[];
                    for (i=0; i<$scope.tools.length; i++){
                      if($scope.tools[i].gsx$available.$t == "y"){
                                $scope.allProducts.push(
                                            {name:$scope.tools[i].gsx$productname.$t,
                                             price:$scope.tools[i].gsx$sellingprice.$t,
                                             qty:$scope.tools[i].gsx$qty.$t,
                                             discount:0,
                                             total:$scope.tools[i].gsx$sellingprice.$t
                                            });
                             
                           }
                     
                      }
                console.log("====all=====",$scope.allProducts);
              });
           
           $scope.totalCalculation = function(item) {
               $scope.tempItem = JSON.parse(item);
     

           $scope.price= Number($scope.tempItem.price);
           $scope.qty=Number($scope.tempItem.qty);
           $scope.discount=Number($scope.tempItem.discount);

           $scope.total=Number($scope.price - ($scope.price * (($scope.discount)/100) ));
               
           }
           
           
           
       });

        app.config( [
            '$compileProvider','$routeProvider',
            function( $compileProvider,$routeProvider )
            {   
                
                $routeProvider
                .when("/", {
                    templateUrl : "product.html",
                    controller: 'ProductCtrl'
                 })
                .when('/fmbsales',{
                    templateUrl : '/sales.html',
                    controller: 'salesCtrl'
                })
                .otherwise ({
                    redirectTo: '/'
                });
      
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|sms|chrome-extension):/);
                // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
            }
        ]);
