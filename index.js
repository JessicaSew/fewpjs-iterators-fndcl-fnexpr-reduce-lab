const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = [4, 5, 3, 4, 4, 6, 5].reduce(function(
    accum, element)
    {
        return element + accum
    }, 0)
