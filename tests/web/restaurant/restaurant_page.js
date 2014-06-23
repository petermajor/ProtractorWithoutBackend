RestaurantPage = function () { 

    this.navigate = function() {
        browser.get('/');
    };

    this.searchInput = element(by.model('postcode'));
    this.searchButton = $('#searchButton');
    this.noResultsFoundLabel = $('.no-results-label');

    this.getRestaurantTitles = function() {
        return element.all(by.repeater("restaurant in restaurants").column("{{restaurant.Name}}"));
    };
};

module.exports = new RestaurantPage();