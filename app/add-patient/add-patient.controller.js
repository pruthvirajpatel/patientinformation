app.controller('AddPatientController', ['$state', 'PatientService', function($state,PatientService) {
  var vm = this;
  vm.genders = [{
    id: 'male',
    gender: 'Male'
  }, {
    id: 'female',
    gender: 'Female'
  }, {
    id: 'transgender',
    gender: 'Transgender'
  }];
  vm.add = function() {
    PatientService.addToList(vm.user);
    vm.user = {};
    alert('Record Added');
  };
}]);