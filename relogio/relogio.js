const   WEEK = ["Domingo","Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

function updateTime(){
    var agora = new Date();

    document.getElementById("itime").innerHTML =
        zeroPadding(agora.getHours(), 2) + ":" +
        zeroPadding(agora.getMinutes(), 2) + ":" +
        zeroPadding(agora.getSeconds(), 2);

    document.getElementById("idate").innerHTML =
    zeroPadding(agora.getDate(), 2) + "-" +
    zeroPadding(agora.getMonth(),  2) + "-" +     
    agora.getFullYear() + " " +
    WEEK[agora.getDay(0)];
        
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit){
    return String(num).padStart(digit, '0')
}