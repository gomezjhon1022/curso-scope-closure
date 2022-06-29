function greeting() {
    let username = "Catalina";

    function displayUserName() {
        return `Hello ${username}`; 
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());
