

const ctx = document.getElementById('wl-chart').getContext('2d');
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