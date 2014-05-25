RestaurantPage = function () { 

    this.navigate = function() {
        browser.get('/');
    };

    this.searchInput = element(by.model('postcode'));
    this.searchButton = $('#searchButton');
    this.noResultsFoundLabel = $('.no-results-label');

    this.getRestaurants = function() {
        return element.all(by.repeater("restaurant in restaurants"));
    };
    this.getRestaurantTitle = function(restaurant) {
        return restaurant.findElement(by.css(".rest-name"));
    };
};

module.exports = new RestaurantPage();