function processParams(params) {
    // Ensure params is an object
    if (typeof params !== 'object' || params === null) {
        console.error("Invalid parameters provided");
        return;
    }

    // Iterate over all properties in params using for...in loop
    for (let name in params) {
        if (params.hasOwnProperty(name)) {  // Ensure it's not from the prototype chain
            let value = params[name];
            
            // Perform some operation with each property
            console.log("Property name: ", name);
            console.log("Property value: ", value);

            // Example operation: if the value is a function, call it
            if (typeof value === 'function') {
                value();
            }
        }
    }
}

// Example usage
const params = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() { console.log("Hello!"); }
};

processParams(params);
