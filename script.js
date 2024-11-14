// script.js

function showPopup() {
    document.getElementById("popup").style.display = "block"; // Tampilkan pop-up
}

function closePopup() {
    document.getElementById("popup").style.display = "none"; // Sembunyikan pop-up
}

// Tutup pop-up jika pengguna mengklik di luar konten pop-up
window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
