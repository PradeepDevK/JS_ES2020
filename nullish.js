let person = {
    profile : {
        name : "",
        age : 0
    }
};

console.log("person.profile.name || 'Harry'", person.profile.name || 'Harry');
console.log("person.profile.age || 29", person.profile.age || 29);

console.log("person.profile.name ?? 'Harry'", person.profile.name ?? 'Harry');
console.log("person.profile.age ?? 29", person.profile.age ?? 29);

//optional chaining operator
console.log("person?.profile?.name ?? 'Harry'", person?.profile?.name ?? 'Harry');
console.log("person?.profile?.age ?? 29", person?.profile?.age ?? 29);