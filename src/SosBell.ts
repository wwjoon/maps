import { Mappable } from "./CustomMap";

export class SosBell implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = "현재 위치";
    this.location = {
      // faker module에서의 위도, 경도의 타입은 string이므로 parseFloat으로 변환.
      lat: 37.0011541,
      lng: 127.11134,
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>단말기 설치 장소: ${this.name}</h1>
      </div>
    `;
  }
}
