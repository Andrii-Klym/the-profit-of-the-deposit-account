let initialAmount = Number(prompt('Initial amount:', '')),
    numberOfYears = Number(prompt('Number of years:', '')),
    percentage = Number(prompt('Percentage of year:', ''));

let totalProfit = initialAmount * Math.pow(1 + percentage / 100, numberOfYears) - initialAmount;
let totalAmount = initialAmount * Math.pow(1 + percentage / 100, numberOfYears);


if (initialAmount < 1000 || initialAmount === '' || initialAmount === null || numberOfYears < 1
    || numberOfYears === '' || isInteger(numberOfYears) === false || numberOfYears === null 
    || percentage > 100 || percentage === '' || percentage === null || isNaN(initialAmount) === true 
    || isNaN(numberOfYears) === true || isNaN(percentage) === true) {
        alert('Invalid input data');
} else {
    alert(`Initial amount: ${initialAmount}\nNumber of years: ${numberOfYears}\nPercentage of year: ${percentage}
\r\nTotal Profit: ${totalProfit.toFixed(2)}\nTotal Amount: ${totalAmount.toFixed(2)}`);
}

function isInteger(num) {
    return (num ^ 0) === num;
}
