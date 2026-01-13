// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi696622bf0e79916aaa99ba32-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
