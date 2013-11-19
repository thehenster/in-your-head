var Conf = {};
Conf.debug = true;

function debug(str){
  if(Conf.debug && typeof(console)!='undefined'){
    console.log(str);
  }
}

function FinderCtrl($scope) {

  $scope.data = [];

  $scope.init = function() {
    var datastr = localStorage.getItem('data');
    debug(datastr);
    if(datastr==null){
    } else {
      $scope.data = JSON.parse(datastr);
    }
  }

  $scope.increment = function(result){
    result.weight = result.weight+1;
    $scope.store();
  }

  $scope.create = function(search){
    $scope.data.push({title: search, weight: 1});
    $scope.store();
    // $scope.search = '';
  }

  $scope.store = function() {
    localStorage.setItem('data', JSON.stringify($scope.data, function (key, val) {
      if (key == '$$hashKey') {
        return undefined;
      }
      return val;
    }));
  }

  // This is pretty easy but how often does this get evaluated?
  $scope.showHelp = function() {
    return ($scope.data.length==0);    
  }

  $scope.init();
}
