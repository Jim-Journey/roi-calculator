async function fetchStockData() {
    const ticker = document.getElementById('ticker').value;

    if (ticker) {
        const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${ticker}`;
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.quoteResponse && data.quoteResponse.result.length > 0) {
                const stockInfo = data.quoteResponse.result[0];
                const closePrice = stockInfo.regularMarketPrice;
                document.getElementById('stockData').innerText = `Latest closing price for ${ticker}: $${closePrice.toFixed(2)}`;
            } else {
                document.getElementById('stockData').innerText = 'Invalid ticker or data not available.';
            }
        } catch (error) {
            document.getElementById('stockData').innerText = 'Error fetching stock data.';
        }
    } else {
        document.getElementById('stockData').innerText = 'Please enter a stock ticker.';
    }
}

function calculateROI() {
    const premium = document.getElementById('premium').value;
    const investment = document.getElementById('investment').value;

    if (premium && investment) {
        const roi = (premium / investment) * 100;
        document.getElementById('result').innerText = `ROI: ${roi.toFixed(2)}%`;
    } else {
        document.getElementById('result').innerText = 'Please enter both values.';
    }
}
