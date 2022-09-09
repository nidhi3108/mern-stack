class Laptop{
    constructor(ram , hdd, cpu){
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    turnOn = ()=>{
        console.log('Laptop Turns on');
    }
    getCpu = ()=>{
        console.log('cpu is'+this.cpu);
    }
}

let lappy = new Laptop(3,458,'i5');
lappy.turnOn()
lappy.getCpu()

let lappy2= new Laptop(0,666,'i7');
lappy.turnOn()
lappy.getCpu()