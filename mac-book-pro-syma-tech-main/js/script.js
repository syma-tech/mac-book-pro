const cheapestMemory = document.getElementById("cheapest-memory");
const expensiveMemory = document.getElementById("expensive-memory");
const cheapestSsd = document.getElementById("cheapest-ssd");
const mediumCostSsd = document.getElementById("medium-cost-ssd");
const expensiveSsd = document.getElementById("expensive-ssd");
const cheapestDelivery = document.getElementById("cheapest-delivery");
const expensiveDelivery = document.getElementById("expensive-delivery");


//for price update
const memoryCheapCost = document.getElementById("memory-cheap-cost");
const extraMemoryCost = document.getElementById("memory-heigh-cost");
const extraStorageCost = document.getElementById("storage-heigh-cost");
const deliveryCharge = document.getElementById("delivery-cost");
const totalPrice = document.getElementById("total-cost");
const grandTotal = document.getElementById("discount-price");

cheapestMemory.addEventListener("click", function () {
    memoryCheapCost.innerText = 1299;
    extraMemoryCost.innerText = 0;
    totalCost();
})
expensiveMemory.addEventListener("click", function () {
    extraMemoryCost.innerText = 180;
    totalCost();
})
cheapestSsd.addEventListener("click", function () {
    extraStorageCost.innerText = 0;
    totalCost();
})
mediumCostSsd.addEventListener("click", function () {
    extraStorageCost.innerText = 100;
    totalCost();
})
expensiveSsd.addEventListener("click", function () {
    extraStorageCost.innerText = 180;
    totalCost();
})
cheapestDelivery.addEventListener("click", function () {
    deliveryCharge.innerText = 0;
    totalCost();
})
expensiveDelivery.addEventListener("click", function () {
    deliveryCharge.innerText = 20;
    totalCost();
})

//Total price function
function totalCost() {
    const bestPrice = parseFloat(memoryCheapCost.innerText);
    const deliveryNumber = parseFloat(deliveryCharge.innerText);
    const storagePriceNumber = parseFloat(extraStorageCost.innerText);
    const memoryPriceNumber = parseFloat(extraMemoryCost.innerText);

    const total = bestPrice + deliveryNumber + storagePriceNumber + memoryPriceNumber;
    totalPrice.innerText = total;
    grandTotal.innerText = total;
}

const applyButton = document.getElementById("apply-button");
applyButton.addEventListener("click", function () {
    const inputButton = document.getElementById("discount-code");
    const inputButtonText = inputButton.value;
    totalCost();
    if (inputButtonText == "stevekaku") {
        const totalPriceUpdate = totalPrice.innerText;
        console.log(totalPriceUpdate);
        let discountAmount = totalPriceUpdate - totalPriceUpdate * 0.2;
        grandTotal.innerText = discountAmount;
    }
})