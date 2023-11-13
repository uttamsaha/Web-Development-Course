class TeamMember{
    name;
    role = 'Support Web Dev';
    address;
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember{
    groupSupportTime;
    constructor(name, address, time){
        super(name,address);
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name, 'Start a support session');
    }
}

class StudentCare extends TeamMember{

    buildRoutine(student){
        console.log(this.name, 'Build a routine for',student);
    }
}


class NeptuneDev extends TeamMember {
    codeEditor;
    constructor(name, address, codeEditor){
        super(name,address);
        this.codeEditor = codeEditor;
    }
    releaseApp(version){
        console.log(this.name, 'Build a routine for',student);
    }
}
const alia = new StudentCare('Alia', 'Dhaka');
const amir = new Support('Amir', 'BD', 11);
const salman = new Support('Salman', 'UK',10);
const ash = new NeptuneDev('Ash', 'DK','CodeBlocks');
console.log(amir);
console.log(alia);
console.log(ash);
 