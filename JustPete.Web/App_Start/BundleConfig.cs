namespace JustPete.Web
{
    using System.Web.Optimization;

    public class BundleConfig
    {
        private const string JavaScriptFileExtension = "*.js";

        private const bool IncludeDirectoriesTrue = true;
        
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/angular.js",
                      "~/Scripts/angular-mocks.js",
                      "~/Scripts/angular-route.js"));

            bundles.Add(new ScriptBundle("~/bundles/uibootstrap").Include(
                      "~/Scripts/ui-bootstrap-tpls-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/underscore").Include(
                      "~/Scripts/underscore.js"));

            bundles.Add(new ScriptBundle("~/bundles/restangular").Include(
                      "~/Scripts/restangular.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").IncludeDirectory(
                "~/Scripts/app", JavaScriptFileExtension, IncludeDirectoriesTrue));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/restaurant.css"));

#if !DEBUG
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}
