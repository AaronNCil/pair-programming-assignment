var car = {
    make: "Toyota",
    model: "camry",
    year: "2014",
    mileage: 80000,
    color: "black", 
    driveToWork: function (){
        let driveWork = 33;
        console.log(`Old milage: ${this.mileage} || new mileage: ${driveWork + this.mileage}`);
    },
    driveAroundTheWorld: function(){
        let driveWorld = 24000;
        console.log(`Old milage: ${this.mileage} || new mileage: ${driveWorld + this.mileage}`);
    },
    runErrands: function(){
        let driveErrands = 30;
        console.log(`Old milage: ${this.mileage} || new mileage: ${driveErrands + this.mileage}`);
    }
}

car.driveAroundTheWorld();