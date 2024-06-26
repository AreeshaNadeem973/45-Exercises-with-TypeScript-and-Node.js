var current_users = ['TaHa', 'DaNiyal', 'SalMan', 'Hamzah', 'John'];
var new_users = ['Bilal', 'TaHa', 'Dawood', 'Jameel', 'Hamzah'];
new_users.forEach(function (newUserName) {
    var lowerCase = newUserName.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).indexOf(lowerCase)) {
        console.log("The username ".concat(newUserName, " is not available. Please write a different username."));
    }
    else {
        console.log("The username ".concat(newUserName, " is available."));
    }
});
