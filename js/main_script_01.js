
const canvasItem = document.getElementById('wl-chart');
const ctx = canvasItem.getContext('2d');
const customFont = new FontFace('Averta Semibold', 'url(/resources//font/averta_semibold.otf)');
customFont.load().then(function(loadedFont) {
    document.fonts.add(loadedFont);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01-10/09/2024', '11-20/09/2024', '21-30/09/2024'],
            datasets: [
                {
                    label: 'Nguồn tiền vào',
                    data: [13500000, 3500000, 3500000],
                    backgroundColor: '#32a7e2',
                    borderColor: '#32a7e2',
                    borderWidth: 1
                },
                {
                    label: 'Nguồn tiền ra',
                    data: [-4080000, -12500000, 0],
                    backgroundColor: '#f7685b',
                    borderColor: '#f7685b',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Averta Semibold', 
                            size: 14
                        }
                    }
                },
                tooltip: {
                    titleFont: {
                        family: 'Averta Semibold', 
                        size: 14
                    },
                    bodyFont: {
                        family: 'Averta Semibold', 
                        size: 12
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            family: 'Averta Semibold',
                            size: 12
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Averta Semibold', 
                            size: 12
                        }
                    }
                }
            }
        }
    });
}).catch(function(error) {
    console.error('Font loading failed:', error);
});

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
