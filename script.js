function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById('result').innerText = 'Please enter valid values for principal, rate, and time.';
    } else {
        const interest = (principal * rate * time) / 100;
        const totalAmount = principal + interest;
        document.getElementById('result').innerText = `After ${time} years, your total amount will be $${totalAmount.toFixed(2)} (including interest $${interest.toFixed(2)}).`;
    }
}
