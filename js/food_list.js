// var name = document.getElementById("name").value;
// var order = document.getElementById("order").value;
// var table = document.getElementById("table").value;
// var special = document.getElementById("special").value;
// var result = document.getElementById("food-list")

// function foodList(){

//     result.innerHTML += `
//         <ul class='list-box'>
//             <div class='order-name'>
//                 <li>Food : ${name}</li>
//                 <li>Order : ${order}</li>
//                 <li>Quantity : ${table}</li>
//                 <li>Special-order : ${special}</li>
//             </div>
//         </ul>`;
// }

// function receiveItem(){
//     var receive = document.getElementById("custom-order");
//     receive.innerHTML += `
//         <ul class='list-box'>
//             <div class='order-name'>
//                 <li>Food : ${name}</li>
//                 <li>Order : ${order}</li>
//                 <li>Quantity : ${quantity}</li>
//                 <li>Special-order : ${special}</li>
//             </div>
//             <div class='list-btn'>
//                 <button onclick="receiveItem()"><a href='../components/recipe-item/recipe-item.html'>Send</a></button>
//                 <button>Remove</button>
//             </div>
//         </ul>`;
// }

var data = window.location.search;
var param = new URLSearchParams(data);

var item = param.get("item");
var order = param.get("order")
var table = param.get("table")
var special = param.get("special")

var orderCollect = [`${item}`,`${order}`,`${table}`,`${special}`]
document.getElementById("order-list").innerHTML = `<ul>
    <li>${item}</li>
    <li>${order}</li>
    <li>${table}</li>
    <li>${special}</li>
    <button>Start</button>
    <li></li>
</ul>`