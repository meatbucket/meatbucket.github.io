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
                
            $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/2/public/values?alt=json")
                    .success(function(response) {
                    $scope.banners = response.feed.entry;
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
                
             
                
            $scope.fish = "fish-button-active.svg";
            $scope.fishtab = true;
            $scope.chicken = "chicken-button.svg";
            $scope.chickentab = false;
            $scope.seafood = "seafood-button.svg";
            $scope.seafoodtab = false;    
                
            $scope.changeTab = function (param){
                if (param == 'fish'){
                    if ($scope.fish == 'fish-button.svg'){
                        $scope.fish = 'fish-button-active.svg';
                        $scope.fishtab = true;
                        $scope.chickentab = false;
                        $scope.seafoodtab = false;  
                        $scope.chicken = 'chicken-button.svg';
                        $scope.seafood = 'seafood-button.svg';
                    }     
                }
                if (param == 'chicken'){
                    if ($scope.chicken == 'chicken-button.svg'){
                        $scope.fish = 'fish-button.svg';
                        $scope.chicken = 'chicken-button-active.svg';
                        $scope.fishtab = false;
                        $scope.chickentab = true;
                        $scope.seafoodtab = false;
                        $scope.seafood = 'seafood-button.svg';
                    }    
                }
                if (param == 'seafood'){
                    if ($scope.seafood == 'seafood-button.svg'){
                         $scope.fish = 'fish-button.svg';
                        $scope.chicken = 'chicken-button.svg';
                        $scope.seafood = 'seafood-button-active.svg';
                         $scope.fishtab = false;
                        $scope.chickentab = false;
                        $scope.seafoodtab = true;
                    }      
                }
                
            }     
                        
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
           $scope.originalQty = "";
           $scope.originalPrice = "";
           $scope.bill = [];
           
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
                                             total:$scope.tools[i].gsx$sellingprice.$t,
                                             uom:$scope.tools[i].gsx$uom.$t
                                            });
                             
                           }
                     
                      }
              });
           
           $scope.totalCalculation = function(item) {
               $scope.tempItem = JSON.parse(item);
     

           $scope.price= Number($scope.tempItem.price);
           $scope.originalPrice = $scope.price;
           $scope.qty=Number($scope.tempItem.qty);
           $scope.originalQty = $scope.qty; 
           $scope.discount=Number($scope.tempItem.discount);       
           $scope.originaldiscount=$scope.discount;
           $scope.originalUom = $scope.tempItem.uom;  

           $scope.total=Number($scope.price - ($scope.price * (($scope.discount)/100) ));
               
           }
           
//           $scope.calculateBill = function (qty, discount, total){
//               if (discount != null && qty != null && total != null){
//                   $scope.price = $scope.originalPrice * qty;
//                   
//                   if ($scope.uom == "%"){
//                        $scope.total=$scope.total=Number(($scope.originalPrice * $scope.qty) - (($scope.originalPrice * $scope.qty) * (($scope.discount)/100) ));
//                   } else { 
//                       $scope.total=Number( ($scope.originalPrice * $scope.qty) - $scope.discount); 
//                   }
//                }
//               
//           }
           
           $scope.qtyChange= function(qty){
                $scope.qty = qty;
                if (qty != null){
                    $scope.price=$scope.originalPrice * qty;
                    $scope.total=$scope.price; 
                }else {
                    $scope.price=$scope.originalPrice * $scope.originalQty;
                    $scope.total=$scope.price; 
                }
           }
           
           $scope.discountChange= function(discount){
               if (discount != null){
                        $scope.discount = discount;
                        if ($scope.uom == "%"){
                            $scope.total=Number(($scope.originalPrice * $scope.qty) - (($scope.originalPrice * $scope.qty) * (($scope.discount)/100) ));
                        }else {
                          $scope.total=Number( ($scope.originalPrice * $scope.qty) - $scope.discount);   
                        }
                   
               } else {
                   $scope.discount = $scope.originaldiscount;
                   $scope.total = Number( ($scope.price * $scope.qty) - $scope.discount); 
               } 
           
           }
           
           
           $scope.discountChangebyTotal= function(total){
               if (total != null){
                   if ($scope.uom == "%"){
                       
                       
                   } else {   
                      $scope.discount = (total - $scope.price); 
                   }
                   
                   
               }
           
           }
           
           $scope.addBillData= function(item,originalUom,qty,price,discount,total,uom){
               $scope.tempItem = JSON.parse(item);
               $scope.bill.push ({"productName":$scope.tempItem.name,
                                 "qty":qty,"itemQtyUOM":originalUom,"price":price,"discount":discount,
                                  "total":total,"uom":uom});
               $scope.qty=0;
           $scope.price=0;
           $scope.discount=0;
           $scope.total=0;
           $scope.uom="%";
           $scope.originalQty = "";
           $scope.originalPrice = ""; 
           }
           
           $scope.removeRow = function (idx) {
              $scope.bill.splice(idx, 1);
           };
           
           
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
