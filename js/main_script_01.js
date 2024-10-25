
const canvasItem = document.getElementById('wl-chart');
const ctx = canvasItem.getContext('2d');

ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();



const bal_shown = document.getElementById('bal-shown');
const eye_dont_show = document.getElementById('eye_dont_show');
const eye_show = document.getElementById('eye_show');
const acc_balance = document.getElementById('acc-balance');
const letter_balance = document.getElementById('letter-balance');

const this_month_balance = document.getElementById('this_month_balance');
const last_month_balance = document.getElementById('last_month_balance');
const lastlast_month_balance = document.getElementById('lastlast_month_balance');

var isShow = true;

bal_shown.onclick = function() {
    if (isShow) {
        acc_balance.innerText = '3.459.012.340,98 VND';
        letter_balance.innerText = 'Bằng chữ: Ba tỷ bốn trăm năm mươi chín triệu không trăm mười hai ngàn ba trăm bốn mươi phẩy chín tám đồng';
        this_month_balance.innerText = '-40.636.660,00 VND';
        last_month_balance.innerText = '1.499.649.000,99 VND';
        lastlast_month_balance.innerText = '-1.000.000.000,00 VND';
        eye_show.style.display = 'none';
        eye_dont_show.style.display = 'block';
        isShow = false;
    } else {
        acc_balance.innerText = '*** *** VND';
        letter_balance.innerText = 'Bằng chữ: *** *** *** *** ***.';
        this_month_balance.innerText = '*** *** VND';
        last_month_balance.innerText = '*** *** VND';
        lastlast_month_balance.innerText = '*** *** VND';
        eye_show.style.display = 'block';
        eye_dont_show.style.display = 'none';
        isShow = true;
    }
}

const navbarItem = document.querySelectorAll('.wl-navbar-item');
navbarItem.forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.is-active').classList.remove('is-active');
        this.classList.add('is-active');
    });
});
