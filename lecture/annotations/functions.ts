// return 할 값이 number이므로.. (a+b)
const add = (a: number, b: number): number => {
  return a + b;
};

// return 하지 않으니 void
// const subtract = (a: number, b: number): void => {
//   a - b;
// };

// return 할 값이 number이므로.. (a-b)
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  return undefined;
};

const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

// ES2015
// const logWeather = () => {};

logWeather(todayWeather);
