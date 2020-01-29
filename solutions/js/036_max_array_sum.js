//https://www.hackerrank.com/challenges/max-array-sum/problem
function maxSubsetSum(arr) {
    let incl = arr[0];
    let excl = 0;
    let excl_new;
    for (let i = 1; i < arr.length; i++) {
        excl_new = (incl > excl) ? incl : excl;
        incl = excl + arr[i];
        excl = excl_new;
    }
    return ((incl > excl) ? incl : excl);
}

/* 
You might be tempted to try and find all of the possible subsets before iterating over them to find a sum, but it's better to "store" the max sum possible at a given index, since the ordering is important, then we can increment this stored value as necessary should the maximum possible value increase as we move through the array according to the rules (non-adjacent)

For this problem we want to store the Max Sum possible for each position in the array.

Because we need to skip adjacent elements, 
    we can't just iterate directly through the array.

We need to figure out the max values for the first 2 positions manually
    we then add to those as we "step" through the array at unadjacent indices.

The max position for the first value can only be the first value
    because the problem specifies it must be a subset of the array

The max position for the second value can only be either the 
    current value or the previous value.

From there we need to iterate over the remaining values 
    and calulate their max possible sum (Hint: don't start you loop at the 0 index)

The max possible value for the current position can only be 3 things.

1. The Current Element Plus the Max Value from 2 positions ago (satisfying the
    adjacency requirement)

2. The last max Value (e.g the first value in the array was negative, 
    the second value was positive, and the current value is 0)

3. The current element (e.g the max value from 2 positions ago could have been negative)
*/