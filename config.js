// Supabase settings for sign-in and progress sync.
//
// The publishable key (older projects call it the "anon" key) is meant to be
// public: it ships to every browser. What protects each person's data is the
// row-level security in supabase/schema.sql.
//
// NEVER put the service_role / secret key in this file.
window.GDA_CONFIG = {
  supabaseUrl: "YOUR_SUPABASE_URL",           // e.g. https://abcdefghijkl.supabase.co
  supabaseKey: "YOUR_SUPABASE_PUBLISHABLE_KEY",
  googleSignIn: false                         // set to true after enabling Google in Supabase
};
