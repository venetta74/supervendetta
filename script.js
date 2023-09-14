const downloadBtn = document.querySelector(".download-btn");
const fileLink = "https://download1523.mediafire.com/aze3vvmuxfzg4W2mEs7tqnE33VlIqAjvNyxphrs4C-2x3VlsJfxqI0n0lWR973XcGfy4hmiLdD_FUkqDL9HkvZdUFGPqMMr_5cZNSCJ7zLAzkAA6tFibTSRQ10WKHd47CTubV39EgITNN-we7ci8P1oe_51i6Fy5H-dhAWIadH8/sdvcthnm8u6lg73/%D8%B3%D9%88%D8%A8%D8%B1+%D9%81%D8%A7%D9%86%D8%AF%D9%8A%D8%AA%D8%A7+%282%29.apk";

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
