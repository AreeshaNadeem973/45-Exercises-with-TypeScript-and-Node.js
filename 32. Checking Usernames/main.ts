let current_users: string[] = ['TaHa', 'DaNiyal', 'SalMan', 'Hamzah', 'John'];

let new_users: string[] = ['Bilal', 'TaHa', 'Dawood', 'Jameel', 'Hamzah'];

new_users.forEach(newUserName => {
    let lowerCase = newUserName.toLowerCase();
  
    if (current_users.map(c_user => c_user.toLowerCase()).indexOf(lowerCase)) {
       console.log(`The username ${newUserName} is not available. Please write a different username.`);
    }
    else {
       console.log(`The username ${newUserName} is available.`);
  }
});