app
    .controller('SignUpCtrl', function ($scope, $rootScope, $state, $ionicPlatform, $ionicPopup, $ionicLoading, ajaxService){
        
        $scope.alertstatus1 = false;
        $scope.alertstatus3 = false;
        $scope.alertstatus4 = false;
        $scope.alertstatus5 = false;
        
        $scope.reg = { 
        	username: '', 
        	email: '', 
        	password: '', 
        	country : 'select' 
        };  
        
        $scope.countryitems = [
            { id : 1, slug : 'andora' },
            { id : 2, slug : 'iran' },
            { id : 3, slug : 'iraq' },
            { id : 4, slug : 'india' },
        ];

        $scope.gotoSignIn = function(){
            $state.go( 'signin' );
        };

        $scope.RegField = function(status){
        	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        	if( status == 'username' ){
        		if( $scope.reg.username == '' ){
        			$scope.alertstatus1 = true;
        		} else{
        			$scope.alertstatus1 = false;
        		}
        	}
        	if( status == 'email' ){
        		if( $scope.reg.email == '' || re.test($scope.reg.email) == false ){
        			$scope.alertstatus3 = true;
        		} else{
                    ajaxService.ajaxCall({
                        email : $scope.reg.email, 
                        status : 'EmailCheck'
                    }).then(function(response) {
                        console.log( response );
                        if( response.data != 1 ){
                            $scope.alertstatus3 = false;
                        } else{
                            $scope.alertstatus3 = true;
                        }
                    });
        		}
        	}
        	if( status == 'password' ){
        		if( $scope.reg.password == '' ){
        			$scope.alertstatus4 = true;
        		} else{
        			$scope.alertstatus4 = false;
        		}
        	}
        	if( status == 'country' ){
        		if( $scope.reg.country == 'select' ){
        			$scope.alertstatus5 = true;
        		} else{
        			$scope.alertstatus5 = false;
        		}
        	}
        };

		$scope.signUp = function(reg) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
			if( reg.username == '' ){
                $scope.alertstatus1 = true;
				return;
			} if( reg.email == '' || re.test(reg.email) == false ){
                $scope.alertstatus1 = false;
                $scope.alertstatus3 = true;
				return;
			} if( reg.password == '' ){
                $scope.alertstatus1 = false;
                $scope.alertstatus3 = false;
                $scope.alertstatus4 = true;
				return;
			} if( reg.country == 'select' ){
                $scope.alertstatus1 = false;
                $scope.alertstatus3 = false;
                $scope.alertstatus4 = false;
                $scope.alertstatus5 = true;
				return;
			} else{
				$scope.alertstatus1 = false;
                $scope.alertstatus3 = false;
                $scope.alertstatus4 = false;
                $scope.alertstatus5 = false;

                $state.go( 'signin' );

                $scope.reg = { 
                    username: '', 
                    email: '', 
                    password: '', 
                    country : 'select' 
                }; 

				// $rootScope.loadingShow();

				// ajaxService.ajaxCall({
				//     username : reg.username, 
				//     email : reg.email, 
				//     password : reg.password, 
				//     country : reg.country, 
				//     status : 'InsertUser'
				// }).then(function(response) {
				// 	console.log( response );
				// 	$ionicLoading.hide();
				// 	if( response.data == 1 ){
				// 		$ionicPopup.alert({
				// 			title: 'SignUp Successfully',
				// 		});
				// 		$rootScope.loadingHide();
				// 		$state.go( 'signin' );
				// 		return;
				// 	} if( response.data.status == 'exist' ){
				// 		$rootScope.loadingHide();
				// 		$ionicPopup.alert({
				// 			title: 'Email id already exist',
				// 		});
				// 		return;
				// 	} else{
				// 		$rootScope.loadingHide();
				// 		$ionicPopup.alert({
				// 			title: 'Registration Failed!',
				// 		});
				// 	}
				// 	$scope.reg = { 
				//     	username: '', 
				//     	email: '', 
				//     	password: '', 
				//     	country : 'select' 
				//     };  
  		// 		});
	        }
		};


    })