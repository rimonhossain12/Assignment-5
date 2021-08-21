/* js implementation start */
// price countter for memory
function getPriceProuduct(element, number, price) {
    const inputElement = document.getElementById(element);
    const elementText = inputElement.value;
    const proudctName = document.getElementById('memory-price');
    const productText = proudctName.innerText;
    const productPrice = parseInt(productText);

    console.log(proudctName.innerText);

    if (number == 1) {
        proudctName.innerText = price;
        getTotalMoney();
    } else if (number == 2) {
        proudctName.innerText = price;
        getTotalMoney();
    }
}
// select memory elemetn
document.getElementById('first-memory').addEventListener('click', function () {
    getPriceProuduct('first-memory', 1, 0);
});

// select extra memory
document.getElementById('second-memory').addEventListener('click', function () {
    getPriceProuduct('second-memory', 2, 180);
});

// storage counter start from here
function getStoragePrice(element, number, price) {
    // where assign the main value
    const storageInput = document.getElementById('storage-price');
    const storageTotal = storageInput.innerText;

    // indentify what things user passing function
    const elementInput = document.getElementById(element);
    const elementText = elementInput.value;

    if (number == 1) {
        storageInput.innerText = price;
        getTotalMoney();
    } else if (number == 2) {
        storageInput.innerText = price;
        getTotalMoney();
    } else if (number == 3) {
        storageInput.innerText = price;
        getTotalMoney();
    }
}
// selected storage size
document.getElementById('first-storage').addEventListener('click', function () {
    getStoragePrice('first-storage', 1, 0);
});

document.getElementById('second-storage').addEventListener('click', function () {
    getStoragePrice('second-storage', 2, 100);
});

document.getElementById('third-storage').addEventListener('click', function () {
    getStoragePrice('third-storage', 3, 180);
});

// delivary cost start from here

//extra charge calculted for delivary
function delivaryCalculated(element, number, price) {

    const delivaryInput = document.getElementById('delivery-price');
    const delivarTotal = delivaryInput.innerText;

    if (number == 1) {
        delivaryInput.innerText = price;
        getTotalMoney();
    } else if (number == 2) {
        delivaryInput.innerText = price;
        getTotalMoney();
    }
}

// select the element
document.getElementById('first-delivary').addEventListener('click', function () {
    delivaryCalculated('first-delivary', 1, 0);
});

document.getElementById('second-delivary').addEventListener('click', function () {
    delivaryCalculated('second-delivary', 1, 20);
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