// Ionic App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ionicapp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'ionicapp.services' is found in services.js
// 'ionicapp.controllers' is found in controllers.js
var app = angular.module('ionicapp', ['ionic','ionicapp.services'])


.config(function($stateProvider,$urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('signin', {
      url: '/signin',
      templateUrl: 'app/templates/SignIn.html',
      controller: 'SignInCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/templates/SignUp.html',
      controller: 'SignUpCtrl'
    })
    .state('first', {
      url: '/first',
      templateUrl: 'app/templates/First.html',
      controller: 'FirstCtrl'
    })
    .state('second', {
      url: '/second',
      templateUrl: 'app/templates/Second.html',
      controller: 'SecondCtrl'
    })
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/signin');
})



.run(function ($rootScope, $http, $state, $ionicPopup, $ionicLoading, $ionicPlatform, $ionicSideMenuDelegate) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });


  // to hide the status bar
  var showFullScreen = true,
      showStatusBar  = true;
  ionic.Platform.ready(function(){
    ionic.Platform.fullScreen(showFullScreen, showStatusBar);
    StatusBar.overlaysWebView(true);
    //StatusBar.backgroundColorByName('green');
    StatusBar.backgroundColorByHexString("#43CEE6"); //Calm color
  });


  // back button click event
  $ionicPlatform.registerBackButtonAction(function (event) {
    if( $state.current.name == 'signin' ){
      navigator.app.exitApp();
    } else {
      navigator.app.backHistory();
    }
  }, 100);
  

  $rootScope.loadingShow = function(){
    $ionicLoading.show({
      template: '<i class="ion-loading-c"></i> Loading',
      animation: 'fade-in',
      noBackdrop: false,
      maxWidth: 200,
      showDelay: 500
    }); 
  };

  $rootScope.loadingHide = function(){
    $ionicLoading.hide();
  };

});