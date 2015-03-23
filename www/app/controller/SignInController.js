app
    .controller('SignInCtrl', function ($scope, $rootScope, $state, $ionicLoading, $ionicPlatform, $ionicPopup, ajaxService) {

        $scope.alertstatus1 = false;
        $scope.alertstatus2 = false;

        $scope.user = { 
        	username: '', 
        	password: '' 
        };  

        $scope.LoginField = function(status){
        	if( status == 'username' ){
        		if( $scope.user.username == '' ){
        			$scope.alertstatus1 = true;
        		} else{
        			$scope.alertstatus1 = false;
        		}
        	}
        	if( status == 'password' ){
        		if( $scope.user.password == '' ){
        			$scope.alertstatus2 = true;
        		} else{
        			$scope.alertstatus2 = false;
        		}
        	}
        }
  
		$scope.signIn = function(user) {
			if( user.username == '' ){
                $scope.alertstatus1 = true;
				return;
			} if( user.password == '' ){
                $scope.alertstatus1 = false;
                $scope.alertstatus2 = true;
				return;
			} else{
				// $rootScope.loadingShow();
			    $scope.alertstatus1 = false;
                $scope.alertstatus2 = false;

                $state.go( 'first' );
                $scope.user = { 
					username: '', 
					password: '' 
				};
				// ajaxService.ajaxCall({
				// 	username : user.username, 
				// 	password : user.password, 
				// 	status : 'LoginCheck'
				// }).then(function(response) {
				// 	console.log( response );
				// 	$ionicLoading.hide();
				// 	if( response.data.status == true ){            
				// 		$rootScope.userId = response.data.userid;
				// 		localStorage.setItem('userId',response.data.userid);
				// 		$scope.user = { 
				// 			username: '', 
				// 			password: '' 
				// 		};
				// 	    $rootScope.loadingHide();
				// 		$state.go( 'tab.tab1' );
				// 		return;
				// 	} else{
				// 		$rootScope.loadingHide();
				// 		$ionicPopup.alert({
				// 			title: 'Login Failed',
				// 		});
				// 	}
				// 	$scope.user = { 
				// 		username: '', 
				// 		password: '' 
				// 	};
				// });


	        }
		};


		$scope.gotoSignUp = function(){
			$state.go( 'signup' );
		};


    })