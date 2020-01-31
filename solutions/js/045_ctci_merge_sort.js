// https://www.hackerrank.com/challenges/ctci-merge-sort/problem
class MergeSort {
    constructor() {
        this.swaps = 0;
    }
    sort(arr) {
        arr.sort((a, b) => a - b);
    }

    mergeSort(arr) {
        let helperArr = new Array(arr.length);
        helperArr.fill(0);
        this.mergeSortReal(arr, helperArr, 0, arr.length - 1);
        return this.swaps;
    }

    mergeSortReal(arr, helperArr, start, end) {
        // console.log('merge sort', arr, helperArr, start, end);
        if (start < end) {
            let mid = parseInt((start + end) / 2);
            // spliting an array don't cost cpu cycles--it's just a memory operation
            // we can also flatten two smaller arrays into a single array by noting
            // the starting and ending indices.
            // eg arr3 = ["123456"];
            // can represent arr1 =  ["123"] and arr2 = ["456"] so long as we remember
            // arr1 = arr3[0..2], and arr2 = arr3[3..arr.length-1]
            // the recursion continues until only one element in a single array remains
            // representing the sorted final array
            this.mergeSortReal(arr, helperArr, start, mid);
            this.mergeSortReal(arr, helperArr, mid + 1, end);
            // once the two are sorted, we can merge the two (start mid) + (mid + end)
            this.merge(arr, helperArr, start, mid, end);
        }
    }

    // bottom sort of two sorted arr
    merge(arr, helperArr, start, mid, end) {
        for (let i = start; i <= end; i++) {
            // notice "i" goes from "start" to "end", not "0" to "arr.length"
            // helperArr is a clone of the sum sum of the two smaller arrays
            // in order to retrieve original data
            helperArr[i] = arr[i];
        }

        let curr = start;
        // left start position is start
        let left = start;
        // right start position is right
        let right = mid + 1;

        // Loop through helper[] left and right halves
        // and continuously copy smaller element to arr[]

        // the below algorithm always consumes the smaller array of the two,
        // this is more efficient than a solution that always consumes the left array first,
        // because the left arr may be the bigger array,

        while (left <= mid && right <= end) {
            if (helperArr[left] <= helperArr[right]) {
                // equivalent to arr.push(right.shift());
                arr[curr++] = helperArr[left++];
            } else {
                //  each time we choose element from right side,
                //  we count up how many fewer elements
                //  it contains than the left side=>
                //  because adding from right while accounting for distance
                //  is equal to the number of swaps required, 
                //  this is equivalent to counting swaps.
                this.swaps += mid + 1 - left;
                // equivalent to pushing/shifing from right half
                arr[curr++] = helperArr[right++];
            }
        }
        // copy remaining elements from the left half--
        // right half elements are already in proper place
        while (left <= mid) {
            arr[curr++] = helperArr[left++];
        }
    }


    mergeTwoOrderedAscendingArray(arr, begin, mid, end) {
        // begin to mid is left arr, mid to end is right arr
        let ascendingResult = [];
        let leftArr = arr.slice(begin, mid);
        let rightArr = arr.slice(mid, end + 1);
        // console.log('leftArr', leftArr);
        // console.log('rightArr', rightArr);
        let lettElementLength = mid - begin - 1;
        // console.log('lettElementLength', lettElementLength);
        while (leftArr.length > 0) {
            if (leftArr[0] > rightArr[0]) {
                let pushingElement = rightArr.shift();
                // console.log('pushing right', pushingElement);
                ascendingResult.push(pushingElement);
            } else {
                let pushingElement = leftArr.shift();
                // console.log('pushing left', pushingElement);

                ascendingResult.push(pushingElement);
            }
        }
        // console.log(
        //   'ascendingResult',
        //   ascendingResult,
        //   rightArr,
        //   ascendingResult.concat(rightArr)
        // );
        return ascendingResult.concat(rightArr);
    }
}
function countInversions(arr) {
    // Complete this function
    let ms = new MergeSort();
    ms.mergeSort(arr);
    return ms.swaps;
}
