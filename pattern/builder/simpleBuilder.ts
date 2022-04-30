import { HouseBuilder } from './house-builder';

const myHouse = new HouseBuilder('Adder')
    .setFloor(5)
    .makeGarden()
    .makeParking()
    .build();