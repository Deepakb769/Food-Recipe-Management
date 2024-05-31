// let name = document.getElementById("name").innerText.value;

function foodList(){
    var name = document.getElementById("name").value;
    var order = document.getElementById("order").value;
    var quantity = document.getElementById("quantity").value;
    var special = document.getElementById("special").value;
    var result = document.getElementById("food-list")


    result.innerHTML += `
        <ul class='list-box'>
            <div class='order-name'>
                <li>Food : ${name}</li>
                <li>Order : ${order}</li>
                <li>Quantity : ${quantity}</li>
                <li>Special-order : ${special}</li>
            </div>
            <div class='list-btn'>
                <button><a href='../components/recipe-item/recipe-item.html'>Send</a></button>
                <button>Remove</button>
            </div>
        </ul>`;
}