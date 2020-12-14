const sometimesWillHappend = () => {
    // return a promise
    // resolve, reject
    return new Promise((resolve, reject) => {
        // if true
        if (true) {
            // Resolve something
            resolve('HEY!');
        } else {
            // Reject something
            reject('Whooops!');
        }
    });
}

sometimesWillHappend().
    then(reponse => {
        console.log(reponse);
    }).catch(error => {
        console.error(error);
    });

const sometimesWillHappend2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('Wooops');
            reject(error);
        }
    });
}

sometimesWillHappend2()
    .then((response) => {
        console.log(response);
    })
    .then(() => console.log('Another then'))
    .catch((e) => {
        console.error(e);
    })

// Run multiple promises at same time
// Promise.all executes all the promises at the same time and returns an array

Promise.all([sometimesWillHappend(), sometimesWillHappend2()])
    .then(response => {
        console.log('Array of results ', response);
    }).catch(error =>{
        console.error(error);
    });