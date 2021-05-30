class Father{
    constructor(){
        this.fatherName = "Tom";
    }
}
class Child extends Father{
    constructor(cName){
        super()
        this.name = cName;
    }

    getFullName(){

        return this.name + " " + this.fatherName;
    }
}

const baby = new Child('Arnold');
const baby2 = new Child('Hariken');

console.log(baby.getFullName(), baby2.getFullName())