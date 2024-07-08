document.addEventListener('DOMContentLoaded', () => {
    const MindicadorAPI = 'https://mindicador.cl/api/';
    let valores = {};

    async function conversionPeso() {
        try {
            const response = await fetch(MindicadorAPI);
            const data = await response.json();
            valores = {
                uf: data.uf.valor,
                utm: data.utm.valor
            };
            return valores; 
        } catch (error) {
            console.error('Error fetching conversion rates:', error);
        }
    }

    conversionPeso();

    document.getElementById('convert-btn').addEventListener('click', function() {
        const clpInput = document.getElementById('clp-input');
        const pesoschilenos = parseFloat(clpInput.value.trim());
        const fromCurrency = document.getElementById('from-currency').value;
        const resultadoConv = document.getElementById('result');
        if (!clpInput.value.trim()) {
            resultadoConv.textContent = 'Por favor, ingrese un monto válido.';
            return;
        }

        if (!fromCurrency) {
            resultadoConv.textContent = 'Por favor, seleccione una divisa para convertir.';
            return;
        }

        let conversionRate;
        if (fromCurrency === 'clp') {
            conversionRate = 1;
        } else {
            conversionRate = valores[fromCurrency];
        }

        const resultadoCalculo = pesoschilenos / conversionRate;

        resultadoConv.textContent = `El monto en ${fromCurrency.toUpperCase()} es: ${resultadoCalculo.toFixed(fromCurrency === 'utm' ? 3 : 2)}`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const MindicadorAPI = 'https://mindicador.cl/api/';
    let valores = {};

    async function conversionPeso() {
        try {
            const response = await fetch(MindicadorAPI);
            const data = await response.json();
            valores = {
                uf: data.uf.valor,
                utm: data.utm.valor
            };
            return valores; 
        } catch (error) {
            console.error('Error obteniendo data desde el fecth:', error);
        }
    }

    conversionPeso();

    document.getElementById('convert-btn').addEventListener('click', function() {
        const clpInput = document.getElementById('clp-input');
        const pesoschilenos = parseFloat(clpInput.value.trim());
        const fromCurrency = document.getElementById('from-currency').value;
        const resultadoConv = document.getElementById('result');
        if (!clpInput.value.trim()) {
            resultadoConv.textContent = 'Por favor, ingrese un monto válido.';
            return;
        }

        if (!fromCurrency) {
            resultadoConv.textContent = 'Por favor, seleccione una divisa para convertir.';
            return;
        }

        let conversionRate;
        if (fromCurrency === 'clp') {
            conversionRate = 1;
        } else {
            conversionRate = valores[fromCurrency];
        }

        const resultadoCalculo = pesoschilenos / conversionRate;

        resultadoConv.textContent = `El monto en ${fromCurrency.toUpperCase()} es: ${resultadoCalculo.toFixed(fromCurrency === 'utm' ? 3 : 2)}`;//UTM son 3 decimales, uf solo 2 FUNCIONANDOO
    });
});

