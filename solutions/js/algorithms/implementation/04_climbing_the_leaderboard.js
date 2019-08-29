'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {

    //a set stores only unique values, making our array
    //much smaller and easier to traverse by removing dupe scores
    let score_set = [...new Set(scores)];

    //initialize an array to hold alice's rank after each game
    let alice_ranks = [];

    //initialize an index value to start at for a_rank--
    //we'll increment this for each game that alice plays
    let games_played = 0;

    //iterate over the scores in alice, checking them against the field
    for (let score of alice) {
        //since we know alice's score only increases after each round,
        //we start begin by checking the lower bounds
        //to do this--because we know our values are unique (and sorted)--
        //we can just reference score_set[score_set.length-1] in
        //order to check the score against the lowest in the field.
        //we can then check index 0 for the high, similarly.
        let low = score_set[score_set.length - 1];
        let high = score_set[0];
        //if alice scores lower than the lowest score, we        
        //push her score to the set and then update a_rank with 
        //the length of the set at the current number of games played 
        //to track her position;
        if (score < low) {
            score_set.push(score);
            alice_ranks[games_played] = score_set.length;
        } else if (score > high) {
            //we do similarly for the high score, except that we'll use 
            //.unshift() instead of .push() to insert the element 
            //at the front of the array. Since we know alice is in 
            //first at this point, we can just push 1 to the 
            //current index in a_rank
            score_set.unshift(score);
            alice_ranks[games_played] = 1;
        }
        //finally, if we know Alice's score falls within the range of
        //scores, we can iterate over the scores in the set in 
        //ascending order to most efficiently calculate alice's rank
        else {
            //because we .pop() elements from the score set like a stack
            //and .pop() doesn't affect the .length property, we'll create
            //a pointer to decrement the .length property on each call to .pop() manually.
            //We'll also want to re-check the set of applicable
            //scores on each loop for updating length, so we'll initialize that here.  
            let len_ptr = score_set.length;
            //while alice's score is more than or equal to the 
            //last score added to the "stack", we'll remove items, 
            //decrementing her rank at the same time via the pointer;
            //IMPORTANT: we can't use "low" here, because 'let' 
            //is block-specific in scope, so we need to refer to the last
            //value in the array explicitly upon each check to make sure we're
            //looking in the right place
            while (score >= score_set[score_set.length - 1]) {
                score_set.pop();
                len_ptr--;
            }
            //once alice's score is no longer equal to the lowest score
            //remaining on the stack, its remaining length represents
            //the number of players ahead of alice, so we'll add one
            //before storing it to the array at the current number of           
            //games played
            alice_ranks[games_played] = len_ptr + 1;


        }
        //finally, after we've accounted for each possible condition 
        //upon comparing alice's score to the field after a game,           
        //we can increment games_played to continue;
        games_played++
    }
    return alice_ranks;
}

function main() {

    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
