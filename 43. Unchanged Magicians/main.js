// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician_array = ["magician_1", "magician_2", "magician_3", "magician_4"];
function copy_array(arr) {
    return __spreadArray([], arr, true);
}
var array_copy = copy_array(magician_array);
function make_great(arr) {
    for (var i = 0; i < arr.length; i++) {
        array_copy[i] = "The great ".concat(arr[i]);
    }
}
make_great(array_copy);
function show_magicians(arr) {
    return arr;
}
console.log("orignal array: ", show_magicians(magician_array));
console.log("Modified array: ", show_magicians(array_copy));
