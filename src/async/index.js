const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something async'), 3000)
            : reject(new Error('Test fail'))

    })
}

const execute = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before1');
execute()
console.log('After1');

// CatchErrors
const catchErrorFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error)
    }
}

console.log('Before2');
catchErrorFunction()
console.log('After2');