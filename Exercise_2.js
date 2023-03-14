// Part 1
// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.

// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.

// i.e. 1990 returns 30

const greetingThreePeople = (name1, name2, name3) =>{
    console.log(`Welcome ${name1}, ${name2}, ${name3}`);
}

// greetingThreePeople('A','B','C')

const ageCal = (birthYear) => {
    let thisYear =  new Date().getFullYear();
    let age = thisYear - birthYear;
    return age;
}

const greetWithAge = (name1, name2, name3, age1, age2, age3) =>{
    console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}`)
}

greetWithAge('a', 'b', 'c',1997,2000,1985);