interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  printSummary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name : ${this.name}`;
  }
};

// 긴 annotation!
// vehicle: { name: string; year: number; broken: boolean }
// 인터페이스로 대체
// vehicle: Vehicle
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name : ${vehicle.name}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken? : ${vehicle.broken}`);
  console.log(vehicle.summary());
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  printSummary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.printSummary());
};

printVehicle(oldCivic);
printSummary(drink);
