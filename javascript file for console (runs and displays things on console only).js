// Malem Diwa
// File JavaScript ini direferensi setiap file HTML (kecuali file html setiap WebGame yang terhost disini.)
// dan akan langsung jalan di <BODY> sebelum Markup code apapun (Paling atas).
// Setiap output hanya akan terdisplay di Console.
function padzero_HelperFunction(padzero_number) {
    return padzero_number.toString().padStart(2, '0');
}
function padzero_millis_HelperFunction(padzero_millis) {
    return padzero_millis.toString().padStart(3, '0');
}

// Variabel.
// Variabel navigator.
const navigator_RAM = window.navigator.deviceMemory;
const navigator_USERAGENT = window.navigator.userAgent;
const navigator_PLATFORM = window.navigator.platform;
const navigator_LANGUAGE = window.navigator.language;
const navigator_LANGUAGES = window.navigator.languages;
const navigator_HARDWARECONCURRENCY = window.navigator.hardwareConcurrency;
const navigator_MAXTOUCHPOINTS = window.navigator.maxTouchPoints;
const navigator_DONOTTRACK = window.navigator.doNotTrack;
const navigator_VENDOR = window.navigator.vendor;
// Variabel screen.
const screen_PIXELDEPTH = window.screen.pixelDepth; // Similar to window.screen.colorDepth.
const screen_AVAILWIDTH = window.screen.availWidth; // Total width available to browser. (Excluding OS dock/taskbar)
const screen_AVAILHEIGHT = window.screen.availHeight; // Total height available to browser. (Excluding OS dock/taskbar)
const screen_COLORDEPTH = window.screen.colorDepth; // Number of bits used to display colors.
const screen_WIDTH = window.screen.width; // Total width of screen in CSS pixels.
const screen_HEIGHT = window.screen.height; // Total height of screen in CSS pixels.
// Variabel orientation.
const orientation_TYPE = window.screen.orientation.type;
const orientation_ANGLE = window.screen.orientation.angle;
// Variabel location.
const location_HASH = window.location.hash;
const location_HREF = window.location.href;
const location_HOSTNAME = window.location.hostname;
const location_HOST = window.location.host;
const location_ORIGIN = window.location.origin;
const location_PATHNAME = window.location.pathname;
const location_PORT = window.location.port;
const location_PROTOCOL = window.location.protocol;
const location_SEARCH = window.location.search;

// Misc.
var date_var = new Date();

// Output Console.
// window.navigator.
window.console.log("---start window.navigator---");
window.console.log("window.navigator.userAgent: [" + navigator_USERAGENT + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.navigator.platform: [" + navigator_PLATFORM + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.navigator.language: [" + navigator_LANGUAGE + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.navigator.languages: [" + navigator_LANGUAGES + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.navigator.hardwareConcurrency: [" + navigator_HARDWARECONCURRENCY + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.navigator.maxTouchPoints: [" + navigator_MAXTOUCHPOINTS + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.navigator.vendor: [" + navigator_VENDOR + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
if (navigator_RAM == null) {
    window.console.log("window.navigator.deviceMemory: [" + "null" + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
}
else {
    window.console.log("window.navigator.deviceMemory: [" + navigator_RAM + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
}
window.console.log("window.navigator.doNotTrack: [" + navigator_DONOTTRACK + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("---end window.navigator---");
// window.screen.
window.console.log("---start window.screen---");
window.console.log("window.screen.height: [" + screen_HEIGHT + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.screen.width: [" + screen_WIDTH + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.screen.availWidth: [" + screen_AVAILWIDTH + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.screen.availHeight: [" + screen_AVAILHEIGHT + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.screen.colorDepth: [" + screen_COLORDEPTH + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.screen.pixelDepth: [" + screen_PIXELDEPTH + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("---end window.screen---");
// window.screen.orientation.
window.console.log("---start window.screen.orientation---");
window.console.log("window.screen.orientation.type: [" + orientation_TYPE + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.screen.orientation.angle: [" + orientation_ANGLE + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("---end window.screen.orientation---");

// window.location.
window.console.log("---start window.location---");
window.console.log("window.location.hash: [" + location_HASH + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.location.href: [" + location_HREF + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.location.origin: [" + location_ORIGIN + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.location.hostname: [" + location_HOSTNAME + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.location.host: [" + location_HOST + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.location.pathname: [" + location_PATHNAME + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.location.port: [" + location_PORT + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.location.protocol: [" + location_PROTOCOL + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("window.location.search: [" + location_SEARCH + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
window.console.log("---end window.location---");

// Ekstra (WebGL)
window.console.log("---start webgl---");
const kanvas = window.document.createElement("canvas");
const WebGL_konteks = kanvas.getContext("webgl2") || kanvas.getContext("webgl") || kanvas.getContext("experimental-webgl");

if (WebGL_konteks != null) {
    const informasi_debug = WebGL_konteks.getExtension("WEBGL_debug_renderer_info");
    if (informasi_debug) {
        const vendor = WebGL_konteks.getParameter(informasi_debug.UNMASKED_VENDOR_WEBGL);
        const renderer = WebGL_konteks.getParameter(informasi_debug.UNMASKED_RENDERER_WEBGL);
        if (vendor != null && renderer != null) {
            window.console.log("WebGL_debug_renderer_info Vendor Parameter: [" + vendor + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
            window.console.log("WebGL_debug_renderer_info Renderer Parameter: [" + renderer + "];" + " " + "[" + date_var.getFullYear() + "-" + padzero_HelperFunction(date_var.getMonth()) + "-" + padzero_HelperFunction(date_var.getDate()) + " " + padzero_HelperFunction(date_var.getHours()) + ":" + padzero_HelperFunction(date_var.getMinutes()) + ":" + padzero_HelperFunction(date_var.getSeconds()) + "." + padzero_millis_HelperFunction(date_var.getMilliseconds()) + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")" + "];");
        }
        else {
            window.console.log("vendor/renderer is null.");
        }
    }
    else {
        window.console.log("WEBGL_debug_renderer_info tidak didukung di Browser Anda.");
    }
}
else {
    window.console.log("Konteks webgl (webgl2, webgl, experimental-webgl) tidak didukung di Browser Anda.");
}
window.console.log("---end webgl---");