

const car = {type:"Ferrari",
            model:"500", 
            color:"white",
            Details : function(){
                return this.type + " " + this.model + " " + this.color;
            } 
        };

console.log(car.Details());

car.whatever = "noice";

console.log(car);

delete car.whatever;

console.log(car);

//nested objects
const fullname = {
    firstname: {
        fname1 : "John",
        fname2 : "Mike",
        fname3 : "Michael",
        fname4 : "Clark"
    },
    lastname: {
        lname : "Sanders",
        lname : "Jordan",
        lname : "James",
        lname : "Obama"
    }
}

console.log(fullname.firstname.fname1);
