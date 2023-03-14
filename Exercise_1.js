// Exercise #1
// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?

// Return the value of what she should be paying.

const payAmount = number => {
    number = number + 3 + (number*0.001)
    console.log(`Total pay amount is ${number}$`)
    return number;
}

payAmount(100)