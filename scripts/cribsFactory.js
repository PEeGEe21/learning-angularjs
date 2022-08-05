myApp.factory('cribsFactory', function($http){
    // var cribsData = 

    function getCribs(){
        // return cribsData;
        return $http.get('data/data.json');
    }

    return {
        getCribs: getCribs
    }
})