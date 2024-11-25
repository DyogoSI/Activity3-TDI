
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach((tab) => {
        tab.classList.add('hidden');
    });

    document.getElementById(tabId).classList.remove('hidden');
    document.querySelectorAll('#tabs button').forEach((btn) => {
        btn.classList.remove('active');
    });

    document.querySelector(`#tabs button[onclick="showTab('${tabId}')"]`).classList.add('active');
}


function generateCount() {
    const start = Number(document.getElementById('start').value);
    const end = Number(document.getElementById('end').value);
    const step = Number(document.getElementById('step').value);
    const result = document.getElementById('count-result');

    if (step <= 0) {
        alert('Passo inválido! Considerando passo = 1.');
    }

    result.textContent = '';
    for (let i = start; i <= end; i += Math.max(step, 1)) {
        result.textContent += `${i} → `;
    }
    result.textContent += '🏁';
}


function generateTable() {
    const number = Number(document.getElementById('number').value);
    const result = document.getElementById('table-result');

    if (isNaN(number)) {
        alert('Por favor, insira um número válido.');
        return;
    }

    result.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const item = document.createElement('li');
        item.textContent = `${number} x ${i} = ${number * i}`;
        result.appendChild(item);
    }
}
