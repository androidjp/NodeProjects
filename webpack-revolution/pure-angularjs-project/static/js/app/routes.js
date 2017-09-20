/** Created by CUIJA on 05-19-2017.*/
(function () {
  angular.module('ita-app')
    .config(function ($stateProvider) {
      $stateProvider
        .state({
          name: 'default',
          url: '',
          template: ' <h3>Hello ITA</h3>'
        })
        .state({
          name: 'home',
          url: '/',
          template: ' <h3>Hello ITA</h3>'
        })
        .state({
          name: 'about',
          url: '/about',
          template: '<h3>About: This is an ITA Application</h3>'
        });
    });
})();


// $routeProvider
//     .when ("/index", {
//         templateUrl: "ita/login.html",
//         controller: "ita.controller.LoginCtrl",
//         controllerAs: 'vm',
//         title: 'ITA - AngularJS Simples'
//     }).when ("/trainees", {
//     templateUrl: "ita/trainees.html",
//     controller: "ita.controller.TraineesCtrl",
//     controllerAs: 'vm',
//     title: 'ITA - Trainees'
// }).when ("/detail/:domainId", {
//     templateUrl: "ita/detail.html",
//     controller: "ita.controller.DetailCtrl",
//     controllerAs: 'vm',
//     title: 'ITA - Trainee detail'
// }).otherwise({
//     redirectTo: '/index'
// });