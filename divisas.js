document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '82767c511a502255e60b10ed40db06d1'; // Replace with your ExchangeRatesAPI key

    // Elements
    const currentDateSpan = document.getElementById('currentDate');
    const usdToMxnRateSpan = document.getElementById('usdToMxnRate');

    // Function to fetch the current date
    function getCurrentDate() {
        const currentDate = new Date();
        currentDateSpan.textContent = currentDate.toDateString();
    }

    // Function to fetch the USD to MXN exchange rate
    function getUsdToMxnRate() {
        fetch(`https://api.apilayer.com/exchangerates_data/latest?base=USD&symbols=MXN`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(data => {
            const usdToMxnRate = data.rates.MXN;
            usdToMxnRateSpan.textContent = `1 USD = ${usdToMxnRate.toFixed(2)} MXN`;
        })
        .catch(error => console.error('Error fetching USD to MXN exchange rate:', error));
    }

    // Call the functions to update the date and exchange rate
    getCurrentDate();
    getUsdToMxnRate();
});
