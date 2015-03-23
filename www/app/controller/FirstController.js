app
    .controller('FirstCtrl', function ($scope, $rootScope, $state) {

        $scope.tab1items = [
            { 
                id : 1,
                by : 'Lorem Ipsum',
                date : '5 hours ago',
                userimg : 'img/img7.jpg',
                title : 'Lorem Ipsum is simply dummy text',
                postimg : 'img/img5.jpg',
                postdesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                likecount : '1 Like',
                commentcount : '5 Comments',
            },
            { 
                id : 2,
                by : 'Lorem Ipsum',
                date : '4 hours ago',
                userimg : 'img/img6.jpg',
                title : 'Lorem Ipsum is simply dummy text',
                postimg : 'img/img1.jpg',
                postdesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                likecount : '2 Like',
                commentcount : '3 Comments',
            },
            { 
                id : 3,
                by : 'Lorem Ipsum',
                date : '3 hours ago',
                userimg : 'img/img1.jpg',
                title : 'Lorem Ipsum is simply dummy text',
                postimg : 'img/img2.jpg',
                postdesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                likecount : '3 Like',
                commentcount : '1 Comments',
            },
            { 
                id : 4,
                by : 'Lorem Ipsum',
                date : '3 hours ago',
                userimg : 'img/img9.jpg',
                title : 'Lorem Ipsum is simply dummy text',
                postimg : 'img/img4.jpg',
                postdesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                likecount : '3 Like',
                commentcount : '1 Comments',
            },
            { 
                id : 5,
                by : 'Lorem Ipsum',
                sharedby : 'shared',
                date : '3 hours ago',
                userimg : 'img/img7.jpg',
                title : 'Lorem Ipsum is simply dummy text',
                postimg : 'img/img3.jpg',
                postdesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                likecount : '3 Like',
                commentcount : '1 Comments',
            },
        ];

        $scope.gotoSecondPage = function(){
            $state.go( 'second' );
        };


    })