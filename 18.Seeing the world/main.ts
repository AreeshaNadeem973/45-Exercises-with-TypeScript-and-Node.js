//store the locations in a array. Make sure the array is not a alphabetical order.

let places :string[] = ['Italy', 'Germany', 'Agra', 'Eifel Tower', 'Times Square'] ;

//Print your array in its original order.
console.log('orignal ' + places);

//print your array in alphabetical order without order without modifying the actual list.
console.log('copy ' + [...places].sort());

//show that your array is still in its original order by printing it.
console.log('orignal ' + places);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());

//show that your array is still in its original order by printing again.
console.log('orignal ' + places);

//Reverse the order of your list.Print the array to show that its order has changed.
console.log('orignal ' + places.reverse()) ;

//Reverse the order of your list again.Print the list to show it's back to its original order.
console.log('orignal ' + places.reverse());

//sort your array to it's stored in alphabitical order.Print the array to show that its order has been changed.
console.log('orignal' + places.sort());

//Sort to change your array so it's stored in reverse alphabitical order.Print the list to show that its order has changed.
console.log('orignal' + places.sort().reverse());
  

