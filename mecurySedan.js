//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        super(make, model, year, color, mileage);
    }
    loadPassenger(num){
        if (passenger < this.maximumPassengers){
            availableRoom == true;
        }
        else{
            availableRoom == false;
        }
    }
    start(){
        if (this.fuel > 0){
            this.started == true;
            return this.started;
        }
    }
    scheduleService(mileage){
        if(this.mileage > 30000){
            this.scheduleService == true;
            return this.scheduleService;
        }
    }


}

let mercurySedan = new Car("Mecury", "Sedan", "1965", "color", "31000")
