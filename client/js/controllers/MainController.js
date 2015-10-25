app.controller('MainController', ['$scope', '$resource', function($scope, $resource){
	var Product = $resource('/api/products');

	Product.query(function (results) {
    	$scope.products = results;
  	});

  	$scope.products = [];

	$scope.createItem = function(){
		var product = new Product();
		product.name = $scope.productName;
		product.quantity = $scope.productQuantity;
		product.price = $scope.productPrice;


	    product.$save(function (result) {
	      $scope.products.push(result);
	      $scope.productName = '';
	      $scope.productQuantity = '';
	      $scope.productPrice = '';
	    });
	}

}]);