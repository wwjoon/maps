// import { User } from "./User";
// import { Company } from "./Company";
import { SosBell } from "./SosBell";
import { CustomMap } from "./CustomMap";

// const user = new User();
// const company = new Company();
const sosbell = new SosBell();
const customMap = new CustomMap("map");

// customMap.addMarker(user);
// customMap.addMarker(company);
customMap.addMarker(sosbell);
