myApp.controller('cribsController', function($scope, cribsFactory){
    // $scope.cribs = cribsFactory.getCribs()
    $scope.model = {};
    $scope.model.cribs = [];
    $scope.model.filtered_cribs = false;
    $scope.priceInfo = {
        min: '0',
        max: '1000000'

    };

    $scope.model.newListing = {};
    

    $scope.model.addCrib = function(){
        $scope.model.newListing.image = 'default-crib.jpg';
        $scope.model.cribs.push($scope.model.newListing);
        $scope.model.newListing = {};
        // console.log($scope.model.cribs) 
    }


    cribsFactory.getCribs().success(function(data){
        // console.log(data, "datee")

        $scope.model.cribs = data
    }).error(function(error){
        console.log(error)
    })


    
    $scope.model.filterByPrice = function(){
        var filtered = [];

        var min = $scope.priceInfo.min;
        var max = $scope.priceInfo.max;

       
        angular.forEach($scope.model.cribs, function(listing){
            if(listing.price >= min && listing.price <= max){
                filtered.push(listing);
            }
        });
        return filtered;
    }

});