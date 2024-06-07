let item = document.getElementById("item").value;
let order = document.getElementById("order").value;
let table = document.getElementById("table").value;
let special = document.getElementById("special").value;
let avoid = document.getElementById("avoid").value;
let result = document.getElementById("food-list");


// let count = 0;
function foodList(){
    let item = document.getElementById("item").value;
    let order = document.getElementById("order").value;
    let table = document.getElementById("table").value;
    let special = document.getElementById("special").value;
    let avoid = document.getElementById("avoid").value;

    result.innerHTML += `<ul class='list-box'>
                <div class='order-name'>
                <li id="food">Food : ${item}</li>
                <li id="order1">Order : ${order}</li>
                <li id="table1">Table : ${table}</li>
                <li id="special1">Special-order : ${special}</li>
                <li id="avoid1">${avoid}</li>
                <button onclick="submitItem()">Submit</button>
                <p id="countDown"></p>
            </div>
        </ul>`;
}

let display = document.getElementsByClassName("order-name");

let startingMinutes = 10;
let time = startingMinutes * 60;

function submitItem(){
    var hour = 0;
    var minutes = 0;
    var seconds = 10;

    if (display){
        var count = document.getElementById("countDown")
            if(count){
                time = setInterval((updateCountDown)=>{
                    count.innerHTML = `${hour} : ${minutes} : ${seconds}`;
                        if(seconds > 60){
                            minutes--;
                        }
                        seconds--;
                },1000)
                while(seconds == 0){
                    console.log("Ready")
                }
            }
        }
    // if(display){
    //     console.log = "Hi"
    // }else{
    //     console.log = "Error"
    // }
    

    
    // let timer = duration, minutes, seconds;
    // const interval = setInterval(() => {
    //     minutes = parseInt(timer / 60, 10);
    //     seconds = parseInt(timer % 60, 10);

    //     minutes = minutes < 10 ? "0" + minutes : minutes;
    //     seconds = seconds < 10 ? "0" + seconds : seconds;

    //     // display.textContent = minutes + ":" + seconds;
    //     display.innerHTML = `${minutes} : ${seconds}`

    //     if (--timer < 0) {
    //         clearInterval(interval);
    //         // display.textContent = "Time's up!";
    //     }
    // }, 1000);

//     // let food = document.getElementById("food1").value;
//     // let order = document.getElementById("order1").value;
//     // let table = document.getElementById("table1").value;
//     // let special = document.getElementById("special1").value;
//     // let avoid = document.getElementById("avoid1").value;

//     var para = new URLSearchParams({
//         food : item,
//         order : order,
//         table : table,
//         special : special,
//         avoid : avoid
//     });
//     let url = 'http://192.168.1.106:5500/components/ordered-list.html?' + para.toString();
//     window.location.href = url;
}

