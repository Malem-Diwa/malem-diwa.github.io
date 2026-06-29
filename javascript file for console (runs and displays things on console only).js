// Malem Diwa
// File JavaScript ini direferensi setiap file HTML (kecuali file html setiap WebGame yang terhost disini.)
// dan akan langsung jalan di setiap <HEAD>.
// Setiap output hanya akan terdisplay di Console.

// Variabel.
// Variabel navigator.
const navigator_RAM = window.navigator.deviceMemory;
const navigator_USERAGENT = window.navigator.userAgent;
const navigator_PLATFORM = window.navigator.platform;
const navigator_LANGUAGE = window.navigator.language;
const navigator_LANGUAGES = window.navigator.languages;
const navigator_HARDWARECONCURRENCY = window.navigator.hardwareConcurrency;
const navigator_MAXTOUCHPOINTS = window.navigator.maxTouchPoints;
// Variabel screen.
const screen_PIXELDEPTH = window.screen.pixelDepth; // Similar to window.screen.colorDepth.
const screen_AVAILWIDTH = window.screen.availWidth; // Total width available to browser. (Excluding OS dock/taskbar)
const screen_AVAILHEIGHT = window.screen.availHeight; // Total height available to browser. (Excluding OS dock/taskbar)
const screen_COLORDEPTH = window.screen.colorDepth; // Number of bits used to display colors.
const screen_WIDTH = window.screen.width; // Total width of screen in CSS pixels.
const screen_HEIGHT = window.screen.height; // Total height of screen in CSS pixels.

// Output Console.
// window.navigator.
window.console.log("---start window.navigator---");
window.console.log("window.navigator.userAgent: [" + navigator_USERAGENT + "];");
window.console.log("window.navigator.platform: [" + navigator_PLATFORM + "];");
window.console.log("window.navigator.language: [" + navigator_LANGUAGE + "];");
window.console.log("window.navigator.languages: [" + navigator_LANGUAGES + "];");
window.console.log("window.navigator.hardwareConcurrency: [" + navigator_HARDWARECONCURRENCY + "];");
window.console.log("window.navigator.maxTouchPoints: [" + navigator_MAXTOUCHPOINTS + "];");
if (navigator_RAM == null) {
    window.console.log("window.navigator.deviceMemory: [" + "null" + "];");
}
else {
    window.console.log("window.navigator.deviceMemory: [" + navigator_RAM + "];");
}
window.console.log("---end window.navigator---");
// window.screen.
window.console.log("---start window.screen---");
window.console.log("window.screen.height: [" + screen_WIDTH + "];");
window.console.log("window.screen.width: [" + screen_HEIGHT + "];");
window.console.log("window.screen.availWidth: [" + screen_AVAILWIDTH + "];");
window.console.log("window.screen.availHeight: [" + screen_AVAILHEIGHT + "];");
window.console.log("window.screen.colorDepth: [" + screen_COLORDEPTH + "];");
window.console.log("window.screen.pixelDepth: [" + screen_PIXELDEPTH + "];");
window.console.log("---end window.screen---");