var app  = angular.module('patientinformation', ['ui.router']);
  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('addpatient', {
        url: '/addpatient',
        controller: 'AddPatientController as vm',
        templateUrl: 'app/add-patient/add-patient.html'
      })
      .state('listpatients', {
        url: '/listpatients',
        controller: 'ListPatientsController as vm',
        templateUrl: 'app/list-patients/list-patients.html'
      });
     $urlRouterProvider.otherwise('/listpatients');
  }]);