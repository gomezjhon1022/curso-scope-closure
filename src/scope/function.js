function greeting() {
    let userName = 'Ana';            //function, local
    console.log(userName);
    
    if(userName === 'Ana') {
        console.log(`Hello ${userName}!`)
    }
}

greeting();
console.log(userName);
