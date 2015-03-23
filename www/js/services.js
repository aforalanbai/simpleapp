/***************************************************
  A simple example service that returns some data.
**************************************************/
angular.module('ionicapp.services', [])


.factory('ajaxService', function($http) {
  // if url is dynamic
  return {
    ajaxCall: function(url, datas) {
      return $http({
        method: 'POST',
        url: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: function(obj) {
          var str = [];
          for (var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
        },
        data: datas
      }).success(function(data) {
        return data;
      });
    }
  }
})