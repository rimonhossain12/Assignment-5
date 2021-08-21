/* In the name of Allah*/
// price countter for all products
function getPriceProuduct(element, number, price, proudctTotal) {
    const inputElement = document.getElementById(element);
    const elementText = inputElement.value;
    const proudctName = document.getElementById(proudctTotal);
    const productText = proudctName.innerText;
    const productPrice = parseInt(productText);
    console.log(proudctName.innerText);
    if (number == 1) {
        proudctName.innerText = price;
        getTotalMoney();
        lastFinalMoney();
    } else if (number == 2) {
        proudctName.innerText = price;
        getTotalMoney();
        lastFinalMoney();
    } else if (number == 3) {
        proudctName.innerText = price;
        getTotalMoney();
        lastFinalMoney();
    }
}
// select memory element
document.getElementById('first-memory').addEventListener('click', function () {
    getPriceProuduct('first-memory', 1, 0, 'memory-price');
});
document.getElementById('second-memory').addEventListener('click', function () {
    getPriceProuduct('second-memory', 2, 180, 'memory-price');
});
// storage select
document.getElementById('first-storage').addEventListener('click', function () {
    getPriceProuduct('first-storage', 1, 0, 'storage-price');
});
document.getElementById('second-storage').addEventListener('click', function () {
    getPriceProuduct('second-storage', 2, 100, 'storage-price');
});
document.getElementById('third-storage').addEventListener('click', function () {
    getPriceProuduct('third-storage', 3, 180, 'storage-price');
});
// select the delivary
document.getElementById('first-delivary').addEventListener('click', function () {
    getPriceProuduct('first-delivary', 1, 0, 'delivery-price');
});
document.getElementById('second-delivary').addEventListener('click', function () {
    getPriceProuduct('second-delivary', 2, 20, 'delivery-price');
});
// total price update counter 
function getTotalMoney() {
    const bestPriceInput = document.getElementById('best-price');
    const bestPriceTotal = parseInt(bestPriceInput.innerText);
    const memoryInput = document.getElementById('memory-price');
    const memoryTotal = parseInt(memoryInput.innerText);
    const storage = document.getElementById('storage-price');
    const storageTotal = parseInt(storage.innerText);
    const delivary = document.getElementById('delivery-price');
    const delivaryTotal = parseInt(delivary.innerText);
    let finalMoney = bestPriceTotal + memoryTotal + storageTotal + delivaryTotal;
    // final total price
    const mainInput = document.getElementById('total-price');
    const mainTotal = parseInt(mainInput.innerText);
    mainInput.innerText = finalMoney;
    return finalMoney;
}
// after buy all the product price calculated
function lastFinalMoney() {
    const lastMain = document.getElementById('totalMain-price');
    lastMain.innerText = getTotalMoney();
}
// discount center
function applyBtn() {
    const totalPriceInput = document.getElementById('total-price');
    const totalPrice = parseInt(totalPriceInput.innerText);
    const coponText = document.getElementById('cupon-cod');
    const coponInput = coponText.value;
    const cuponTotal = parseInt(coponText.value);
    let discount = (totalPrice / 100) * 20;
    const totalMian = document.getElementById('totalMain-price');
    console.log(discount);
    if (coponInput == 'stevekaku') {
        totalMian.innerText = totalPrice - discount;
        coponText.value = '';
    }
}