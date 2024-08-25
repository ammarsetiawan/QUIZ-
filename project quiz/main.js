function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function darkmode() {
    // Mengambil elemen body
    var body = document.body;

    // Memeriksa apakah checkbox dicek
    if (document.querySelector('.theme-switch__checkbox').checked) {
        // Jika dicek, aktifkan mode gelap
        body.classList.add('dark-mode');
    } else {
        // Jika tidak dicek, matikan mode gelap
        body.classList.remove('dark-mode');
    }
}


//link wa
document.getElementById("myButton").addEventListener("click", 
    function() {
    // Ganti URL dibawah ini dengan URL yang diinginkan
    window.location.href = "https://wa.me/6282113051867";
  });


