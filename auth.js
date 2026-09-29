// Creates the shared Supabase client for both pages.
// Sets window.gdaAuth (the client, or null) and window.gdaAuthProblem
// ("lib" if the library failed to load, "config" if config.js still has placeholders).
(function () {
  var cfg = window.GDA_CONFIG || {};
  var url = cfg.supabaseUrl || "";
  var key = cfg.supabaseKey || "";
  var configured = url && key && url.indexOf("YOUR_") < 0 && key.indexOf("YOUR_") < 0;

  window.gdaAuth = null;
  window.gdaAuthProblem = null;

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    window.gdaAuthProblem = "lib";
  } else if (!configured) {
    window.gdaAuthProblem = "config";
  } else {
    window.gdaAuth = window.supabase.createClient(url, key);
  }
})();
