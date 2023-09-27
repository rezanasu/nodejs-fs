const simpleLogin = (email, password) => {

    if(email === "admin@mail.com" && password === "admin") {
        console.log("Login succesfull");
    } else {
        console.log("Login failed")
    }
}

const simpleCalc = (number1, number2, operator) => {

    let result = 0;

    if(operator === "+") {
        result = number1 + number2
    } else if(operator === "-") {
        result = number1 - number2
    } else if(operator === "/") {
        result = number1 / number2
    } else if(operator === "*") {
        result = number1 * number2;
    } else {
        result = undefined
    }

    return result;
}

module.exports = {
    simpleLogin, simpleCalc
}