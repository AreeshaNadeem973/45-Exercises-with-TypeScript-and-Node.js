let guestlist: string[] = ['Imran khan', 'Nawaz sharif','Asif Ali Zardari']; 

let message: string = "You are invited in Dinner"

for(let index = 0; index < guestlist.length; index++) {

    console.log('Mr.' + guestlist[index] + message);

}