import { Sequelize, Model, DataTypes, Op } from 'sequelize';

//const sequelize = new Sequelize('sqlite::memory:');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
  });
const Ship = sequelize.define('Ship', {
  mmsi: {primaryKey: true, type:DataTypes.STRING,autoIncrement: false},
  length: DataTypes.DOUBLE,
});


const Ping = sequelize.define('Ping', {
    lat: DataTypes.DOUBLE,
    lon: DataTypes.DOUBLE,
    datetime: DataTypes.DATE
  });
Ship.hasMany(Ping, {foreignKeyConstraint: true, foreignKey: "mmsi", sourceKey: "mmsi"});
Ping.belongsTo(Ship, {foreignKey: "mmsi", targetKey: "mmsi"});
//Ping.belongsTo(Ship, {foreignKey: "mmsi", targetKey: "mmsi"});
await Ship.sync({ force: true });
await Ping.sync({ force: true }); 

const ship_1 = await Ship.create({
    mmsi: '1234',
    length: 23.4
  }, { logging: console.log });

const ship_2 = await Ship.create({
    mmsi: '1237',
    length: 12.5
  });

const ship_3 = await Ship.create({
    mmsi: '8999',
    length: 6.5
  });  

console.log(Ship)
console.log(Ping)
const ping = await Ping.create({
    lat: 43,
    lon: 13,
    datetime : new Date(1980, 6, 20, 12, 2, 0),
    mmsi: "1234"
});

const ping_ = await Ping.create({
    lat: 43,
    lon: 13,
    datetime : new Date(1981, 6, 20, 12, 2, 0),
    mmsi: "1234"
});

const ships = await Ship.findAll();
console.log(JSON.stringify(ships, null, 2));

const pings = await Ping.findAll({include: Ship});
pings.map(item => console.log(item.get("mmsi")));
console.log(JSON.stringify(pings, null, 2));

//pings.every(item => console.log(JSON.stringify(item)));
 //console.log(JSON.stringify(users, null, 2));