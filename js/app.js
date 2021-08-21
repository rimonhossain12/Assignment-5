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
    } else if (number == 2) {
        proudctName.innerText = price;
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
    } else if (number == 2) {
        storageInput.innerText = price;
    } else if (number == 3) {
        storageInput.innerText = price;
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


