var maxTime = 1000;

// If input is even, double it
// If input is odd, error
// (call takes random amount of time <1s)

var eventDoubler = function (v, callback){
    
};

var handleResults = function(err, results, time){
    if (err){
        console.log("Error: " + err.message);
    } else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
}

eventDoubler(2, handleResults);

console.log("------");