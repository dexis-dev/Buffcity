const headerOpen = document.querySelector('.header_open');
const headerClose = document.querySelector('.header_burger_close');
const headerBurger = document.querySelector('.header_burger');

function openCloseBurger(event) {
    event.preventDefault(); 

    headerBurger.classList.toggle('header_burgerActive');
}

headerOpen.addEventListener('click', openCloseBurger);
headerClose.addEventListener('click', openCloseBurger);

const wallets = document.querySelectorAll('.wallets');
const curency = document.querySelectorAll('.curency')

wallets.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); 

        wallets.forEach(wallet => {
            wallet.classList.remove('active');
        });

        item.classList.add('active');
    });
});

curency.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); 

        curency.forEach(curency => {
            curency.classList.remove('active');
        });

        item.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const payAmountInput = document.getElementById('payAmount');
    const currencySelect = document.getElementById('currencySelect');
    const receiveAmountInput = document.getElementById('receiveAmount');
    const selectedCurrency = document.getElementById('selectedCurrency');

    payAmountInput.addEventListener('input', updateReceiveAmount);

    currencySelect.addEventListener('change', updateSelectedCurrency);

    function updateReceiveAmount() {
        const payAmount = parseFloat(payAmountInput.value) || 0;

        const receiveAmount = payAmount * 0.9;
        receiveAmountInput.value = receiveAmount.toFixed(2);
    }

    function updateSelectedCurrency() {
        selectedCurrency.innerText = currencySelect.value;

        updateReceiveAmount();
    }
});






