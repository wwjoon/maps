import faker from 'faker';

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName() + faker.name.lastName();
    this.location = {
      // faker module에서의 위도, 경도의 타입은 string이므로 parseFloat으로 변환.
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
