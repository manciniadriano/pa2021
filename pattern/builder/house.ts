import { HouseBuilder } from './house-builder';

export class House {

    address: string;
    floorNumber: number;
    isHavingParking: boolean;
    isHavingGarden: boolean;

    constructor(houseBuilder: HouseBuilder) {
        this.address = houseBuilder.getAddress();
        this.floorNumber = houseBuilder.getFloorNumber();
        this.isHavingParking = houseBuilder.isHavingParking();
        this.isHavingGarden = houseBuilder.isHavingGarden();
    }
}