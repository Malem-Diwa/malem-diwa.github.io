function padZero(padzero_number) {
    return padzero_number.toString().padStart(2, '0');
}

function update() {
    var date = new Date();
    var tahun = date.getFullYear();
    var bulan = padZero(date.getMonth());
    var hari = padZero(date.getDate());
    var jam = padZero(date.getHours());
    var menit = padZero(date.getMinutes());
    var detik = padZero(date.getSeconds());
    var zona_waktu = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let datetime = window.document.getElementById("waktu")
    datetime.innerText = "Client-Side Local Clock Time: [" + tahun + "-" + bulan + "-" + hari + " " + jam + "." + menit + "." + detik + " " + "(" + zona_waktu + ")" + "]";
}

setInterval(update, 75)