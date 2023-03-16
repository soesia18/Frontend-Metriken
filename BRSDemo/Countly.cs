using dotNetBF.Gui.Web;
using dotNetBF.Services;
using System.Collections.Generic;
namespace BRSDemo.UI.Web
{
    // Class to automatically load the Countly script
    public class Countly : WebUIExtension
    {
        public string AppKey { get; set; }
        public string Url { get; set; }
        public Countly()
        {
            ScriptSource = "brsdemo-js://Countly";
            AllowDelayedLoad = false;
        }
        // Dictionary to pass the AppKey and Url to the script
        // The script will use these values to initialize Countly
        public override Dictionary<string, object> BuildScriptConfig(ISession session)
        {
            var dict = base.BuildScriptConfig(session);
            if (dict == null)
                dict = new Dictionary<string, object>();
            dict["AppKey"] = AppKey;
            dict["Url"] = Url;
            return dict;
        }
    }
}