let guestlist: string[] = ['Imran khan', 'Nawaz sharif','Asif Ali Zardari'];

let message: string = "You are invited in Dinner"

function foorloop (){
   for (let index = 0; index < guestlist.length; index++) {
    console.log('Mr.' + guestlist[index] + ' ' + message);
   }
}
foorloop()

// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let absentGuest:  string = 'Imran khan'

let newGuest: string = 'Ahmed'

console.log(`\nNote:
    Mr. ${absentGuest} is not coming to dinner. \n `);

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

guestlist[0] = newGuest

//Print a second set of invitation messages, one for each person who is still in your list.

foorloop()

 //Add a print statement to the end of your program informing people that you found a bigger dinner table.

 console.log('\nWe found a bigger dinner table');

 //• Add one new guest to the beginning of your array.

 let guestName1 = guestlist.unshift('faiza')

 //• Add one new guest to the middle of your array.

 let guestName2 = guestlist.splice(2,0,'Bisma')

//Use append() to add one new guest to the end of your list.

let guestName3 = guestlist.push('Siddiqui')

//Print a new set of invitation messages, one for each person in your list.

foorloop()

//Add a new line that prints a message saying that you can invite only two people for dinner.

console.log('\n sorry we can not arrange a big table.we can only invite two peoples to dinner');

//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner

while(guestlist.length >= 2){
    let removeGuest1 = guestlist.pop()
    console.log(`Sorry Mr.${removeGuest1}. you are not invited to dinner.`);
}
//Print a message to each of the two people still on your list, letting them know they’re still invited.

foorloop()

// Remove the last two names from your list, so you have an empty list.
let removeGuests = guestlist.splice(0, 2)

// Print your list to make sure you actually have an empty list at the end of your program.
console.log(guestlist);


