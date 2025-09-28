class Machine{
    constructor(os,disk){
        this.os  = os;
        this.disk  = disk;
    }
    getOS(){ return this.os };
    getDiskSize(){ return this.disk };
}

class Computer extends Machine{
    constructor(brand,os,disk){
        super(os,disk);
        this.brand = brand;
        this.vms = [];
    }
    getBrand(){ 
        return this.brand; 
    };
    getTotalVMDiskSize(){ 
        let total = 0;
        for (const vm of this.vms){
            total += vm.getDiskSize();
        }
        return total;
    };
    getVMs(i){
        return this.vms[i];
    }
    getVMNumbers(){
        return this.vms.length;
    }
    removeVM(i){
        if (i >= 0 && i < this.vms.length) {
            this.vms.splice(i, 1);
        } else {
            throw new Error("Invalid VM index");
        }
    }
}

class VM extends Machine {
    constructor(hostComputer,os,disk){
        if (!(hostComputer instanceof Computer)){
            throw new Error("VM host must be a Computer")
        }
        if((hostComputer.getTotalVMDiskSize() + disk > hostComputer.getDiskSize)){
            throw new Error("Not enough disk in host computer");
        }
        super(os,disk);
        this.hostComputer = hostComputer;
    }
    getHost() { return this.hostComputer; }
}

// --- Test 1: Machine ---
const m = new Machine("Ubuntu 24.04", 2048);
console.log("Machine OS:", m.getOS());               // expect: Ubuntu 24.04
console.log("Machine Disk:", m.getDiskSize());       // expect: 2048

// --- Test 2: Computer basic ---
const c = new Computer("Dell", "Windows 11", 4096);
console.log("Brand:", c.getBrand());                 // expect: Dell
console.log("Computer OS:", c.getOS());              // expect: Windows 11
console.log("Computer Disk:", c.getDiskSize());      // expect: 4096
console.log("Initial VM count:", c.getVMNumbers());  // expect: 0

// --- Test 3: Add VMs ---
const vm1 = new VM(c, "Debian 12", 1024); c.vms.push(vm1);
const vm2 = new VM(c, "CentOS 9", 512);  c.vms.push(vm2);

console.log("VM count after 2 adds:", c.getVMNumbers()); // expect: 2
console.log("Total VM Disk:", c.getTotalVMDiskSize());   // expect: 1536
console.log("First VM OS:", c.getVMs(0).getOS());         // expect: Debian 12
console.log("First VM Host Brand:", c.getVMs(0).getHost().getBrand()); // expect: Dell

// --- Test 4: Remove VM ---
c.removeVM(1);
console.log("VM count after remove:", c.getVMNumbers()); // expect: 1

// --- Test 5: Exception: disk overflow ---
try {
  const vm3 = new VM(c, "Fedora", 4096); // should throw
  c.vms.push(vm3);
} catch (err) {
  console.log("Overflow error caught:", err.message); // expect: Not enough disk in host computer
}

// --- Test 6: Exception: invalid host ---
try {
  const badHost = {}; // not a Computer
  new VM(badHost, "Alpine", 100); // should throw
} catch (err) {
  console.log("Invalid host error caught:", err.message); // expect: VM host must be a Computer
}