/* jshint esnext: true */
// ES6 Example module

class Example {
    constructor(message = 'O RLY') {
        const POINTLESS_CONSTANT = 'kthxbye';
        this.message = message;
        
        this.truncate = (n = 3) => {
            let bogus = true;
            return message.substr(0,n);
        }
    }
}

export default Example;