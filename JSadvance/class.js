class Student{
    constructor(sId, sName){

        this.id = sId;
        this.name = sName;
        this.school = "Kolimunnesa High School";
    }

   
}

Student1 = new Student(12, 'Karim');
Student2 = new Student(14, 'Rima');
Student3 = new Student(22, 'Israt');
console.log(Student1, Student2, Student3);
