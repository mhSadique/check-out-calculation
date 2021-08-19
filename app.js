// Cart container & check out button & message
const cartContainer = document.getElementById('cart-container');
const btnCheckOut = document.getElementById('check-out');
const message = document.getElementById('message');
// Phone
const btnPhoneAdd = document.getElementById('add-phone');
const btnPhoneSubtract = document.getElementById('subtract-phone');
const phonePriceInput = document.getElementById('input-price-phone');
const phonePrice = document.getElementById('price-phone');
const phoneRate = 1219;
// Case
const btnCaseAdd = document.getElementById('add-case');
const btnCaseSubtract = document.getElementById('subtract-case');
const casePriceInput = document.getElementById('input-price-case');
const casePrice = document.getElementById('price-case');
const caseRate = 59;
// Total
const subTotal = document.getElementById('sub-total');
const tax = document.getElementById('tax');
const total = document.getElementById('total');

// Phone's Calculation
btnPhoneAdd.addEventListener('click', (e) => {
    updateAddPrice(phonePriceInput, phonePrice, phoneRate, e);
});

btnPhoneSubtract.addEventListener('click', (e) => {
    updateSubtractPrice(phonePriceInput, phonePrice, phoneRate, e);
});

// Case's Calculation
btnCaseAdd.addEventListener('click', (e) => {
    updateAddPrice(casePriceInput, casePrice, caseRate, e)
});

btnCaseSubtract.addEventListener('click', (e) => {
    updateSubtractPrice(casePriceInput, casePrice, caseRate, e);
});

function updateAddPrice(input, cost, rate, e) { // update quantity and price after addition
    input.value++; // add quantity on the UI
    let pri = parseFloat(cost.innerText); // get cost of bought products
    pri += rate; // increase the total cost by adding rate of single newly added quantity
    cost.innerText = pri; // update the cost on the UI

    updateTotal(rate, e); // update the total price
}

function updateSubtractPrice(input, cost, rate, e) { // update quantity and price after subtraction 
    if (input.value == 0) return; // do not calculate anymore when the quantity reaches 0
    input.value--; // subtract quantity on the UI
    let pri = parseFloat(cost.innerText); // get the cost of bought products
    pri -= rate; //decrease the total cost by subtracting the rate of newly cancelled quantity
    cost.innerText = pri; // update the cost on the UI

    updateTotal(rate, e); // update the total price
}

function updateTotal(rate, e) { // update total price by adding tax and subtotal
    let sTotal = parseFloat(subTotal.innerText); // get subtotal amount 
    let tot = parseFloat(total.innerText); // get total amount
    // if(e.srcElement.className.includes('fa-plus')) { // apply function both for addition and subtraction by checking which classname it contains
    //     sTotal += rate; // add product rate for addition
    // } else {
    //     sTotal -= rate; // subtract product rate for subtraction
    // }
    if(e.srcElement.dataset.calculation === 'plus') { // apply function both for addition and subtraction by checking which data-* it contains
        sTotal += rate; // add product rate for addition
    } else {
        sTotal -= rate; // subtract product rate for subtraction
    } 
    subTotal.innerText = sTotal; // set subtotal on the UI
    let taxCalculated = ((10 * sTotal) / 100); 
    tax.innerText = taxCalculated; // set tax on the UI
    tot = sTotal + taxCalculated; // calculate total
    total.innerText = tot; // set total on the UI
}
btnCheckOut.addEventListener('click', () => {
    cartContainer.hidden = true;
    message.hidden = false;
})
