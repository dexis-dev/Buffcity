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

function updateSecondInput() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');

    const inputValue = parseFloat(input1.value) || 0;

    const newValue = inputValue * 0.94; 
    input2.value = newValue.toFixed(2);
}

