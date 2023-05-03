import { Sequelize, Model, DataTypes, Op } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});
await User.sync({ force: true });

const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20),
  });

const adriano = await User.create({
    username: 'amancini',
    birthday: new Date(1980, 6, 20),
  });
  
  const users = await User.findAll();
  //users.every( item => console.log(item));
  //users.every(item => console.log(item.getDataValue('username')));

  const users_m = await User.findAll({
    where: {
      [Op.and]: [
        { id: 2 },
        { username: 'amancini' }
      ]
    }
  });
  users_m.every(item => console.log(item));
  //console.log(JSON.stringify(users, null, 2));