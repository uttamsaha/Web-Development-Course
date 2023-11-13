//kono ekta object er moddhe jodi kono ekta method thake sei mehtod ta k onno ekta object er jonno use kora jai bind use kore.
const kibria = {
    id: 101,
    name: 'Rj Kabria',
    money: 5000,
    treatDey: function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id:102,
    money:6000,
    name:'Hero Balam'

}

const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);