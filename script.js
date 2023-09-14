const downloadBtn = document.querySelector(".download-btn");
const fileLink = "https://download1581.mediafire.com/7m91ar25p5ugO8ofp_KwOX0rAlaxrYNfvrOEu6rRfk9TZkpQz9IB4OC2KdFaFVJ7VfUurGpfK6vEwWbwhQ-eN48BEHMLZ4PkwinXsg-PdcHuPX1Vbztw3R7b34xHF8I04CFeNfG63Vgj00dg1x4wRp8b7ziWdzsJYWI8skQQc45l/k6t1zhbxq67m8iu/%D8%AC%D9%8A%D8%AC%D8%A7.mp4";

const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `يتم التحميل بعد <b>${timer}</b> ثوانى`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `يتم التحميل بعد <b>${timer}</b> ثوانى`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "جارٍ تنزيل البرنامج...";
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                     <span class="text">تحميل مرة اخرى</span>`;
        }, 3000);
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);
