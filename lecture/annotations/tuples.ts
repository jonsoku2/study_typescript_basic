const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// type alias
type Drink = [string, boolean, number];

// 위에서 정의하고 아래서 재활용
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
