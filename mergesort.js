let arr = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000));

console.time("Slice-Based Merge Sort");
mergeSort(arr); // Using the slice-based implementation
console.timeEnd("Slice-Based Merge Sort");

function mergeSort(unsorted) {
    if (unsorted.length == 1) return unsorted;

    // get mid point
    let mid = Math.floor(unsorted.length / 2);
    // sorted left and right halves
    let left = mergeSort(unsorted.slice(0, mid));
    let right = mergeSort(unsorted.slice(mid));

    // merge the sorted halves
    return merge(left, right);
}

function merge(one, two) {
    let i = 0;
    let j = 0;
    let merged = [];

    while (i < one.length && j < two.length) {
        // as long as both array have an element

        // compare the currents of both
        if (one[i] < two[j]) {
            // push the smaller one to the result
            merged.push(one[i]);
            // shift the corresponding pointer
            i++;
        } else {
            // same here but for j
            merged.push(two[j]);
            j++;
        }
    }

    if (i < one.length) {
        // one has elements still
        while (i < one.length) {
            merged.push(one[i]);
            i++;
        }
    }

    if (j < two.length) {
        // one has elements still
        while (j < two.length) {
            merged.push(two[j]);
            j++;
        }
    }

    return merged;
}
