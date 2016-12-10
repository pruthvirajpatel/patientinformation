app.controller('ListPatientsController', ['PatientService', '$scope', function(PatientService, $scope) {
  var vm = this;
  vm.list = PatientService.getList();
}]);

app.filter('customfilter', [function() {
  var customFilter = function(arr, searchText) {
    if (!searchText)
      return arr;
    var filteredData = arr.filter(function(arrayItem) {
      return ((arrayItem.first_name).indexOf(searchText) >= 0) ? true : false;
    });
    return filteredData;
  };

  return customFilter;

}]);