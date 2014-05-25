var restaurantPage = require('./restaurant_page');
var backEndMocks = require('./httpBackEndMocks');

var ptor;

beforeEach(function() {
    ptor = protractor.getInstance();        
});

describe('As a user', function () {

    it('when I type in a valid postcode then I see a list of restaurants sorting by rating DESC.', function () {
        ptor.addMockModule('httpBackEndMock', backEndMocks.build([backEndMocks.w7Restaurants]));

    	restaurantPage.navigate();

        restaurantPage.searchInput.sendKeys('w7');
        restaurantPage.searchButton.click();

        var restaurants = restaurantPage.getRestaurants();
        expect(restaurants.count()).toBe(2);
        
        var restaurant1 = restaurants.get(0);
        expect(restaurantPage.getRestaurantTitle(restaurant1).getText()).toBe("Pete's Restaurant");

        var restaurant2 = restaurants.get(1);
        expect(restaurantPage.getRestaurantTitle(restaurant2).getText()).toBe("Bob's Restaurant");
        
        expect(restaurantPage.noResultsFoundLabel.isPresent()).toBeFalsy();
    });

    it('when I type in an invalid postcode then I see not found message', function () {
        ptor.addMockModule('httpBackEndMock', backEndMocks.build([backEndMocks.xxxRestaurants]));

        restaurantPage.navigate();

        restaurantPage.searchInput.sendKeys('xxx');
        restaurantPage.searchButton.click();

        var restaurants = restaurantPage.getRestaurants();
        expect(restaurants.count()).toBe(0);
        
        expect(restaurantPage.noResultsFoundLabel.isPresent()).toBeTruthy();
    });
});