var Guest_List = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
var message = "You are invited in Dinner";
for (var index = 0; index < Guest_List.length; index++) {
    console.log('Mr.' + Guest_List[index] + ' ' + message);
}
/* Start with your program from Exercise 14. Add a print statement at the end ofyour program stating the name of the
guest who can’t make it. */
var absent_Guest = 'Imran Khan';
var new_Guest = 'Kamran Tessori';
console.log("\nNote:\nMr. ".concat(absent_Guest, " is not coming to dinner. \n "));
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. 
Guest_List[0] = new_Guest;
// Print a second set of invitation messages, one for each person who is still in your list. 
for (var index = 0; index < Guest_List.length; index++) {
    console.log('Mr.' + Guest_List[index] + ' ' + message);
}
;
