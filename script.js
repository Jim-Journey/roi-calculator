function calculateROI() {
    const premium = parseFloat(document.getElementById('premium').value);
    const investment = parseFloat(document.getElementById('investment').value);

    if (isNaN(premium) || isNaN(investment)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }

    const roi = (premium / investment) * 100;
    document.getElementById('result').innerText = `ROI: ${roi.toFixed(2)}%`;
}
