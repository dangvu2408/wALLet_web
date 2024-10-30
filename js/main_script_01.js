
const canvasItem = document.getElementById('wl-chart');
const ctx = canvasItem.getContext('2d');


const tooltip = document.getElementById('tooltip');
const dataPoints = [
    {x: 50, y: 653, value: 653}, 
    {x: 150, y: 540, value: 540}, 
    {x: 250, y: 550, value: 550}, 
    {x: 350, y: 450, value: 450}, 
    {x: 450, y: 420, value: 84200}, 
    {x: 550, y: 400, value: 400}, 
    {x: 650, y: 425, value: 425}, 
    {x: 750, y: 375, value: 375}, 
    {x: 850, y: 400, value: 400},
    {x: 950, y: 500, value: 500},
    {x: 1050, y: 520, value: 520},
    {x: 1150, y: 480, value: 480},
    {x: 1250, y: 475, value: 475},
    {x: 1350, y: 485, value: 485},
    {x: 1450, y: 500, value: 500},
    {x: 1550, y: 450, value: 450},
    {x: 1650, y: 390, value: 390},
    {x: 1750, y: 360, value: 360},

];

const line1 = [
    {x: 50, y: 653}, 
    {x: 150, y: 540}, 
    {x: 250, y: 550}, 
    {x: 350, y: 450}, 
    {x: 450, y: 420}, 
    {x: 550, y: 400}, 
    {x: 650, y: 425}, 
    {x: 750, y: 375}, 
    {x: 850, y: 400},
    {x: 950, y: 500},
    {x: 1050, y: 520},
    {x: 1150, y: 480},
    {x: 1250, y: 475},
    {x: 1350, y: 485},
    {x: 1450, y: 500},
    {x: 1550, y: 450},
    {x: 1650, y: 390},
    {x: 1750, y: 360},
];

const line2 = [
    {x: 50, y: 450}, 
    {x: 150, y: 500}, 
    {x: 250, y: 520}, 
    {x: 350, y: 480}, 
    {x: 450, y: 475}, 
    {x: 550, y: 470}, 
    {x: 650, y: 475}, 
    {x: 750, y: 500}, 
    {x: 850, y: 520},
    {x: 950, y: 600},
    {x: 1050, y: 640},
    {x: 1150, y: 620},
    {x: 1250, y: 580},
    {x: 1350, y: 590},
    {x: 1450, y: 575},
    {x: 1550, y: 550},
    {x: 1650, y: 500},
    {x: 1750, y: 525},
];

let hoverIndex = -1;


function drawCurve(points, color) {
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length - 2; i++) {
        let xc = (points[i].x + points[i + 1].x) / 2;
        let yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    ctx.quadraticCurveTo(
        points[points.length - 2].x,
        points[points.length - 2].y,
        points[points.length - 1].x,
        points[points.length - 1].y
    );
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.stroke();

}



function drawGridlines() {
    ctx.strokeStyle = '#959595';
    ctx.lineWidth = 1;
    ctx.setLineDash([10, 10]);
    for (let j = 50; j < 870; j += 100) {
        ctx.beginPath();
        ctx.moveTo(50, j);
        ctx.lineTo(1750, j);
        ctx.stroke();
    }
    ctx.setLineDash([]);
}

function drawVerticalLine(x, color) {
    ctx.setLineDash([]); 
    ctx.beginPath();
    ctx.moveTo(x, 50);
    ctx.lineTo(x, 850);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
}

function checkHover(event) {
    const rect = canvasItem.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    ctx.clearRect(0, 0, canvasItem.width, canvasItem.height);
    drawGridlines();
    drawCurve(line1, '#007FFF'); 
    drawCurve(line2, '#E35053'); 

    line1.forEach(point1 => {
        const distance = Math.sqrt((mouseX * 2 - point1.x) ** 2);
        console.log(distance);
        if (distance >= 0 && distance <= 48) {
            drawVerticalLine(point1.x, '#007FFF'); 
        }
    });

    line2.forEach(point2 => {
        const distance = Math.sqrt((mouseX * 2 - point2.x) ** 2);
        if (distance >= 0 && distance <= 48) {
            drawVerticalLine(point2.x, '#E35053'); 
        }
    });
}


function drawChart() {
    drawGridlines();
    drawCurve(line1, '#007FFF'); 
    drawCurve(line2, '#E35053'); 
    canvasItem.addEventListener('mousemove', checkHover);
}

drawChart();




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
