let initialAmount = Number(prompt('Initial amount:', '')),
    numberOfYears = Number(prompt('Number of years:', '')),
    percentage = Number(prompt('Percentage of year:', '')),
    one = 1,
    two = 2,
    hundred = 100,
    thousand = 1000;

let totalProfit = initialAmount * Math.pow(1 + percentage / hundred, numberOfYears) - initialAmount;
let totalAmount = initialAmount * Math.pow(1 + percentage / hundred, numberOfYears);


if (initialAmount < thousand || initialAmount === '' || initialAmount === null || numberOfYears < one
    || numberOfYears === '' || isInteger(numberOfYears) === false || numberOfYears === null 
    || percentage > hundred || percentage === '' || percentage === null || isNaN(initialAmount) === true 
    || isNaN(numberOfYears) === true || isNaN(percentage) === true) {
        alert('Invalid input data');
} else {
    alert(`Initial amount: ${initialAmount}\nNumber of years: ${numberOfYears}\nPercentage of year: ${percentage}
\r\nTotal Profit: ${totalProfit.toFixed(two)}\nTotal Amount: ${totalAmount.toFixed(two)}`);
}

function isInteger(num) {
    return (num ^ 0) === num;
}
