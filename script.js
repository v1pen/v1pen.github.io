document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const countrySections = {
        poland: document.querySelector('.polandFull'),
        russia: document.querySelector('.russiaFull'),
        lithuania: document.querySelector('.lithuaniaFull'),
        germany: document.querySelector('.germanyFull')
    
    };
    const exchangeRates = {
        USD: {
            USD: 1,
            EUR: 0.93,
            RUB: 90
        },
        EUR: {
            USD: 1.07,
            EUR: 1,
            RUB: 96.42
        },
        RUB: {
            USD: 0.011,
            EUR: 0.0104,
            RUB: 1
        }
    };
    
    function convertCurrency() {
        const amount = document.getElementById("amount").value;
        const fromCurrency = document.getElementById("fromCurrency").value;
        const toCurrency = document.getElementById("toCurrency").value;
        const resultElement = document.getElementById("result");
    
        if (!amount || isNaN(amount)) {
            resultElement.textContent = "Пожалуйста, введите корректную сумму.";
            return;
        }
    
        const rate = exchangeRates[fromCurrency][toCurrency];
    
        if (!rate) {
            resultElement.textContent = "Невозможно получить курс обмена для выбранных валют.";
            return;
        }
    
        const convertedAmount = (amount * rate).toFixed(2);
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const country = button.getAttribute('data-country');

            if (button.classList.contains('active')) {
                // If the button is already active, deactivate it and show all countries
                button.classList.remove('active');
                for (const key in countrySections) {
                    countrySections[key].style.display = 'block';
                }
            } else {
                // Deactivate all buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                });

                // Activate the clicked button
                button.classList.add('active');

                // Hide all country sections
                for (const key in countrySections) {
                    countrySections[key].style.display = 'none';
                }

                // Show the selected country section
                countrySections[country].style.display = 'block';
            }
        });
    });
});

document.getElementById('russiaBtn').addEventListener('click', function() {
    var logo = document.getElementById('russiaOn');
    var line1 = document.getElementById('line4On');
    var img1 = document.getElementById('piterImgOn');
    var info1 = document.getElementById('piterInfoOn');
    var price1 = document.getElementById('piterPriceOn');
    var btn1 = document.getElementById('piterBtnOn');
    var line2 = document.getElementById('line5On');
    var img2 = document.getElementById('moskwaImgOn');
    var info2 = document.getElementById('moskwaInfoOn');
    var price2 = document.getElementById('moskwaPriceOn');
    var btn2 = document.getElementById('moskwaBtnOn');

    // Переключаем margin-top для первого элемента
    if (logo.style.marginTop === '0px') {
        logo.style.marginTop = '780px'; // Возвращаем начальное значение
    } else {
        logo.style.marginTop = '0px'; // Изменяем значение
    }

    // Переключаем margin-top для второго элемента
    if (line1.style.marginTop === '120px') {
        line1.style.marginTop = '892px'; // Возвращаем начальное значение
    } else {
        line1.style.marginTop = '120px'; // Изменяем значение
    }

    if (img1.style.marginTop === '150px') {
        img1.style.marginTop = '920px'; // Возвращаем начальное значение
    } else {
        img1.style.marginTop = '150px'; // Изменяем значение
    }

    if (info1.style.marginTop === '150px') {
        info1.style.marginTop = '920px'; // Возвращаем начальное значение
    } else {
        info1.style.marginTop = '150px'; // Изменяем значение
    }

    if (price1.style.marginTop === '370px') {
        price1.style.marginTop = '1140px'; // Возвращаем начальное значение
    } else {
        price1.style.marginTop = '370px'; // Изменяем значение
    }

    if (btn1.style.marginTop === '370px') {
        btn1.style.marginTop = '1140px'; // Возвращаем начальное значение
    } else {
        btn1.style.marginTop = '370px'; // Изменяем значение
    }

    if (line2.style.marginTop === '450px') {
        line2.style.marginTop = '1250px'; // Возвращаем начальное значение
    } else {
        line2.style.marginTop = '450px'; // Изменяем значение
    }

    if (img2.style.marginTop === '480px') {
        img2.style.marginTop = '1280px'; // Возвращаем начальное значение
    } else {
        img2.style.marginTop = '480px'; // Изменяем значение
    }

    if (info2.style.marginTop === '480px') {
        info2.style.marginTop = '1280px'; // Возвращаем начальное значение
    } else {
        info2.style.marginTop = '480px'; // Изменяем значение
    }

    if (price2.style.marginTop === '700px') {
        price2.style.marginTop = '1500px'; // Возвращаем начальное значение
    } else {
        price2.style.marginTop = '700px'; // Изменяем значение
    }

    if (btn2.style.marginTop === '700px') {
        btn2.style.marginTop = '1500px'; // Возвращаем начальное значение
    } else {
        btn2.style.marginTop = '700px'; // Изменяем значение
    }
});

document.getElementById('lithuaniaBtn').addEventListener('click', function() {
    var logo = document.getElementById('lithuaniaOn');
    var line1 = document.getElementById('line7On');
    var img1 = document.getElementById('vilniusImgOn');
    var info1 = document.getElementById('vilniusInfoOn');
    var price1 = document.getElementById('vilniusPriceOn');
    var btn1 = document.getElementById('vilniusBtnOn');
    var line2 = document.getElementById('line8On');
    var img2 = document.getElementById('kaunasImgOn');
    var info2 = document.getElementById('kaunasInfoOn');
    var price2 = document.getElementById('kaunasPriceOn');
    var btn2 = document.getElementById('kaunasBtnOn');

    // Переключаем margin-top для первого элемента
    if (logo.style.marginTop === '0px') {
        logo.style.marginTop = '1610px'; // Возвращаем начальное значение
    } else {
        logo.style.marginTop = '0px'; // Изменяем значение
    }

    // Переключаем margin-top для второго элемента
    if (line1.style.marginTop === '120px') {
        line1.style.marginTop = '1722px'; // Возвращаем начальное значение
    } else {
        line1.style.marginTop = '120px'; // Изменяем значение
    }

    if (img1.style.marginTop === '150px') {
        img1.style.marginTop = '1750px'; // Возвращаем начальное значение
    } else {
        img1.style.marginTop = '150px'; // Изменяем значение
    }

    if (info1.style.marginTop === '150px') {
        info1.style.marginTop = '1750px'; // Возвращаем начальное значение
    } else {
        info1.style.marginTop = '150px'; // Изменяем значение
    }

    if (price1.style.marginTop === '370px') {
        price1.style.marginTop = '1970px'; // Возвращаем начальное значение
    } else {
        price1.style.marginTop = '370px'; // Изменяем значение
    }

    if (btn1.style.marginTop === '370px') {
        btn1.style.marginTop = '1970px'; // Возвращаем начальное значение
    } else {
        btn1.style.marginTop = '370px'; // Изменяем значение
    }

    if (line2.style.marginTop === '450px') {
        line2.style.marginTop = '2080px'; // Возвращаем начальное значение
    } else {
        line2.style.marginTop = '450px'; // Изменяем значение
    }

    if (img2.style.marginTop === '480px') {
        img2.style.marginTop = '2110px'; // Возвращаем начальное значение
    } else {
        img2.style.marginTop = '480px'; // Изменяем значение
    }

    if (info2.style.marginTop === '480px') {
        info2.style.marginTop = '2110px'; // Возвращаем начальное значение
    } else {
        info2.style.marginTop = '480px'; // Изменяем значение
    }

    if (price2.style.marginTop === '700px') {
        price2.style.marginTop = '2330px'; // Возвращаем начальное значение
    } else {
        price2.style.marginTop = '700px'; // Изменяем значение
    }

    if (btn2.style.marginTop === '700px') {
        btn2.style.marginTop = '2330px'; // Возвращаем начальное значение
    } else {
        btn2.style.marginTop = '700px'; // Изменяем значение
    }
});

document.getElementById('germanyBtn').addEventListener('click', function() {
    var logo = document.getElementById('germanyOn');
    var line1 = document.getElementById('line10On');
    var img1 = document.getElementById('berlinImgOn');
    var info1 = document.getElementById('berlinInfoOn');
    var price1 = document.getElementById('berlinPriceOn');
    var btn1 = document.getElementById('berlinBtnOn');
    var line2 = document.getElementById('line11On');
    var img2 = document.getElementById('munichImgOn');
    var info2 = document.getElementById('munichInfoOn');
    var price2 = document.getElementById('munichPriceOn');
    var btn2 = document.getElementById('munichBtnOn');

    // Переключаем margin-top для первого элемента
    if (logo.style.marginTop === '0px') {
        logo.style.marginTop = '2440px'; // Возвращаем начальное значение
    } else {
        logo.style.marginTop = '0px'; // Изменяем значение
    }

    // Переключаем margin-top для второго элемента
    if (line1.style.marginTop === '120px') {
        line1.style.marginTop = '2552px'; // Возвращаем начальное значение
    } else {
        line1.style.marginTop = '120px'; // Изменяем значение
    }

    if (img1.style.marginTop === '150px') {
        img1.style.marginTop = '2580px'; // Возвращаем начальное значение
    } else {
        img1.style.marginTop = '150px'; // Изменяем значение
    }

    if (info1.style.marginTop === '150px') {
        info1.style.marginTop = '2580px'; // Возвращаем начальное значение
    } else {
        info1.style.marginTop = '150px'; // Изменяем значение
    }

    if (price1.style.marginTop === '370px') {
        price1.style.marginTop = '2800px'; // Возвращаем начальное значение
    } else {
        price1.style.marginTop = '370px'; // Изменяем значение
    }

    if (btn1.style.marginTop === '370px') {
        btn1.style.marginTop = '2800px'; // Возвращаем начальное значение
    } else {
        btn1.style.marginTop = '370px'; // Изменяем значение
    }

    if (line2.style.marginTop === '450px') {
        line2.style.marginTop = '2910px'; // Возвращаем начальное значение
    } else {
        line2.style.marginTop = '450px'; // Изменяем значение
    }

    if (img2.style.marginTop === '480px') {
        img2.style.marginTop = '2940px'; // Возвращаем начальное значение
    } else {
        img2.style.marginTop = '480px'; // Изменяем значение
    }

    if (info2.style.marginTop === '480px') {
        info2.style.marginTop = '2940px'; // Возвращаем начальное значение
    } else {
        info2.style.marginTop = '480px'; // Изменяем значение
    }

    if (price2.style.marginTop === '700px') {
        price2.style.marginTop = '3160px'; // Возвращаем начальное значение
    } else {
        price2.style.marginTop = '700px'; // Изменяем значение
    }

    if (btn2.style.marginTop === '700px') {
        btn2.style.marginTop = '3160px'; // Возвращаем начальное значение
    } else {
        btn2.style.marginTop = '700px'; // Изменяем значение
    }
});