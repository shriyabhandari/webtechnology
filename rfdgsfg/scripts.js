const student = {
    name: "Marriane",
    faculity: "CSIT",
    following :{
        inward:10,
        outward: 5
    },
    study: null,
    dateofBirth:'2000-01-01',
    isStudying: false,
    hasFollowers: function() {
        return  this.inward> 0;
    },
    setStatus: function(status){
        this.isStudying=status;
    }
}
console.log(student);
console.log(student.dateofBirth);
student.following.inward=200;
student.name='Shriya';

class Person{
    constructor(name){
        this.name=name;
    }
     introduceSelf(){
        console.log(`Hi, I am ${this.name}`);
     }
    }
    const person =new Person('Shriya');
    console.log(person.introduceSelf());
