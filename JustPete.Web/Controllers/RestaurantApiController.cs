namespace JustPete.Web.Controllers
{
    using System.Linq;
    using System.Web.Http;

    using JustPete.Web.Resources;

    [RoutePrefix("api/restaurants")]
    public class RestaurantApiController : ApiController
    {
        [Route("")]
        public IHttpActionResult Get(string postcode)
        {
            var restaurants = Enumerable.Empty<RestaurantResource>();

            if (postcode == "w7")
            {
                restaurants = new[]
                    {
                        new RestaurantResource { Id = 2, Name = "Greasy Spoon", RatingStars = 1.0 },
                        new RestaurantResource { Id = 1, Name = "The Ritz", RatingStars = 5.5 }
                    };
            }

            return Ok(restaurants);
        }
    }
}
