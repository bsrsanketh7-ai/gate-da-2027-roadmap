// Supabase settings for sign-in and progress sync.
//
// The publishable key (older projects call it the "anon" key) is meant to be
// public: it ships to every browser. What protects each person's data is the
// row-level security in supabase/schema.sql.
//
// NEVER put the service_role / secret key in this file.
window.GDA_CONFIG = {
  supabaseUrl: "https://wgoydcgwcildcglekoib.supabase.co",
  supabaseKey: "sb_publishable_NRha5MQWhvGVUOPlc8okpA_6lBGZ71q",
  googleSignIn: false                         // set to true after enabling Google in Supabase
};
