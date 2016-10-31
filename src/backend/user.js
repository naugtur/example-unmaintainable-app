module.exports = class User {
    constructor(options) {
        this.id = options.id || 'no id';
        this.name = options.name || 'no name'; // test fail if empty
        this.joined = options.joined || 'joined For';

    }

    display() {
        return {
            id: this.id,
            username: this.name,
            displayName: this.name.charAt(0).toUpperCase() + this.name.slice(1),
            twitter: '@' + this.name,
            memberFor: (Date.now() - this.joined) + 'miliseconds'
        };
    }

    prepareToInsert(callback) {
        let keys = ['name', 'joined']; // propertisy
        callback( keys, this);

    }
};
