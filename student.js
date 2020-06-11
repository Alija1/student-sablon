class Student {

    constructor(name, address, phone, course){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.course = course;
    }

    getInfo() {
        return "Name: " + this.name + "\n" +
        "Address: " + this.address + "\n" +
        "Phone: " + this.phone + "\n" +
        "Course: " + this.course
    }
}


var num1 = "(507) 555-0120";
student1Num = num1.toString();

var num2 = "(507) 555-0075";
student2Num = num2.toString();

var num3 = "(507) 555-0024";
student3Num = num3.toString();

var student1 = new Student ("Carrie Armstrong", "Kingswood Meadow 51", student1Num, "Economy 101");
let student1Info = student1.getInfo();

var student2 = new Student ("Christian White", "Fairview Birches 6c", student2Num, "Architecture 101");
let student2Info = student2.getInfo();

var student3 = new Student ("Matt Sanders", "Kingswood Meadow 619", student3Num, "Psychology 101");
let student3Info = student3.getInfo();


console.log(student1Info);
console.log(student2Info);
console.log(student3Info);