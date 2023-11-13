//#Ekta object er property er value hisebe nested object ba nested array ba function use korte pari.

const student = {
    id: 101,
    name: 'Rj Kabria',
    major: 'Mathematics',
    money: 5000,
    isRice: false,
    subjects: ['English', 'Economics', 'Math 101'],
    bestFriend: {
        name: 'Kundu',
        major: 'Mathematics',
        subjects: ['English', 'Math202', 'Bangla']
    },
    takeExam: function(){
        console.log(this.name, 'Taking Exam');
    },
    treatDey: function(expense){
        this.money = this.money - expense;
        return this.money;
    }
}

student.takeExam();
const remaining = student.treatDey(900);
console.log(remaining);
