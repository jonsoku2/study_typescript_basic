const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
// 값을 추출하는데에 도움을 준다 !
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// 호환되지않는 값을 방지해준다.
// -> carMakers.push(100); // error!

// Help with 'map'
// 맵과 같이 써보자
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
// 순서는 상관없나보다
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100);
console.log(importantDates);
