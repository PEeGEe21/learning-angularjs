myApp.controller('cribsController', function($scope, cribsFactory){
    // $scope.cribs = cribsFactory.getCribs()
    $scope.model = {};
    $scope.model.cribs = [];
    $scope.model.filtered_cribs = false;
    $scope.priceInfo = {
        min: 0,
        max: 1000000

    };

    $scope.model.newListing = {};
    

    $scope.model.addCrib = function(){
        $scope.model.newListing.image = 'default-crib.jpg';
        $scope.model.cribs.push($scope.model.newListing);
        $scope.model.newListing = {};
        // console.log($scope.model.cribs) 
    }

    $scope.model.editCrib = function(crib){
        $scope.editListing = true;
        $scope.model.existingListing = crib;


        // $scope.model.cribs.push($scope.model.newListing);
        // $scope.model.newListing = {};
        // console.log($scope.model.existingListing) 
    }

    $scope.model.saveCribEdit = function(){
        $scope.existingListing = {};
        $scope.editListing = false;
    }

    $scope.model.deleteCrib = function(listing){
        var index = $scope.model.cribs.indexOf(listing);
        $scope.model.cribs.splice(index, 1);
        $scope.existingListing = {};
        $scope.editListing = false;
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