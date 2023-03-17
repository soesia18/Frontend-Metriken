namespace dotNetBF.Modules.Services.Management.UI.Web
{
    public class Countly : WebUIExtension
    {
        public Countly()
        {
            ScriptSource = "management-js://Countly";
            AllowDelayedLoad = false;
        }
	}
}