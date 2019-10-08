app.controller('postmantest', function ($scope, $http) {
  $scope.new = "New Tabs";
  $scope.method_x = "GET";
  $scope.options = [
    "POST",
    "GET"
  ]

  $scope.type = [
    " No Auth",
    " Basic Auth",
    " Digest Auth",
    " OAuth 1.0",
    " OAuth 2.0",
    " Hawk Authentication",
    " AWS Signature"
  ]

  // https://jsonplaceholder.typicode.com/users
  $scope.modes = ['Html', 'XML', 'Javascript','JSON'];
  $scope.mode = $scope.modes[2];
  // The ui-codemirror option
  $scope.cmOption = {
    lineNumbers: true,
    theme: 'ambiance',
    indentWithTabs: true,
    onLoad: function (_cm) {
      $scope.modeChanged = function () {
        _cm.setOption("mode", $scope.mode.toLowerCase());
      };
    }
  };


  $scope.selectMethod = function (op) {
    $scope.method_x = op;
  }


  $scope.send_data = function () {
    if ($scope.method_x == "GET") {
      var link = document.getElementById('url').value;
      methodGet(link);
    } else {
      console.log(method)
    }
  }

  function methodGet(link) {
    $http.get(link)
      .then(function (response) {
        $scope.get = response.data;
        $scope.cmModel = JSON.stringify($scope.get, null, 4);
      });
  }

});