// receivesAFunction function takes a callback function as an argument and calls it
function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// returnsANamedFunction function returns a named function
function returnsANamedFunction() {
    // Define a named function and return it
    function namedFunction() {
        console.log("This is a named function.");
    }
    return namedFunction;
}

// returnsAnAnonymousFunction function returns an anonymous function
function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        console.log("This is an anonymous function.");
    };
}

