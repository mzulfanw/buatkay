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
let hours = time.getHours();
const words = ["Selamat Pagi Kayy", "Selamat Soree Kay", "Selamat Malam Kayy"]
let text = '';

if (hours < 12) text = words[0];
else if (hours < 18) text = words[1];
else text = words[2];
greeting.innerHTML = text;



const btn = document.getElementById("btn-float");
btn.addEventListener('click', () => {
    let message = document.querySelector('#message');
    if (message.style.display === "none") {
        message.style.display = "block"
    } else {
        message.style.display = "none"
    }
})

function Okeey() {
    let message = document.querySelector('#message')
    message.style.display = 'none'
}