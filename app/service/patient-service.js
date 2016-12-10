app.service('PatientService', [function() {
  var list = [];
  this.getList = function(){
    return list;
  };

  this.addToList = function(data){
    list.push(data);
  };

}]);