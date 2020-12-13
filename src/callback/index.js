function sum(n1,n2){
    return n1 + n2;
}

function calculate(n1,n2,callback){
    return callback(n1,n2);
}

console.log(calculate(2,5, sum));

function date(callback){
    console.log(new Date);
    // CAllback
    setTimeout(()=>{
        let date = new Date;
        callback(date);
    },3000);
    console.log('sigue funcionando el code');
    console.log('mientras que asincronamente');
    console.log('se ejecueta el callback');
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);