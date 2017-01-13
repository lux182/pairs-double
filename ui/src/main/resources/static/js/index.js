var indexApp = angular.module('indexApp', ['me-lazyload']);
indexApp.controller('indexController', function ($http,$scope) {
    // var self = this;
    // console.log('Loading');
    // $scope.watch = {};
    $http.get('js/index.json').then(function (response) {
        // console.log(response.data);
        $scope.banners = response.data.banners;
        $scope.activitys = response.data.activitys;
        $scope.timelimits = response.data.timelimits;
        $scope.timelimit_right = response.data.timelimit_right;
        $scope.everydays = response.data.everydays;
        $scope.hots = response.data.hots;
        $scope.hot_right = response.data.hot_right;
        // console.log($scope.banners);
        
    })
});


// var ftitAppModule = angular.module('ftitApp', ['infinite-scroll']);
// ftitAppModule.controller('PostListController',
//     function ($scope, Demo) {
//         $scope.demo = new Demo();
//     });
// // 创建后台数据交互工厂
// ftitAppModule.factory('Demo', function ($http) {
//     var Demo = function () {
//         this.items = [];
//         this.busy = false;
//         this.after = '';
//         this.page =;
//     };
//     Demo.prototype.nextPage = function () {
//         if (this.busy) return;
//         this.busy = true;
//         var url = "http://...:/api/post/nextpage?id=" + this.page + "&callback=JSON_CALLBACK";
//         $http.jsonp(url).success(function (data) {
//             var items = data;
//             for (var i =; i < items.length; i++) {
//                 this.items.push(items[i]);
//             }
//             this.after = "t_" + this.items[this.items.length -].id;
//             this.busy = false;
//             this.page +=;
//         }.bind(this));
//     };
//     return Demo;
// });
