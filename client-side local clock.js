// Author: Malem Diwa
// PATH: /client-side%20local%20clock.js
// Written: 2026-11-04
function padZero(padzero_number) {
    return padzero_number.toString().padStart(2, '0');
}

function update() {
    var date = new Date();
    var tahun = date.getFullYear();
    var bulan = padZero(date.getMonth() + 1);
    var hari = padZero(date.getDate());
    var jam = padZero(date.getHours());
    var menit = padZero(date.getMinutes());
    var detik = padZero(date.getSeconds());
    var zona_waktu = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Offset UTC.
    var offset_waktu_JS = -date.getTimezoneOffset();
    let sign = offset_waktu_JS >= 0 ? '+' : '-';
    let HH_offset = String(	Math.floor(Math.abs(offset_waktu_JS)/60)).padStart(2, '0');
    let MM_offset = String(Math.abs(offset_waktu_JS)%60).padStart(2, '0');
    // Datetime.
    let datetime = window.document.getElementById("waktu");
    datetime.innerText = "Client-Side Local Clock Time: [" + tahun + "-" + bulan + "-" + hari + " " + jam + "." + menit + "." + detik + " " + "(" + zona_waktu + `, UTC${sign}${HH_offset}:${MM_offset}` + `, JS-OFFSET_${-offset_waktu_JS}` + ")" + "]";
}
update();
setInterval(update, 1000);