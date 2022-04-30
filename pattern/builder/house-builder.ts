import { House } from './house';

export class HouseBuilder {

    private readonly address: string;
    private floorNumber: number = 0;
    private withParking: boolean = false;
    private withGarden: boolean = false;

    constructor(address: string) {
        this.address = address;
    }

    setFloor(floor: number) {
        this.floorNumber = floor;
        return this;
    }

    makeParking() {
        this.withParking = true;
        return this;
    }

    makeGarden() {
        this.withGarden = true;
        return this;
    }

    build() {
        return new House(this);
    }


    isHavingParking() {
        return this.withParking;
    }

    isHavingGarden() {
        return this.withGarden;
    }

    getAddress() {
        return this.address;
    }

    getFloorNumber() {
        return this.floorNumber;
    }

}