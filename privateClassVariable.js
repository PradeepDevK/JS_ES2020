class Message {
    #message = 'Harry';

    greet() {
        console.log('#message', this.#message);
    }
}

const greeting = new Message();
greeting.greet();

//Private name #message is not def
console.log('greeting.#message', greeting.#message);