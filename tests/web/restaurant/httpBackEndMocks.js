function passThrough($httpBackend) {
    $httpBackend.whenGET(/^\/scripts\//).passThrough();
};

module.exports.build = function(funcs) {
	var funcStr = "angular.module('httpBackEndMock', ['ngMockE2E'])";

    if (Array.isArray(funcs)) {
    	for (var i = 0; i < funcs.length; i++) {
    		funcStr += "\r.run(" + funcs[i] + ")"
    	};
    } else {
  		funcStr += "\r.run(" + funcs + ")"
    }

    funcStr += "\r.run(" + passThrough + ")";

    var funcTyped = Function(funcStr);

    //console.log(funcTyped.toString())
    return funcTyped;
}

module.exports.w7Restaurants = function ($httpBackend) {

    var restaurants = [
        { Id: 1, Name: "Bob's Restaurant", RatingStars: 2.5 },
        { Id: 2, Name: "Pete's Restaurant", atingStars: 5.5 },
    ];
    $httpBackend.whenGET('/api/restaurants?postcode=w7').respond(restaurants);
};

module.exports.xxxRestaurants = function ($httpBackend) {

    var restaurants = [];
    $httpBackend.whenGET('/api/restaurants?postcode=xxx').respond(restaurants);
};
