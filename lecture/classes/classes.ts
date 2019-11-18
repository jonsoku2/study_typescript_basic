class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }
  // 어디선가 private로 쓰고있다면 사용할 수 없다.
  //   public drive(): void {
  //     console.log('chugga chugga');
  //   }

  public honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// private를 쓰려면 귀찮은 과정이 있다..

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    // Vehicle class의 honk() 함수가 public : 사용 가능 ,
    this.honk();
  }
}

const car = new Car(4, 'red');
console.log(car);
// const vehicle = new Vehicle();
// //  protected : protected일때는 외부에서 사용할 수 없다.
// vehicle.honk();
// console.log(vehicle.color);

// const car = new Car();
// car.startDrivingProcess();
// car.honk();
