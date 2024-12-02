function isSafe(reports) {
    let count = 0;

    for (let i = 0; i < reports.length; i++) {
        const report = reports[i];
        let isIncreasing = null;
        let isSafe = true;

        for (let j = 0; j < report.length - 1; j++) {
            const diff = report[j + 1] - report[j];

            if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
                isSafe = false;
                break;
            }

            if (diff > 0) {
                if (isIncreasing === false) {
                    isSafe = false;
                    break;
                }
                isIncreasing = true;
            } else if (diff < 0) {
                if (isIncreasing === true) {
                    isSafe = false;
                    break;
                }
                isIncreasing = false;
            }
        }

        if (isSafe) count++;
    }

    return count;
}

// Test case input
const reports = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9]
];

// Output the number of safe reports
console.log(isSafe(reports)); // Expected output: 2



