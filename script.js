const downloadBtn = document.querySelector(".download-btn");
const fileLink = "https://docs.google.com/uc?export=download&id=13SSN6gtEShcv6CtAn06BLiFbmkfuCYZu&confirm=t&uuid=73813728-da43-4e95-bb82-33c2bd32c70f&at=AGIUDvqMFLA--mN4PfeTP3QeAqXz:1694320115259";

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