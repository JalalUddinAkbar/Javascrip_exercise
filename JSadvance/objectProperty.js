
const Student = [
    {id: 21, name : 'kamal'},
    {id: 23, name : 'Sofiq'},
    {id: 22, name : 'Rokeya'},
    {id: 31, name : 'Fahima'}

];
// const Name = [];


// for (let i = 0; i < Student.length; i++) {
//     const element = Student[i];

    
//     Name.push(element.name);

   
// }
// console.log(Name);

const result = Student.map(s => s.name);

console.log(result);