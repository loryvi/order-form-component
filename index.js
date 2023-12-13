let shoeSizes = [6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,12,13];
let shoeSizeSelect = document.getElementById('product-size');

for(let size of shoeSizes) {
    let shoeSizeOption = document.createElement('option');
    shoeSizeOption.value = size;
    shoeSizeOption.textContent = size + ` (US)`;
    shoeSizeSelect.appendChild(shoeSizeOption);
}

// For quantity button
let quantity = 1;
let countNum = 1;


let minusButton = document.getElementById('minus-btn');
let plusButton = document.getElementById('plus-btn');
let count = document.getElementById('qty');

count.innerHTML = countNum;

minusButton.addEventListener('click', () => {
    countNum -=1;
    if (countNum === 0) {
        minusButton.disabled = true;
    }
    count.innerHTML = countNum;
});

plusButton.addEventListener('click', () => {
    countNum +=1;
    count.innerHTML = countNum;
    minusButton.disabled = false;
});

