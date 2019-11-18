const profile = {
  name: 'jongseok',
  age: 27,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;

console.log(name);
