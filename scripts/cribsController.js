myApp.controller('cribsController', function($scope){
    $scope.cribs = [
        {
            'type': 'Condo',
            'price': 5920933,
            'address': '213 Grove street',
            'description': 'Excellent place, really nice view',
            'image': 'crib-1.jpg',
        },
        {
            'type': 'House',
            'price': 3465768,
            'address': '7834 Winding Way',
            'description': 'Beautiful home with lots of space for a large family',
            'image': 'crib-2.jpg',
        },
        {
            'type': 'Duplex',
            'price': 78997656,
            'address': '345 River Lane',
            'description': 'Great neighbourhood and lots of nice green space',
            'image': 'crib-3.jpg',
        },

    ]
})