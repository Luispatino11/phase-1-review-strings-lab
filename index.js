
let currentUser = 'John';


console.log('The current user is:', currentUser);
 
let welcomeMessage = 'Welcome to Flatbook, ';

welcomeMessage += currentUser + '!'

console.log(welcomeMessage);

let excitedWelcomeMessage = welcomeMessage.toUpperCase();

console.log(excitedWelcomeMessage);

let shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;

console.log(shortGreeting);