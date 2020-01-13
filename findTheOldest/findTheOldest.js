let findTheOldest = function(peopleArray) {
    let today = new Date();
    //Sort by age; and return the youngeest person
    const oldest = peopleArray.sort(function(a, b) {
        if(a.yearOfDeath == undefined)
        {
            a.yearOfDeath = today.getFullYear();
        }
        else if(b.yearOfDeath == undefined)
        {
            b.yearOfDeath = today.getFullYear();
        }
        
        const lastperson = a.yearOfDeath - a.yearOfBirth;
        const nextperson = b.yearOfDeath - b.yearOfBirth;
        return lastperson > nextperson ? -1 : 1; 
        
    });
    console.log(oldest);
    return oldest[0];
    
}

module.exports = findTheOldest
