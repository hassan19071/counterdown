let days = document.querySelector(".days span");
let hours = document.querySelector(".hours span");
let mins = document.querySelector(".mins span");
let secs = document.querySelector(".secs span");
let date = new Date("10-15-2022,00:00:00").getTime();

let chellanage = setInterval(function(){
    let dateOfToday = new Date().getTime();
    let total = date-dateOfToday;
    let getDays = Math.floor(total / (60*1000*60*24));
    let getHours = Math.floor(total % (60*1000*60*24) / (1000*60*60));
    let getMins = Math.floor(total % (60*1000*60) / (1000*60));
    let getSecs = Math.floor(total % (60*1000) / (1000));

    getDays < 10 ? days.innerHTML = `0${getDays}`: days.innerHTML = `${getDays}`;
    getHours < 10 ? hours.innerHTML = `0${getHours}`: hours.innerHTML = `${getHours}`;
    getMins < 10 ? mins.innerHTML = `0${getMins}`: mins.innerHTML = `${getMins}`;
    getSecs < 10 ? secs.innerHTML = `0${getSecs}`: secs.innerHTML = `${getSecs}`;

    if (total < 0){
        clearInterval(chellanage);
        document.querySelector(".date").innerHTML = "Done";
        document.querySelector(".date").classList.add("done");
    }
 
},1000);








