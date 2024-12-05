  // Function to validate service quality
  function validateServiceQuality(quality) {
    const validQualities = ["great", "ok", "poor"];
    return validQualities.includes(quality.toLowerCase());
}

// Function to validate service amount
function validateServiceAmount(amount) {
    return amount >= 5 && amount <= 500;
}

// Function to calculate tip
function calculateTip(amount, quality) {
    let tipPercentage;
    switch (quality.toLowerCase()) {
        case "great":
            tipPercentage = 0.2;
            break;
        case "ok":
            tipPercentage = 0.15;
            break;
        case "poor":
            tipPercentage = 0.1;
            break;
    }
    return amount * tipPercentage;
}

// Main script
const serviceAmount = parseFloat(prompt("Enter the dollar amount of the service:"));
if (!validateServiceAmount(serviceAmount)) {
    alert("Invalid service amount. Please enter an amount between $5.00 and $500.00.");
} else {
    const serviceQuality = prompt("Enter the service quality (great, ok, poor):");
    if (!validateServiceQuality(serviceQuality)) {
        alert("Invalid service quality. Please enter 'great', 'ok', or 'poor'.");
    } else {
        const tip = calculateTip(serviceAmount, serviceQuality);
        alert(
            `Service Amount: $${serviceAmount.toFixed(2)}\n` +
            `Service Quality: ${serviceQuality}\n` +
            `Recommended Tip: $${tip.toFixed(2)}`
        );
    }
}