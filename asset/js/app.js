var app = angular.module('fmbApp', ['ngRoute']);




            app.controller('ProductCtrl', function($scope, $http,$routeParams) { 
            $scope.welcomeScreen=true;     
            $scope.showContent=false;
            $scope.newObject = {};
            $scope.quantiyRequired='';
                
                
            $scope.setRequiredQuantity = function (qty){
                $scope.quantiyRequired = qty;
            }
            
            //Cart Implementation
              $scope.cart = [];
              $scope.increment = function(cartProduct) {
                cartProduct++;
              };
              $scope.decrement = function(cartProduct) {
                cartProduct--;
              };
                
        //Cart Implementation ends        
             $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/1/public/values?alt=json")
                    .success(function(response) {
                    $scope.tools = response.feed.entry;
                    $scope.fishes=[];$scope.chickens=[];$scope.seafoods=[];$scope.restaurants=[];$scope.marinateds=[];
                  for (var i=0; i<$scope.tools.length; i++){
                      if($scope.tools[i].gsx$available.$t == "y"){
                          if($scope.tools[i].gsx$category.$t == "fish"){
                              $scope.tools[i].gsx$productshortname.$t = Number($scope.tools[i].gsx$qty.$t);
                             $scope.fishes.push($scope.tools[i]);
                           }
                          if($scope.tools[i].gsx$category.$t == "chicken"){
                             $scope.tools[i].gsx$productshortname.$t = Number($scope.tools[i].gsx$qty.$t);  
                             $scope.chickens.push($scope.tools[i]);
                           }
                          if($scope.tools[i].gsx$category.$t == "seafood"){
                              $scope.tools[i].gsx$productshortname.$t = Number($scope.tools[i].gsx$qty.$t); 
                             $scope.seafoods.push($scope.tools[i]);
                           }
                          if($scope.tools[i].gsx$category.$t == "restaurant"){
                              $scope.tools[i].gsx$productshortname.$t = Number($scope.tools[i].gsx$qty.$t); 
                             $scope.restaurants.push($scope.tools[i]);
                           }
                          if($scope.tools[i].gsx$category.$t == "marinated"){
                              $scope.tools[i].gsx$productshortname.$t = Number($scope.tools[i].gsx$qty.$t); 
                             $scope.marinateds.push($scope.tools[i]);
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
            }, 500);
                
             setTimeout(function () {
              $scope.$apply(function(){
                  $scope.showContent=true;
              });
            }, 500); 
                   
             
            if( $routeParams.categoryName == 'chicken'){
               $scope.chicken = "chicken-button-active.svg";
            $scope.chickentab = true;    
            $scope.fish = "fish-button.svg";
            $scope.fishtab = false;
            $scope.seafood = "seafood-button.svg";
            $scope.seafoodtab = false;
            $scope.restaurant = "restaurant-button.svg";
            $scope.restauranttab = false;
                $scope.marinated = "marinated-button.svg";
            $scope.marinatedtab = false; 
            }
            else if ($routeParams.categoryName == 'fish'){
                $scope.chicken = "chicken-button.svg";
            $scope.chickentab = false;    
            $scope.fish = "fish-button-active.svg";
            $scope.fishtab = true;
            $scope.seafood = "seafood-button.svg";
            $scope.seafoodtab = false;
            $scope.restaurant = "restaurant-button.svg";
            $scope.restauranttab = false;
                $scope.marinated = "marinated-button.svg";
            $scope.marinatedtab = false; 
            }
            else if($routeParams.categoryName == 'kitchen'){
                $scope.chicken = "chicken-button.svg";
            $scope.chickentab = false;    
            $scope.fish = "fish-button.svg";
            $scope.fishtab = false;
            $scope.seafood = "seafood-button.svg";
            $scope.seafoodtab = false;
            $scope.restaurant = "restaurant-button-active.svg";
            $scope.restauranttab = true; 
                $scope.marinated = "marinated-button.svg";
            $scope.marinatedtab = false; 
            }
            
            else if($routeParams.categoryName == 'seafood'){
                $scope.chicken = "chicken-button.svg";
            $scope.chickentab = false;    
            $scope.fish = "fish-button.svg";
            $scope.fishtab = false;
            $scope.seafood = "seafood-button-active.svg";
            $scope.seafoodtab = true;
            $scope.restaurant = "restaurant-button.svg";
            $scope.restauranttab = false;
            $scope.marinated = "marinated-button.svg";
            $scope.marinatedtab = false; 
         
            } else if($routeParams.categoryName == 'marinated'){
                $scope.chicken = "chicken-button.svg";
            $scope.chickentab = false;    
            $scope.fish = "fish-button.svg";
            $scope.fishtab = false;
            $scope.seafood = "seafood-button.svg";
            $scope.seafoodtab = false;
            $scope.restaurant = "restaurant-button.svg";
            $scope.restauranttab = false;
            $scope.marinatedtab = true;
            $scope.marinated = "marinated-button-active.svg";
             
         
            } else {
                $scope.chicken = "chicken-button.svg";
            $scope.chickentab = false;    
            $scope.fish = "fish-button-active.svg";
            $scope.fishtab = true;
            $scope.seafood = "seafood-button.svg";
            $scope.seafoodtab = false;
            $scope.restaurant = "restaurant-button.svg";
            $scope.restauranttab = false;
            $scope.marinated = "marinated-button.svg";
            $scope.marinatedtab = false; 
            }     
                 
                
            $scope.changeTab = function (param){
                if (param == 'fish'){
                    if ($scope.fish == 'fish-button.svg'){
                        $scope.fishtab = true;
                        $scope.fish = 'fish-button-active.svg';
                        $scope.chickentab = false;
                        $scope.seafoodtab = false;
                        $scope.restauranttab = false; 
                        $scope.chicken = 'chicken-button.svg';
                        $scope.seafood = 'seafood-button.svg';
                        $scope.restaurant = "restaurant-button.svg";
                        $scope.marinated = "marinated-button.svg";
                        $scope.marinatedtab = false; 
                    }     
                }
                if (param == 'chicken'){
                    if ($scope.chicken == 'chicken-button.svg'){
                        $scope.chickentab = true;
                          $scope.chicken = 'chicken-button-active.svg';
                        $scope.fish = 'fish-button.svg';
                        $scope.fishtab = false;
                        $scope.seafoodtab = false;
                        $scope.restauranttab = false; 
                        $scope.seafood = 'seafood-button.svg';
                        $scope.restaurant = "restaurant-button.svg";
                        $scope.marinated = "marinated-button.svg";
                        $scope.marinatedtab = false; 
                    }    
                }
                if (param == 'seafood'){
                    if ($scope.seafood == 'seafood-button.svg'){
                        $scope.seafoodtab = true;
                        $scope.seafood = 'seafood-button-active.svg';
                         $scope.fish = 'fish-button.svg';
                        $scope.chicken = 'chicken-button.svg';
                         $scope.fishtab = false;
                        $scope.chickentab = false;
                        $scope.restauranttab = false;
                        $scope.restaurant = "restaurant-button.svg";
                        $scope.marinated = "marinated-button.svg";
                        $scope.marinatedtab = false; 
                    }      
                }
                if (param == 'restaurant'){
                    if ($scope.restaurant == 'restaurant-button.svg'){
                        $scope.restauranttab = true;
                        $scope.restaurant = "restaurant-button-active.svg";
                         $scope.fish = 'fish-button.svg';
                        $scope.chicken = 'chicken-button.svg';
                        $scope.seafood = 'seafood-button.svg';
                         $scope.fishtab = false;
                        $scope.chickentab = false;
                        $scope.seafoodtab = false;
                        $scope.marinated = "marinated-button.svg";
                        $scope.marinatedtab = false; 
                        
                    }      
                }
                
                if (param == 'marinated'){
                    if ($scope.marinated == 'marinated-button.svg'){
                        $scope.marinatedtab = true; 
                        $scope.marinated = "marinated-button-active.svg";
                         $scope.fish = 'fish-button.svg';
                        $scope.chicken = 'chicken-button.svg';
                        $scope.seafood = 'seafood-button.svg';
                        $scope.restaurant = "restaurant-button.svg";
                         $scope.fishtab = false;
                        $scope.chickentab = false;
                        $scope.seafoodtab = false;
                        $scope.restauranttab = false;
                        
                        
                    }      
                }
                
            }    
            
                   $scope.changeTab($routeParams.categoryName);
                        
            });


//Home Page Controller
app.controller('homeCtrl',function($scope,$http,$routeParams){
 $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/2/public/values?alt=json")
    .success(function(response) {
              $scope.welcomeScreen=true;     
              $scope.showContent=false;
              $scope.banners = response.feed.entry;
              console.log("==========banner==========",$scope.banners);
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 888);
     
            setTimeout(function () {
              $scope.$apply(function(){
                $scope.showContent=true;
              });
            }, 888);
    });
    
});

//All Product List Controller
app.controller('ProductListCtrl',function($scope,$http,$routeParams){
 $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/1/public/values?alt=json")
    .success(function(response) {
              $scope.welcomeScreen=true;     
              $scope.showContent=false;     
             $scope.tools = response.feed.entry;
                    $scope.fishes=[];$scope.chickens=[];$scope.seafoods=[];$scope.kitchens=[];$scope.marinateds=[];$scope.goatmeats=[];$scope.masales=[];$scope.eggs=[];
                  for (var i=0; i<$scope.tools.length; i++){
                      if($scope.tools[i].gsx$available.$t == "y"){
                          if($scope.tools[i].gsx$category.$t == "fish"){
                              $scope.tools[i].gsx$productshortname.$t = Number($scope.tools[i].gsx$qty.$t);
                             $scope.fishes.push($scope.tools[i]);
                           }
                          if($scope.tools[i].gsx$category.$t == "chicken"){
                             $scope.tools[i].gsx$productshortname.$t = Number($scope.tools[i].gsx$qty.$t);  
                             $scope.chickens.push($scope.tools[i]);
                           }
                          if($scope.tools[i].gsx$category.$t == "seafood"){
                              $scope.tools[i].gsx$productshortname.$t = Number($scope.tools[i].gsx$qty.$t); 
                             $scope.seafoods.push($scope.tools[i]);
                           }
                          if($scope.tools[i].gsx$category.$t == "kitchen"){
                              $scope.tools[i].gsx$productshortname.$t = Number($scope.tools[i].gsx$qty.$t); 
                             $scope.kitchens.push($scope.tools[i]);
                           }
                          if($scope.tools[i].gsx$category.$t == "marinated"){
                              $scope.tools[i].gsx$productshortname.$t = Number($scope.tools[i].gsx$qty.$t); 
                             $scope.marinateds.push($scope.tools[i]);
                           }
                          if($scope.tools[i].gsx$category.$t == "masale"){
                              $scope.tools[i].gsx$productshortname.$t = Number($scope.tools[i].gsx$qty.$t); 
                             $scope.masales.push($scope.tools[i]);
                           }
                          if($scope.tools[i].gsx$category.$t == "goatmeat"){
                              $scope.tools[i].gsx$productshortname.$t = Number($scope.tools[i].gsx$qty.$t); 
                             $scope.goatmeats.push($scope.tools[i]);
                           }
                          if($scope.tools[i].gsx$category.$t == "egg"){
                              $scope.tools[i].gsx$productshortname.$t = Number($scope.tools[i].gsx$qty.$t); 
                             $scope.eggs.push($scope.tools[i]);
                           }
                      }
                  }
     
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 888);
     
            setTimeout(function () {
              $scope.$apply(function(){
                $scope.showContent=true;
              });
            }, 888);
     
             
    });
    
});

////Product Detail Controller
//app.controller('ProductDetailCtrl',function($scope,$http,$routeParams){
// $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/1/public/values?alt=json")
//    .success(function(response) {
//              $scope.welcomeScreen=true;     
//              $scope.showContent=false;
//              $scope.singleProduct = response.feed.entry;
//     console.log("========product Detail====",$scope.singleProduct);
////              $scope.chickens=[];
////              for (var i=0; i<$scope.allChickenProduct.length; i++){
////                  if($scope.allChickenProduct[i].gsx$available.$t == "y"){
////                      $scope.allChickenProduct[i].gsx$productshortname.$t = Number($scope.allChickenProduct[i].gsx$qty.$t);
////                      $scope.chickens.push($scope.allChickenProduct[i]);
////                  }
////              }
////     
////            setTimeout(function () {
////              $scope.$apply(function(){
////                  $scope.welcomeScreen=false;
////              });
////            }, 888);
////     
////            setTimeout(function () {
////              $scope.$apply(function(){
////                $scope.showContent=true;
////              });
////            }, 888);
//     
//             
//    });
//    
//});

//All Category List Controller
app.controller('CategoryListCtrl',function($scope,$http,$routeParams){
 $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/5/public/values?alt=json")
    .success(function(response) {
              $scope.welcomeScreen=true;     
              $scope.showContent=false;
              $scope.allChickenProduct = response.feed.entry;
              $scope.chickens=[];
              for (var i=0; i<$scope.allChickenProduct.length; i++){
                  if($scope.allChickenProduct[i].gsx$available.$t == "y"){
                      $scope.allChickenProduct[i].gsx$productshortname.$t = Number($scope.allChickenProduct[i].gsx$qty.$t);
                      $scope.chickens.push($scope.allChickenProduct[i]);
                  }
              }
     
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 888);
     
            setTimeout(function () {
              $scope.$apply(function(){
                $scope.showContent=true;
              });
            }, 888);
     
             
    });
    
});

//Kitchen Product Controller
app.controller('kitchenCtrl',function($scope,$http,$routeParams){
 $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/11/public/values?alt=json")
    .success(function(response) {
              $scope.welcomeScreen=true;     
              $scope.showContent=false;
              $scope.allKitchenProduct = response.feed.entry;
              $scope.kitchens=[];
              for (var i=0; i<$scope.allKitchenProduct.length; i++){
                  if($scope.allKitchenProduct[i].gsx$available.$t == "y"){
                      $scope.kitchens.push($scope.allKitchenProduct[i]);
                  }
              }
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 888);
     
            setTimeout(function () {
              $scope.$apply(function(){
                $scope.showContent=true;
              });
            }, 888);       
    }); 
    
});

//Fish Product Controller
app.controller('fishCtrl',function($scope,$http,$routeParams){
 $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/4/public/values?alt=json")
    .success(function(response) {
              $scope.welcomeScreen=true;     
              $scope.showContent=false;
              $scope.allFishProduct = response.feed.entry;
              $scope.fishes=[];
              for (var i=0; i<$scope.allFishProduct.length; i++){
                  if($scope.allFishProduct[i].gsx$available.$t == "y"){
                      $scope.fishes.push($scope.allFishProduct[i]);
                  }
              }
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 888);
     
            setTimeout(function () {
              $scope.$apply(function(){
                $scope.showContent=true;
              });
            }, 888);       
    }); 
});

//Chicken Product Controller
app.controller('chickenCtrl',function($scope,$http,$routeParams){
 $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/5/public/values?alt=json")
    .success(function(response) {
              $scope.welcomeScreen=true;     
              $scope.showContent=false;
              $scope.allChickenProduct = response.feed.entry;
              $scope.chickens=[];
              for (var i=0; i<$scope.allChickenProduct.length; i++){
                  if($scope.allChickenProduct[i].gsx$available.$t == "y"){
                      $scope.chickens.push($scope.allChickenProduct[i]);
                  }
              }
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 888);
     
            setTimeout(function () {
              $scope.$apply(function(){
                $scope.showContent=true;
              });
            }, 888);       
    }); 
    
});

//Seafood Product Controller
app.controller('seafoodCtrl',function($scope,$http,$routeParams){
 $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/6/public/values?alt=json")
    .success(function(response) {
              $scope.welcomeScreen=true;     
              $scope.showContent=false;
              $scope.allSeafoodProduct = response.feed.entry;
              $scope.seafoods=[];
              for (var i=0; i<$scope.allSeafoodProduct.length; i++){
                  if($scope.allSeafoodProduct[i].gsx$available.$t == "y"){
                      $scope.seafoods.push($scope.allSeafoodProduct[i]);
                  }
              }
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 888);
     
            setTimeout(function () {
              $scope.$apply(function(){
                $scope.showContent=true;
              });
            }, 888);       
    }); 
    
});

//GoatMeat Product Controller
app.controller('goatmeatCtrl',function($scope,$http,$routeParams){
 $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/9/public/values?alt=json")
    .success(function(response) {
              $scope.welcomeScreen=true;     
              $scope.showContent=false;
              $scope.allGoatmeatProduct = response.feed.entry;
              $scope.goatmeats=[];
              for (var i=0; i<$scope.allGoatmeatProduct.length; i++){
                  if($scope.allGoatmeatProduct[i].gsx$available.$t == "y"){
                      $scope.goatmeats.push($scope.allGoatmeatProduct[i]);
                  }
              }
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 888);
     
            setTimeout(function () {
              $scope.$apply(function(){
                $scope.showContent=true;
              });
            }, 888);       
    }); 
    
});

//Marinated Product Controller
app.controller('marinatedCtrl',function($scope,$http,$routeParams){
 $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/7/public/values?alt=json")
    .success(function(response) {
              $scope.welcomeScreen=true;     
              $scope.showContent=false;
              $scope.allMarinatedProduct = response.feed.entry;
              $scope.marinateds=[];
              for (var i=0; i<$scope.allMarinatedProduct.length; i++){
                  if($scope.allMarinatedProduct[i].gsx$available.$t == "y"){
                      $scope.marinateds.push($scope.allMarinatedProduct[i]);
                  }
              }
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 888);
     
            setTimeout(function () {
              $scope.$apply(function(){
                $scope.showContent=true;
              });
            }, 888);       
    }); 
    
});

//Masale Product Controller
app.controller('masaleCtrl',function($scope,$http,$routeParams){
 $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/8/public/values?alt=json")
    .success(function(response) {
              $scope.welcomeScreen=true;     
              $scope.showContent=false;
              $scope.allMasaleProduct = response.feed.entry;
              $scope.masales=[];
              for (var i=0; i<$scope.allMasaleProduct.length; i++){
                  if($scope.allMasaleProduct[i].gsx$available.$t == "y"){
                      $scope.masales.push($scope.allMasaleProduct[i]);
                  }
              }
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 888);
     
            setTimeout(function () {
              $scope.$apply(function(){
                $scope.showContent=true;
              });
            }, 888);       
    }); 
    
});

//Eggs Product Controller
app.controller('eggCtrl',function($scope,$http,$routeParams){
 $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/12/public/values?alt=json")
    .success(function(response) {
              $scope.welcomeScreen=true;     
              $scope.showContent=false;
              $scope.allEggProduct = response.feed.entry;
              $scope.eggs=[];
              for (var i=0; i<$scope.allEggProduct.length; i++){
                  if($scope.allEggProduct[i].gsx$available.$t == "y"){
                      $scope.eggs.push($scope.allEggProduct[i]);
                  }
              }
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 888);
     
            setTimeout(function () {
              $scope.$apply(function(){
                $scope.showContent=true;
              });
            }, 888);       
    }); 
    
});

//HalalMeat Product Controller
app.controller('halalmeatCtrl',function($scope,$http,$routeParams){
 $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/13/public/values?alt=json")
    .success(function(response) {
              $scope.welcomeScreen=true;     
              $scope.showContent=false;
              $scope.allHalalmeat = response.feed.entry;
              $scope.halalmeats=[];
              for (var i=0; i<$scope.allHalalmeat.length; i++){
                  if($scope.allHalalmeat[i].gsx$available.$t == "y"){
                      $scope.halalmeats.push($scope.allHalalmeat[i]);
                  }
              }
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 888);
     
            setTimeout(function () {
              $scope.$apply(function(){
                $scope.showContent=true;
              });
            }, 888);       
    }); 
    
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

        app.controller("ProductDetailCtrl", function ($scope, $routeParams,$http) {
            $scope.welcomeScreen=true;     
            $scope.showContent=false;
            $scope.productName = $routeParams.productName;
 $http.get("https://spreadsheets.google.com/feeds/list/1UgxUvqufnRyc4MiIQ3xuYhH0p17DO3DSII3jNp1D0OE/1/public/values?alt=json")
                    .success(function(response) {
                    $scope.tools = response.feed.entry;
                  $scope.singleProduct=[];            
                  for (i=0; i<$scope.tools.length; i++){
                      if($scope.tools[i].gsx$productshortname.$t == $scope.productName){
                          $scope.singleProduct.push($scope.tools[i]);
                          $scope.requiredQty=Number($scope.tools[i].gsx$qty.$t); 
                      }
                  }
              });
            
            
            setTimeout(function () {
              $scope.$apply(function(){
                  $scope.welcomeScreen=false;
              });
            }, 888);
                
             setTimeout(function () {
              $scope.$apply(function(){
                  $scope.showContent=true;
              });
            }, 888); 
            
        });

//Routing

app.config( [
    '$compileProvider','$routeProvider',
    function( $compileProvider,$routeProvider )
    {   

        $routeProvider
        .when("/home", {
            templateUrl : "home.html",
            routeName:"Home"
         })
        .when('/products',{
            templateUrl : '/asset/html/products/productList.html',
            routeName:"Products"
        })
        .when('/product/:productName',{
            templateUrl : '/asset/html/products/productDetail.html',
            routeName:"Product"
        })
        .when('/categories',{
            templateUrl : '/asset/html/categories/categoryList.html',
            routeName:"Categories"
        })
        .when('/fish',{
            templateUrl : '/asset/html/products/fish.html',
            routeName:"Fish"
        })
        .when('/chicken',{
            templateUrl : '/asset/html/products/chicken.html',
            routeName:"Chicken"
        })
        .when('/seafood',{
            templateUrl : '/asset/html/products/seafood.html',
            routeName:"Seafood"
        })
        .when('/goatmeat',{
            templateUrl : '/asset/html/products/goatmeat.html',
            routeName:"GoatMeat"
        })
        .when('/marinated',{
            templateUrl : '/asset/html/products/marinated.html',
            routeName:"Marinated"
        })
        .when('/masale',{
            templateUrl : '/asset/html/products/masale.html',
            routeName:"Masale"
        })
        .when('/kitchen',{
            templateUrl : '/asset/html/products/kitchen.html',
            routeName:"Kitchen"
        })
        .when('/egg',{
            templateUrl : '/asset/html/products/egg.html',
            routeName:"Eggs"
        })
        .when('/halalmeat',{
            templateUrl : '/asset/html/products/halalmeat.html',
            routeName:"HalalMeat"
        })

//        .when('/fmbsales',{
//            templateUrl : '/sales.html',
//            controller: 'salesCtrl',
//            routeName:"Sales"
//        })
//        .when('/product/:productName',{
//            templateUrl : '/productDetail.html',
//            controller: 'ProductDetailCtrl',
//            routeName:"Product Detail"
//        })
//        .when("/:categoryName", {
//            templateUrl : "product.html",
//            controller: 'ProductCtrl',
//            routeName:"Category"
//         })
        .otherwise ({
            redirectTo: '/home'
        });

        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|sms|chrome-extension):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]);

//Splash Screen Directive
app.directive("splashScreen", function() {    
  return {
    restrict: 'A',
    scope: {
      show: '=?'
    },
    template: '<div ng-if="show" class="splash-screen"><div class="d-flex justify-content-around align-items-center" ><div><img src="asset/images/brand/bucket.svg" class="splash-screen-image" ></div></div><div class="text-center brand-color mt-3"><h5><b>FreshMeatBucket</b></h5><div class="spinner-border brand-color" role="status"><span class="sr-only">Loading...</span></div></div></div>'
  }
});

app.run(function($rootScope, $route,$location){
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous, rejection) {
        if (current){
          $rootScope.currentPage= current.routeName;
            $rootScope.currentPagePath = current.originalPath;  
        }
        if(previous){
           $rootScope.previousPage= previous.routeName;
        $rootScope.previousPagePath = previous.originalPath;
           }
        
        
    })
    
    $rootScope.go = function ( path ) {
      $location.path( path );
    };
    
    $rootScope.productDetail = function ( path ) {

      $rootScope.productName = path;    
      $location.path( "/product/"+path );
    };
    
//    $rootScope.productDetail = function (productName ) {
//  //    $rootScope.productLink = productLink;    
//   //   $location.path( productName );
//    };
})



