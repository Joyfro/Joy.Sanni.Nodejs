/* Name: Events
   Description: Implements the EventEmitter class for event-driven programming.
   Example: Creating a custom event and handling it.
*/

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('myEvent', () => {
  console.log('Event triggered!');
});

myEmitter.emit('myEvent'); // Output: Event triggered!
