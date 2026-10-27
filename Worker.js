
let counter = 0;

function countNumbers() {
    counter++;

    postMessage("Count: " + counter);

    setTimeout(countNumbers, 1000);
}

countNumbers();
