const consoleFunction2 = require('./import')
const consoleFunction = () => {
    console.log("I don't believe that is actually work");
    console.log("selam");
    console.log(consoleFunction2);
    consoleFunction2.consoleFunction2();
}

module.exports = consoleFunction