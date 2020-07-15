// 1. Declare variables nad capture input.

//2. Combine the input with other wrods to create a story

//3. Display the story as a <p> inside the <main> element

const adj = prompt("Please enter an adjective.");
const verb = prompt("Please enter a verb.");
const noun = prompt("Please enter a noun.");

const final = `<p>There once was a ${adj} programmer who wanted to use Javascript to ${verb} the ${noun}</p>`;

document.querySelector('main').innerHTML = final;

