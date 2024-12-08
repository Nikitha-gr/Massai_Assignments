//Merging and Updating Nested Objects with Spread Operator
let profile = {
    name:"Anayra",
    age:3,
    address:{
        city:"Bengaluru",
        zipcode:"560040"
    }
};

let updates = {
    age:4,
    address:{
        zipcode:"560043",
        country:"India"
    }
};

let updatedProfile = {...profile,...updates,address: {...profile.address,...updates.address}};

console.log(updatedProfile);