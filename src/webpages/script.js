



// import PriorityQueue from 'js-priority-queue';

// var result = [];

// function minCashFlowRec(amount, minHeap, maxHeap) {
//     // Check if either heap is empty before dequeueing
//     if (minHeap.length === 0 || maxHeap.length === 0) {
//         return;
//     }

//     var mxDebit = minHeap.dequeue();
//     var mxCredit = maxHeap.dequeue();

//     if (amount[mxCredit] === 0 && amount[mxDebit] === 0)
//         return;

//     var min = Math.min(-amount[mxDebit], amount[mxCredit]);
//     amount[mxCredit] -= min;
//     amount[mxDebit] += min;

//     var ans = `Person ${mxDebit + 1} pays ${min} to Person ${mxCredit + 1}`;
//     result.push(ans);

//     // Check if amounts are not settled and enqueue back into the heap
//     if (amount[mxCredit] !== 0)
//         maxHeap.queue(mxCredit);
//     if (amount[mxDebit] !== 0)
//         minHeap.queue(mxDebit);

//     minCashFlowRec(amount, minHeap, maxHeap);
// }

// export function minCashFlow(graph) {
//     var len = graph.length;
//     var amount = Array.from({ length: len }, (_, i) => 0);

//     // Calculating net amounts
//     for (let p = 0; p < len; p++) {
//         for (let i = 0; i < len; i++) {
//             amount[p] += (graph[i][p] - graph[p][i]);
//         }
//     }

//     // Initialize min-heap and max-heap
//     var minHeap = new PriorityQueue({ comparator: (a, b) => a - b });
//     var maxHeap = new PriorityQueue({ comparator: (a, b) => b - a });

//     // Populate heaps based on amounts
//     for (let i = 0; i < len; i++) {
//         if (amount[i] < 0)
//             minHeap.queue(i);
//         else if (amount[i] > 0)
//             maxHeap.queue(i);
//     }

//     result = [];
//     minCashFlowRec(amount, minHeap, maxHeap);
//     return result;
// }

// export default minCashFlow;



import PriorityQueue from 'js-priority-queue';

var result = [];

function minCashFlowIterative(amount, minHeap, maxHeap) {
    // Process until either heap is empty
    while (minHeap.length !== 0 && maxHeap.length !== 0) {
        var mxDebit = minHeap.dequeue();
        var mxCredit = maxHeap.dequeue();

        if (amount[mxCredit] === 0 && amount[mxDebit] === 0)
            return;

        var min = Math.min(-amount[mxDebit], amount[mxCredit]);
        amount[mxCredit] -= min;
        amount[mxDebit] += min;

        var ans = `Person ${mxDebit + 1} pays ${min} to Person ${mxCredit + 1}`;
        result.push(ans);

        // Check if amounts are not settled and enqueue back into the heap
        if (amount[mxCredit] !== 0)
            maxHeap.queue(mxCredit);
        if (amount[mxDebit] !== 0)
            minHeap.queue(mxDebit);
    }
}

export function minCashFlow(graph) {
    var len = graph.length;
    var amount = Array.from({ length: len }, (_, i) => 0);

    // Calculating net amounts
    for (let p = 0; p < len; p++) {
        for (let i = 0; i < len; i++) {
            amount[p] += (graph[i][p] - graph[p][i]);
        }
    }

    // Initialize min-heap and max-heap
    var minHeap = new PriorityQueue({ comparator: (a, b) => a - b });
    var maxHeap = new PriorityQueue({ comparator: (a, b) => b - a });

    // Populate heaps based on amounts
    for (let i = 0; i < len; i++) {
        if (amount[i] < 0)
            minHeap.queue(i);
        else if (amount[i] > 0)
            maxHeap.queue(i);
    }

    result = [];
    minCashFlowIterative(amount, minHeap, maxHeap);
    return result;
}

export default minCashFlow;
