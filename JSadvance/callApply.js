const person = {
    firstName: 'Rahim',
    lastName: 'Shikdar',
    salary : 10000,
    getfullname: function(){

        console.log(this.firstName, this.lastName);
    },

    getSalary: function(amount){
        console.log(this);

        this.salary = (this.salary - amount);
        return this.salary
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alom',
    salary : 30000
}

// const heroSalary = person.getSalary.bind(heroPerson);

// heroSalary(4000);
// console.log(heroPerson.salary);

const heroSalary = person.getSalary.call(heroPerson, 700);
console.log(heroPerson.salary)