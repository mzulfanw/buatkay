let countDown = new Date("Dec 13, 2021 12:0:0").getTime();

let x = setInterval(() => {
    let now = new Date().getTime()
    let distance = countDown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = `${days} Hari, ${hours} Hari, ${minutes} Menit, ${seconds} Detikss`

    if (distance < 0) {
        clearInterval(x)
        document.getElementById("days").innerHTML = "Selamat Ulang Tahunn Kay"
    }
})


let time = new Date;
let greeting = document.getElementById("greetings")
let hours = time.getTime();

if (hours < 12) {
    greeting.innerText = "Selamat Pagi Kay"
} else if (hours < 15) {
    greeting.innerText = "Selamat Soree Kayy"
} else if (hours > 8) {
    greeting.innerText = "Selamat Malemm Kayy"
}
