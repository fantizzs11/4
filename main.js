function calc(operator) {
    const a = parseFloat(document.querySelector('input[name="a"]').value);
    const b = parseFloat(document.querySelector('input[name="b"]').value);
    let result;

    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : 'Ошибка: деление на ноль';
            break;
    }
    document.getElementById('result').innerText = 'Результат: ' + result;
}

function courseSale() {
    const courseName = document.getElementById('courseName').value;
    const discount = document.querySelector('input[type="range"]').value;
    const innerHTML = document.getElementById('courseResult');

    let coursePrice = parseFloat(courseName);
    let discountedPrice = coursePrice - (coursePrice * discount / 100);

    result.innerHTML = "Итоговая стоимость" 
}