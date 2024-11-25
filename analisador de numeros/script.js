
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}


function analyzeNumber() {
    const num = Number(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(num)) {
        resultDiv.innerHTML = 'Por favor, insira um número válido!';
        return;
    }

    let result = `<p><strong>Resultado da análise do número ${num}:</strong></p>`;

    
    result += `<p>O número é ${num % 2 === 0 ? 'par' : 'ímpar'}.</p>`;

    
    result += `<p>O número é ${isPrime(num) ? 'primo' : 'não primo'}.</p>`;

    
    if (num > 0) {
        result += `<p>O número é positivo.</p>`;
    } else if (num < 0) {
        result += `<p>O número é negativo.</p>`;
    } else {
        result += `<p>O número é zero.</p>`;
    }

    resultDiv.innerHTML = result;
}
