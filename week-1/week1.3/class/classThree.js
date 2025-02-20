/*
task: Build a Car Class with Inheritance
Concepts Covered: Inheritance (extends), method overriding, super().

🔹 Task:

Create a Car class with properties: brand, model, and year.
Add a method getDetails() returning car details.
Create a ElectricCar class that extends Car and has a new property batteryRange.
Override getDetails() to include battery range.
*/


class Car{
    constructor(brand,modle,year){
        this.brand = brand;
        this.modle = modle;
        this.year = year;
    }
    getDetail(){
        console.log(`Brand : ${this.brand} modle :${this.modle} Released  Year : ${this.year} `)
    }
}

const Oddi = new Car("Oddi","V8engine","2017")
Oddi.getDetail();