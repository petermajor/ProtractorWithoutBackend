namespace JustPete.Web.Controllers
{
    using System.Web.Mvc;

    [AllowAnonymous]
    public class RestaurantController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
