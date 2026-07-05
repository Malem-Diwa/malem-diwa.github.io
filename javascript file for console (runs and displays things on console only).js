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
// Variabel window.
const window_INNERWIDTH = window.innerWidth;
const window_INNERHEIGHT = window.innerHeight;
const window_OUTERWIDTH = window.outerWidth;
const window_OUTERHEIGHT = window.outerHeight;
// Variabel window.document.documentElement
const documentelement_CLIENTWIDTH = window.document.documentElement.clientWidth;
const documentelement_CLIENTHEIGHT = window.document.documentElement.clientHeight;

function BuildTimestamp() {
    const date = new Date();
    // About the getMonth without "+ 1": Don't ask why I did not add by one, i don't care.
    // Just remember that getMonth returns a zero-based value, and then, mentally translate it yourself.
    return " " + "[" + "FullYear={" + date.getFullYear() + "}" + "-" + "MonthNumber={" + padzero_HelperFunction(date.getMonth()) + "}" + "-" + "DayOfMonth={" + padzero_HelperFunction(date.getDate()) + "}" + "-" + "DayOfWeek={" + date.getDay() + "}" + " " + "Hours={" + padzero_HelperFunction(date.getHours()) + "}" + ":" + "Minutes={" + padzero_HelperFunction(date.getMinutes()) + "}" + ":" + "Seconds={" + padzero_HelperFunction(date.getSeconds()) + "}" + "." + "Milliseconds={" + padzero_millis_HelperFunction(date.getMilliseconds()) + "}" + " (" + "timeZone={" + Intl.DateTimeFormat().resolvedOptions().timeZone + "}" + ", " + "TimezoneOffset={" + date.getTimezoneOffset() + "}" + ")" + "];";
} // Constructs a new Date(); object and then returns A timestamp. Precise to the millisecond (and timezone and etc).

// Output Console.
// window.navigator.
window.console.log("---start window.navigator---" + BuildTimestamp());
window.console.log("window.navigator.userAgent: [" + navigator_USERAGENT + "];" + BuildTimestamp());
window.console.log("window.navigator.platform: [" + navigator_PLATFORM + "];" + BuildTimestamp());
window.console.log("window.navigator.language: [" + navigator_LANGUAGE + "];" + BuildTimestamp());
window.console.log("window.navigator.languages: [" + navigator_LANGUAGES + "];" + BuildTimestamp());
window.console.log("window.navigator.hardwareConcurrency: [" + navigator_HARDWARECONCURRENCY + "];" + BuildTimestamp());
window.console.log("window.navigator.maxTouchPoints: [" + navigator_MAXTOUCHPOINTS + "];" + BuildTimestamp());
window.console.log("window.navigator.vendor: [" + navigator_VENDOR + "];" + BuildTimestamp());
if (navigator_RAM == null) {
    window.console.log("window.navigator.deviceMemory: [" + "null" + "];" + BuildTimestamp());
}
else {
    window.console.log("window.navigator.deviceMemory: [" + navigator_RAM + "];" + BuildTimestamp());
}
if (navigator_DONOTTRACK != null) {
    window.console.log("window.navigator.doNotTrack: [" + navigator_DONOTTRACK + "];" + BuildTimestamp());
}
else {
    window.console.log("window.navigator.doNotTrack: [" + "null" + "];" + BuildTimestamp());
}
window.console.log("---end window.navigator---" + BuildTimestamp());
// window.screen.
window.console.log("---start window.screen---" + BuildTimestamp());
window.console.log("window.screen.height: [" + screen_HEIGHT + "];" + BuildTimestamp());
window.console.log("window.screen.width: [" + screen_WIDTH + "];" + BuildTimestamp());
window.console.log("window.screen.availWidth: [" + screen_AVAILWIDTH + "];" + BuildTimestamp());
window.console.log("window.screen.availHeight: [" + screen_AVAILHEIGHT + "];" + BuildTimestamp());
window.console.log("window.screen.colorDepth: [" + screen_COLORDEPTH + "];" + BuildTimestamp());
window.console.log("window.screen.pixelDepth: [" + screen_PIXELDEPTH + "];" + BuildTimestamp());
window.console.log("---end window.screen---" + BuildTimestamp());
// window.screen.orientation.
window.console.log("---start window.screen.orientation---" + BuildTimestamp());
window.console.log("window.screen.orientation.type: [" + orientation_TYPE + "];" + BuildTimestamp());
window.console.log("window.screen.orientation.angle: [" + orientation_ANGLE + "];" + BuildTimestamp());
window.console.log("---end window.screen.orientation---" + BuildTimestamp());

// window.location.
window.console.log("---start window.location---" + BuildTimestamp());
window.console.log("window.location.hash: [" + location_HASH + "];" + BuildTimestamp());
window.console.log("window.location.href: [" + location_HREF + "];" + BuildTimestamp());
window.console.log("window.location.origin: [" + location_ORIGIN + "];" + BuildTimestamp());
window.console.log("window.location.hostname: [" + location_HOSTNAME + "];" + BuildTimestamp());
window.console.log("window.location.host: [" + location_HOST + "];" + BuildTimestamp());
window.console.log("window.location.pathname: [" + location_PATHNAME + "];" + BuildTimestamp());
window.console.log("window.location.port: [" + location_PORT + "];" + BuildTimestamp());
window.console.log("window.location.protocol: [" + location_PROTOCOL + "];" + BuildTimestamp());
window.console.log("window.location.search: [" + location_SEARCH + "];" + BuildTimestamp());
window.console.log("---end window.location---" + BuildTimestamp());

// window.
window.console.log("---start window---" + BuildTimestamp());
window.console.log("window.innerWidth: [" + window_INNERWIDTH + "];" + BuildTimestamp());
window.console.log("window.innerHeight: [" + window_INNERHEIGHT + "];" + BuildTimestamp());
window.console.log("window.outerHeight: [" + window_OUTERHEIGHT + "];" + BuildTimestamp());
window.console.log("window.outerWidth: [" + window_OUTERWIDTH + "];" + BuildTimestamp());
window.console.log("---end window---" + BuildTimestamp());

// window.document.documentElement.
window.console.log("---start window.document.documentElement---" + BuildTimestamp());
window.console.log("window.document.documentElement.clientHeight: [" + documentelement_CLIENTHEIGHT + "];" + BuildTimestamp());
window.console.log("window.document.documentElement.clientWidth: [" + documentelement_CLIENTWIDTH + "];" + BuildTimestamp());
window.console.log("---end window.document.documentElement---" + BuildTimestamp());

// Ekstra (WebGL)
// Now we go deeper!
window.console.log("---start webgl---" + BuildTimestamp());
const kanvas = window.document.createElement("canvas");
const WebGL_konteks = kanvas.getContext("webgl2") || kanvas.getContext("webgl") || kanvas.getContext("experimental-webgl");

if (WebGL_konteks != null) {
    const informasi_debug = WebGL_konteks.getExtension("WEBGL_debug_renderer_info");
    if (informasi_debug) {
        const vendor = WebGL_konteks.getParameter(informasi_debug.UNMASKED_VENDOR_WEBGL);
        const renderer = WebGL_konteks.getParameter(informasi_debug.UNMASKED_RENDERER_WEBGL);
        if (vendor != null && renderer != null) {
            window.console.log("WebGL_debug_renderer_info Vendor Parameter: [" + vendor + "];" + BuildTimestamp());
            window.console.log("WebGL_debug_renderer_info Renderer Parameter: [" + renderer + "];" + BuildTimestamp());
        }
        else {
            window.console.log("vendor/renderer is null." + BuildTimestamp());
        }
    }
    else {
        window.console.log("WEBGL_debug_renderer_info tidak didukung di Browser Anda." + BuildTimestamp());
    }
}
else {
    window.console.log("Konteks webgl (webgl2, webgl, experimental-webgl) tidak didukung di Browser Anda." + BuildTimestamp());
}
window.console.log("---end webgl---" + BuildTimestamp());








// Dan ekstra note....
// "SAYA AKAN LAWAN."
// Coba tebak, siapa yang katakan itu. Pembaca?