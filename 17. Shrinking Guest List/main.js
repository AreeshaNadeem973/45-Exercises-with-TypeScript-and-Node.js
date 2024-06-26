var Guest_List = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
var message = "You are invited in Dinner.";
function foorloop() {
    for (var index = 0; index < Guest_List.length; index++) {
        console.log('Mr.' + Guest_List[index] + ' ' + message);
    }
}
foorloop();
/* Start with your program from Exercise 14. Add a print statement at the end ofyour program stating the name of the
guest who can’t make it. */
var absent_Guest = 'Imran Khan';
var new_Guest = 'Kamran Tessori';
console.log("\nNote:\nMr. ".concat(absent_Guest, " is not coming to dinner. \n "));
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. 
Guest_List[0] = new_Guest;
// Print a second set of invitation messages, one for each person who is still in your list. 
foorloop();
//Add a print statement to the end of your program informing people that you found a bigger dinner table. 
console.log('\nWe found a bigger dinner table');
// Add one new guest to the beginning of your array. 
var Guest_List1 = Guest_List.unshift('Sir Zia Khan');
// Add one new guest to the middle of your array. 
var Guest_List2 = Guest_List.splice(2, 0, 'Maryam Nawaz');
// Use append() to add one new guest to the end of your list.
var Guest_List3 = Guest_List.push('Bilawal Bhutto Zardari');
// Print a new set of invitation messages, one for each person in your list. 
foorloop();
// Add a new line that prints a message saying that you can invite only two people for dinner. 
console.log('\n Sorry we can not arrange a big table. We can only invite two peoples to dinner.');
/* Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.*/
while (Guest_List.length >= 2) {
    var removeGuest1 = Guest_List.pop();
    console.log("Sorry Mr.".concat(removeGuest1, ", you are not invited for dinner."));
}
;
// Print a message to each of the two people still on your list, letting them know they’re still invited. • 
foorloop();
// Remove the last two names from your list, so you have an empty list.
var removeGuest5 = Guest_List.splice(0, 2);
//Print your list to make sure you actually have an empty list at the end of your program.
console.log(Guest_List);
